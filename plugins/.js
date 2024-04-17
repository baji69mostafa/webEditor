let handler = async (m, { conn }) => {
        await conn.reply(m.chat, 'رد الجافا سكريبت الخاص بك هنا', m)
        }
        handler.command = ['رد']
        handler.tags = ['custom']
        handler.help = ['رد', 'ردود']
        module.exports = handler