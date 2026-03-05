import { config } from '../config.js'

export default {
  name: "menu",
  description: "عرض قائمة الأوامر",
  execute: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, {
      text: `👑 مرحباً بك في ${config.botname}\n\nالأوامر المتاحة:\n.ping - اختبار البوت\n.menu - عرض هذا المنيو`
    })
  }
}
