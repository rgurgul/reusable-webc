import Helpers from "../helpers.js";
import tplTabs from './tabs.html';
import tplTab from './tab.html';

class UiTabs extends HTMLElement {
    async connectedCallback() {
        const root = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        const content = this.hasAttribute('portrait') ? require('./styles/tabs-portrait.css') : require('./styles/tabs-landscape.css')
        style.textContent = content.default.toString();
        root.appendChild(style);

        const tpl = await Helpers.getHtmlTmpl(tplTabs);

        root.appendChild(tpl.content.cloneNode(true));
        this.createButtons(this);
    }

    setActive(btn, tab) {
        try {
            this
                .querySelector('ui-tab[visible=true]')
                .setAttribute('visible', 'false');
            this
                .querySelector('button.btn-active')
                .classList.remove('btn-active');
        } catch (err) { }

        tab.setAttribute('visible', 'true');
        btn.classList.add('btn-active');
        this.dispatchEvent(new CustomEvent('changed', { detail: tab }));
    }

    createButtons() {
        Array.from(this.querySelectorAll('ui-tab'))
            .forEach((tab, idx) => {
                const slotType = tab.getAttribute('type');
                if (!this.shadowRoot.querySelector(`slot[name=${slotType}]`)) {
                    const label = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('div'));
                    label.innerHTML = slotType;
                    label.style = `text-transform:uppercase`
                    const newSlot = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('slot'));
                    newSlot.name = slotType;
                }
                const tabName = tab.getAttribute('tab-name');
                const btn = Helpers.createEl('button', this,
                    {
                        'data-target': tabName,
                        innerHTML: `${this.hasAttribute('number')
                            ? `<nobr><small style="border: 1px solid;padding: 0 2px;">${idx}</small>`
                            : ''} ${tabName}</nobr>`,
                        slot: slotType,
                        /* className: 'link' */
                    });
                tab.getAttribute('visible') && (btn.className = 'btn-active');
                btn.addEventListener('click', (evt) => {
                    this.setActive(evt.currentTarget, tab);
                });
            });
    }
}

class UiTab extends HTMLElement {
    async connectedCallback() {
        const root = this.attachShadow({ mode: 'open' });
        const tpl = await Helpers.getHtmlTmpl(tplTab);
        root.appendChild(tpl.content.cloneNode(true));
    }
}

customElements.define('ui-tabs', UiTabs);
customElements.define('ui-tab', UiTab);

