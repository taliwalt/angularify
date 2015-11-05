export default class NavbarCtrl {
  constructor($location) {

    //menu bar
    this.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'About',
        'link': '/about'
      }
    ];
    this.location = $location;
    this.isCollapsed = true;
    //Auth service
    this.getCurrentUser = function () {
      {
        name: 'Bashar'
      }
    };

  }

  logout() {
    //Auth.logout();
    $location.path('/');
  }

  isActive(route) {
    return route === this.location.path();
  }

  isAdmin() {
    return false;
  }

  isLoggedIn() {
    return false;
  }
}

NavbarCtrl.$inject = ['$location'];
