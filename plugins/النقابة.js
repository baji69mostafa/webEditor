let handler = async (m, {command, text, conn, usedPrefix}) => {

let url = 'نقابتنا ترحب بكم جميعا❤️‍🔥'
'https://chat.whatsapp.com/GmrPvOwXZGS5ApzGSp49mK';
let a7a = url + text;
await conn.reply(m.chat, a7a, m);
}
    handler.help = ['تبنيد'];
    handler.tags = ['K U R O S A K I'];
    handler.command = /^(نقابه|نقابة|النقابة|النقابه)$/i

    export default handler;