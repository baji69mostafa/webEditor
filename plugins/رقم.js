let handler = async (m, {command, text, conn, usedPrefix}) => {

let url ='حط رقمك مع (+) عشان تسوي رابط خاص فيك'
'https://api.whatsapp.com/send?phone=';
let a7a = url + text;
await conn.reply(m.chat, a7a, m);
}
    handler.help = ['تبنيد'];
    handler.tags = ['K U R O S A K I'];
    handler.command = /^(رقم)$/i

    export default handler;