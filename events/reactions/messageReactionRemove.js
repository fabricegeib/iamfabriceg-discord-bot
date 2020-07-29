const { MessageReaction } = require("discord.js");

module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '733454608998858762'); // channel roles
    // const channel = message.guild.channels.cache.find(c => c.id === '729669926645923971'); // channel logs
    const channelRules = message.guild.channels.cache.find(c => c.id === '567436905294200832');

    const fortniteRole = message.guild.roles.cache.get("722561307903262831");
    const gtavRole = message.guild.roles.cache.get("722565846383329282");
    const leagueoflegendsRole = message.guild.roles.cache.get("724002905832685649");
    const tftRole = message.guild.roles.cache.get("724003313296605276");
    const valorantRole = message.guild.roles.cache.get("724002842204962889");
    const membresRole = message.guild.roles.cache.get("567429745604689921");

    if (member.user.bot) return;

    if (["fortnite", "gtav", "leagueoflegends", "tft", "valorant"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "fortnite":
                member.roles.remove(fortniteRole);
                // message.channel.send(`Le rôle ${fortniteRole.name} a été supprimé !`);
                break;
            case "gtav":
                member.roles.remove(gtavRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été supprimé !`);
                break;
            case "leagueoflegends":
                member.roles.remove(leagueoflegendsRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été supprimé !`);
                break;
            case "tft":
                member.roles.remove(tftRole);
                // message.channel.send(`Le rôle ${tftRole.name} a été supprimé !`);
                break;
            case "valorant":
                member.roles.remove(valorantRole);
                // message.channel.send(`Le rôle ${gtavRole.name} a été ajouté !`);
                break;
        };
    };

    if (["✅"].includes(emoji) && message.channel.id === channelRules.id) {
        switch (emoji) {
            case "✅":
                member.roles.remove(membresRole);
                // message.channel.send(`Le rôle ${fortniteRole.name} a été ajouté !`);
                break;
        };
    };
}

