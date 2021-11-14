class CourseFooter extends HTMLElement {
    static get observedAttributes() {
        return ['courses'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

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

        const style = document.createElement('style')
        style.textContent = `
        footer{
            border: 2px solid slategray;
            border-radius: 4px;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            background: #eaeaea;
        }
        footer a {
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            border: 2px solid slategray;
            border-radius: 2px;
            color: #555;
            padding: 2px 6px;
            margin: 0;
            display: inline-block;
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
        .linkedin, .courses{
            flex: 1;
        }
        @media screen and (max-width: 600px) {
            footer {
                flex-direction: column;
            }
            .linkedin, .courses {
                flex-basis: auto;
                margin-top: 20px;
            }
        }
        `;
        this.shadowRoot.appendChild(style);
    }

    courses() {
        const container = document.createElement('div');
        container.classList.add('courses');
        this.shadowRoot.querySelector('footer').appendChild(container);
        fetch('https://panel.debugger.pl/api/courses')
            .then((resp) => resp.json())
            .then((resp) => {
                container.innerHTML = `

                <div class="courses">
                    <h3>Lista wszystkich szkoleń</h3>
                    <br>
                    <ul>
                    ${resp.map((item, idx) => `
                        <li>
                            <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>
                            ${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\w]/g, (val, idx, str) => {
                                const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);
                                return ' ' + result;
                            })}</a>
                        </li>
                    `).join('')}
                    </ul>
                </div>

                `
            })
    }

    attributeChangedCallback(name) {
        this[name]();
    }
}

customElements.define('course-footer', CourseFooter);
