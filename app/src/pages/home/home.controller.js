
export default class HomeController {
  constructor(RandomName, EncryptDecrypt){
    this.project = 'AngularJS Project Built With Browserify Using ES6 Technology.';
    this.author = 'Bashar Ayyash';
    this.mynamecode = EncryptDecrypt.encrypt(this.author);
    this.name = 'World';
    this.random = RandomName;
    this.encryptdecrypt = EncryptDecrypt;
    this.tech = ['AngularJS', 'ECMAScript6', 'Gulp', 'Browserify'];
    this.block = false;
  }

  getTech(){
    const totalTechs = this.tech.length;
    const random = Math.floor(Math.random() * totalTechs);
    this.name = this.tech[random];

    return this.name;
  }

  randomName(){
    this.name = this.random.getName();
  }

  encrypt(){
    this.mynamecode = this.encryptdecrypt.encrypt(this.author);
    this.block = false;
  }

  decrypt(){
    this.mynamecode = this.encryptdecrypt.decrypt(this.mynamecode);
    this.block = true;
  }
}

HomeController.$inject = ['RandomName', 'EncryptDecrypt'];
