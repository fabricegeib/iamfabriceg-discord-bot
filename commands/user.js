module.exports = {
	name: 'user',
	description: 'author tag',
	execute(message, args) {
		message.channel.send(`Your tag is ${message.author.tag}`);
	},
};