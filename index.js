import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys'
import pino from 'pino'
import { config } from './config.js'
import fs from 'fs'

async function startBot() {

  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {

    const msg = messages[0]
    if (!msg.message) return

    const text = msg.message.conversation || ""

    // أمر ping
    if (text === config.prefix + "ping") {
      await sock.sendMessage(msg.key.remoteJid, { text: "Pong 🏓" })
    }

    // أمر menu
    if (text === config.prefix + "menu") {
      await sock.sendMessage(msg.key.remoteJid, { text: `👑 مرحباً بك في ${config.botname}\n\nالأوامر المتاحة:\n.ping - اختبار البوت\n.menu - عرض هذا المنيو` })
    }

  })

}

startBot()
