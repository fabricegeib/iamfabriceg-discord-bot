const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');

// use discord.js
const client = new Client();
client.commands = new Collection();

// folder commands with fs
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

// a boucle for all command files and load commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(client.commands);
}

// set an activity for the bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready!');

  client.user.setActivity('iamfabriceg.xyz');
});

// commnd exist => message execution
client.on('message', message => {
  // message start with the prefix (via config) and if message from bot no action
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  console.log(message.content);

  // remove command for only keep args (on an array) and remove blank
  const args = message.content.slice(prefix.length).split(/ +/);
  console.log(args)

  const commandName = args.shift().toLowerCase();
  console.log(commandName)

  // if the commands not exist
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
  
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

// token via config.json
client.login(token);