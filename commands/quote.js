export default {
  name: "quote",
  description: "إرسال اقتباس عشوائي",
  execute: async (sock, msg) => {
    const quotes = ["✨ اصنع مستقبلك بنفسك","💪 لا تيأس أبداً","🌟 ثق بنفسك دائما"]
    const random = quotes[Math.floor(Math.random()*quotes.length)]
    await sock.sendMessage(msg.key.remoteJid, { text: random })
  }
}
