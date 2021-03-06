customElements.define('ui-words-cloud', class WordsCloud extends HTMLElement {

    static get observedAttributes() {
        return ['color1', 'color2'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.content = document.createElement('div');
        this.content.style.position = 'relative';
        this.shadowRoot.appendChild(this.content)
        const style = document.createElement('style');
        this.attrs = {};
        style.textContent = `
            .el {
                position: absolute;
                font-size: var(--size, 1em);
                font-weight: bold;
                text-shadow: 2px 2px 0px var(--color, black);
                color: rgba(255,255,255, 0.1);
                opacity: .85;
                left: var(--left);
                top: var(--top);
            }
            .el:before {
                content: '';
                position: absolute;
                display: inline-block;
                transform: rotate(50deg);
                color: var(--color, black);
            }
            @media (max-width: 768px) {
                .el {
                    font-size: var(--size-sm);
                }
            }`;
        this.shadowRoot.appendChild(style);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.attrs[name] = newVal;
        if (Object.keys(this.attrs).length === WordsCloud.observedAttributes.length)
            this.dispatchEvent(new CustomEvent('ready'));
    }

    render([arr1, arr2]) {
        const data = [...arr1, ...arr2];
        data.forEach((el, idx) => {
            const [left, top] = [
                /* this.parentElement.clientWidth / 2 +  */
                Math.abs((idx * 30 + 1) * (Math.random() - .5)),
                idx * (idx * 3)
            ];
            this.content.insertAdjacentHTML('beforeend', `
            <div
                class='el'
                data-before='${idx % 2 === 0 ? '●' : '■'}'
                style="
                    --color:${idx < arr1.length ? this.attrs.color1 : this.attrs.color2};
                    --size:${(idx + 1.5) / 1.5}em;
                    --top:${top}px;
                    --left:${left}px;
                    --size-sm:${(idx + 1.5) / 3}em"
                >${el}
            </div>`)
        })
    }
});
