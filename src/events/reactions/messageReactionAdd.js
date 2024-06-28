const { MessageReaction, MessageEmbed } = require("discord.js");

module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '733454608998858762'); // channel roles
    // const channel = message.guild.channels.cache.find(c => c.id === '729669926645923971'); // channel logs
    const channelRules = message.guild.channels.cache.find(c => c.id === '802868621609140225'); // channel rules

    const fortniteRole = message.guild.roles.cache.get("722561307903262831");
    const gtavRole = message.guild.roles.cache.get("722565846383329282");
    const leagueoflegendsRole = message.guild.roles.cache.get("724002905832685649");
    const rocketleagueRole = message.guild.roles.cache.get("802663319634575362");
    const tftRole = message.guild.roles.cache.get("724003313296605276");
    const valorantRole = message.guild.roles.cache.get("724002842204962889");
    const membresRole = message.guild.roles.cache.get("567429745604689921");

    if (member.user.bot) return;

    if (["fortnite", "gtav", "leagueoflegends", "rocketleague", "tft", "valorant"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "fortnite":
                member.roles.add(fortniteRole);
                // message.channel.send(`Le rôle ${fortniteRole.name} a été ajouté !`);
                break;
            case "gtav":
                member.roles.add(gtavRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été ajouté !`);
                break;
            case "leagueoflegends":
                member.roles.add(leagueoflegendsRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été ajouté !`);
                break;
            case "rocketleague":
                member.roles.add(rocketleagueRole);
                // message.channel.send(`Le rôle ${tftRole.name} a été ajouté !`);
                break;
            case "tft":
                member.roles.add(tftRole);
                // message.channel.send(`Le rôle ${tftRole.name} a été ajouté !`);
                break;
            case "valorant":
                member.roles.add(valorantRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été ajouté !`);
                break;
        };
    };

    if (["✅"].includes(emoji) && message.channel.id === channelRules.id) {
        switch (emoji) {
            case "✅":
                member.roles.add(membresRole);
                // message.channel.send(`Le rôle ${fortniteRole.name} a été ajouté !`);
                break;
        };

        const embedRules = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`)
            .setColor("#43b581")
            .setDescription(`**Action :** Accept rules`)
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

        client.channels.cache.get('729669926645923971').send(embedRules);
    };
}

