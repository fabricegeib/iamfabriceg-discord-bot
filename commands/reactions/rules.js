const { MessageEmbed } = require("discord.js");
// 567436905294200832 rules-old
// 802868621609140225 rules2021


module.exports.run = (client, message, args) => {
    // 567429745604689921 role membres
    const membresRole = message.guild.roles.cache.get("567429745604689921");

    const embed = new MessageEmbed()
        .setTitle("Règlement")
        .setDescription("Pour accèder a l'ensemble des salons et rôles, vous devez d'abord prendre connaissance et accepter le règlement ci-dessous")
        .setColor("#C5AE6A")
        // .addField(
        // "Règlement:",
        // `
        // ✅ - ${membresRole.toString()}
        // `
        // );
        .addField(
            "Règles :",
            `
            - Respectez vous les uns et les autres (pas d'homophobie, de racisme, etc.)
            - Aucun contenu NSFW
            - Pas de lien sans permission (demandez à un @modérateur ou @admin)
            - Pas de pub
            - Pas de spam
            `
        );

    // message.channel.send(embed).then(async msg => {
    //     await msg.react(fortniteEmoji);
    //     await msg.react(gtavEmoji);
    //     await msg.react(tftEmoji);
    // })

    client.channels.cache.get('802868621609140225').send(embed).then(async msg => { // channel rules
        await msg.react("✅");
    })

}

module.exports.help = {
    name: 'rules',
    aliases: ['rules'],
    description: 'Rules',
    category: 'reactions',
    usage: '',
    cooldown: 10,
    isUserAdmin: false,
    permissions: true,
    args: false
};