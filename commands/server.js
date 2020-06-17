module.exports = {
	name: 'server',
	description: 'Server',
	execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};