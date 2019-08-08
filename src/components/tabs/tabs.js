import Helpers from "../helpers.js";

(function () {

    class UiTabs extends HTMLElement {
        async  connectedCallback() {
            const root = this.attachShadow({ mode: 'open' });
            const tpl = await Helpers.getHtmlTmpl(require("html-loader!./tabs.html"));

            //const tpl = await Helpers.getHtmlTmpl('components/tabs/tabs.html');

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
            } catch (err) { }Helpers

            tab.setAttribute('visible', 'true');
            btn.classList.add('btn-active');
        }

        createButtons() {
            Array.from(this.querySelectorAll('ui-tab'))
                .forEach((tab, idx) => {
                    const slotType = tab.getAttribute('type');
                    if (!this.shadowRoot.querySelector(`slot[name=${slotType}]`)) {
                        const label = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('div'));
                        label.innerHTML = slotType;
                        label.style = `font-weight: bold; text-transform:uppercase`
                        const newSlot = this.shadowRoot.querySelector('.btns').appendChild(document.createElement('slot'));
                        newSlot.name = slotType;
                    }
                    const tabName = tab.getAttribute('tab-name');
                    const btn = Helpers.createEl('button', this,
                        {
                            'data-target': tabName,
                            innerHTML: `<span style="background: white; color: black; padding: 2px 3px; margin: 0 2px;"><b>${idx}</b></span> ${tabName}`,
                            slot: slotType,
                            className: 'link'
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
            const tpl = await Helpers.getHtmlTmpl(require("html-loader!./tab.html"));
            root.appendChild(tpl.content.cloneNode(true));
        }
    }

    customElements.define('ui-tabs', UiTabs);
    customElements.define('ui-tab', UiTab);

}());
