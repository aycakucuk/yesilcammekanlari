// app.js
function assetUrl(path) {
  return new URL(path, document.baseURI).toString();
}

// ----- helpers -----
function toSafeHTML(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildTags(place) {
  const tags = [];
  if (place.name) tags.push(place.name);
  (place.films || []).forEach(f => { if (f?.title) tags.push(f.title); });
  return Array.from(new Set(tags.map(t => String(t).trim()).filter(Boolean)));
}

// ----- map -----
const map = L.map("map").setView([41.04, 28.99], 12);

const satellite = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  { maxZoom: 19, attribution: "Tiles © Esri" }
);

const streets = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  { maxZoom: 19, attribution: "&copy; OpenStreetMap" }
);

const labels = L.tileLayer(
  "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
  { attribution: "Labels © Esri" }
);

satellite.addTo(map);

L.control.layers(
  { "Uydu": satellite, "Harita": streets },
  { "Yazılar": labels },
  { position: "topright" }
).addTo(map);

// ----- panel -----
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelContent = document.getElementById("panelContent");
const closeBtn = document.getElementById("closeBtn");

function closePanel() {
  overlay.classList.remove("open");
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
}


function toPublicURL(src) {
  if (!src) return "";
  return new URL(src, document.baseURI).toString();

}


function renderPlaceHTML(p) {
  const placeImgs = (p.placeImages || []).slice(0, 4).map(imgOrPlaceholder).join("");
  const chips = (p.tags || []).map(t =>
    `<span class="chip" data-tag="${toSafeHTML(t)}">${toSafeHTML(t)}</span>`
  ).join("");

  const filmsHTML = (p.films || []).map(f => {
    const stills = (f.stills || []).slice(0, 4).map(imgOrPlaceholder).join("");
    const note = (f.note && f.note.trim()) ? `<p class="desc" style="margin-top:6px;">${toSafeHTML(f.note)}</p>` : "";
    return `
      <div style="margin-bottom: 16px;">
        <p class="meta"><strong>${toSafeHTML(f.title)}</strong> (${toSafeHTML(f.year)})</p>
        ${note}
        <div class="grid">${stills || `<div class="imgbox">Film karesi</div>`}</div>
      </div>
    `;
  }).join("");

  return `
    <p class="meta">${toSafeHTML(p.type)} • ${toSafeHTML(p.district)}</p>

    <div class="section-title">Kısa Bilgi</div>
    <p class="desc">${toSafeHTML(p.shortText || "")}</p>

    ${p.description ? `
      <div class="section-title">Mimari ve Tarihsel Tanım</div>
      <p class="desc">${toSafeHTML(p.description).replace(/\n/g, "<br>")}</p>
    ` : ""}

    <div class="section-title">Mekan Görselleri</div>
    <div class="grid">${placeImgs || `<div class="imgbox">Mekan görseli</div>`}</div>

    <div class="section-title">Filmler</div>
    ${filmsHTML || `<p class="desc">Bu mekanla ilişkilendirilmiş film yok.</p>`}

    <div class="section-title">Etiketler</div>
    <div class="chips">${chips || ""}</div>
  `;
}

function openPanel(p) {
  panelTitle.textContent = p.name;
  panelContent.innerHTML = renderPlaceHTML(p);
  overlay.classList.add("open");
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
}

overlay.addEventListener("click", closePanel);
closeBtn.addEventListener("click", closePanel);

// chip tıklayınca arama
panelContent.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const t = chip.getAttribute("data-tag") || chip.textContent || "";
  tagInput.value = t;
  runSearch();
});


// ----- styles -----
const TYPE_COLORS = {
  "Kışla / Okul": "#0000c1",
  "Hisar / Askerî Yapı": "#F238DC",
  "Stadyum / Spor Yapısı": "#c1121f",
  "Kültür Yapısı": "#f77f00",
  "Meydan / Kamusal Alan": "#7b2cbf",
  "Otel / Konaklama Yapısı": "#2ec4b6",
   "Konut": "#37ff00ff",
   "Sağlık Yapısı / Hastane": "#ffd901ff",
   "Ulaşım Yapısı": "#ffa4a4ff",
   "Cami / Külliye": "#8b8b8bff",   



};

function markerStyleFor(p) {
  return {
    radius: 10,
    color: "#ffffff",
    weight: 2,
    fillColor: TYPE_COLORS[p.type] || "#0000c1",
    fillOpacity: 0.9
  };
}

function polygonStyleFor(p) {
  return {
    color: "#ffffff",
    weight: 2,
    fillColor: TYPE_COLORS[p.type] || "#0000c1",
    fillOpacity: 0.22
  };
}


// ----- render places (auto) -----
const PLACES = (window.PLACES || []).map(p => ({ ...p, tags: buildTags(p) }));

const registry = [];      // arama/zoom
const boundsPoints = [];  // fitBounds

