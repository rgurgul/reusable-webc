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
                    <h3>Podziel się opinią o szkoleniu.</h3>
                    <br>
                    Jeżeli szkolenie było <b>OK</b>, zapraszam do moich kontaktów na
                    <a href="https://www.linkedin.com/in/robertgurgul" target="_blank">linkedin</a>.
                </div>
            </footer>
         `;

        const style = document.createElement('style')
        style.textContent = `
        footer{
            border: 1px solid #999;
            color: white;
            padding: 50px 0;

            background: #606060;
            border-radius: 4px;
            display: flex;
            flex-wrap: wrap;
        }
        footer a {
            color: white;
            font-weight: bold;
            cursor: pointer;
        }
        footer ul {
            margin: 0;
            padding: 0;
        }
        footer ul li {
            line-height: 25px;
            display: inline-block;
        }

        h3 {
            margin: 0;
        }
        *{
            font-family: sans-serif;
        }
        .linkedin, .courses, .contact{
            margin: 0 40px;
            flex: 1;
            min-width: 0;
        }

        `
        this.shadowRoot.appendChild(style);
    }

    courses() {
        const container = document.createElement('div');
        container.classList.add('courses');
        this.shadowRoot.querySelector('footer').appendChild(container);
        fetch('https://urgu.pl/api/courses')
            .then((resp) => resp.json())
            .then((resp) => {
                container.innerHTML = `

                <div class="courses">
                    <h3>List wszystkich szkoleń</h3>
                    <br>
                    <ul>
                    ${resp.map((item, idx) => `
                        <li>
                            <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>
                            ${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\w]/g, (val, idx, str) => {
                                const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);
                                return ' ' + result;
                            })}</a>
                            ${idx !== resp.length - 1 ? '•' : ''}
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
