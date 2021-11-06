import Helpers from "../helpers.js";
import tplWatch from './watch.html';

class WatchComponent extends HTMLElement {

    static get observedAttributes() {
        return ['preview'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    async connectedCallback() {
        this.root = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = require('./watch.css').default.toString();
        this.root.appendChild(style);

        const tpl = await Helpers.getHtmlTmpl(tplWatch);
        this.root.appendChild(tpl.content.cloneNode(true));

        this.box = this.root.querySelector('.watch-box');
        this.binary = this.box.querySelector('.binary');
        this.time = this.box.querySelector('.time');
        this.getNow.forEach(this.createTable.bind(this));
        setInterval(this.setTime.bind(this), 1000);
        this.setTime();
        this.addEventListener('click', () => this.box.classList.toggle('hid'));
        this.preview && this.box.classList.toggle('hid', false);
    }

    createTable(t, classNr) {
        const table = document.createElement('table');
        table.classList.add('t' + classNr);
        this.binary.appendChild(table);
        [8, 4, 2, 1].forEach((num) => {
            const tr = document.createElement('tr');
            tr.classList.add('row' + num);
            table.appendChild(tr);
            [0, 1].forEach(() => {
                const td = tr.appendChild(document.createElement('td'));
                const digit = td.appendChild(document.createElement('span'));
                digit.innerHTML = num;
            });
        });
    }

    setActive(table, bin, col) {
        this.root.querySelector(`.t${table} .row${bin} td:nth-child(${col})`).classList.add('active');
    }

    setCell(table, digit, col) {
        switch (true) {
            case /^[1|2]$/.test(digit):
                this.setActive(table, digit, col);
                break;
            case digit === 3:
                this.setActive(table, 1, col);
                this.setActive(table, 2, col);
                break;
            case digit >= 4 && digit < 8:
                this.setActive(table, 4, col);
                this.setCell(table, digit % 4, col);
                break;
            case digit >= 8:
                this.setActive(table, 8, col);
                this.setCell(table, digit % 8, col);
                break;
        }
    }

    get getNow() {
        return new Date().toLocaleTimeString('en-US', { hour12: false }).match(/\d+/g);
    }

    setTime() {
        Array.from(this.root.querySelectorAll('.active')).forEach((item) => item.classList.remove('active'));
        this.getNow.forEach((value, table) => Array.from(("0" + value).slice(-2)).forEach((d, idx) => this.setCell(table, +d, idx + 1)));
        this.time.innerHTML = this.getNow.join(':');
    }

}

customElements.define('ui-watch', WatchComponent);

