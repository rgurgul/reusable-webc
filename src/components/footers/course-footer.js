class CourseFooter extends HTMLElement {
  static get observedAttributes() {
    return ["courses"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
            <footer>
                <div class="linkedin">
                    <h3>Podziel się opinią o szkoleniu</h3>
                    <br>
                    Jeżeli szkolenie było <b>OK</b>,
                    <br>
                    zapraszam Cię do moich kontaktów na
                    <a href="https://www.linkedin.com/in/robertgurgul" target="_blank">linkedin</a>
                    <br/>
                    <br/>
                    <a href="https://debugger.pl/kontakt" target="_blank">Kontakt ze mną</a>
                </div>
            </footer>
         `;

    const style = document.createElement("style");
    style.textContent = `
        footer{
            border-radius: 4px;
            display: flex;
            gap:20px;
        }
        footer a {
            cursor: pointer;
            color: black;
            display: inline-block;
        }
        footer a:hover {
            color: coral;
        }
        footer ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        footer ul li {
            display: inline-block;
            margin: 4px 2px;
        }

        h3 {
            margin: 0;
        }
        *{
            font-family: sans-serif;
        }
        .linkedin,.list{
            border: 2px solid #eaeaea;
            padding:20px;
            margin: 20px 0;
            border-radius: 4px;
            box-shadow: 0 5px 10px #eaeaea;
            background: white;
        }
        .courses {
            flex:1;
        }
        .flexi {
            display: flex;
            gap:40px;
        }
        dt {
            text-transform: uppercase;
            font-weight: bold;
        }
        dd {
            margin-top:10px;
            margin-left:0;
        }
        @media screen and (max-width: 768px) {
            .flexi {
                display: block;
            }
            footer {
                flex-direction: column;
            }
            footer a {
              line-height: 1em;
            }
            .linkedin, .list {
                flex-basis: auto;
                margin-top: 20px;
            }
        }
        `;
    this.shadowRoot.appendChild(style);
  }

  courses() {
    const container = document.createElement("div");
    container.classList.add("courses");
    this.shadowRoot.querySelector("footer").appendChild(container);
    fetch("https://panel.debugger.pl/api/courses")
      .then((resp) => resp.json())
      .then((resp) => {
        const xx = resp.reduce(
          (acc, val) => ({ ...acc, [val.type]: [...acc[val.type], val] }),
          { "front-end": [], "back-end": [], inne: [] }
        );

        const rr = Object.entries(xx);

        container.innerHTML = `
                <div class="list">
                    <h3>Lista wszystkich szkoleń</h3>
<div class="flexi">
                    ${rr
                      .map(
                        (col) => `

                    <dl>
                            <dt>${col[0]}</dt>
                    ${col[1]
                      .map(
                        (item, idx) => `
                        <dd>
                            <a href='https://debugger.pl/szkolenie-${
                              item.name
                            }' target='_blank'>
                            ${
                              item.name.charAt(0).toUpperCase() +
                              item.name
                                .slice(1)
                                .replace(/-[\w]/g, (val, idx, str) => {
                                  const result =
                                    str.charAt(idx + 2) !== "-"
                                      ? val.charAt(1).toUpperCase()
                                      : val.charAt(1);
                                  return " " + result;
                                })
                            }</a>
                        </dd>
                    `
                      )
                      .join("")}
                       </dl> `
                      )
                      .join("")}
                </div>
                </div>
                `;
      });
  }

  attributeChangedCallback(name) {
    this[name]();
  }
}

customElements.define("course-footer", CourseFooter);
