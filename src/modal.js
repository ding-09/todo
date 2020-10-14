import { addTaskForm } from "./add-task-form";

// create modal 
const createModal = () => {
    const modalBg = document.createElement("div");
    modalBg.setAttribute("id", "modal-bg");

    const modalContent = document.createElement("div");
    modalContent.setAttribute = ("id", "modal-content");

    const form = addTaskForm();
    modalContent.appendChild(form);

    modalBg.appendChild(modalContent);


    return modalBg;
}

export { createModal }