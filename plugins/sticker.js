const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, args }) => {
  let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
  if (/image/.test((m.quoted ? m.quoted : m).mtype)) {
    let img = await conn.downloadM(q)
    if (!img) throw img
    let stiker = await sticker(img)
stiker = await nStiker(stiker, {
 author: '@arpunchs',
 name: 'Nfq BOT'
})
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } else if (args[0]) {
    let stiker = await sticker(false, args[0])
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['stiker']
handler.tags = ['sticker']
handler.command = /^stic?ker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

async function canvas(code, type = 'png', quality = 0.92) {
    let res = await fetch('https://nurutomo.herokuapp.com/api/canvas?' + queryURL({
        type,
        quality
    }), {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': code.length
        },
        body: code
    })
    let image = await res.buffer()
    return image
}

function queryURL(queries) {
    return Object.entries(queries).map(([key, value]) => key + (value ? '=' + encodeURIComponent(value) : '')).join('&')
}

let { fromBuffer } = require('file-type')
async function sticker(img, url) {
    url = url ? url : await uploadImage(img)
    let {
        mime
    } = url ? {mime:'image/jpeg'} : await fromBuffer(img)
    let sc = `let im = await loadImg('data:${mime};base64,'+(await window.loadToDataURI('${url}')))
c.width = c.height = 512
let max = Math.max(im.width, im.height)
let w = 512 * im.width / max
let h = 512 * im.height / max
ctx.drawImage(im, 256 - w / 2, 256 - h / 2, w, h)
`
    return await canvas(sc, 'webp')
}

function uploadImage(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                ext
            } = await fromBuffer(buffer)
            let form = new FormData()
            form.append('file', buffer, 'tmp.' + ext)
            let res = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            let img = await res.json()
            if (img.error) reject(img.error)
            else resolve('https://telegra.ph' + img[0].src)
        } catch (e) {
            reject(e)
        }
    })
}
let { spawnSync } = require('child_process')
let fs = require('fs')
async function nStiker(input, options) {
    const exifPath = 'data.exif'
    const resultPath = 'sticker.webp'
    fs.writeFileSync(resultPath, input)
    // Custom?
    const stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2" //not sure what this does
    const packname = options.name || "st4rz BOT";
    const author = options.author || "@bintang_nur_pradana";
    const googlelink = "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp";
    const applelink = "https://itunes.apple.com/app/sticker-maker-studio/id1443326857";

    const json = { "sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    fs.writeFileSync(exifPath, exif)
    spawnSync('webpmux', [
        '-set', 'exif', exifPath,
        '-o', resultPath, resultPath
    ])
    return fs.readFileSync(resultPath)
}
