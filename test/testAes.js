const {Decrypt, Encrypt} = require('../server/utils/aes.js');


(function(){
    let a = Encrypt("gitlab_kbzero");
    console.log(a);
})();