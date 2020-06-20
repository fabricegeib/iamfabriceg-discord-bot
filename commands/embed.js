const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'embed',
	description: 'Return an embed',
	execute(client, message, args) {
    const embed =  new MessageEmbed()
      .setColor("#f2f2f2")
      .setTitle("Title of the embed")
      .setURL("https://iamfabriceg.xyz")
      .setDescription("Description of the embed")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("i'm a field", "i'm his value")
      .addFields(
        { name: 'i\'m the field 1', value: 'i\'m his value', inline: true },
        { name: 'i\'m the field 2', value: 'i\'m his value', inline: true }
      )
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter("I'm the footer")

      message.channel.send(embed)
	},
};