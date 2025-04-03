const btnOpenModal = document.getElementById("btnOpenModal");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalForm = document.getElementById("modalForm");

const modalDialog = document.getElementById("modalDialog");

btnOpenModal.addEventListener("click", () => modalDialog.showModal());
btnCloseModal.addEventListener("click", closeModal);
modalForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    modalForm.reset();
    modalDialog.close();
}

function closeModal() {
    modalDialog.close();
    modalForm.reset();
}