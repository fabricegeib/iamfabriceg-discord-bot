module.exports = {
	name: 'user',
	description: 'author tag',
	execute(client, message, args) {
		message.channel.send(`Your tag is ${message.author.tag}`);
	},
};