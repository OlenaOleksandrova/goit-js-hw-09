// const elems = {
//     btn: document.querySelector('.button)';
// }
// elems.btn.addEventListener('clack', setStorageData);

// function setStorageData(event) {
//     localStorage.setItem('elem', event.target.className);
// }

const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('.textarea');

form / addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    localStorage.removeItem(STORAGE_KEY);
    
    form.reset();
};

textarea.addEventListener('input', handleMessageInput);
function handleMessageInput(event) {
    console.log(event.target.value);
}