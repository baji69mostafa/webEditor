import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
◉═══ • ❁ 👑 ❁ • ═══◉

| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒███████▒▒▒▒▒| |
| |▒▒▒▒▒▒███████████▒▒▒| |
| |▒▒▒▒███████████████▒| |
| |▒▒███████████████▒▒▒| |
| |▒██████████████▒▒▒▒▒| |
| |▒▒███████████████▒▒▒| |
| |▒▒▒▒███████████████▒| |
| |▒▒▒▒▒▒███████████▒▒▒| |
| |▒▒▒▒▒▒▒████████▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████▒▒██▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒| |
| |▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒| |
| |▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒| |
| |▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒| |
| |▒▒██▒▒▒▒▒▒▒▒▒▒▒▒██▒▒| |
| |▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒| |
| |▒▒▒▒▒██████████▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████▒▒██▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████▒▒██▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒| |
| |▒▒████████████████▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |
| |▒▒█████████▒▒▒▒▒██▒▒| |
| |▒▒██▒▒▒▒▒██▒▒▒▒▒██▒▒| |
| |▒▒██▒▒▒▒▒██▒▒▒▒▒██▒▒| |
| |▒▒██▒▒▒▒▒██▒▒▒▒▒██▒▒| |
| |▒▒██▒▒▒▒▒█████████▒▒| |
| |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒| |

◉═══ • ❁ 👑 ❁ • ═══◉`, m)
}
handler.command = handler.help = ['كودو','سينشي','شينشي','سينسي','سيننشي','شينتشي','سينتسي']
handler.tags = ['kaneki']
export default handler