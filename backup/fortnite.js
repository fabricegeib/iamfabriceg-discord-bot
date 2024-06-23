const { SlashCommandBuilder } = require("@discordjs/builders");
const https = require("https");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fortnite")
    .setDescription("Affiche les résultats de votre API")
    .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(true)),
  async execute(interaction) {
    try {
      const query = encodeURIComponent(interaction.options.getString("query"));
      const apiUrl = `https://iamfabriceg.xyz/api/v1/fortnite/save-the-world/heroes`;

      https.get(apiUrl, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const heroes = JSON.parse(data);

            if (!Array.isArray(heroes)) {
              interaction.reply(`Aucun résultat trouvé pour '${query}'.`);
              return;
            }

            const filteredHeroes = heroes.filter((hero) => hero.name.includes(query) || hero.id.includes(query));

            if (filteredHeroes.length === 0) {
              interaction.reply(`Aucun résultat trouvé pour '${query}'.`);
              return;
            }

            const formattedHeroes = filteredHeroes.map((hero) => `${hero.name} - ${hero.id}`).join("\n");
            interaction.reply(`Résultats pour '${query}':\n${formattedHeroes}`);
          } catch (error) {
            console.error("Erreur lors du traitement de la réponse de l'API:", error);
            interaction.reply("Une erreur s'est produite lors de la récupération des données.");
          }
        });
      });
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API:", error);
      interaction.reply("Une erreur s'est produite lors de la récupération des données.");
    }
  },
};
