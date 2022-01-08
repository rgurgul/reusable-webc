customElements.define(
  "ui-words-cloud",
  class WordsCloud extends HTMLElement {
    static get observedAttributes() {
      return ["color1", "color2"];
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.wrapper = document.createElement("div");
      this.wrapper.style.position = "relative";
      this.shadowRoot.appendChild(this.wrapper);
      const style = document.createElement("style");
      this.attrs = {};
      style.textContent = `
            .el {

                font-size: var(--size);
                font-weight: bold;
                text-shadow: 3px 3px 0px var(--color, black);
                color: rgba(255,255,255, 0.1);
                opacity: .85;
                margin-left: var(--left);
                line-height: var(--height);
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
                    line-height: var(--height-sm);
                    margin-left: var(--left-sm);
                }
            }`;
      this.shadowRoot.appendChild(style);
    }

    attributeChangedCallback(name, oldVal, newVal) {
      this.attrs[name] = newVal;
      if (
        Object.keys(this.attrs).length === WordsCloud.observedAttributes.length
      )
        this.dispatchEvent(new CustomEvent("ready"));
    }

    render([arr1, arr2]) {
      const data = [...arr1, ...arr2];
      data.forEach((el, idx) => {
        const [left, size, height] = [
          /* this.parentElement.clientWidth / 2 +  */
          Math.abs((idx * 30 + 1) * (Math.random() - 0.5)),
          (idx + 2.5) / 1.5,
          ((idx + 100))/220,
        ];
        this.wrapper.insertAdjacentHTML(
          "beforeend",
          `
            <div
                class='el'
                data-before='${idx % 2 === 0 ? "●" : "■"}'
                style="
                    --color:${
                      idx < arr1.length ? this.attrs.color1 : this.attrs.color2
                    };
                    --size:${size}em;
                    --size-sm:${(idx + 2.5) / 5}em;
                    --left:${left}px;
                    --left-sm:${left / 5}px;
                    --height:${height}em;
                    --height-sm:${height}em;
                    ";
                >${el}
            </div>`
        );
      });
    }
  }
);
