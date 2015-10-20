
export default class HomeController {
  constructor(RandomName){
    this.project = 'AngularJS Project Built With Browserify Using ES6 Technology.';
    this.mynamecode = '65c1c47a50f516dc8bbafdd0bbf86895';
    this.name = 'World';
    this.random = RandomName;
    this.tech = ['AngularJS', 'ECMAScript6', 'Gulp', 'Browserify'];
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
}

HomeController.$inject = ['RandomName'];
