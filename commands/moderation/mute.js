const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
	let user = message.guild.member(message.mentions.users.first());

}

module.exports.help = {
	name: 'mute',
	aliases: ['mute'],
	description: 'Mute a user',
	usage: '<@username> <time>',
	cooldown: 10,
	isUserAdmin: true,
	permissions: true,
	args: true
};