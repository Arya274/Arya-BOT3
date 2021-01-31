let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088235435804]
│ • Telkomsel [081357302007]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281357302007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
