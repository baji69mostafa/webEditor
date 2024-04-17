let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬〘👑〙⌬━─━✥*

⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭̷໋̟  ۫ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ۫  ▭̷໋̟۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
   ‏

*✥━─━⌬〘👑〙⌬━─━✥*


*⌬〘 مرحبا بك في بوت كونان 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘👑〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه سينتشي 〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاً بالمجموعات 〙⌬*
*⌬〘 اذا كنت تريد البوت 〙⌬*
*⌬〘 فعليك الانضمام الي قناتنا 〙⌬*

*✥━─━⌬〘👑〙⌬━─━✥*

*⌬〘 القناة 〙⌬*

*⏣⊰ https://whatsapp.com/channel/0029VaU3KnKGehELDhZMcf3d ⊱⏣*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/+905360504045 ⊱⏣*

*✥━─━⌬〘👑〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
