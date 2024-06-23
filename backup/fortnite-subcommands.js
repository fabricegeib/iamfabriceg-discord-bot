const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fortniteSubcommands")
    .setDescription("Affiche les informations de Fortnite")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("save_the_world")
        .setDescription("Affiche les informations de Save the World")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(false))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("battle_royale")
        .setDescription("Affiche les informations de Battle Royale")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(false))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("lego")
        .setDescription("Affiche les informations de Lego")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(false))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("festival")
        .setDescription("Affiche les informations de Festival")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(false))
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    const query = interaction.options.getString("query") || "";

    let embed;

    if (subcommand === "save_the_world") {
      embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Save the World")
        .setDescription(query ? `Query: ${query}` : "Informations de Save the World")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (subcommand === "battle_royale") {
      embed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle("Battle Royale")
        .setDescription(query ? `Query: ${query}` : "Informations de Battle Royale")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (subcommand === "lego") {
      embed = new EmbedBuilder()
        .setColor(0x00ff00)
        .setTitle("Lego")
        .setDescription(query ? `Query: ${query}` : "Informations de Lego")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    } else if (subcommand === "festival") {
      embed = new EmbedBuilder()
        .setColor(0xffff00)
        .setTitle("Festival")
        .setDescription(query ? `Query: ${query}` : "Informations de Festival")
        .setTimestamp()
        .setFooter({ text: "Footer text here" });
    }

    await interaction.reply({ embeds: [embed] });
  },
};
