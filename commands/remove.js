module.exports = {
  name: 'remove',
  description: 'Remove a role',
  execute(client, message, args) {
    let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
      if (!message.member.roles.cache.has(role.id)) return message.channel.send("You don't have this role.");
      
      message.member.roles.remove(role)
        .then(m => message.channel.send(`Vous ne possédez plus le role ${role}.`))
        .catch(e => console.log(e));
    } else {
      message.channel.send("Le role n'existe pas.");
    }
  }
}