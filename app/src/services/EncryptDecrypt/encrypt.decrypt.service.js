import crypto from 'crypto';

export default class EncryptDecrypt {

  constructor(){
    this.algorithm = 'aes-256-ctr';
    this.password = 'd6F3Efeq';
  }

  encrypt(text){
    let cipher = crypto.createCipher(this.algorithm, this.password);
    let crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(text){
    let decipher = crypto.createDecipher(this.algorithm, this.password);
    let dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
  }
}
