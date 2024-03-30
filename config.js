const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'death69ban@proton.me'
global.github = 'https://github.com/Arun696969/ALLEN-DARK'
global.location = 'india'
global.gurl = 'https://instagram.com/aryan_roy.in' // add your username
global.sudo = process.env.SUDO || '918318542882'
global.devs = '918318542882';
global.website = 'https://eren9.godaddysites.com' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/379521f005b82d9e89ca3.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-SHAN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKSHAN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'DARKSHAN' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'false' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'DARK-SHAN-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? MC,Mc,mc,BC,Bc,bc,BKL,Bkl,bkl,CHOD,Chod,chod,CHODO,Chodo,chodo,LUND,Lund,lund,CHUT,Chut,chut,CHOOT,Choot,choot,BHOSDA,Bhosda,bhosda,BHOSDI,Bhosdi,bhosdi,BHOXDI,Bhoxdi,bhoxdi,BHOSD3,Bhosd3,bhosd3,BSDK,Bsdk,bsdk,PUSSY,Pussy,pussy,DICK,Dick,dick,BUMR,Bumr,bumr,GAND,Gand,gand,TMKC,Tmkc,tmkc,LODA,Loda,loda,LODU,Lodu,lodu,XXX,Xxx,xxx,PORN,Porn,porn,SEX,Sex,sexMILF,Milf,milf,FUCK,Fuck,fuck,FUCKER,Fucker,fucker,GAND,Gand,gand,G4ND,RANDI,Randi,randi,RAMDI,Ramdi,ramdi,RANDWA,Randwa,randwa,BETICHOD,Betichod,betichod,MADARCHOD,Madarchod,madarchod,BHENCHOD,Bhenchod,bhenchod,BKL,Bkl,bkl,HIJDI,Hijdi,hijdi,BUMR,Bumr,bumr,BAKACHODA,Bakachoda,bakachoda,chat.whatsapp.com,https' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === un<uûdefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| '𝐀𝐥𝐥𝐞𝐧 𝐎𝐛𝐞𝐫𝐨𝐢𝐢',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	bh nifs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
