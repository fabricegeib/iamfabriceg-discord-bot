module.exports.run = (client, message, args) => {
	message.channel.send('Pong. Local');
}

module.exports.help = {
	name: 'ping',
	aliases: ['serve'],
	description: 'Ping!',
	args: false,
	usage: '',
	cooldown: 10
};