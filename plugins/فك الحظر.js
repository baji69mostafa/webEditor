let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*تم إلغاء حظر هذه الدردشة بنجاح*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^فك-الحظر|unbanchat|فك-حظر$/i
handler.rowner = true
export default handler
