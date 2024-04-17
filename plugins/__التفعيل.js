
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard":`BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
    let name2 = conn.getName(m.sender)
      if (user.registered === true) throw `🙌مرحباً ، أنت مسجل بالفعل\n\n✳️تريد العودة إلى التسجيل?\n\استخدم الأمر لإزالة السجل \n*${usedPrefix}.unregister pass*\nإذا كنت لا تتذكر الرقم التسلسلي الخاص بك ، فاستخدم\n${usedPrefix}رمزك`
        if (!Reg.test(text)) throw `${user}✳️ استخدم الامر: *${usedPrefix + command} الاسم.العمر*\n📌مثال : *${usedPrefix + command}* ${name2}.16`
          let [_, name, splitter, age] = text.match(Reg)
            if (!name) throw '✳️ لا يمكن ان يكون الاسم رزيلة'
              if (!age) throw '✳️ لا يمكن ان يكون العمر هذه الرزيلة'
                if (name.length >= 30) throw '✳️ اوووف , الاسم كبير اوي صغر الاسم' 
                  age = parseInt(age)
                    if (age > 100) throw '👴🏻 جد هععععع'
                      if (age < 5) throw '🚼 بيبي تشان هعععععع ✍️😳 '
                        user.name = name.trim()
                          user.age = age
                            user.regTime = + new Date
                              user.registered = true
                              global.db.data.users[m.sender].exp += 100
                              global.db.data.users[m.sender].limit += 4
                              global.db.data.users[m.sender].money += 400
                                let sn = createHash('md5').update(m.sender).digest('hex')
                                 await conn.reply(m.chat, `┌───⊷ *أكملت تسجيل*
                                 ┆ *الاسم:*
                                 ┆ ${name}
                                 ┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
                                 ┆ *العمر:*
                                 ┆ ${age} سنة
                                 ┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
                                 ┆ *المحفظه* 
                                 ┆ *$4 الماس* 💎
                                 ┆ *$400 سينتشي كوينز*
                                 ┆ *$100 نقاط خبرة*
                                 ┆ *$2 عملات*
                                 ╰──────────────────`, fkontak, m)
                                 await m.reply(`${sn}`) 
                                 }
                                 handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
                                 handler.tags = ['xp']

                                 handler.command = /^(التفعيل|تحقق|التحقق|reg(ister)?)$/i
                                 export default handler
                                 