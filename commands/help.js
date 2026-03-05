export default {
  name: "help",
  description: "عرض المساعدة",
  execute: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, { text: "📜 استخدم الأوامر التالية:\n.ping\n.menu\n.info\n.sticker\n.ai\n.help\n.time\n.photo\n.quote\n.music" })
  }
}
