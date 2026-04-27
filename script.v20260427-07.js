const translations = {
  en: {
    status: "Ready to share",
    brand: "VantaCard",
    role: "Digital Identity Studio",
    actionPhone: "Call",
    actionEmail: "Email",
    actionWeb: "Web",
    actionWhatsapp: "WhatsApp",
    demoNote: "Preview only. These buttons are visual examples and do not trigger real actions in this demo.",
    aboutLabel: "About",
    description:
      "A premium mobile card with live actions, QR access, and a Wallet-ready option to showcase your brand.",
    qrCaption: "Scan and view",
    walletAction: "Wallet Pass"
  },
  es: {
    status: "Lista para compartir",
    brand: "VantaCard",
    role: "Estudio de Identidad Digital",
    actionPhone: "Llamar",
    actionEmail: "Correo",
    actionWeb: "Web",
    actionWhatsapp: "WhatsApp",
    demoNote: "Vista previa: los botones son solo de muestra y no activan acciones reales en esta demo.",
    aboutLabel: "Acerca de",
    description:
      "Una tarjeta móvil premium con acciones en vivo, acceso por QR y opción para compartir desde Wallet.",
    qrCaption: "Escanea y mira",
    walletAction: "Pase Wallet"
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const storageKey = "vantacard-demo-lang-v2";
let savedLanguage = null;
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("es")
  ? "es"
  : "en";

try {
  savedLanguage = window.localStorage.getItem(storageKey);
} catch (error) {
  savedLanguage = null;
}

const defaultLanguage = savedLanguage || browserLanguage;

function setLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.documentElement.lang = lang;

  try {
    window.localStorage.setItem(storageKey, lang);
  } catch (error) {
    // Ignore storage failures so language switching still works.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(defaultLanguage);
