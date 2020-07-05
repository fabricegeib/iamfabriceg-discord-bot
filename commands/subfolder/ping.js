module.exports.run = (client, message, args) => {
	message.channel.send('Pong. Local');
}

module.exports.help = {
	name: 'ping',
	aliases: ['p', 'uptime'],
	description: 'Ping!',
	args: false,
	usage: '',
	cooldown: 10
};