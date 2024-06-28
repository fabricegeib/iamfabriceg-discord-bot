// module.exports = async(client) => {
// 	client.user.setPresence({
//         game: {
//             name: "!skidip"
//         }
//     })
// };

// module.exports = client => {
//   console.log(`Logged in as ${client.user.tag} and I am ready!!`);
//   // console.log('I am ready!');

//   client.user.setActivity('iamfabriceg.xyz');
// }

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
