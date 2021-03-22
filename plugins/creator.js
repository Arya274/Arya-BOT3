let handler = function (m) {
  // this.sendContact(m.chat, '94754273991', 'සුපුනා', m)
  this.sendContact(m.chat, '94754273991', 'Admin DrawlNag', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
