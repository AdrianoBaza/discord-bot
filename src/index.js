require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', (c) => {
  console.log(`✅${c.user.tag} is online!`)
})

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return

  if(interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed Title')
      .setDescription('This is an Embed description')
      .setColor('Random')
      .addFields(
        {
        name: 'Field title',
        value: 'Some Random Value',
        inline: true
        },
        {
        name: '2th Field title',
        value: 'Some Random Value',
        inline: true
        },
    )
   
    interaction.reply({embeds: [embed]})
  }  
})

client.on('messageCreate', (message) => {
  if(message.content === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed Title')
      .setDescription('This is an Embed description message')
      .setColor('Random')
      .addFields(
        {
        name: 'Field title',
        value: 'Some Random Value',
        inline: true
        },
        {
        name: '2th Field title',
        value: 'Some Random Value',
        inline: true
        },
    )

    message.channel.send({embeds: [embed]})
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
