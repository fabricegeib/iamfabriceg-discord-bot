const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

const imageList = [
  "https://iamfabriceg.xyz/data/fortnite/save-the-world/images/heroes/constructor/T-Constructor-HID-Constructor-007-UC-T01-L.png",
  "https://iamfabriceg.xyz/data/fortnite/save-the-world/images/heroes/constructor/T-Constructor-HID-Constructor-008-R-T01-L.png",
  "https://example.com/image3.jpg",
  // Ajoutez autant d'images que nécessaire
];

module.exports = {
  data: new SlashCommandBuilder().setName("images").setDescription("Affiche une liste d'images disponibles"),
  async execute(interaction) {
    let currentIndex = 0;

    const generateEmbed = (index) => {
      return new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`Image ${index + 1}`)
        .setDescription(`Voici l'image ${index + 1}`)
        .setImage(imageList[index]);
    };

    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("prev").setLabel("Previous").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("next").setLabel("Next").setStyle(ButtonStyle.Primary)
    );

    const message = await interaction.reply({
      embeds: [generateEmbed(currentIndex)],
      components: [buttons],
      fetchReply: true,
    });

    const collector = message.createMessageComponentCollector({
      componentType: "BUTTON",
      time: 60000,
    });

    collector.on("collect", async (buttonInteraction) => {
      if (buttonInteraction.user.id !== interaction.user.id) {
        await buttonInteraction.reply({ content: "You cannot interact with these buttons!", ephemeral: true });
        return;
      }

      if (buttonInteraction.customId === "prev") {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1;
      } else if (buttonInteraction.customId === "next") {
        currentIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0;
      }

      await buttonInteraction.update({
        embeds: [generateEmbed(currentIndex)],
        components: [buttons],
      });
    });

    collector.on("end", () => {
      message.edit({
        components: [],
      });
    });
  },
};
