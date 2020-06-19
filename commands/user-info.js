module.exports = {
	name: 'user-info',
	description: 'tag of a user', 
	execute(message, args) {
		const userMention = message.mentions.users.first();
		message.channel.send(`His tag was : ${userMention.tag}`);
	},
};