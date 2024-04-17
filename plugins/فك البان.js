let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] لا تنسى المنشن يا سيدي سينتشي*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] مدلا تنسى المنشن يا سيدي سينتشي*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗]تم إلغاء حظر المستخدم*\n* تقدر تستخدم البوت دلوقتي*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^فك-البان|فك-بان$/i
handler.rowner = true
export default handler
