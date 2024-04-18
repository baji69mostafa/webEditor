import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_أرسلها لصديقتك♂️_\n انضم الى قناة المطور \nhttps://whatsapp.com/channel/0029VaU3KnKGehELDhZMcf3d', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_ارسلها لصديقك♀️_\n انضم الى قناة المطور \nhttps://whatsapp.com/channel/0029VaU3KnKGehELDhZMcf3d', m)
}
handler.help = ['ppcouple','tofanime']
handler.tags = ['anime']
handler.command = ['طقم2','تطقيم2'] 


export default handler
