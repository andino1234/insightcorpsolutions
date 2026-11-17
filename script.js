/**
 * Insight Solutions — interacciones del sitio (menú, animaciones, idioma).
 *
 * @author Ariel Geovanny Andino Chinchilla
 * @see    https://github.com/andino1234
 */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealItems = document.querySelectorAll('.reveal');
const languageSelect = document.querySelector('#language-select');

const translations = {
  en: {
    'nav.about': 'About us', 'nav.services': 'Services', 'nav.method': 'Our method', 'nav.contact': 'Contact',
    'hero.image': 'Commercial port at sunset', 'hero.areas': 'Areas of expertise', 'hero.eyebrow': 'Strategic consulting in Latin America',
    'hero.title': 'Decisions that move<br />organizations forward.', 'hero.description': 'We help companies and institutions turn complex challenges into sustainable results.',
    'hero.cta': "Let's discuss your challenge", 'hero.strategy': 'Strategy', 'hero.operations': 'Operations', 'hero.transformation': 'Transformation',
    'about.title': 'A local perspective<br />with regional reach.', 'about.lead': 'We are an international management consulting firm specialized in the Latin American market.',
    'about.description': 'We work side by side with private and public sector teams to build capabilities, drive growth and create lasting change.',
    'about.companyInfo': 'Company information', 'about.founded': 'Founded', 'about.reach': 'Regional reach', 'about.offices': 'Our offices',
    'services.eyebrow': 'What we do', 'services.title': 'We turn vision<br />into progress.', 'services.description': 'We combine strategic thinking and practical execution to generate measurable impact.',
    'service.food.title': 'Food commodities brokerage', 'service.food.description': 'We connect commercial opportunities in the international food and raw materials market.', 'service.food.aria': 'Learn about food commodities brokerage',
    'service.energy.title': 'Hydrocarbons', 'service.energy.description': 'We work with official traders and refineries to enable trusted commercial relationships.', 'service.energy.aria': 'Learn about hydrocarbons',
    'service.crypto.title': 'Crypto', 'service.crypto.description': 'Access to regulated desks and OTCs for digital asset transactions.', 'service.crypto.aria': 'Learn about crypto',
    'service.advisory.title': 'Advisory and consulting', 'service.advisory.description': 'Strategic support to structure operations and accelerate business decisions.', 'service.advisory.aria': 'Learn about advisory and consulting', 'service.learnMore': 'Learn more',
    'method.image': 'Strategic team meeting', 'method.eyebrow': 'How we work', 'method.title': 'We understand first. Then we execute.',
    'method.description': 'We engage with every context to align strategy, people and operations. We do not deliver diagnoses from a distance: we build solutions alongside the people who will bring them to life.',
    'method.step1': 'Understand the challenge', 'method.step2': 'Design the solution', 'method.step3': 'Support the execution',
    'contact.eyebrow': 'Contact', 'contact.title': 'Your next step<br />can start today.', 'contact.name': 'Name', 'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.message': 'Message', 'contact.locationsLabel': 'Locations', 'contact.honduras': 'Honduras', 'contact.panama': 'Panama', 'contact.elsalvador': 'El Salvador', 'contact.guatemala': 'Guatemala',
    'contact.namePlaceholder': 'Your name', 'contact.emailPlaceholder': 'name@company.com', 'contact.phonePlaceholder': '+000 0000 0000', 'contact.messagePlaceholder': 'Tell us briefly about your challenge', 'contact.submit': 'Send inquiry',
    'footer.locations': 'Honduras, El Salvador, Guatemala, Costa Rica and Panama'
  },
  es: {
    'nav.about': 'Nosotros', 'nav.services': 'Servicios', 'nav.method': 'Nuestro método', 'nav.contact': 'Contacto',
    'hero.image': 'Puerto comercial al atardecer', 'hero.areas': 'Áreas de especialidad', 'hero.eyebrow': 'Consultoría estratégica en Latinoamérica',
    'hero.title': 'Decisiones que mueven<br />a las organizaciones.', 'hero.description': 'Acompañamos a empresas e instituciones a convertir retos complejos en resultados sostenibles.',
    'hero.cta': 'Hablemos de su desafío', 'hero.strategy': 'Estrategia', 'hero.operations': 'Operaciones', 'hero.transformation': 'Transformación',
    'about.title': 'Una mirada local<br />con alcance regional.', 'about.lead': 'Somos una firma internacional de consultoría de gestión especializada en el mercado latinoamericano.',
    'about.description': 'Trabajamos lado a lado con equipos del sector privado y público para desarrollar capacidades, impulsar el crecimiento y lograr cambios que perduren.',
    'about.companyInfo': 'Información de la empresa', 'about.founded': 'Fundación', 'about.reach': 'Alcance regional', 'about.offices': 'Nuestras sedes',
    'services.eyebrow': 'Lo que hacemos', 'services.title': 'Convertimos visión<br />en avance.', 'services.description': 'Combinamos pensamiento estratégico y ejecución práctica para generar impacto medible.',
    'service.food.title': 'Brokerage de commodities alimentarios', 'service.food.description': 'Conectamos oportunidades comerciales en el mercado internacional de alimentos y materias primas.', 'service.food.aria': 'Consultar sobre brokerage de commodities alimentarios',
    'service.energy.title': 'Hidrocarburos', 'service.energy.description': 'Operamos con traders oficiales y refinerías para facilitar relaciones comerciales confiables.', 'service.energy.aria': 'Consultar sobre hidrocarburos',
    'service.crypto.title': 'Crypto', 'service.crypto.description': 'Acceso a desks regulados y OTCs para operaciones con activos digitales.', 'service.crypto.aria': 'Consultar sobre crypto',
    'service.advisory.title': 'Asesoría y consultoría', 'service.advisory.description': 'Acompañamiento estratégico para estructurar operaciones y acelerar decisiones de negocio.', 'service.advisory.aria': 'Consultar sobre asesoría y consultoría', 'service.learnMore': 'Conocer más',
    'method.image': 'Reunión estratégica de equipo', 'method.eyebrow': 'Cómo trabajamos', 'method.title': 'Entendemos primero. Ejecutamos después.',
    'method.description': 'Nos involucramos en cada contexto para alinear estrategia, personas y operación. No entregamos diagnósticos desde lejos: construimos soluciones junto a quienes las harán realidad.',
    'method.step1': 'Entender el desafío', 'method.step2': 'Diseñar la solución', 'method.step3': 'Acompañar la ejecución',
    'contact.eyebrow': 'Contacto', 'contact.title': 'El próximo avance<br />puede comenzar hoy.', 'contact.name': 'Nombre', 'contact.email': 'Correo', 'contact.phone': 'Teléfono', 'contact.message': 'Mensaje', 'contact.locationsLabel': 'Ubicaciones', 'contact.honduras': 'Honduras', 'contact.panama': 'Panamá', 'contact.elsalvador': 'El Salvador', 'contact.guatemala': 'Guatemala',
    'contact.namePlaceholder': 'Su nombre', 'contact.emailPlaceholder': 'nombre@empresa.com', 'contact.phonePlaceholder': '+000 0000 0000', 'contact.messagePlaceholder': 'Cuéntenos brevemente su desafío', 'contact.submit': 'Enviar consulta',
    'footer.locations': 'Honduras, El Salvador, Guatemala, Costa Rica y Panamá'
  }
};

function applyLanguage(language) {
  const selectedTranslations = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = selectedTranslations[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(',').forEach((attributePair) => {
      const [attribute, key] = attributePair.split(':');
      const value = selectedTranslations[key];
      if (value) element.setAttribute(attribute, value);
    });
  });
  if (languageSelect) languageSelect.value = language;
  localStorage.setItem('insight-language', language);
}

if (languageSelect) {
  const savedLanguage = localStorage.getItem('insight-language') || 'en';
  applyLanguage(savedLanguage);
  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));
