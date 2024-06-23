const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const fortniteRole = message.guild.roles.cache.get("722561307903262831");
    const gtavRole = message.guild.roles.cache.get("722565846383329282");
    const leagueoflegendsRole = message.guild.roles.cache.get("724002905832685649");
    const rocketleagueRole = message.guild.roles.cache.get("802663319634575362");
    const tftRole = message.guild.roles.cache.get("724003313296605276");
    const valorantRole = message.guild.roles.cache.get("724002842204962889");

    const fortniteEmoji = message.guild.emojis.cache.get("740240903221936149");
    const gtavEmoji = message.guild.emojis.cache.get("740243800714117160");
    const leagueoflegendsEmoji = message.guild.emojis.cache.get("737284342866247831");
    const rocketleagueEmoji = message.guild.emojis.cache.get("805572483780444210");
    const tftEmoji = message.guild.emojis.cache.get("740241692250079233");
    const valorantEmoji = message.guild.emojis.cache.get("737279429176197182");

    const embed = new MessageEmbed()
        .setTitle("Roles")
        .setDescription("Cliquez sur les réactions pour vous attribuer les rôles")
        .setColor("#C5AE6A")
        .addField(
            "Roles:",
            `
            ${fortniteEmoji} - ${fortniteRole.toString()}
            ${leagueoflegendsEmoji} - ${leagueoflegendsRole.toString()}
            ${rocketleagueEmoji} - ${rocketleagueRole.toString()}
            ${tftEmoji} - ${tftRole.toString()}
            ${valorantEmoji} - ${valorantRole.toString()}
            `
        );

    // ${gtavEmoji} - ${gtavRole.toString()}

    // message.channel.send(embed).then(async msg => {
    //     await msg.react(fortniteEmoji);
    //     await msg.react(gtavEmoji);
    //     await msg.react(tftEmoji);
    // })

    client.channels.cache.get('733454608998858762').send(embed).then(async msg => { // channel roles
        await msg.react(fortniteEmoji);
        await msg.react(leagueoflegendsEmoji);
        await msg.react(rocketleagueEmoji);
        await msg.react(tftEmoji);
        await msg.react(valorantEmoji);
    })

}

module.exports.help = {
    name: 'allroles',
    aliases: ['roles'],
    description: 'List of all roles',
    category: 'reactions',
    usage: '',
    cooldown: 10,
    isUserAdmin: false,
    permissions: true,
    args: false
};