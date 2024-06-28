const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fortnite")
    .setDescription("Game Modes Information")
    .setDescriptionLocalizations({
      fr: "Informations sur les modes de jeu",
    })
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
          { name: "Save the World", value: "save_the_world" }
        )
    ),

  async execute(interaction) {
    const mode = interaction.options.getString("mode");
    console.log(mode);

    let embed;

    if (mode === "save_the_world") {
      embed = new EmbedBuilder()
        // .setColor(0x0099ff)
        .setColor(0xb056e9)
        .setTitle("Save the World")
        .setDescription(
          "**Repoussez des hordes de monstres** et explorez un immense terrain destructible. Bâtissez des forts énormes, fabriquez des armes, dénichez du butin et montez en niveau.\n\n[En savoir plus](https://www.fortnite.com/@epic/save-the-world?lang=fr)"
        )
        .setImage("https://iamfabriceg.xyz/fortnite/save-the-world/images/fortnite-save-the-world-elements.png")
        .setThumbnail("https://cdn2.unrealengine.com/save-the-world-1488x1748-344662083.jpg")
        .addFields(
          {
            name: "Fabriquer",
            value: "Créez des structures défensives pour protéger vos bases.",
            inline: true,
          },
          {
            name: "Récolter",
            value: "Rassemblez des ressources pour créer des armes puissantes.",
            inline: true,
          },
          { name: "Améliorez", value: "Gagnez de l'expérience et améliorez vos compétences.", inline: true },
          {
            name: "Developer",
            value: "[Epic Games](https://www.epicgames.com/site/fr/home)",
            inline: true,
          },
          { name: "Trailer", value: "[Lien](https://www.youtube.com/watch?v=DoSLJzgDk14)", inline: true },
          { name: "Website", value: "[Lien](https://www.fortnite.com/save-the-world?lang=en-US)", inline: true },
          {
            name: "Release",
            value: "July 25, 2017",
            inline: true,
          }
        )
        .setTimestamp()
        .setFooter({ text: "PVE" });
    } else if (mode === "battle_royale") {
      embed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle("Battle Royale")
        .setDescription("Informations de Battle Royale - https://www.fortnite.com/@epic/battle-royale")
        .setTimestamp()
        .setFooter({ text: "Chapter 4, Season 2" });
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
