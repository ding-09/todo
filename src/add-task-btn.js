import { openModal } from "./modal.js";
 
const addTaskBtn = () => {
    const addTaskDiv = document.createElement("div");

    (function populateAddTask(){
        addTaskDiv.classList.add("add-task")
        const button = document.createElement("button");
        button.textContent = "Add task";
        const buttonIcon = document.createElement("i");
        buttonIcon.classList.add("fas", "fa-plus");
        button.classList.add("add-task-btn");
        addTaskDiv.appendChild(buttonIcon);
        addTaskDiv.appendChild(button);
    })();

    addTaskDiv.addEventListener("click", openModal);
    
    return addTaskDiv;
}

export { addTaskBtn };