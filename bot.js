const Discord = require('discord.js');//Toxic Codes  n3k4a is one 
const client = new Discord.Client();//Toxic Codes  n3k4a is one   
const prefix = 'y'; // بادئة بوت
const LIMIT = 100; // اقصى عدد لمسح الرسائل
const COUNT = 100; // اقصى عدد لمسح الرسائل بدون تحديد قيمة


client.on('ready', () => {  
  console.log(`Logged in as ${client.user.username}`);//Toxic Codes  n3k4a is one 
  console.log(` Servers ${client.guilds.size}`);//Toxic Codes  n3k4a is one 
});


client.on('ready',async () => {
	client.channels.find(ch => ch.id === "633033354379264001" && ch.type === 'voice').join(); 

	
});


client.on('message', async message => {//Toxic Codes  n3k4a is one  
 
  let messageArray = message.content.split(/\s+/g);
    let args = messageArray.slice(1); //Toxic Codes  n3k4a is one 

    if(message.content.startsWith(`${prefix}d`)) {
    if(message.author.id !== client.user.id) return;
    let messagecount = parseInt(args[0], 10) ? parseInt(args[0], 10) : COUNT;
    message.channel.fetchMessages({limit: LIMIT})
    .then(messages => {
    let msg_array = messages.array();
    msg_array = msg_array.filter(m => m.author.id === client.user.id);
    msg_array.length = messagecount + 1;
    msg_array.map(m => m.delete().catch(console.error));
    });
    message.channel.send(`${messagecount} : عدد الرسائل التي تم مسحها`, {code: 'js'}).then(m => m.delete(30));
    };
}); //Toxic Codes  n3k4a is one 

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "468239180208668674") return;

  
  if (message.content.startsWith(prefix + 'w')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'l')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'n')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'a')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'p')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});

client.login("NDY4MjM5MTgwMjA4NjY4Njc0.XbLvrQ.VsXtY5qQKNtcpsscBodrEu8TpjI");
