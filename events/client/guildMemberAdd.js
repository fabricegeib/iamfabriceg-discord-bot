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
    .setDescription(`**Bienvenue :** ${member.user.username}\n\n **Le règlement est à lire et à accepter :** <#567436905294200832>`) // #rules #bot-test
    // \n\nAttribution des roles : <#733454608998858762></#733454608998858762>
		.setThumbnail(member.user.displayAvatarURL())
    .setFooter("iamfabriceg.xyz")
    .setTimestamp();

  member.createDM().then(channel => {
    return channel.send(`Bienvenue sur le serveur ${member.displayName}\n\n**Le règlement est à lire et à accepter :** <#567436905294200832>\n\nUne fois le règlement accepté, tu pourras t'arribuer des rôles afin d'avoir accès aux différents salons : <#733454608998858762>`)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)

  client.channels.cache.get('729669926645923971').send(embedLogs); // logs
  client.channels.cache.get('567437000521547829').send(embedHome); // home
}