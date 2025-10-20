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
    var selectedCountry = countrySelect.value;
    var selectedCity = citySelect.value;

    var locationInfo = document.getElementById("location-info");
    locationInfo.style.display = "flex";
}
