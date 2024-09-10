// const elems = {
//     btn: document.querySelector('.button)';
// }
// elems.btn.addEventListener('clack', setStorageData);

// function setStorageData(event) {
//     localStorage.setItem('elem', event.target.className);
// }
document.addEventListener('DOMContentLoaded', () => {

    const STORAGE_KEY = 'feedback-form-state';

    let formData = { email: '', message: '' };

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try { 
        formData = JSON.parse(savedData);
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
        } catch (error) {  
    }
 }
    const form = document.querySelector('.feedback-form');
    const textarea = form.querySelector('textarea');

    form.addEventListener('submit', handleFormSubmit);


    function handleFormSubmit(event) {
        event.preventDefault();

        // formData[event.target.name] = event.target.value.trim();
        formData.email = form.email.value.trim();
        formData.message = form.message.value.trim();

        if (formData.email === "" || formData.message === "") {
            alert('Fill please all fields');
            return;
        }
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

       
        // const form = event.currentTarget;
        localStorage.removeItem(STORAGE_KEY);
    
        form.reset();
        formData = { email: '', message: '' };
    };

    textarea.addEventListener('input', handleMessageInput);

    function handleMessageInput(event) {

        console.log(event.target.value);

          formData.message = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        

        let data;
        if (typeof event.target.value !== "string") {
            data = JSON.stringify(event.target.value);
        }
        data = event.target.value;

        localStorage.setItem(STORAGE_KEY, data)

        
    }

});