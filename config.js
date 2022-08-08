const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['YUDSBOTz']
global.namaowner = ['YUDSOFC']
global.owner = ['6285693650294','6285600380823']
global.premium = ['6285693650294','6285600380823']
global.packname = 'YudsBotz-MD'
global.author = 'WhatsApp•Bot'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*NIH TOD*',
    admin: 'Cuma buat admin njer',
    botAdmin: 'Jadiin bot dulu anjeng',
    owner: 'Lu bukan owner gua tod',
    group: 'Itu Khusus Grup Bre...!',
    private: 'Cuma Bisa Chat Pribadi Bre...',
    bot: 'Khusus Nomor Bot',
    wait: 'SABAR ANJENG',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
