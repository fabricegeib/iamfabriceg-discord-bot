module.exports = {
  handleRoleAssignment: async (interaction, roleId) => {
    const role = interaction.guild.roles.cache.get(roleId);

    if (!role) {
      return interaction.reply({ content: "Role not found", ephemeral: true });
    }

    const member = interaction.member;

    if (member.roles.cache.has(roleId)) {
      await member.roles.remove(roleId);
      await interaction.reply({ content: `Role ${role.name} removed!`, ephemeral: true });
    } else {
      await member.roles.add(roleId);
      await interaction.reply({ content: `Role ${role.name} added!`, ephemeral: true });
    }
  },
};
