const addTaskForm = () => {
    const form = document.createElement("form");
    form.setAttribute("id", "add-task-form");

    const textAreaDiv = document.createElement("div");
    const textarea = document.createElement("textarea");
    textarea.placeholder = "e.g. Chase cats at 9pm";
    textAreaDiv.appendChild(textarea);

    // priority dropdown
    const priorityDropdown = document.createElement("div");
    const flagBtn = document.createElement("button");
    flagBtn.setAttribute("id", "priority-btn");

    const flagIcon = document.createElement("i");
    flagIcon.classList.add("far", "fa-flag");

    flagBtn.appendChild(flagIcon);


    // options 
    const options = document.createElement("div");
    options.setAttribute("id", "dropdown-content");
    

    priorityDropdown.appendChild(flagBtn);


    textAreaDiv.appendChild(priorityDropdown);
    form.appendChild(textAreaDiv);
    return form;
};

export { addTaskForm };