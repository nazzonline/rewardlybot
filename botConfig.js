module.exports = {
    perRefer : 0.01, // per refer amount
    currency : "TRX", // currecy name in caps
    botName : "RewardlyRBot", //bot username without @
    chats:[{chat_id:-1001601150793,username:"AdBeast_Official"}], // chat username - users must join before start bot - set as an object array [{},{},{}]
    dailyBonusTime: 4500, //daily bonus time in seconds ( 86400 === 1 day (24hrs))
    dailyBonus: {
        min:0.005,
        max:0.009
    }, //daily bonus amount
    minPayout: 0.001, //minimum payout
    verifyUrl: "https://api.crypto-twilight.com/verify" //change with your url
}