const { MessageEmbed, User } = require("discord.js");

module.exports = (client, member) => {
  const embedLogs = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#35f092")
		.setDescription(`**Action :** Join`)
		.setThumbnail(member.user.displayAvatarURL())
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();

  const embedHome = new MessageEmbed()
    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
    .setColor("#43b581")
		.setDescription(`**Welcome :** ${member.user.username}\n\n**Please read the channel :** <#567436905294200832>\n\nAttribution des roles : <#652684137957818378>`) // #rules #bot-test
		.setThumbnail(member.user.displayAvatarURL())
    .setFooter("iamfabriceg.xyz")
    .setTimestamp();

  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)

  client.channels.cache.get('729669926645923971').send(embedLogs); // logs
  client.channels.cache.get('567437000521547829').send(embedHome); // home
}