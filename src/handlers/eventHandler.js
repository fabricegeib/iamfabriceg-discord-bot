require("dotenv").config();
const { Events, ActivityType } = require("discord.js");
const { setInterval } = require("node:timers");

let status = [
  // {
  //   name: "iamfabriceg.xyz",
  //   type: ActivityType.Competing,
  // },
  {
    name: "dev",
    type: ActivityType.Custom,
    state: "🚧 development in progress",
  },
  {
    name: "version",
    type: ActivityType.Custom,
    state: "🗒️ Version 0.1.4",
  },
  // {
  //   name: "iamfabriceg.xyz",
  //   type: ActivityType.Listening,
  // },
  // {
  //   name: "iamfabriceg.xyz",
  //   type: ActivityType.Playing,
  // },
  {
    name: "🧑‍💻 development in progress",
    type: ActivityType.Streaming,
    url: "https://twitch.tv/iamfabriceg",
  },
  // {
  //   name: "https://www.youtube.com/watch?v=kgt9rgemH9M&ab_channel=L3scro784",
  //   type: ActivityType.Watching,
  // },
];

module.exports = (client) => {
  client.once(Events.ClientReady, async (readyClient) => {
    // client.user.setActivity({
    //   name: "Custom",
    //   type: ActivityType.Custom,
    //   state: "Custom ✨",
    //   url: "https://www.youtube.com/watch?v=kgt9rgemH9M&ab_channel=L3scro784",
    // });

    // client.user.setPresence({
    //   status: "idle",
    // });

    setInterval(() => {
      let random = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[random]);
    }, 30000);

    console.log(status);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    console.log(interaction.commandName);
    console.log(command);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });
};
