const { MessageEmbed, User } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter("Un utilisateur a quitté")
    .setTimestamp();

  client.channels.cache.get('729669926645923971').send(embed); // logs
}