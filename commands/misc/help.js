const { MessageEmbed } = require("discord.js");
const { prefix } = require('../../config.json');
const { readdirSync } = require('fs');
const categoryList = readdirSync('./commands');


module.exports.run = (client, message, args) => {
  // console.log(client.commands.filter(cat => cat.help.category === 'misc'));

	if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("#36393F")
      .addField("List of commands", `List of all categories and commands\nMore informations : \`${prefix}help <commande_name>\``)

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if(!command) return message.reply("cette commande n'existe pas");

    const embed = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description} (cd : ${command.help.cooldown} sec)`)
      .addField("Utilisation", command.help.usage ? `${prefix}${command.help.name} ${command.help.usage}` : `${prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = {
	name: 'help',
	aliases: ['help'],
	description: 'List of commands or informations',
  category: 'misc',
	usage: '<commande_name>',
	cooldown: 3,
	isUserAdmin: false,
	permissions: false,
	args: false
};