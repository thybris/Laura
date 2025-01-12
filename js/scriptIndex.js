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

// Functie om alle dynamische teksten te vertalen
function applyLanguage(language) {
    const translations = {
        nl: {
            welcome: "Welkom! Dit is de standaard tekst in het Nederlands.",
            heroTitle: "Welkom bij Alphabet Soup Translations!",
            proofread: "Proeflezen",
            textReview: "Tekstrevisie",
            translation: "Vertaling",
            whatWeDo: "WAT DOEN WE?",
            whatWeDoText: "Bij Alphabet Soup Translations geloven we in de kracht van taal. Als vernieuwend taalbureau bieden we professionele vertalingen aan en kunt u uw teksten laten reviseren of proeflezen in verschillende talen (Nederlands, Frans, Engels en Spaans). Onze teksten zijn niet alleen taalkundig correct, maar ook cultureel authentiek, zodat de boodschap perfect aansluit bij de beoogde doelgroep en context.",
            whyChooseUs: "WAAROM VOOR ONS KIEZEN?",
            whyChooseUsText: "Onze expertise komt voort uit een passie voor taal en een diepgaand begrip van de subtiele nuances van communicatie. Of u nu op zoek bent naar nauwkeurige vertalingen voor uw zakelijke documenten of een creatieve vertaling voor een museumgids, wij staan klaar om u te helpen uw doelen te bereiken.",
            whoWeAre: "WIE ZIJN WE?",
            whoWeAreText: "Met een team van ervaren professionals die aan de Universiteit Gent hebben gestudeerd en zich hebben gespecialiseerd in verschillende vakgebieden, kunnen we op maat gemaakte oplossingen bieden die voldoen aan uw specifieke behoeften. We zijn er trots op dat we nauw samenwerken met onze klanten om hun visie tot leven te brengen en een impactvolle indruk te maken in alle vier de talen. Neem vandaag nog contact met ons op voor meer informatie. We kijken er naar uit om met u samen te werken!"
        },
        en: {
            welcome: "Welcome! This is the default text in English.",
            heroTitle: "Welcome to Alphabet Soup Translations!",
            proofread: "Proofreading",
            textReview: "Text Review",
            translation: "Translation",
            whatWeDo: "WHAT DO WE DO?",
            whatWeDoText: "At Alphabet Soup Translations, we believe in the power of language. As an innovative translation agency, we offer professional translations and can have your texts revised or proofread in various languages (Dutch, French, English, and Spanish). Our texts are not only linguistically correct but also culturally authentic, ensuring that the message perfectly matches the intended audience and context.",
            whyChooseUs: "WHY CHOOSE US?",
            whyChooseUsText: "Our expertise stems from a passion for language and a deep understanding of the subtle nuances of communication. Whether you are looking for accurate translations for your business documents or creative translations for a museum guide, we are here to help you achieve your goals.",
            whoWeAre: "WHO ARE WE?",
            whoWeAreText: "With a team of experienced professionals who studied at the University of Ghent and specialized in various fields, we offer customized solutions that meet your specific needs. We take pride in working closely with our clients to bring their vision to life and make an impactful impression in all four languages. Contact us today for more information. We look forward to working with you!"
        },
        fr: {
            welcome: "Bienvenue! Ceci est le texte par défaut en français.",
            heroTitle: "Bienvenue chez Alphabet Soup Translations!",
            proofread: "Relecture",
            textReview: "Révision de Texte",
            translation: "Traduction",
            whatWeDo: "QUE FAISONS-NOUS?",
            whatWeDoText: "Chez Alphabet Soup Translations, nous croyons au pouvoir des mots. En tant qu'agence de traduction innovante, nous proposons des traductions professionnelles et pouvons réviser ou relire vos textes dans plusieurs langues (néerlandais, français, anglais et espagnol). Nos textes sont non seulement linguistiquement corrects, mais aussi culturellement authentiques, garantissant que le message correspond parfaitement au public cible et au contexte.",
            whyChooseUs: "POURQUOI NOUS CHOISIR?",
            whyChooseUsText: "Notre expertise repose sur une passion pour la langue et une compréhension approfondie des subtilités de la communication. Que vous recherchiez des traductions précises pour vos documents professionnels ou des traductions créatives pour un guide de musée, nous sommes là pour vous aider à atteindre vos objectifs.",
            whoWeAre: "QUI SOMMES-NOUS?",
            whoWeAreText: "Avec une équipe de professionnels expérimentés ayant étudié à l'Université de Gand et spécialisés dans divers domaines, nous proposons des solutions sur mesure répondant à vos besoins spécifiques. Nous sommes fiers de travailler en étroite collaboration avec nos clients pour donner vie à leur vision et laisser une impression marquante dans les quatre langues. Contactez-nous dès aujourd'hui pour plus d'informations. Nous sommes impatients de travailler avec vous!"
        },
        es: {
            welcome: "¡Bienvenido! Este es el texto predeterminado en español.",
            heroTitle: "¡Bienvenido a Alphabet Soup Translations!",
            proofread: "Corrección de Pruebas",
            textReview: "Revisión de Textos",
            translation: "Traducción",
            whatWeDo: "¿QUÉ HACEMOS?",
            whatWeDoText: "En Alphabet Soup Translations, creemos en el poder del lenguaje. Como una agencia de traducción innovadora, ofrecemos traducciones profesionales y podemos revisar o corregir sus textos en varios idiomas (neerlandés, francés, inglés y español). Nuestros textos no solo son lingüísticamente correctos, sino también culturalmente auténticos, asegurando que el mensaje se adapte perfectamente al público objetivo y al contexto.",
            whyChooseUs: "¿POR QUÉ ELEGIRNOS?",
            whyChooseUsText: "Nuestra experiencia proviene de una pasión por el lenguaje y un profundo conocimiento de los matices sutiles de la comunicación. Ya sea que esté buscando traducciones precisas para sus documentos comerciales o traducciones creativas para una guía de museo, estamos aquí para ayudarle a alcanzar sus metas.",
            whoWeAre: "¿QUIÉNES SOMOS?",
            whoWeAreText: "Con un equipo de profesionales experimentados que estudiaron en la Universidad de Gante y se especializaron en diversos campos, ofrecemos soluciones personalizadas que satisfacen sus necesidades específicas. Nos enorgullece trabajar en estrecha colaboración con nuestros clientes para dar vida a su visión y dejar una impresión impactante en los cuatro idiomas. ¡Contáctenos hoy para obtener más información! ¡Esperamos trabajar con usted!"
        }
    };

    // Pas teksten aan op basis van taal
    document.getElementById("content").textContent = translations[language].welcome;
    document.querySelector(".hero h1").textContent = translations[language].heroTitle;
    document.querySelectorAll(".buttons a")[0].textContent = translations[language].proofread;
    document.querySelectorAll(".buttons a")[1].textContent = translations[language].textReview;
    document.querySelectorAll(".buttons a")[2].textContent = translations[language].translation;
    document.getElementById("what-we-do").textContent = translations[language].whatWeDo;
    document.querySelector(".content p:nth-of-type(1)").textContent = translations[language].whatWeDoText;
    document.getElementById("why-choose-us").textContent = translations[language].whyChooseUs;
    document.querySelector(".content p:nth-of-type(2)").textContent = translations[language].whyChooseUsText;
    document.getElementById("who-we-are").textContent = translations[language].whoWeAre;
    document.querySelector(".content p:nth-of-type(3)").textContent = translations[language].whoWeAreText;
}
