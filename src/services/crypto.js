const openpgp = require('openpgp');
const fs = require('fs');

function getSecret() {
    return "secret1234";
}

function getUserDataFolder() {
    return process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : process.env.HOME + '/.local/share');
}

exports.generateLocalKeyPair = function(callback) {
        
    const options = {
        userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
        numBits: 4096,                                            // RSA key size
        passphrase: getSecret()                                     // protects the private key
    };

    openpgp.generateKey(options).then(function(key) {
        let privkey = key.privateKeyArmored; 
        let pubkey = key.publicKeyArmored;   

        let dataFolder = getUserDataFolder();

        fs.mkdirSync(dataFolder + '/deskview/');

        fs.writeFileSync(dataFolder + '/deskview/local.pub.key', pubkey);
        fs.writeFileSync(dataFolder + '/deskview/local.priv.key', privkey);
    });
};