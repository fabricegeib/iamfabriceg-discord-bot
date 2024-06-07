  if (message.content === 'ping') {
    // send back "Pong." to the channel the message was sent in
    message.reply('Pong xxx!');
  }
  if (message.content === 'twitch') {
    message.reply('https://twitch.tv/iamfabriceg');
  }
  
  else if (message.content.startsWith(`${prefix}created`)) {
    message.channel.send(`${message.guild.createdAt}`);
  } 
  
  else if (message.content.startsWith(`${prefix}region`)) {
    message.channel.send(`${message.guild.region}`);
  } 
  
  else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nYour avatar: ${message.author.avatarURL}`);
  }