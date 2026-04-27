const translations = {
  en: {
    status: "Premium digital identity",
    brand: "VantaCard",
    title: "Digital Card",
    subtitle: "Premium digital cards for brands, founders, and teams.",
    section: "About",
    description:
      "VantaCard turns a traditional business card into a premium digital profile. Scan the QR code to open a clean branded card with direct contact options and a polished first impression.",
    actionWhatsapp: "WhatsApp",
    actionInstagram: "Instagram",
    actionX: "X",
    actionPhone: "Call",
    actionEmail: "Email",
    actionLinkedin: "LinkedIn",
    footnote:
      "Scan the physical card to open the VantaCard experience instantly.",
    previewTitle: "VantaCard",
    previewSubtitle: "Identity Studio",
    metaOne: "Custom branded profile",
    metaTwo: "QR-ready for every phone"
  },
  es: {
    status: "Identidad digital premium",
    brand: "VantaCard",
    title: "Tarjeta Digital",
    subtitle: "Tarjetas digitales premium para marcas, fundadores y equipos.",
    section: "Acerca",
    description:
      "VantaCard convierte una tarjeta tradicional en un perfil digital premium. Escanea el código QR para abrir una tarjeta clara con tu marca, accesos directos y una primera impresión elegante.",
    actionWhatsapp: "WhatsApp",
    actionInstagram: "Instagram",
    actionX: "X",
    actionPhone: "Teléfono",
    actionEmail: "Email",
    actionLinkedin: "LinkedIn",
    footnote:
      "Escanea la tarjeta física para abrir al instante la experiencia VantaCard.",
    previewTitle: "VantaCard",
    previewSubtitle: "Estudio de Identidad",
    metaOne: "Perfil personalizado con marca",
    metaTwo: "Lista para QR en cualquier teléfono"
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.documentElement.lang = lang;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

setLanguage("es");
