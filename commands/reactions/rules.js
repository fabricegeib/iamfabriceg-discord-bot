const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const membresRole = message.guild.roles.cache.get("567429745604689921");

    const embed = new MessageEmbed()
        .setTitle("Règlement")
        .setDescription("Pour accèder a l'ensemble des salons et rôles, vous devez d'abord prendre connaissance et accepter le règlement ci-dessous")
        .setColor("#FED200")
        // .addField(
            // "Règlement:",
            // `
            // ✅ - ${membresRole.toString()}
            // `
        // );
        .addField(
            "Règles :",
            `
            - Respectez vous les uns et les autres
            - Pas de lien sans permission
            - Pas de pub
            - Pas de spam
            `
        );

        // message.channel.send(embed).then(async msg => {
        //     await msg.react(fortniteEmoji);
        //     await msg.react(gtavEmoji);
        //     await msg.react(tftEmoji);
        // })

	    client.channels.cache.get('567436905294200832').send(embed).then(async msg => { // channel rules-and-info
            await msg.react("✅");
        })
567436905294200832
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