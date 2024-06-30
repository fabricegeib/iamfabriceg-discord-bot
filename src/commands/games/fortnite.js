const { SlashCommandBuilder } = require("discord.js");

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
        .addChoices([
          { name: "Battle Royale", value: "battle_royale" },
          { name: "Reload", value: "reload" },
          { name: "Festival", value: "festival" },
          { name: "Lego", value: "lego" },
          { name: "Rocket Racing", value: "rocket_racing" },
          { name: "Save the World", value: "save_the_world" },
        ])
    ),

  async execute(interaction) {
    const mode = interaction.options.getString("mode");
    console.log(mode);

    let embed;

    if (mode === "save_the_world") {
      embed = {
        color: 0xb056e9, // Utilisation du nombre entier pour la couleur
        title: "Save the World",
        description:
          "**Repoussez des hordes de monstres** et explorez un immense terrain destructible. Bâtissez des forts énormes, fabriquez des armes, dénichez du butin et montez en niveau.\n\n[En savoir plus](https://www.fortnite.com/@epic/save-the-world?lang=fr)",
        // image: { url: "https://iamfabriceg.xyz/fortnite/save-the-world/images/fortnite-save-the-world-elements.png" },
        image: { url: "https://cdn2.unrealengine.com/stw-1920-1920x1080-5a049ecca449.jpg" },
        // thumbnail: { url: "https://cdn2.unrealengine.com/save-the-world-1488x1748-344662083.jpg" },
        thumbnail: {
          url: "https://iamfabriceg.xyz/fortnite/save-the-world/images/fortnite-save-the-world-elements.png",
        },
        fields: [
          { name: "Fabriquer", value: "Créez des structures défensives pour protéger vos bases.", inline: true },
          { name: "Récolter", value: "Rassemblez des ressources pour créer des armes puissantes.", inline: true },
          { name: "Améliorez", value: "Gagnez de l'expérience et améliorez vos compétences.", inline: true },
          { name: "Developer", value: "[Epic Games](https://www.epicgames.com/site/fr/home)", inline: true },
          { name: "Trailer", value: "[Lien](https://www.youtube.com/watch?v=DoSLJzgDk14)", inline: true },
          { name: "Website", value: "[Lien](https://www.fortnite.com/save-the-world?lang=en-US)", inline: true },
          { name: "Release", value: "July 25, 2017", inline: true },
        ],
        timestamp: new Date(),
        footer: { text: "PVE" },
      };
    } else if (mode === "battle_royale") {
      embed = {
        color: 0xff0000, // Rouge vif
        title: "Battle Royale",
        description:
          "Plongez dans l'arène de Battle Royale et affrontez des joueurs du monde entier ! Collectez des ressources, construisez, et soyez le dernier survivant.",
        image: {
          url: "https://cdn2.unrealengine.com/fnbr-s30-bp-discoverplaylisttiles-br-1920x1080-1920x1080-d49b8777b170.jpg",
        },
        // thumbnail: { url: "URL_DU_MINIATURE" },
        fields: [
          { name: "Modes de jeu", value: "Solo, Duo, Squad", inline: true },
          { name: "Armes", value: "Arsenal complet avec de nouvelles armes ajoutées régulièrement", inline: true },
          { name: "Événements", value: "Participez à des événements spéciaux tout au long de l'année", inline: true },
          {
            name: "Jouer",
            value: "[Visitez le site de Battle Royale](https://www.fortnite.com/@epic/battle-royale)",
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: { text: "Saison actuelle: Chapter 4, Season 2" },
      };
    } else if (mode === "reload") {
      embed = {
        color: 0xff0000,
        title: "Reload",
        description:
          "Recharge est un mode Battle Royale à 40 joueurs au rythme soutenu, dans lequel vous devez porter votre équipe jusqu'à la victoire. Tant qu'un équipier est encore en vie, vous pouvez revenir dans la partie ! À votre retour, récupérez du butin pour repartir au combat ! Éliminez des adversaires pour rétablir vos équipiers plus rapidement ! En fin de partie, les rétablissements s'arrêtent. Votre section doit tout donner pour décrocher la Victoire royale !",
        image: {
          url: "https://cdn2.unrealengine.com/fr-fnbr-30-20-blastberry-discoverytile-1920x1080-1920x1080-211f10678dc5.jpg",
        },
        fields: [
          {
            name: "Images supplémentaires",
            value:
              "[Image 1](https://iamfabriceg.xyz/images/favicon.png)\n[Image 2](https://iamfabriceg.xyz/images/favicon.png)",
            inline: false,
          },
          {
            name: "Site Web",
            value: "[Visitez le site de Battle Royale](https://www.fortnite.com/@epic/reload?lang=fr)",
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: { text: "" },
      };
    } else if (mode === "lego") {
      embed = {
        color: 0x00ff00,
        title: "Lego",
        description:
          "Explorez de vastes mondes ouverts où les univers de Fortnite et LEGO® s'entremêlent pour un résultat haut en couleur ! Vivez une formidable expérience de survie et de construction LEGO dans Fortnite !",
        image: { url: "https://cdn2.unrealengine.com/fnjn-starwars-discovertile-1920-1920x1080-34a2b66a91c2.jpg" },
        fields: [
          { name: "Personnages Lego", value: "Personnages emblématiques de Fortnite sous forme de Lego", inline: true },
          { name: "Monde Ouvert", value: "Explorez des mondes ouverts et créez vos propres aventures", inline: true },
          { name: "Collectibles", value: "Collectionnez des objets Lego exclusifs en jeu", inline: true },
          {
            name: "Site Web",
            value: "[Lien vers le mode LEGO](https://www.fortnite.com/@epic/lego-fortnite?lang=fr)",
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: { text: "survival, co-op, open world, sandbox" },
      };
    } else if (mode === "festival") {
      embed = {
        color: 0xffff00,
        title: "Festival",
        description:
          "Jouez en groupe avec des amis ou en solo sur les chansons de vos artistes préférés dans Fortnite Festival ! Montez sur la scène principale en choisissant parmi une rotation de pistes musicales à la une. Faites une meilleure performance que vos amis ou montez un groupe et hissez-vous en haut du classement. Ce n'est que le début. De nouveaux concerts, pistes musicales, icônes de la musique et concerts arriveront prochainement. Faites votre entrée sur scène dans Fortnite Festival !",
        image: {
          url: "https://cdn2.unrealengine.com/fr-fnsp-04-discoverytile-mainstage-1920x1080-1920x1080-bb652f76b0e2.jpg",
        },
        fields: [
          { name: "Concerts Live", value: "Assistez à des concerts de vos artistes préférés en jeu", inline: true },
          { name: "Mini-jeux", value: "Jouez à une variété de mini-jeux festifs avec vos amis", inline: true },
          { name: "Butin Festif", value: "Débloquez des skins et des objets exclusifs de festival", inline: true },
          {
            name: "Images supplémentaires",
            value:
              "[Image 1](https://cdn-0001.qstv.on.epicgames.com/phKkVMFeiaJhLHyGHa/ef4957b6-b06d-4b61-a9be-aee4e1186533/03_FNSP_01_Still_1920x1080-lg.jpg)\n[Image 2](https://cdn-0001.qstv.on.epicgames.com/phKkVMFeiaJhLHyGHa/ef4957b6-b06d-4b61-a9be-aee4e1186533/08_FNSP_01_Still_1920x1080-lg.jpg)\n[Image 3](https://cdn-0001.qstv.on.epicgames.com/phKkVMFeiaJhLHyGHa/ef4957b6-b06d-4b61-a9be-aee4e1186533/09_FNSP_01_Still_1920x1080-lg.jpg)",
            inline: false,
          },
          {
            name: "Site Web",
            value: "[Lien vers le mode Festival](https://www.fortnite.com/@epic/festival-main-stage?lang=fr)",
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: { text: "Season 4 - Metallica (music, party game)" },
      };
    } else if (mode === "rocket_racing") {
      embed = {
        color: 0xff5500,
        title: "Rocket Racing",
        description:
          "Rocket Racing s'illumine avec la Virée Néon. Repoussez vos limites avec les nouvelles pistes à thème Virée Néon pour les modes Contre-la-montre et Racing classé. Jetez un œil aux rangées dédiées aux créations de la communauté pour défier vos amis sur de toutes nouvelles courses faites grâce à l'UEFN.",
        image: { url: "https://cdn2.unrealengine.com/rr-neon-rush-discovery-tile-1920-1920x1080-22288491868b.jpg" },
        fields: [
          {
            name: "Circuits",
            value: "Courses rapides sur des circuits variés à travers le monde de Fortnite",
            inline: true,
          },
          {
            name: "Véhicules",
            value: "Utilisez une variété de fusées personnalisables pour les courses",
            inline: true,
          },
          {
            name: "Classements",
            value: "Compétitionnez pour les meilleurs temps et les meilleures performances",
            inline: true,
          },
          {
            name: "Site Web",
            value: "[Lien vers le mode Rocket Racing](https://www.fortnite.com/@epic/rocket-racing?lang=fr)",
            inline: true,
          },
        ],
        timestamp: new Date(),
        footer: { text: "Virée Néon" },
      };
    }

    await interaction.reply({ embeds: [embed] });
  },
};
