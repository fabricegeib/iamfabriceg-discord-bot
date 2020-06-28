module.exports.run = (client, message, args) => {
	message.channel.send(args.join(" "));
}

module.exports.help = {
	name: 'say',
	description: 'repeat message',
	args: true,
	usage: '<message>'
};