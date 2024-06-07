module.exports.run = (client, message, args) => {
	message.channel.send(args.join(" "));
}

module.exports.help = {
	name: 'say',
	aliases: ['say'],
	description: 'repeat message',
  category: 'misc',
	usage: '<message>',
	cooldown: 10,
	isUserAdmin: false,
	permissions: false,
	args: true
};