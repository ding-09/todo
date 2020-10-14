import { addTaskBtn } from "./add-task-btn.js";
import { createMoadl, createModal } from "./modal.js";

const inbox = () => {
    const inboxPage = document.createElement("div");
    inboxPage.setAttribute("id", "inbox-page");

    // title 
    const title = document.createElement("h3");
    title.textContent = "Inbox";
    title.classList.add("page-title");
    inboxPage.appendChild(title);

    // flexbox of items 
    const modal = createModal();
    inboxPage.appendChild(modal);

    // add task bar 
    const addTaskBar = addTaskBtn();
    inboxPage.appendChild(addTaskBar);
    return inboxPage;
};

export { inbox };