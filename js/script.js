// Zorg ervoor dat de script geladen wordt na de DOM
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languages");

    // Controleer of er al een taal is opgeslagen in localStorage
    const savedLanguage = localStorage.getItem("language") || "nl"; // Standaard naar Nederlands
    languageSelector.value = savedLanguage; // Stel de waarde in het dropdownmenu in
    applyLanguage(savedLanguage); // Pas de taal toe

    // Event listener voor het wijzigen van de taal
    languageSelector.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem("language", selectedLanguage); // Sla de taal op in localStorage
        applyLanguage(selectedLanguage); // Pas de geselecteerde taal toe
    });
});

// Functie om de taalteksten dynamisch te wijzigen
function applyLanguage(language) {
    const translations = {
        nl: {
            welcome: "Welkom! Dit is de standaard tekst in het Nederlands.",
            whatWeDo: "WAT DOEN WE?",
            whyChooseUs: "WAAROM VOOR ONS KIEZEN?",
            whoWeAre: "WIE ZIJN WE?",
        },
        en: {
            welcome: "Welcome! This is the default text in English.",
            whatWeDo: "WHAT DO WE DO?",
            whyChooseUs: "WHY CHOOSE US?",
            whoWeAre: "WHO ARE WE?",
        },
        fr: {
            welcome: "Bienvenue! Ceci est le texte par défaut en français.",
            whatWeDo: "QUE FAISONS-NOUS?",
            whyChooseUs: "POURQUOI NOUS CHOISIR?",
            whoWeAre: "QUI SOMMES-NOUS?",
        },
        es: {
            welcome: "¡Bienvenido! Este es el texto predeterminado en español.",
            whatWeDo: "¿QUÉ HACEMOS?",
            whyChooseUs: "¿POR QUÉ ELEGIRNOS?",
            whoWeAre: "¿QUIÉNES SOMOS?",
        },
    };

    // Controleer of de taal in de vertalingen aanwezig is
    if (translations[language]) {
        // Wijzig de tekstinhoud van de elementen
        document.getElementById("content").textContent = translations[language].welcome;
        document.getElementById("what-we-do").textContent = translations[language].whatWeDo;
        document.getElementById("why-choose-us").textContent = translations[language].whyChooseUs;
        document.getElementById("who-we-are").textContent = translations[language].whoWeAre;
    }
}
