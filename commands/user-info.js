module.exports = {
	name: 'user-info',
	description: 'return tag of a user', 
	execute(client, message, args) {
		const userMention = message.mentions.users.first();
		message.channel.send(`His tag was : ${userMention.tag}`);
	},
};