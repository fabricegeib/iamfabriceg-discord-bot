require("dotenv").config();
const { Client, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const roles = [
  { id: "722561307903262831", label: "Fortnite" },
  { id: "722565846383329282", label: "Grand Theft Auto V" },
  { id: "802663319634575362", label: "Rocket League" },
];

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`✅ Ready! Logged in as ${readyClient.user.tag}`);
  try {
    const channel = await client.channels.fetch("652684137957818378");
    if (!channel) {
      console.log("Channel not found or bot lacks permissions.");
      return;
    }

    const row = new ActionRowBuilder();
    roles.forEach((role) => {
      row.addComponents(new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary));
    });

    await channel.send({
      content: "Claim or remove a role",
      components: [row],
    });

    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    process.exit();
  }
});

client.login(process.env.DISCORD_TOKEN);
