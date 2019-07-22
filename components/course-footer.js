class CourseFooter extends HTMLElement {
    static get observedAttributes() {
        return ['courses'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
         <footer>
            <div> Jeżeli szkolenie było OK, zapraszam do moich kontaktów na
                <a href="https://www.linkedin.com/in/robertgurgul" target="_blank">linkedin</a>.
                Dodaj skila i opinię o szkoleniu.</div>
        </footer>
         `;

        const style = document.createElement('style')
        style.textContent = `
        footer{
            border: 1px solid rgba(0, 0, 0, 0.125);
            color: black;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 4px;
        }
        *{font-family: sans-serif}`
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
                <br>
                <div>List wszystkich szkoleń:</div>
                <ul style="padding: 0; margin: 0;">
                ${resp.map((item, idx) => `
                    <li style="display: inline-block;">
                        <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>
                        ${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\w]/g, (val, idx, str) => {
                    const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);
                    return ' ' + result;
                })}</a>
                        ${resp.length - 1 - idx ? '|' : ''}
                    </li>
                `).join('')}
                </ul>`
            })
    }

    attributeChangedCallback(name) {
        this[name]();
    }
}

customElements.define('course-footer', CourseFooter);
