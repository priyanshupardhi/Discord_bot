const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Discord & Chill")
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
            // List all channels
        guild.channels.cache.forEach((channel) => {
                console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
            })
            // General channel Id : 800615889078714411
    })
    let generalChannel = client.channels.cache.get("800615889078714411")
    generalChannel.send("Hello World!")


})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }

    // You can copy/paste the actual unicode emoji in the code (not _every_ unicode emoji works)
    receivedMessage.react("👍")
})
client.login("ODAwNjE2MTg2NzU2NDY0NzAx.YAUt7Q.F8OlX1S1kZg0JFAm28fCVHDaQf8")
