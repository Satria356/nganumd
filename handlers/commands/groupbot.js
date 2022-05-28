let cap = `Join Group Bot untuk info ter-update

• *Telegram Channel* : https://t.me/info_mg
• *WhatsApp Group 1* : https://chat.whatsapp.com/G0QgvIganFuIZWG5GBkQBv
• *WhatsApp Group 2* : https://chat.whatsapp.com/G0QgvIganFuIZWG5GBkQBv
`
const buttonsDefault = [
    { urlButton: { displayText: ` Number Phone`, url: `+1 (831) 257-6749` } },
    { urlButton: { displayText: ` Instagram`, url: 'https://www.instagram.com/Fardev78' } },
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}