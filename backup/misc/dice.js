const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.jpg');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) => {
  const embed =  new MessageEmbed()
  .setColor("#f2f2f2")
  .setTitle("Random Dice")
  .attachFiles(diceImg)
  .setThumbnail('attachment://dice.jpg')
  .addFields(
    { name: 'Dice 1', value: randomDice(), inline: true },
    { name: 'Dice 2', value: randomDice(), inline: true },
    { name: 'Dice 3', value: randomDice(), inline: true }
  )
  .addFields(
    { name: 'Dice 4', value: randomDice(), inline: true },
    { name: 'Dice 5', value: randomDice(), inline: true },
    { name: 'Dice 6', value: randomDice(), inline: true }
  )
  message.channel.send(embed)
}

module.exports.help = {
  name: 'dice',
  aliases: ['d', 'dé', 'dés', 'dices'],
  description: 'Return values of dices',
  category: 'misc',
  usage: '',
  cooldown: 10,
	isUserAdmin: false,
  permissions: true,
	args: false
};