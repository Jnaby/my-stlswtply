const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  });


 client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("518756105166520320");
let c = g.channels.get("577652899471949849");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});
 
 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '518756105166520320') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '572261532646375425').send('_Welcome To_ **drip**.');
},4000);
});
 
 
client.login(process.env.BOT_TOKEN);