function addPlace(p) {
  // Polygon
  if (Array.isArray(p.polygon) && p.polygon.length > 2) {
    const poly = L.polygon(p.polygon, polygonStyleFor(p)).addTo(map);
    poly.on("click", () => openPanel(p));
    poly.on("mouseover", () => poly.setStyle({ fillOpacity: 0.35 }));
    poly.on("mouseout",  () => poly.setStyle({ fillOpacity: 0.22 }));

    registry.push({ data: p, layer: poly, open: () => openPanel(p) });
    boundsPoints.push(...p.polygon);

    // optional center dot for readability
    if (p.coords?.lat && p.coords?.lon) {
      const dot = L.circleMarker([p.coords.lat, p.coords.lon], {
        radius: 6,
        color: "#ffffff",
        weight: 2,
        fillColor: TYPE_COLORS[p.type] || "#0000c1",
        fillOpacity: 0.95
      }).addTo(map);
      dot.on("click", () => openPanel(p));
      // dot'u registry'ye EKLEME (aynı mekân iki kez sonuç çıkmasın)
      boundsPoints.push([p.coords.lat, p.coords.lon]);
    }
    return;
  }

  // Point
  if (p.coords?.lat && p.coords?.lon) {
    const m = L.circleMarker([p.coords.lat, p.coords.lon], markerStyleFor(p)).addTo(map);
    m.on("click", () => openPanel(p));
    registry.push({ data: p, layer: m, open: () => openPanel(p) });
    boundsPoints.push([p.coords.lat, p.coords.lon]);
  }
}

PLACES.forEach(addPlace);

if (boundsPoints.length) {
  map.fitBounds(L.latLngBounds(boundsPoints), { padding: [120, 120] });
}


// ----- search (place name + film titles only) -----
const tagInput = document.getElementById("tagSearch");
const tagBtn = document.getElementById("tagBtn");
const tagResults = document.getElementById("tagResults");

function normalizeQuery(q) {
  return (q || "").trim().toLowerCase();
}

function featureBounds(item) {
  if (item.layer && typeof item.layer.getBounds === "function") return item.layer.getBounds();
  if (item.layer && typeof item.layer.getLatLng === "function") return L.latLngBounds([item.layer.getLatLng()]);
  return null;
}

function norm(s){
  return (s || "")
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")       // apostrof temizle
    .replace(/ı/g, "i")         // Türkçe ı -> i
    .replace(/İ/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function matches(item, q){
  const query = norm(q);
  if (!query) return false;

  const qc = query.replace(/\s+/g, ""); // boşluksuz versiyon
  const tags = (item.data.tags || []);

  return tags.some(t => {
    const a = norm(t);
    const ac = a.replace(/\s+/g, "");
    return a.includes(query) || ac.includes(qc);
  });
}


function focusItem(item) {
  const b = featureBounds(item);
  if (b) map.fitBounds(b, { padding: [140, 140] });
  item.open?.();
}

function renderResults(found) {
  tagResults.innerHTML = "";
  if (found.length === 0) {
    tagResults.classList.add("open");
    tagResults.innerHTML = `<div class="search-item">Sonuç yok<span class="search-sub">Mekân veya film adı deneyin</span></div>`;
    return;
  }

  tagResults.classList.add("open");
  found.slice(0, 10).forEach(item => {
    const el = document.createElement("div");
    el.className = "search-item";
    el.innerHTML = `${toSafeHTML(item.data.name)}<span class="search-sub">${toSafeHTML(item.data.type)} • ${toSafeHTML(item.data.district)}</span>`;
    el.addEventListener("click", () => {
      focusItem(item);
      tagResults.classList.remove("open");
    });
    tagResults.appendChild(el);
  });
}

function runSearch() {
  const q = tagInput.value;
  const found = registry.filter(item => matches(item, q));

  renderResults(found);

  if (found.length === 1) {
    focusItem(found[0]);
  } else if (found.length > 1) {
    const allBounds = found
      .map(featureBounds)
      .filter(Boolean)
      .reduce((acc, b) => acc ? acc.extend(b) : b, null);

    if (allBounds) map.fitBounds(allBounds, { padding: [140, 140] });
  }
}



// ==========================
// 8) LEGEND (TYPE COLORS)
// ==========================
const LEGEND_ITEMS = [
  { label: "Kışla / Okul", color: "#0000c1" },
  { label: "Hisar / Askeri Yapı", color: "#F238DC" },
  { label: "Stadyum / Spor Yapısı", color: "#c1121f" },
  { label: "Kültür Yapısı", color: "#f77f00" },
  { label: "Meydan / Kamusal Alan", color: "#7b2cbf" },
  { label: "Otel / Konaklama Yapısı", color: "#2ec4b6" },
  { label: "Konut", color: "#37ff00ff" },
  { label: "Sağlık Yapısı / Hastane", color: "#ffd901ff" },
  { label: "Ulaşım Yapısı", color: "#ffa4a4ff" },
  { label: "Cami / Külliye", color: "#8b8b8bff" }

];

const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "map-legend");
  div.innerHTML = `
    <div class="legend-title">Mekan Türleri</div>
    ${LEGEND_ITEMS.map(item => `
      <div class="legend-item">
        <span class="legend-dot" style="background:${item.color}"></span>
        <span class="legend-label">${item.label}</span>
      </div>
    `).join("")}
  `;
  return div;
};

legend.addTo(map);


// ===== INFO toggle (minimal) =====
const infoBtn = document.getElementById("infoBtn");
const infoBox = document.getElementById("infoBox");
const infoClose = document.getElementById("infoClose");

function openInfo(){
  infoBox.classList.add("open");
  infoBox.setAttribute("aria-hidden","false");
}
function closeInfo(){
  infoBox.classList.remove("open");
  infoBox.setAttribute("aria-hidden","true");
}

infoBtn?.addEventListener("click", () => {
  infoBox.classList.contains("open") ? closeInfo() : openInfo();
});
infoClose?.addEventListener("click", closeInfo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeInfo();
});




tagBtn.addEventListener("click", runSearch);
tagInput.addEventListener("keydown", (e) => { if (e.key === "Enter") runSearch(); });
tagInput.addEventListener("input", () => { if (!tagInput.value.trim()) tagResults.classList.remove("open"); });
document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrap")) tagResults.classList.remove("open"); });


