export default class About {
  constructor($window) {
    this.profile = {
      name: `Bashar Ayyash`,
      tab: `About Me`,
      title: `Front-End Expert Rewriting the Web`,
      intro1: `I'm a vibrant Front-End developer with more than 10 years of Web development since my young ages, along with 10 years of commercial experience where I worked with International companies
          and United Nations Organizations providing responsive Web design, Front-End development and Cloud servers management.`,
      intro2: `I work with web agencies and departments of organizations dealing with web presence.`,
      works: {
        intro: `What I Offer`,
        types: [
          {
            title: `Responsive Web Design`,
            subtask1: `Wireframes`,
            subtask2: `Mockups`,
            subtask3: `Adobe Photoshop, Illustrator`
          },
          {
            title: `Front-end Development (HTML5, CSS3, Javascript, ES6)`
          },
          {
            title: `Full-Stack Development MEAN (MongoDB, ExpressJS, AngularJS, NodeJS)`
          },
          {
            title: `CMS (Joomla, WordPress, Jenkins)`
          }
        ]
      },
      acc: `I create applications that are accessible by a wide range of devices starting from Smartphones to Internet TVs via responsive design`,
      deliver: `I deliver apps after I make sure they are fully optimized for best performance and search engines presence, built using the latest technologies for better compatability as well as documented and scalable.`,
      experience: `I have strong experience in angularjs framework, providing rich apps, using this framework I manage to connect them with different server platforms (nodejs, apache, microsoft) and store apps data in SQL/non-SQL database.`,
      workflow: `My daily workflow includes the use of`,
      projects: `I enjoy writing and sharing my knowledge with others, in the form of blog tutorials/articles on my medium.com <a href="https://medium.com/@yabasha" target="_blank">profile</a> and open-source projects at <a href="https://github.com/yabasha" target="_blank">my repository</a> on github.com`,
      ask: `If you’d like to find out more about how I work and my process of working with clients, please don't hesitate to contact me on the social media contacts or my email, and give me a little information about the project you have in mind and I’ll send a Getting Started guide.`
    };
    this.skills = {
      tab: `Skills`,
      title: `Skills and Achievements`,
      allSkills: [`Main Technologies: JavaScript, HTML5, CSS3, AngularJS, browserify, NodeJS, gulp, git`, `Open Source Contributions: AngularJS, Angularify and various JS libraries`, `Community: Meet-up speaker, conference speaker, workshop giver, Frontend`, `Volunteer: Mosque participations, UNV crisis maps, contribute schools projects`, `Hobbies:Faith, family, friends, writing`]
    };
    this.contact = 'Contact';
    this.vertical = false;
    this.justified = true;
    this.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    this.alertMe = () => {
      setTimeout(function() {
        $window.alert(`You\'ve selected the alert tab!`);
      });
    };
  }
}

About.$inject = ['$window'];
