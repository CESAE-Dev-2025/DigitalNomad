function showMap() {
    var selectedCity = citySelect.value;

    var locationInfo = document.getElementById(selectedCity);
    locationInfo.style.display = "flex";
}

// Validação do form de contacto
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                if (!form.checkValidity()) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    form.classList.remove("was-validated");

                    const contactModal = new bootstrap.Modal("#contactModal");
                    contactModal.show();
                }
            },
            false
        );
    });
})();

// Maps API
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
        mapId: "DigitalNomad",
    });

    // O marcador, definido na constante posittion (acima)
    const marker = new AdvancedMarkerElement({
        map: map,
        position: portoPosition,
        // title: "Porto",
    });
}

initMap();
