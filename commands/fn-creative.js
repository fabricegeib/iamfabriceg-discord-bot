const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'fn-creative',
	description: 'Return an embed',
	execute(client, message, args) {
    const embed =  new MessageEmbed()
      .setColor("#FFFF00")
      .setTitle("QUOI DE NEUF DANS LE MODE CRÉATIF - 13.00")
      .setURL("https://www.epicgames.com/fortnite/fr/news/what-s-new-in-creative---v13-00")
      .setDescription("17.06.2020 - Quoi de neuf ?")
      .setThumbnail('https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fwhat-s-new-in-creative---v11-30%2F11CM_DevUpdate_NewsHeader-1920x1080-3f04eb2a3aed82b39ad607ab8f382c1f194f311d.jpg')
      // .addField("ÎLES", "\u200B")
      .addFields(
        { name: 'ÎLES', value: 'Correction du problème qui faisait que les îles utilisant les portails de matchmaking étaient sous l\'eau. \n Correction de l\'absence des paramètres Mon île.', inline: false },
        { name: '\u200B', value: 'x', inline: true },
        { name: '\u200B', value: 'x', inline: true }
      )
      .setImage("https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fwhat-s-new-in-creative---v11-30%2F11CM_DevUpdate_NewsHeader-1920x1080-3f04eb2a3aed82b39ad607ab8f382c1f194f311d.jpg")
      .setTimestamp()
      .setFooter("I'm the footer")

      message.channel.send(embed)
	},
};