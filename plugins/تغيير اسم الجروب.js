var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, 'هذا الأمر خاص بتغيير إسم المجموعة تكتب هكذا \n\n*.تغيير-اسم-الجروب* جروب المطور 𝑺𝐻𝐼𝑁𝐼𝐶𝐻𝐼', m,  )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *هو الاسم الجديد لهذه المجموعة*\n` : '*لم يعطوا اسما*'}`, m,  )
}
handler.help = ['setgroupname']
handler.tags = ['owner']
handler.command = ['تغيير-اسم-الجروب','تغيير-اسم المجموعة','تغيير-اسم-المجموعه','تغير-اسم-الجروب','تغير-اسم المجموعة','تغير-اسم-المجموعه','غير-اسم-الجروب','غير-اسم المجموعة','غير-اسم-المجموعه']

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
