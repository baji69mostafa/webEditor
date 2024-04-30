const colors = [
        0xff26c4dc, 0xff792138,
            0xff8b6990, 0xfff0b330,
                0xffae8774, 0xff5696ff,
                    0xffff7b6b, 0xff57c9ff,
                        0xff243640, 0xffb6b327,
                            0xffc69fcc, 0xff54c265,
                                0xff6e257e, 0xffc1a03f,
                                    0xff90a841, 0xff7acba5,
                                        0xff8294ca, 0xffa62c71,
                                            0xffff8a8c, 0xff7e90a3,
                                                0xff74676a
];

let handler = async (m, { conn, text }) => {
        if (!m.quoted && !text) {
                    throw '*_أدخل نصًا أو قم بالرد على أي ملف وسائط متعددة_*';
        }

            let messageContent = text;
                let messageOptions = {
                            textArgb: 0xffffffff,
                                    backgroundArgb: pickRandom(colors)
                };

                    if (m.quoted) {
                                if (m.quoted.mtype === 'conversation') {
                                                messageContent = m.quoted.text;
                                } else {
                                                throw '*_نوع الرسالة المقتبسة غير مدعوم_*';
                                }
                    }

                        if (messageContent) {
                                    await conn.sendMessage('status@broadcast', messageOptions, 'conversation', { text: messageContent });
                                            m.reply('*✅ تم تحميل الحالة بنجاح، جدولة رقم البوت في قائمة جهات الاتصال الخاصة بك واطلب من مالك البوت إضافتك إلى جهات الاتصال الخاصة به حتى تتمكن من رؤية الحالات*');
                        }
};

handler.help = ['ستوري'];
handler.tags = ['General'];
handler.command = /^ستوري$/i;
handler.register = true;

function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = handler;