const translations = {};

async function loadTranslations(lang) {
    if (translations[lang]) {
        return;
    }
    const response = await fetch(`${lang}.json`);
    translations[lang] = await response.json();
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

async function setLanguage(lang) {
    await loadTranslations(lang);
    applyTranslations(lang);
    localStorage.setItem('language', lang);
}

function createLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.classList.add('language-switcher');
    switcher.innerHTML = `
        <button id="lang-en">English</button>
        <button id="lang-ko">한국어</button>
    `;
    document.querySelector('.header-right').appendChild(switcher);

    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-ko').addEventListener('click', () => setLanguage('ko'));
}

function initI18n() {
    createLanguageSwitcher();
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}
