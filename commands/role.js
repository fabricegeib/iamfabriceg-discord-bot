module.exports = {
  name: 'role',
  args: true,
  usage: '<user> <role>',
	description: 'Information about the arguments provided.',
	execute(message, args) {
		// if (args[0] === 'foo') {
		// 	return message.channel.send('bar');
		// }

		message.channel.send(`Role\nArguments: ${args}\nArguments length: ${args.length}`);
	},
};