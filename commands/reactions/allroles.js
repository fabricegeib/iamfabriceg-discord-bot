const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const fortniteRole = message.guild.roles.cache.get("722561307903262831");
    const gtavRole = message.guild.roles.cache.get("722565846383329282");
    const leagueoflegendsRole = message.guild.roles.cache.get("724002905832685649");
    const tftRole = message.guild.roles.cache.get("724003313296605276");
    const valorantRole = message.guild.roles.cache.get("724002842204962889");

    const fortniteEmoji = message.guild.emojis.cache.get("733438106706903150");
    const gtavEmoji = message.guild.emojis.cache.get("724310414032240720");
    const leagueoflegendsEmoji = message.guild.emojis.cache.get("737284342866247831");
    const tftEmoji = message.guild.emojis.cache.get("724309889425342515");
    const valorantEmoji = message.guild.emojis.cache.get("737279429176197182");

    const embed = new MessageEmbed()
        .setTitle("Roles")
        .setDescription("Clic on reactions for take roles")
        .setColor("#FED200")
        .addField(
            "Roles:",
            `
            ${fortniteEmoji} - ${fortniteRole.toString()}
            ${leagueoflegendsEmoji} - ${leagueoflegendsRole.toString()}
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