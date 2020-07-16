module.exports.run = (client, message, args) => {
	message.channel.send('Pong. Local');
}

module.exports.help = {
	name: 'ping',
	aliases: ['p', 'uptime'],
	description: 'Ping!',
  category: 'misc',
	usage: '',
	cooldown: 10,
	isUserAdmin: false,
	permissions: false,
	args: false
};