let handler = async m => m.reply(`
╭─〘 MΣᄂIӨDΛƧ 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙: Paypal.me... A te creas
│ Estoy bien, gracias :)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
