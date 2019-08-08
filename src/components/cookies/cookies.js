import Utils from "debugger-look/dist/script/utils";

(function () {

    class CookiesComponent extends HTMLElement {

        async connectedCallback() {
            this.style.display = this.getCookie('cookies-accepted') ? 'none' : 'block'
            const tpl = await Utils.getHtmlTmpl('src/components/cookies/cookies.html');
            const root = this.attachShadow({ mode: 'open' });
            root.appendChild(tpl.content.cloneNode(true));
            root
                .querySelector('.close')
                .addEventListener('click', () => {
                    this.setCookie('cookies-accepted', 1000);
                    this.style.display = 'none';
                });
        }

        setCookie(cookieName, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toGMTString();
            document.cookie = cookieName + "=1; " + expires;
        }

        getCookie(cookieName) {
            const name = cookieName + "=";
            const cookiesArray = document.cookie.split(';');
            for (let i = 0; i < cookiesArray.length; i++) {
                const cookie = cookiesArray[i].trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return "";
        }
    }

    customElements.define('ui-cookies', CookiesComponent);

})();
