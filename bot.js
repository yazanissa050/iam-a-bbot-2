const Discord = require('discord.js');//Toxic Codes  n3k4a is one 
const client = new Discord.Client();//Toxic Codes  n3k4a is one   
const prefix = 'y'; // بادئة بوت


client.on('ready', () => {  
  console.log(`Logged in as ${client.user.username}`);//Toxic Codes  n3k4a is one 
  console.log(` Servers ${client.guilds.size}`);//Toxic Codes  n3k4a is one 
});


client.on('ready',async () => {
	client.channels.find(ch => ch.id === "633033354379264001" && ch.type === 'voice').join(); 

	
});



client.login("NDY4MjM5MTgwMjA4NjY4Njc0.XbLvrQ.VsXtY5qQKNtcpsscBodrEu8TpjI");
