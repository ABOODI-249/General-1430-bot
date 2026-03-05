export default {
  name: "photo",
  description: "إرسال صورة عشوائية",
  execute: async (sock, msg) => {
    const urls = ["https://picsum.photos/300","https://picsum.photos/400","https://picsum.photos/500"]
    const random = urls[Math.floor(Math.random()*urls.length)]
    await sock.sendMessage(msg.key.remoteJid, { image: { url: random } })
  }
}
