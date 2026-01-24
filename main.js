class LottoNumbers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.numbers = this.generateLottoNumbers();
    this.render();
  }

  generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  render() {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    const textColor = isLight ? '#333' : '#fff';

    this.shadowRoot.innerHTML = `
      <style>
        .lotto-ball {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8em;
          font-weight: 700;
          color: ${textColor};
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .lotto-ball:nth-child(1) { background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%); }
        .lotto-ball:nth-child(2) { background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%); }
        .lotto-ball:nth-child(3) { background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); }
        .lotto-ball:nth-child(4) { background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%); }
        .lotto-ball:nth-child(5) { background: linear-gradient(135deg, #fccb90 0%, #d57eeb 100%); }
        .lotto-ball:nth-child(6) { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
      </style>
      ${this.numbers.map(num => `<div class="lotto-ball">${num}</div>`).join('')}
    `;
  }

  updateNumbers() {
    this.numbers = this.generateLottoNumbers();
    this.render();
  }
}

customElements.define('lotto-numbers', LottoNumbers);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersElement = document.querySelector('lotto-numbers');

generateBtn.addEventListener('click', () => {
  lottoNumbersElement.updateNumbers();
});

// Theme switcher logic
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');
    const lottoNumbers = document.querySelector('lotto-numbers');

    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        // Re-render the lotto numbers to update text color
        lottoNumbers.render();
    });

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'light') {
            themeSwitch.checked = true;
        }
    } else {
        // Default to dark theme if nothing is set
        document.body.setAttribute('data-theme', 'dark');
    }
     // Re-render the lotto numbers to update text color
    lottoNumbers.render();
    initI18n();
});
