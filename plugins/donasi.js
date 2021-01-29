let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0813-5730-2007
│ • Gopay: 0813-5730-2007
│ • Smartfren: 0882-3543-5804
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/6281357302007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
