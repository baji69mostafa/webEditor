

let handler = async (m, { conn, args, text, usedPrefix , command }) => {




    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `✳️ استخدام الأمر : ${usedPrefix + command} <الكمية> <اللون>\n\n مثال: ${usedPrefix + command} 500 أحمر`
    let colores = ['أحمر', 'أسود']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `✳️ الحد الأدنى للرهان هو 500 ذهب `
    if (!colores.includes(color)) throw '✳️ يجب عليك تحديد لون صالح باللون: الأحمر أو الأسود '
    if (user.credit < amount) throw '✳️ !ليس لديك ما يكفي من الذهب '
    if (amount > 100000) throw `*🟥 100000 لا يمكنك المراهنة بالذهب بأكثر من*`
   let result = ''
    if (colour == color) {
        result = `${colour == 'أحمر' ? 'هبطت الكرة على اللون 🔴' : 'هبطت الكرة على اللون ⚫'} \n\nلقد ربحت🏆 ${amount * 2} 🪙من الذهب`
        user.credit += amount * 2
    } else {
        result = `${colour == 'أحمر' ? 'هبطت الكرة على اللون 🔴' : 'هبطت الكرة على اللون ⚫'} \n\nلفد خسرت❌ ${amount} 🪙من الذهب`
        user.credit -= amount
    }
    m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['roulette', 'rt','روليت','الروليت']

handler.group = true

export default handler