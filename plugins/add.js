let handler = async (m, { conn, text }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') +>
  conn.groupAdd(m.chat, users)
m.reply('❌ Maaf sementara, fitur ini sedang dimatikan oleh developer ❌')
}
handler.help = ['add', '+'].map(v => v + ' nomor,nomor')
handler.tags = ['admin']
handler.command = /^(add|\+)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

