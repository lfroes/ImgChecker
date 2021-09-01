require('dotenv').config();
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });
const TOKEN = process.env.TOKEN;

console.log(TOKEN)

bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(TOKEN);