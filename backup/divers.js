const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents } = require("discord.js");
// const fs = require('fs');
const https = require("https");

// Remplacez par vos informations
const clientId = "YOUR_CLIENT_ID";
const guildId = "YOUR_GUILD_ID";
const token = "YOUR_BOT_TOKEN";

// Commande /fortnite avec sous-commandes
const commands = [
  new SlashCommandBuilder()
    .setName("fortnite")
    .setDescription("Affiche les informations de Fortnite")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("save_the_world")
        .setDescription("Affiche les informations de Save the World")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(true))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("battle_royale")
        .setDescription("Affiche les informations de Battle Royale")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(true))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("lego")
        .setDescription("Affiche les informations de Lego")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(true))
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("festival")
        .setDescription("Affiche les informations de Festival")
        .addStringOption((option) => option.setName("query").setDescription("Nom ou ID").setRequired(true))
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// Initialisation du client Discord
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === "fortnite") {
    const subcommand = options.getSubcommand();
    const query = options.getString("query");

    if (subcommand === "save_the_world") {
      // Logique pour Save the World
      const apiUrl = `https://iamfabriceg.xyz/api/v1/fortnite/save-the-world/heroes`;

      https.get(apiUrl, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const heroes = JSON.parse(data).heroes;
            const filteredHeroes = heroes.filter(
              (hero) => hero.name.toLowerCase().includes(query.toLowerCase()) || hero.id.toString() === query
            );

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
    } else if (subcommand === "battle_royale") {
      // Logique pour Battle Royale
      interaction.reply(`Battle Royale résultats pour '${query}'`);
    } else if (subcommand === "lego") {
      // Logique pour Lego
      interaction.reply(`Lego résultats pour '${query}'`);
    } else if (subcommand === "festival") {
      // Logique pour Festival
      interaction.reply(`Festival résultats pour '${query}'`);
    }
  }
});

client.login(token);
