const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
	let user = message.mentions.users.first();
	let reason = (args.splice(1).join(' ') || 'Default reason');
	// console.log(reason);

	user ? message.guild.member(user).ban(reason) : message.channel.send("User not exist");

	const embed = new MessageEmbed()
		.setAuthor(`${user.username} (${user.id})`)
		.setColor("#dc143c")
		.setDescription(`**Action :** Ban\n**Reason :** ${reason}`)
		.setThumbnail(user.avatarURL())
		.setTimestamp()
		.setFooter(message.author.username, message.author.avatarURL());

	client.channels.cache.get('729669926645923971').send(embed);
}

module.exports.help = {
	name: 'ban',
	aliases: ['ban'],
	description: 'Ban a user',
	usage: '<@username> <reason>',
	cooldown: 10,
	isUserAdmin: true,
	permissions: true,
	args: true
};