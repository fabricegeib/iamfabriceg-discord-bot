module.exports.run = (client, message, args) => {
	const user = message.mentions.users.first()
	const reason = args.splice(1).join(' ');

	user ? message.guild.member(user).kick(reason) : message.channel.send("User not exist");
}

module.exports.help = {
	name: 'kick',
	aliases: ['kick'],
	description: 'Kick a user',
	usage: '<username>',
	isUserAdmin: true,
	permissions: true,
	args: true,
	cooldown: 10
};