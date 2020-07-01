const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');
const { readdirSync } = require('fs');
var junk = require('junk');

// use discord.js
const client = new Client();
// client.comands, client.cooldowns
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

loadCommands();

// commnd exist => message execution
client.on('message', message => {
  // message start with the prefix (via config) and if message from bot no action
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // console.log(message.content);

  // remove command for only keep args (on an array) and remove blank
  const args = message.content.slice(prefix.length).split(/ +/);
  // console.log(args)

  const commandName = args.shift().toLowerCase();
  // console.log(commandName)

  // if the commands not exist
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);
  // console.log(command)

  if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.help.name} ${command.help.usage}\``;
		}

		return message.channel.send(reply);
  }
  
  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;
  // console.log(client.commands);
  console.log(client.cooldowns);

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if(timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`please wait ${timeLeft.toFixed(0)} seconds before reuse the command \`${prefix}${command.help.name}\``)
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);
  
  try {
    command.run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

// set an activity for the bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} and I am ready!!`);
  // console.log('I am ready!');

  client.user.setActivity('iamfabriceg.xyz');
});

// token via config.json
client.login(token);