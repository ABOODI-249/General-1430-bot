import fs from 'fs'
import path from 'path'

// تحميل جميع الأوامر من المجلد
const commandsPath = path.join('./commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
const commands = []

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`)
  commands.push(command.default)
}

// داخل sock.ev.on('messages.upsert')
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0]
  if (!msg.message) return

  const text = msg.message.conversation || ""

  for (const cmd of commands) {
    if (text === config.prefix + cmd.name) {
      await cmd.execute(sock, msg)
    }
  }
})
