let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah limit yang akan diberi'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let limit = parseInt(txt)
  limit += pjk
  if (limit < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (limit > users[m.sender].Limit) throw 'Limit tidak mencukupi untuk mentransfer'
  users[m.sender].limit -= Limit
  users[who].limit += Limit

  m.reply(`(${-xp} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
  conn.fakeReply(m.chat, `+${xp} Limit`, who, m.text)
}
module.exports = handler
handler.help = ['limit <jumlah>']
handler.tags = ['owner']
handler.command = /^limit$/i
handler.owner = true

module.exports = handler
