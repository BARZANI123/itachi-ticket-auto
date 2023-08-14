const {Client} = require("discord.js-selfbot-v13")
const client = new Client({
checkUpdate: false,
})


client.on("ready", async () => {
console.log(`${client.user.username} is Ready!`)
})

const orderrr = "1132415111991144583"

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === orderrr) {

await new Promise(r => setTimeout(r, 2000))

channel.send(`
لەگەڵ منی (ITACHI) بڕۆ پێشەوە، چۆن یارمەتیت بدەم؟ داواکاریت ڕوون بکەوە بە تەواوی
<a:8832F2052E264ADB9850D3321803C819:1132438741944905798> <a:C_6T5:1132440553699676220>
`)

}
});
///
client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "$Wait" || message.content === "$wait" ) {
    message.reply(`**ئەگەر لە ماوەی 30 خولەکدا وەڵام نەدرایەوە ئەوا بلیتەکە دادەخرێت بەهۆی فشاری بلیتەکانەوە، وە سوپاس بۆ تێگەیشتنتان**`)
  }
  })
client.login(`OTQyMDA0NjE4NDY3MTE1MDE4.GuQMAV.bypA5Rti8brw8rg-jvwS9dQNB1GmjKJ3b9pj34`)
