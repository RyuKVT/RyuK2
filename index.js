const Discord = require("discord.js")

const TOKEN = "OTYwMjc1NjIwMzAwOTk2NjE4.YkoEXA.wOcGeKgh86IBtblCLnkyB7xajdU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Wones!")
    }
})

client.login(TOKEN)