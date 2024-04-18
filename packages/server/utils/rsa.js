let fs = require('fs');
const crypto = require('crypto');

class RSAKey{
    //私钥解密方法
    static  Decrypt(word) {
        try{
            console.log('come into fun decrypt.');
            let privateKey = fs.readFileSync(__dirname + `/../key/pkcs1_rsa_private_key.pem`).toString();
            let decodeData = crypto.privateDecrypt({ key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING }, Buffer.from(word, 'hex'));
            console.log('decodeData:  ', decodeData.toString('binary'));
            return decodeData.toString('binary');
        } catch (e) {
            console.error(`Decrypt error is ${e && e.message || ''}`);
            return;
        }
    }

    //公钥加密方法
    static  Encrypt(word) {
        let publicKey = fs.readFileSync(__dirname + `/../key/pkcs8_public_key.pem`).toString();
        let encodeData = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, Buffer.from(word, 'binary')).toString('hex');
        return `${encodeData}`;
    }
}

module.exports = RSAKey;

