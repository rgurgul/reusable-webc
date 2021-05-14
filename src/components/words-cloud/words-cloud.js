customElements.define('ui-words-cloud', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.content = document.createElement('div');
        this.content.style.position = 'relative';
        this.shadowRoot.appendChild(this.content)
        const style = document.createElement('style');
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

    render([arr1, arr2]) {
        const data = [...arr1, ...arr2];
        data.forEach((el, idx) => {
            const range = this.parentElement.clientWidth / (data.length - (idx));
            console.log(range);
            const [left, top] = [
                Math.abs(Math.random() * range),
                idx * (idx * 3)
            ];
            this.content.insertAdjacentHTML('beforeend', `
            <div
                class='el'
                data-before='${idx % 2 === 0 ? '●' : '■'}'
                style="
                    --color:${idx < 4 ? '#CD5561' : '#7A94C0'};
                    --size:${(idx + 1.5) / 1.5}em;
                    --top:${top}px;
                    --left:${left}px;
                    --size-sm:${(idx + 1.5) / 3}em"
                >${el}
            </div>`)
        })
    }
});
