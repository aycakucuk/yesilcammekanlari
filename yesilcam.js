// --- Search UI elemanları var mı? ---
const tagInput = document.getElementById("tagSearch");
const tagBtn = document.getElementById("tagBtn");
const tagResults = document.getElementById("tagResults");

// Eğer HTML eklenmediyse sayfayı patlatmayalım:
if (!tagInput || !tagBtn || !tagResults) {
  console.warn("Search bar HTML bulunamadı: tagSearch/tagBtn/tagResults ekli mi?");
} else {

  // --- Mekân + harita katmanı eşlemesi (TEK KEZ) ---
  const registry = [
    { data: place, layer: taskislaMarker, open: () => openPanel(place) },
    { data: rumeliHisari, layer: rumeliPoly, open: () => openPanel(rumeliHisari) },
    { data: inonuStadyumu, layer: inonuMarker, open: () => openPanel(inonuStadyumu) },
    { data: akm, layer: akmMarker, open: () => openPanel(akm) },
    { data: taksimMeydani, layer: taksimPoly, open: () => openPanel(taksimMeydani) },
    { data: tarabyaOteli, layer: tarabyaMarker, open: () => openPanel(tarabyaOteli) },
    // yeni eklediklerin varsa buraya:
    // { data: ..., layer: ..., open: () => openPanel(...) },
  ];

  function normalizeQuery(q) {
    return (q || "").trim().toLowerCase().replace(/^#/, "");
  }

  function featureBounds(item) {
    if (item.layer && typeof item.layer.getBounds === "function") {
      return item.layer.getBounds();
    }
    if (item.layer && typeof item.layer.getLatLng === "function") {
      return L.latLngBounds([item.layer.getLatLng()]);
    }
    return null;
  }

  function matches(item, q) {
    const query = normalizeQuery(q);
    if (!query) return false;

    const hashtags = (item.data.hashtags || []).map(h => h.toLowerCase().replace(/^#/, ""));
    const name = (item.data.name || "").toLowerCase();
    const district = (item.data.district || "").toLowerCase();
    const type = (item.data.type || "").toLowerCase();

    const hitTag = hashtags.some(t => t.includes(query));
    const hitText = name.includes(query) || district.includes(query) || type.includes(query);
    return hitTag || hitText;
  }

  function runSearch() {
    const q = tagInput.value;
    const found = registry.filter(item => matches(item, q));

    tagResults.innerHTML = "";

    if (found.length === 0) {
      tagResults.classList.add("open");
      tagResults.innerHTML =
        `<div class="search-item">Sonuç yok<span class="search-sub">Başka bir hashtag deneyin</span></div>`;
      return;
    }

    tagResults.classList.add("open");

    found.slice(0, 8).forEach(item => {
      const el = document.createElement("div");
      el.className = "search-item";
      el.innerHTML = `
        ${item.data.name}
        <span class="search-sub">${item.data.type} • ${item.data.district}</span>
      `;
      el.addEventListener("click", () => {
        const b = featureBounds(item);
        if (b) map.fitBounds(b, { padding: [120, 120] });
        item.open?.();
        tagResults.classList.remove("open");
      });
      tagResults.appendChild(el);
    });

    if (found.length === 1) {
      const b = featureBounds(found[0]);
      if (b) map.fitBounds(b, { padding: [120, 120] });
      found[0].open?.();
    } else {
      const allBounds = found
        .map(featureBounds)
        .filter(Boolean)
        .reduce((acc, b) => (acc ? acc.extend(b) : b), null);

      if (allBounds) map.fitBounds(allBounds, { padding: [120, 120] });
    }
  }

  tagBtn.addEventListener("click", runSearch);

  tagInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });

  tagInput.addEventListener("input", () => {
    if (!tagInput.value.trim()) tagResults.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) tagResults.classList.remove("open");
  });
}

