//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBFYmdjMWIwNC9zM2UxbnBsZ3lPQk40RXRObEwxYXlVOW9xMUpkK1kycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienozR2VCVDBxTys3YTFTakxIU1k3bDQ4NXArTHZ0RCswallYRXEydkpqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSjFST2VWWElYNlZ5cXd6Rll2VGNZeHlYRTNiRVBWOVU3UGp4N2pTYVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFc0o2c2ZNUGR2Q011SjZFVzROSTJhQ2hpUjBobFRsM0pRWmtaRVVZeGdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9DVHBhVnY2STIwb25TS1h2S2p0S0I5Z2VTSHcxQUV2UVM4MXJZZUtDVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFhVzRPdGRSNTdRU1RnWnlsYTY5TTRTUHI2Mm1aS0xXNHpOV0k4TTkyUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBUTEs5aCtwQVRCeXBvTEN1bzYwYXp6bys2Z0RWZ1JsMlZzV2Nnd0tGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWhKaFBmWTl2c05wY2VraXVOVmdZNmswTGpSdW9TWGd4ZStrRXRJTDRnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxqVWk0VDRxakM1MUp5NWJOeHJxNU5MYUF3cGlWK0lTeFgvbm0zeVBraGNZMmZxTUVWaDEzMlRQak9jdEZ5VmhJUWhNbzBDeWc1TWt2eHB3c1Q5YkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJHOWx0Z3hUQXNQdUt0UkFhaER2NkRPM0ZyWjNVSk8zSm1vcVZkd0lCVzJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2am5oRnJhVVN1aUdsLWxERG94ZWZnIiwicGhvbmVJZCI6ImVhNzE4NDA1LTE5MzktNDg3Yi04OTYzLTA2YWUwZDk4ZTViZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd2k1a3R3b3FIamlhZ2QxeGltY1UyNjU3S2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzRac25SVENNQUg1TnF1NVlwQytrNXBSM2JvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpIRTQxUzZDIiwibWUiOnsiaWQiOiIyNTQ3NDIxNzc0MTc6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkM3NEt3R0VLaXZpN2dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNEhYcHNIWi8wMlZERW9mZlF1YkdNTmZjQ2xwR3h0andhWStrTiswbVFqYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHA1Mk1idGlhcndsVXl6UDhZM3FidEJIWHo0dEU5bldVTDBDMEgyc3MrT2lMNWo1SllHMFZISHpEUUwyMUpuYXh4STdYOWZDZUtQbmJWY2owWm5ZQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVxUmtsRUgwcGRUL3NyTnVVU2FoVkJRVHlveC96SWcxOGk1OSsrWG82bnBqMFp5VGFwMUd6U1B0aFdNb1ZkTHRHU21yM3JlY2VGd0gwZFZsMVZndENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQyMTc3NDE3OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUIxNmJCMmY5TmxReEtIMzBMbXhqRFgzQXBhUnNiWThHbVBwRGZ0SmtJMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODIzOTU0NX0=
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
