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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e09c20e70de180ee319.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pHTWhoalRBRG5jczc5Y1lQVUdrZ082MXdlYzZnczZFMHVPSkRBb3BrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3pQaDhOeTRnRENvODJ4bk9rNURrOVd2MWJjQnRWZ1JsWHhaLzc4a0hGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQlZ6cldIZUpKRmdleXF3Ykd6a2Mwb05ldXZpKzl0ZldCWWhQenVPbmtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZDROYWVnVEdLRk12aXEyelo1ZWl4L0NGZTNkTmdpU252UlRzV0U0a3lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOd3ppSHRWU0t4bWFaYmlIRlJCQ0VYSUMxT3BlOStwOTkwTkhCdVc3bW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOWnVpVW5ZTElDMjBmbU1vVklMb3M5dmQzMjRTQ01wUWhpY2oraWJyaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJJRnpzei9TS1JYNm04YlUwcGhEeHJHbHEvZmNVZzZKelFoMGRYR3psQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamhDeFlWMVZGRUc5OTlRZSs4S2tPeE1TTENMUVNoL091aGZYTVI3NFYzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSZ29jUVNyaXhBV1dEZEhPQ2Y3YnN4UFB6NjhaQ0l3b0NxbDhKelM1MllFQjNlVWQ1K2RHaERvVGY3aDR6aWVkN29nOVR0anFKQVREeFRFYXRQM2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IllvT2xRZjRsSUJyTFI0b1Z4bFZnQVRPQmdLVkJnRnZWdXEwcUl4d2RQZzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iko2T2I2Y3cyVF9xN1lYcnRQWjNzTmciLCJwaG9uZUlkIjoiOTI0NmM3YzYtNWI0Yi00ODA3LTgxYWQtNjJiOTY0MzdlYjViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFTOXF5Y1E4UWFiZGllN2xEcjBGbWlJZEZKWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcmJlUVRXbFFVWndtNjBrbXFESXNuK0Z4UWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1JXRFIyTUciLCJtZSI6eyJpZCI6IjI1NTc4Mzc2NzcwMTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InRvcHVkbWgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xxRGc0c0ZFTDMvMzdNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdnSTl6SEk3WkwxaGwyRkIwZHBQU2tkTVY1RzlRVHduMWdDaUUvMkNkMk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNjN1BLUlE2cERMVFBncTV2TUJvM1dqN2tKeStzZHQ5MGMwS0pRdldMcWNEZjcwNFhxMHlIbC9sNEM5VFRMUE5jUzVqNHZEckxuNHcrZ0VHbVZPWERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMYW5LaHNqWHRsZlpXenZvWFM4R2xvRDUxUWszYjR4MjBoR3NjOFpiUGg4dXIyTHNVSVExY3l3ZzJrSUw2N0pkeXltRGh1aFF5MVJhM2FBWmZsZmdoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc4Mzc2NzcwMTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJvQ1BjeHlPMlM5WVpkaFFkSGFUMHBIVEZlUnZVRThKOVlBb2hQOWduZGoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkxNDAyOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFRiIn0="
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
