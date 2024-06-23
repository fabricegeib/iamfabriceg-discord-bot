const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
	let user = message.guild.member(message.mentions.users.first());
	let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
	
	if (!user.roles.cache.has(muteRole.id)) return message.send.reply("user isn't mute")
	user.roles.remove(muteRole.id);
	message.channel.send(`<@${user.id}> n'est plus muté`);

	const embed = new MessageEmbed()
		.setAuthor(`${user.user.username} (${user.id})`)
		.setColor("#35f092")
		.setDescription(`**Action :** Unmute`)
		.setThumbnail(user.user.avatarURL())
		.setTimestamp()
		.setFooter(message.author.username, message.author.avatarURL());

	client.channels.cache.get('729669926645923971').send(embed);
};

module.exports.help = {
	name: 'unmute',
	aliases: ['unmute'],
	description: 'Unmute a user',
  category: 'moderation',
	usage: '<@username> <time>',
	cooldown: 10,
	isUserAdmin: true,
	permissions: true,
	args: true
};