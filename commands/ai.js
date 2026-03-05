export default {
  name: "ai",
  description: "دردشة مع AI",
  execute: async (sock, msg) => {
    const text = msg.message.conversation.replace(".ai","")
    await sock.sendMessage(msg.key.remoteJid, { text: `🤖 AI says: ${text.split("").reverse().join("")}` })
  }
}
