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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlYUVpIaUp5aUIxNXJNcVZCTmlRT2NLRUV2K3NkN2hWU3pYT1JIeW8zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0g0eUNDeng3UDN3aVRCc0RLMjh4YXR2TUdKK1cxWGlVSTlJbHF5UHRDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSGNuRUlNdmZ1NmlNRFF5VkU5Q09FcFl2ZS9PK1RyU3hrcnRzM0xwMDNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIYXhTYWNLdzZ1bjh4K0pmeUJBSFUvYmdQRXJ5M0VYZEdpN3JkZmVJNVNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPQzJjYXlwTHRZVVZJRGsrYk5hUFVka1JFUkh2NmwyZ01BQnpGWDl2azA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtqQktweWpPeDJzRmUvcDRvRFJPQ0FGeVhTNVNqcHZ1eXhLc05BUHFuZ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NXZ2NYbTVzZFlTT2dTMmdlamZISWtONVBWeno0RUQ4MFo4eVRSdWZIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNPaWV3MDI2ODRYK3lpNFZSZFRyU1JzNWtUdXRNc0l6YmRmSlZabWpUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOcGg1QUJVREU0djFNT21QaGMwYlhhZEEyQlM0eEp3cUdpODRPbWYwMnNYWW56WWRHNCtiVEZjeGZLSy9WcGZoVmJRUXFtb0RiVVNyaVlQY1FhTmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6Inc4bWEzaDR1ZDFpOS9ZMVJHeUJ1ZmtEMkdTbFYyYkJMTHV1aCtWdWk3OEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndEb3ZYNm9FUXppbjFqU214bUlNaHciLCJwaG9uZUlkIjoiNWFkNmU5ODYtYjM4ZC00OWQ4LWIwYjUtMmJjMzU0NjM2YzU3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVYTi9vdG9pMWpXNGpZSXV2S1F4MWF2bkxtZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbkRYcDVVV0cxVTc4QWdLdXVoS0lPdzVUejA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjNRSzlEOVAiLCJtZSI6eyJpZCI6IjIzNDcwNDQxNDYxNjg6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpGaU13REVJM1l5YmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibGFLQVlVbzVNQ1NRQmNjNlFqL3l5VXA5MW5YaFNYOTFOcmovVlpkQ2NuVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUJFcHRvMjR4MndhWitzMVR5S0ZFTFB4SWNJL2FFaHpNRVFPck9kelkrOHgwT0FDKzkreUhYOTA3V25VYjNUektOQVE3OUlEcjlhR0NzS2V4ZXBZRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InBzaUdmSmpZdmRBc3JmL2hFejlxT3JqSFVSSktMSUhldCtpbFRZWUVHcXgzRUthL21sem1mZ011M3E1a3V3TGxmT0RhQmNUbUdGcDRUTUV2RDdiL2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0NDE0NjE2ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpXaWdHRktPVEFra0FYSE9rSS84c2xLZmRaMTRVbC9kVGE0LzFXWFFuSjEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkyNjA1NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDRCIn0="
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
