const { MessageEmbed, User } = require("discord.js");

module.exports = async (client, message, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    console.log(latestChannelCreated);
    const { executor } = latestChannelCreated;

    const embed = new MessageEmbed()
        .setAuthor("Création d'un nouveau salon")
        .setColor("#43b581")
        .setDescription(`**Action**: création de slon\n**Salon crée**: ${channel.name}`)
        .setTimeStamp()
        .setFooter(executor.username, executor.avatarURL());

    client.channels.cache.get('729669926645923971').send(embed) // logs
}