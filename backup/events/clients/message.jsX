const { Collection } = require('discord.js');
const { prefix } = require('../../config');

module.exports = (client, message, member) => {
  // message start with the prefix (via config) and if message from bot no action
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // console.log(message.content);

  // remove command for only keep args (on an array) and remove blank
  const args = message.content.slice(prefix.length).split(/ +/);
  // console.log(args)

  const commandName = args.shift().toLowerCase();
  // console.log(commandName)
  // console.log(args.splice(1).join(' '));

  const user = message.mentions.users.first();

  // if the commands not exist
  // if (!client.commands.has(commandName)) return;
  // console.log(command)

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  // console.log(client.commands);

  if (!command) return;

  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply(`You don't have the permissions for the command \`${prefix}${command.help.name}\``);

  if (command.help.args && !args.length) {
		let noArgsReply = `You didn't provide any arguments, ${message.author}!`;

    if (command.help.usage) noArgsReply += `\nThe proper usage would be: \`${prefix}${command.help.name} ${command.help.usage}\``;
    
		return message.channel.send(noArgsReply);
  }

  if (command.help.isUserAdmin && !user) return message.reply('You need to mention a user');

  // verify if user is admin and have ban permission
  if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply(`You cannot use the command \`${prefix}${command.help.name}\` on this user`);
  
  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;
  // console.log(client.commands);
  // console.log(client.cooldowns);

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
}