const Discord = require("discord.js");
const { GatewayIntentBits, EnumResolvers } = require("discord.js");
const { readdirSync } = require("node:fs");
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions
    ]
});

const botToken = "token";

client.slashCommands = new Discord.Collection();

// Slash commands
for (const subFolder of readdirSync(`${__dirname}/slashCommands/`)) {
    for (const fileName of readdirSync(`${__dirname}/slashCommands/${subFolder}/`)) {
        let file = require(`${__dirname}/slashCommands/${subFolder}/${fileName}`);
       client.slashCommands.set(file.name, file);
    }
}

// Eventos
for (const fileName of readdirSync(`${__dirname}/eventos/`)) {
    let file = require(`${__dirname}/eventos/${fileName}`);
    let eventEmiter = file.emiter;

    client[eventEmiter](file.name, file.run.bind(null, client));
}

client.login(botToken);
