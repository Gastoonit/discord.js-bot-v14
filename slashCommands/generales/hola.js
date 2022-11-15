const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: "hola",
    description: "hola, descripción!",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

 interaction.reply({ content: "hola, soy un bot alegre!" })

 }
};
