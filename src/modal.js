// create modal 
const createModal = () => {
    const modalBg = document.createElement("div");
    modalBg.setAttribute("id", "modal-bg");

    const modalContent = document.createElement("div");
    modalContent.setAttribute = ("id", "modal-content");
    modalBg.appendChild(modalContent);


    return modalBg;
}

const openModal = () => {
    
}

const closeModal = () => {

}

export { createModal, openModal, closeModal }