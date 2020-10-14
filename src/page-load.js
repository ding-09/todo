import createHeader from "./header.js";
import { nav } from "./nav.js";
import { inbox } from "./inbox.js";

const loadPage = (() => {
    const defaultPage = document.getElementById("default");
    const header = createHeader();
    const navbar = nav();
    const inboxPage = inbox();

    defaultPage.appendChild(header);
    defaultPage.appendChild(navbar);
    defaultPage.appendChild(inboxPage);
})();

export { loadPage };