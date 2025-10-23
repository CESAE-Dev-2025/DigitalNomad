// Lista de opções de cidades, agrupadas por país, para carregar cidades ao mudar o país
const citiesByCountry = {
    pt: ["Porto", "Lisboa"],
    it: ["Veneza", "Roma"],
    br: ["Rio de Janeiro", "Florianópolis"],
};
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

// Limpa conteúdo do select de cidades
function clearContent() {
    var selectobject = document.getElementById("city");
    while (selectobject.options.length > 1) {
        selectobject.remove(1);
    }
}

// Atualiza lista de cidades com base na selação do país
function updateCities() {
    clearContent();
    var selectedCountry = countrySelect.value;

    for (const country of citiesByCountry[selectedCountry]) {
        const option = document.createElement("option");

        option.value = country.toLowerCase();
        option.textContent = country;
        citySelect.appendChild(option);
    }
    citySelect.value = 0;
}

function myFunction() {
    var selectedCity = citySelect.value;

    var locationInfo = document.getElementById(selectedCity);
    locationInfo.style.display = "flex";
}

((g) => {
    var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
            h ||
            (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                    e.set(
                        k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                        g[k]
                    );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
            }));
    d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
    // Key restricted on Google Cloud
    key: "AIzaSyAygYFoFFrLQX4OMF042RO6gSyPO9EMa9o",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});

// Initialize and add the map
let map;

async function initMap() {
    // Localização do Porto
    const portoPosition = { lat: 41.156748407993554, lng: -8.601907904967781 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: portoPosition,
        disableDefaultUI: true,
        mapId: "Teste",
    });

    // O marcador, definido na constante posittion (acima)
    const marker = new AdvancedMarkerElement({
        map: map,
        position: portoPosition,
        // title: "Porto",
    });
}

initMap();
