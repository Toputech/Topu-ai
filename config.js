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
global.devs = "2348035127701";
global.sudo = process.env.SUDO || "2348035127701";
global.owner = process.env.OWNER_NUMBER || "2348035127701";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
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
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERvcnVKeC9zZEx5cksyYy9VQithRzl2TWgzYS9xcE0zZXBqbWlpaEJsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3pKOHBWd3FkVXBvcmlmYVZYUENLdVBWdzBUcHF1M0k3RDdwZnQ1MzFRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTUxtOEh4RnNkU3RZWVRnblpZMnB5WllhNjU5Z1NuTWNrZzcrOEZDdzIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0eE9qK2p3dmNlME0yQ3g3M1BybE0yNjA2eXdLY2F2VUo1TnhxTVVEa3pBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDSkxma0tkKzVGdzFlMDVJVTcrakNtRTYvM3ExaDJsUlNHd2p0b05zR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZZYmh5QWphendBdWxhN3NtWkdqb3dSZEwyT2JnNWZYc2lVK0dOaTJoU3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkt1N3kzRndINmNqVFZKUTJEUm5tMHhNaExxc1RqeXhaU1l1OU1TaU9uWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmY4U3dJVWVvRW1Eb0FiZ21FUkFNTUhyRENKV2xiTmladTdQTTQrU2d5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZkS3RCNTR5QWlSTUF4S2g2M1ViY0h5ajlMSW12bVFFOTlKUHBLY0NHQi8vMEdDQmRheGVOeDBFNkJFYUUrdzEvQ1RUakEwNWlnOTRBcWlNMklzWERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiZVBBb0ZpLyszOTltQ1JVYjVncVRqNXVDUWVtT244ak9qNVlVbFduc0w3dz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVHktWEY0VGlRaG1SZWNwbTlXYjRWQSIsInBob25lSWQiOiIzM2UyN2Q3NC1lOGQ0LTQyOTctYWVjZi0wMTBhMTJlMDdjNjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFlOcEtyaUNOTkJSTkZibi9QQ3dZcDQ0MEo0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRaVDVrcGNqZzdrRlByZUJkK0dFSkpmSzQvZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTVFQ4TlNRRCIsIm1lIjp7ImlkIjoiMjM0ODAzNTEyNzcwMToxMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3E2NGVZRkVPaVpncmNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWExyRGRSNkUwaDY1WXBQZGVxU0RSQUxrMDI3Q2RUbVRxZWJkRUd6eWJqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidFc0enF4RnhtM1JSMCtycFY4enpWZy9yUjJ4YlhaM3JncnFYNDhldTZYZkJDM2JCM2FxbkV1UnZhWDRrMnZtVUIwTFNDUGhINURTMkQvdHNhWThCQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InNSVWtHMUZrbjlyYWM1MDAzaEJyTEhiV00rUHRUeHFMczY0c0VzN2dDNmxOdGFVbEtOR3laVytoWEJkTjZIam5KTXAyL21HZk9hVjR1SjYvUDhCVUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAzNTEyNzcwMToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWeTZ3M1VlaE5JZXVXS1QzWHFrZzBRQzVOTnV3blU1azZubTNSQnM4bTR3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTkyMTgyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "What's up MFs",
  author: process.env.PACK_AUTHER || "FLRSH",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "GOJO",
  ownername: process.env.OWNER_NAME || "GOJO",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
