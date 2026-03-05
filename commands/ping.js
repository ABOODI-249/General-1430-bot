export default {
  name: "ping",
  description: "اختبار البوت",
  execute: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, { text: "Pong 🏓" })
  }
}
