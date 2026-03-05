export default {
  name: "time",
  description: "عرض الوقت الحالي",
  execute: async (sock, msg) => {
    const now = new Date().toLocaleString()
    await sock.sendMessage(msg.key.remoteJid, { text: `🕒 الوقت الحالي: ${now}` })
  }
}
