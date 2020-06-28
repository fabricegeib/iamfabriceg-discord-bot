module.exports.run = (client, message, args) => {
	message.channel.send('Pong. Local');
}

module.exports.help = {
	name: 'ping',
	description: 'Ping!',
	args: false,
	cooldown: 10
};