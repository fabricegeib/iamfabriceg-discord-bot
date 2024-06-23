const { SlashCommandBuilder } = require("discord.js");

const imageList = [
  "https://iamfabriceg.xyz/data/fortnite/save-the-world/images/heroes/constructor/T-Constructor-HID-Constructor-007-UC-T01-L.png",
  "https://iamfabriceg.xyz/data/fortnite/save-the-world/images/heroes/constructor/T-Constructor-HID-Constructor-008-R-T01-L.png",
  "https://example.com/image3.jpg",
  // Ajoutez autant d'images que nécessaire
];

module.exports = {
  data: new SlashCommandBuilder().setName("images1").setDescription("Affiche une liste d'images disponibles"),
  async execute(interaction) {
    const imageEmbeds = imageList.map((url, index) => ({
      color: 0x0099ff,
      title: `Image ${index + 1}`,
      image: {
        url: url,
      },
      description: `Voici l'image ${index + 1}`,
    }));

    for (const embed of imageEmbeds) {
      await interaction.reply({ embeds: [embed] });
    }
  },
};
