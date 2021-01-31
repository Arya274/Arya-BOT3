let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0813-5730-2007
│ • Gopay: 0813-5730-2007
│ • Smartfren: 0882-3543-5804
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/6281357302007
╰────

╭─「 Ini #caranya 」
│*Cara Donasi*:
│1.) Beli ke pulsa/ konter terdekat semisal Indomaret
│2.) Bilang ke konter terdekat..
│"Beli pulsa telkomsel"
│3.)Dan terus masukkan nomor kami 081357302007
│4.) Jika sudah kirim bukti ... Terimakasih
│*Kalau tidak juga gak papa* 👍
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
