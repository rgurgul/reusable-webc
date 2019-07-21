class CourseFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
         <footer>
            <div> Jeżeli szkolenie było OK, zapraszam do moich kontaktów na
                <a href="https://www.linkedin.com/in/robertgurgul" target="_blank">linkedin</a>.
                Dodaj skila i opinię o szkoleniu.</div>
            <hr style="margin:10px 0;">
            <div>List wszystkich szkoleń:</div>
            <ul style="padding: 0; margin: 0;"></ul>
        </footer>
         `;

        const style = document.createElement('style')
        style.textContent = `
        footer{border: 1px solid; padding: 10px;}
        *{font-family: sans-serif}`
        shadow.appendChild(style);

        fetch('https://urgu.pl/api/courses')
            .then((resp) => resp.json())
            .then((resp) => {
                shadow.querySelector('ul').innerHTML = `
                ${resp.map((item, idx) => `
                    <li style="display: inline-block;">
                        <a href='https://debugger.pl/szkolenie-${item.name}' target='_blank'>
                        <small>${item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-[\w]/g, (val, idx, str) => {
                    const result = str.charAt(idx + 2) !== '-' ? val.charAt(1).toUpperCase() : val.charAt(1);
                    return ' ' + result;
                })}</small></a>
                        ${resp.length - 1 - idx ? '|' : ''}
                    </li>
                `).join('')}
                `
            })
    }
}

customElements.define('course-footer', CourseFooter);
