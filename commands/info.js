import { config } from '../config.js'
export default {
  name: "info",
  description: "عرض معلومات البوت",
  execute: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `📌 اسم البوت: ${config.botname}\n👑 صاحب البوت: ${config.owner}` })
  }
}
