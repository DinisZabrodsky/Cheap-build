import { sendMessageTelegramBot } from "./api/sendTelegramBot";
import { toggleModal } from "./modal";


const form = document.querySelector('#modalForm');
form.addEventListener("submit", submitForm)


async function submitForm (event) {
    event.preventDefault();

    const {name, tel, telegram} = event.currentTarget.elements

    const massege = `     
        <b>Форма із сайту Cheap build </b>\n
        <b>Ім'я клієнта:   </b><i>${name.value}</i>
        <b>Номер мобільного:   </b><i>${tel.value}</i> 
        <b>Telegam:   </b><i>${telegram.value ? telegram.value : "Клієнт не вказав"}</i>`

    await sendMessageTelegramBot(massege).then((res) => {
        name.value = "";
        tel.value = "";
        telegram.value = "";

        toggleModal()

    }).catch((err) => {
        console.log('sadadasdad')
    })

    
}