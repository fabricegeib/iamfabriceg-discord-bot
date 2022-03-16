# iamBot (Discord Bot)

https://iamfabriceg.xyz

<!-- https://skidip.team -->

---

https://www.youtube.com/watch?v=fuEY1zYnOZE
23
https://www.youtube.com/watch?v=UdIzwu7d9LY&t=50s

---

pm2 start app.js --watch --name
pm2 start index.js --watch --name

---

- rules-and-info ajouter reactions pour accepter et devenir membre (acces salons bases)
- roles

1. Be respectful to other server members (no homophobia, racism, etc).
2. No NSFW content.
3. Only help in #bot-support
4. Don't ask for bots/provide bots.

commands :

```
!beep
!dice
!embed
!fn-creative
!kick (if no args)
!ping
!role
!say
!server
!twitch
!user
!user-info [arguments]
```

```
Commande chargée: beep
Commande chargée: dice
Commande chargée: embed
Commande chargée: fn-creative
Commande chargée: ping
Commande chargée: role
Commande chargée: server
Commande chargée: twitch
Commande chargée: user-info
Commande chargée: user
```

# Roles

Live

Twitch Subscriber: Tier 3
Twitch Subscriber: Tier 2
Twitch Subscriber: Tier 1
Twitch Subscriber

FireTipR (block the add with bot)
uTip

jeux :
among us
brawlhalla
fall guys
fifa
Fortnite
forza horizon 4
Grand Thef Auto V
League of Legends
prominence poker
rainbow six siege
Red Dead Redemption 2
rocket league
Teamfight Tactics
Valorant

Membres
friends
gaming friends

food
artistes
jeux
musique
film serie

clip

---

# Embed

{
"embeds":[
{
"title":"<<< {{ChannelName}} is live on Twitch!>>>",
"url":"<<<{{ChannelUrl}}>>>",
"description":"<<<{{Game}}>>>"
}
]
}

{
"embeds":[
{
"title":"<<< {{ChannelName}} now follow you Twitch!>>>"
}
]
}

{
"content": "{{ChannelName}} went live on Twitch",
"embeds": [{
"title": "{{ChannelUrl}}",
"url": "{{ChannelUrl}}",
"color": 6570404,
"footer": {
"text": "{{CreatedAt}}"
},
"image": {
"url": "{{StreamPreview}}"
},
"author": {
"name": "{{ChannelName}} is now streaming"
},
"fields": [
{
"name": "Playing",
"value": "{{Game}}",
"inline": true
},
{
"name": "Started at (streamer timezone)",
"value": "{{CreatedAt}}",
"inline": true
}
]
}]
}

---

.export FortniteGame/Content/Athena/Items/Cosmetics/LoadingScreens/LSID_053_SupplyLlama
.export FortniteGame/Content/Athena/Items/Weapons/WID_Harvest_Pickaxe_MechanicalEngineer1H

---

https://discordapp.com/developers/docs/intro

https://discordapp.com/developers/applications/

New Application => CREATE AN APPLICATION

Bot => Build-A-Bot => PUBLIC BOT (True)

https://discordapi.com/permissions.html

https://discord.js.org/

`yarn add discord.js`
