class RadioGroupComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['label', 'list'];
    }

    connectedCallback() {
        const style = document.createElement('style')
        style.textContent = require('./radio-group.css').default.toString();
        this.appendChild(style);

        const content = document.createElement('div')
        content.innerHTML = `
                <div>
                        <div class="label">${this.label}*</div>
                        <div style="display:inline-flex; flex-wrap: wrap; gap:8px;">
                        ${JSON.parse(this.list).map((opt) => {
            return `
                                    <label>
                                        <input type="radio" required
                                            value="${opt}"
                                            name="${this.id}">${opt}</label>`
        }).join('')}
                        </div>
                </div>`;
        this.appendChild(content)
        this.checked = null;
        this.addEventListener('click', ({ target }) => {
            if (/^radio$/.test(target.type)) {
                if (this.checked) this.checked.closest('label').classList.remove('btn-active');
                this.checked = document.querySelector(`input[name=${this.id}]:checked`);
                this.checked.closest('label').classList.add('btn-active');
                this.dispatchEvent(new CustomEvent('CHANGED', { detail: { [this.id]: target.value } }));
            }
        })
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
    }
}

customElements.define('ui-radio-group', RadioGroupComponent);
