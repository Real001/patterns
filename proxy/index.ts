interface IAuth {
  login(password?: string): void;
  logout(): void;
}

class Auth implements IAuth {
  login() {
    console.log('You are logged into your personal account');
  }

  logout() {
    console.log('You are logged out of your personal account');
  }
}

class Proxy implements IAuth {
  private auth: Auth;
  private isAuth = false;

  constructor() {
    this.auth = new Auth();
  }

  private authenticate(password) {
    return password === 1234;
  }

  login(password: number | string) {
    if (this.authenticate(password)) {
      this.auth.login();
      this.isAuth = true;
    } else {
      console.error('Access denied');
    }
  }

  logout() {
    if (this.isAuth) {
      this.auth.logout();
    }  else {
      console.error('You are not authorized')
    }
  }

}

const auth = new Proxy();

auth.login('password');
auth.logout();
auth.login(1234);
auth.logout();