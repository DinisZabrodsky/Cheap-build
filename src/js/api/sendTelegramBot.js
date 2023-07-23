import axios from "axios";


const TOKEN = "6319497492:AAFH8GIMdSa7z-m5KlrPiXCgu0U9n7xYBDQ";
const CHAT_ID = "-1001926741056";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

export async function sendMessageTelegramBot (massege) {
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: massege
    })
}