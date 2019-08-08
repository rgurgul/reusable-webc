class RadioGroupComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['label', 'list'];
    }

    connectedCallback() {

        this.tpl = `
            <style>
                    @import "/src/components/radio-group/radio-group.css";
            </style>
            <div>
                    <div class="label">${this.label}*</div>
                    <div>
                    ${JSON.parse(this.list).map((opt) => {
                return `
                                <label class="link">
                                    <input type="radio" required
                                        value="${opt}"
                                        name="${this.id}">
                                    ${opt}
                                </label>`
            }).join('')}
                    </div>
            </div>
            `;

        this.innerHTML = this.tpl;
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

try {
    customElements.define('ui-radio-group', RadioGroupComponent);
} catch (error) {
    alert('wersja eksperymentalna - strona nie działa na przeglądarkach Edge oraz IE');
    console.log(error);
}
