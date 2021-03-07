const os = require('os');

var user_info = {
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: os.EOL
};


/*function getUserInfo(user_info){
    user_info.platform = os.platform;
    user_info.osType = os.type;
    user_info.freeMemory = os.freemem;
    user_info.totalMemory = os.totalmem;
    user_info.EOL = os.EOL()
    return user_info;
}
*/
module.exports.user_info = user_info
