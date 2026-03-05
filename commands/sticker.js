export default {
  name: "sticker",
  description: "تحويل صورة لملصق",
  execute: async (sock, msg) => {
    if (!msg.message.imageMessage) return sock.sendMessage(msg.key.remoteJid, { text: "❌ أرسل صورة أولاً" })
    const buffer = await sock.downloadMediaMessage(msg)
    await sock.sendMessage(msg.key.remoteJid, { sticker: { url: buffer } })
  }
}
