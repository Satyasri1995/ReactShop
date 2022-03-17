class Auth {
  constructor(data) {
    this.isAuthenticated = data ? data.isAuthenticated : false;
    this.isAdmin = data ? data.isAdmin : false;
    this.username = data ? data.username : "";
  }
}
module.exports = Auth;
