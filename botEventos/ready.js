const Discord = require('discord.js');

module.exports = {
  name: "ready",
  emiter: "once",
  run: async (client) => {

    var slashCommands = client.slashCommands.map(x => x)
    await client.application.commands.set(slashCommands);
    console.log("¡Bot en línea!")

  }
};
