// ----- panel -----
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelContent = document.getElementById("panelContent");
const closeBtn = document.getElementById("closeBtn");

// GitHub Pages + local için güvenli URL üretimi
function toPublicURL(src) {
  if (!src) return "";
  return new URL(src, document.baseURI).toString();
}

function imgOrPlaceholder(src) {
  const url = toPublicURL(src);
  if (!url) return `<div class="imgbox">Görsel</div>`;
  return `
    <div class="imgbox">
      <img src="${url}" alt="" loading="lazy"
        onerror="this.closest('.imgbox').innerHTML='Görsel';" />
    </div>
  `;
}

function closePanel() {
  overlay?.classList.remove("open");
  panel?.classList.remove("open");
  panel?.setAttribute("aria-hidden", "true");
}

function renderPlaceHTML(p) {
  const placeImgs = (p.placeImages || []).slice(0, 4).map(imgOrPlaceholder).join("");

  const chips = (p.tags || []).map(t =>
    `<span class="chip" data-tag="${toSafeHTML(t)}">${toSafeHTML(t)}</span>`
  ).join("");

  const filmsHTML = (p.films || []).map(f => {
    const stills = (f.stills || []).slice(0, 4).map(imgOrPlaceholder).join("");
    const note = (f.note && f.note.trim())
      ? `<p class="desc" style="margin-top:6px;">${toSafeHTML(f.note)}</p>`
      : "";

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
  if (!panel || !panelTitle || !panelContent || !overlay) return;

  panelTitle.textContent = p.name || "";
  panelContent.innerHTML = renderPlaceHTML(p);

  overlay.classList.add("open");
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
}

// Panel kapatma eventleri (tek kez!)
overlay?.addEventListener("click", closePanel);
closeBtn?.addEventListener("click", closePanel);

// chip tıklayınca arama (tek kez!)
panelContent?.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const t = chip.getAttribute("data-tag") || chip.textContent || "";
  if (typeof tagInput !== "undefined" && tagInput) tagInput.value = t;
  if (typeof runSearch === "function") runSearch();
});
