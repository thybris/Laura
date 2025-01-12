function changeLanguage() {
    const language = document.getElementById("languages").value;
    const content = document.getElementById("content");

    switch (language) {
        case "nl":
            content.textContent = "Welkom! Dit is de standaard tekst in het Nederlands.";
            break;
        case "en":
            content.textContent = "Welcome! This is the default text in English.";
            break;
        case "fr":
            content.textContent = "Bienvenue! Ceci est le texte par défaut en français.";
            break;
        case "de":
            content.textContent = "Willkommen! Dies ist der Standardtext auf Deutsch.";
            break;
        default:
            content.textContent = "Welkom! Dit is de standaard tekst in het Nederlands.";
    }
}
