const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const roles = [
  { id: "567429745604689921", label: "Membres" },
  { id: "724011614029742121", label: "Admin" },
  { id: "722637149966696498", label: "SKIDIP BOT" },
  { id: "567437991006568465", label: "Bots" },
  { id: "567437901412171779", label: "SKIDIP" },
];

const channels = [
  // global
  { id: "805197093471649802", label: "annonces" },
  { id: "567437000521547829", label: "accueil" },
  { id: "802868621609140225", label: "règlement" },
  { id: "733683121576345680", label: "général" },
  { id: "1024279315111759952", label: "forums" },
  { id: "733665944584585316", label: "bots" },
  { id: "733454608998858762", label: "rôles" },
  { id: "877160094930972712", label: "blockchain" },
  { id: "857731390115151922", label: "twitch-subscriber" },
  // admin
  { id: "724303747869704222", label: "admin" },
  { id: "802868622074314782", label: "moderator" },
  { id: "652684137957818378", label: "bot-test" },
  { id: "729669926645923971", label: "logs" },
  { id: "729669926645923971", label: "live-logs" },
  // jeux
  // skidip
  { id: "700337825647689818", label: "skidip" },
  { id: "733775356460269699", label: "SKIDIP" },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roles")
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
        .addFields({
          name: "Bâtissez des forts",
          value: "Créez des structures défensives pour protéger vos bases.",
          inline: true,
        })
        .setTimestamp()
        .setFooter({ text: "PVE" });
    } else if (mode === "battle_royale") {
      embed = new EmbedBuilder().setColor(0xff0000).setTitle("Battle Royale");
    }

    await interaction.reply({ embeds: [embed] });
  },
};
