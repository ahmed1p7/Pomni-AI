const example = async (m, { conn }) => {

return await conn.sendButtonNormal(m.chat, {
  media: { url: 'https://qu.ax/x/6GwxA.mp4' },
  mediaType: 'video', // or image
  caption: `hi, @${m.sender.split("@")[0]}`,
  buttons: [
    { name: 'cta_url', params: { display_text: 'Watch', url: 'https://example.com/watch' } }
  ], 
  mentions: [m.sender],
  newsletter: {
      name: '𝐕𝐈𝐈7 ~ 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🕷️',
      jid: '120363225356834044@newsletter'
    },
}, m)

};
example.usage = ["تست5"]
example.category = "example";
example.command = ["تست5"]
export default example;