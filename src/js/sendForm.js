
const form = document.querySelector('#modalForm');
form.addEventListener("submit", submitForm)


function submitForm (event) {
    event.preventDefault();

    const {name, tel, telegram} = event.currentTarget.elements

    console.log(name.value, tel.value, telegram.value)
}