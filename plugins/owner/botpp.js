const handler = async (m, { conn }) => {
    const q = m.quoted || m;
    const mime = q.mimetype || '';

    if (!/image/.test(mime)) {
        return m.reply('🖼️ ~ رد على صورة لتغيير صورة البوت');
    }

    try {
        const media = await q.download();
        await conn.updateProfilePicture(conn.user.jid, media);
        m.reply('✅ ~ تم تغيير صورة بروفايل البوت');
    } catch (error) {
        console.error(error);
        m.reply(error.message);
    }
};

handler.usage = ["تغيير_صوره_البوت"];
handler.category = "owner";
handler.command = ["تغيير_صوره_البوت", "setbotpp", "botpp"];
handler.owner = true;

export default handler;