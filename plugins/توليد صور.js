import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*هذا الأمر خاص بتوليد الصور باستعمال الذكاء الإصطناعي*\n\n*مثال*\n*${usedPrefix + command} girl and yellow cat\n*⚠️يجب عليك كتابة الصورة التي تريد إنشائها بلغة الإنجليزية⚠️*`;

  try {
    m.reply('*الرجاء الانتظار، جاري إنشاء الصور...*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['drawing'];
handler.command = ["توليدصور","توليدالصور","توليد-صور","توليد-الصور","وليدصور","وليدالصور","وليد-صور","وليد-الصور","توليدصورة","توليدالصورة","توليد-صورة","توليد-الصورة","وليدصورة","وليدالصورة","وليد-صورة","وليد-الصورة","توليدصوره","توليدالصوره","توليد-صوره","توليد-الصوره","وليدصوره","وليدالصوره","وليد-صوره","وليد-الصوره"];
export default handler;
