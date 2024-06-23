const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fortnite")
    .setDescription("Informations sur les modes de jeu")
    .addStringOption((option) =>
      option
        .setName("mode")
        .setDescription("Choisissez un mode de jeu")
        .setRequired(true)
        .addChoices(
          { name: "Battle Royale", value: "battle_royale" },
          { name: "Reload", value: "reload" },
          { name: "Festival", value: "festival" },
          { name: "Lego", value: "lego" },
          { name: "Rocket Racing", value: "rocket_racing" },
          { name: "Save the World", value: "save_the_world" },
        )
    ),

  async execute(interaction) {
		const mode = interaction.options.getString("mode");
		console.log(mode);

    let embed;

    if (mode === "save_the_world") {
      embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Save the World")
        .setDescription(
          "Repoussez des hordes de monstres et explorez un immense terrain destructible. Bâtissez des forts énormes, fabriquez des armes, dénichez du butin et montez en niveau. - https://www.fortnite.com/@epic/save-the-world?lang=fr"
        )
        .setTimestamp()
        .setFooter({ text: "Footer text here, pve" });
    } else if (mode === "battle_royale") {
      embed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle("Battle Royale")
        .setDescription("Informations de Battle Royale - https://www.fortnite.com/@epic/battle-royale")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (mode === "reload") {
      embed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle("Reload")
        .setDescription("Informations de Reload - https://www.fortnite.com/@epic/reload?lang=fr")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (mode === "lego") {
      embed = new EmbedBuilder()
        .setColor(0x00ff00)
        .setTitle("Lego")
        .setDescription("Informations de Lego - https://www.fortnite.com/@epic/lego-fortnite?lang=fr")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (mode === "festival") {
      embed = new EmbedBuilder()
        .setColor(0xffff00)
        .setTitle("Festival")
        .setDescription("Informations de Festival - https://www.fortnite.com/@epic/festival-main-stage?lang=fr")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (mode === "rocket_racing") {
      embed = new EmbedBuilder()
        .setColor(0xff5500)
        .setTitle("Rocket Racing")
        .setDescription("Informations de Rocket Racing - https://www.fortnite.com/@epic/rocket-racing?lang=fr")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    }

    await interaction.reply({ embeds: [embed] });
  },
};
