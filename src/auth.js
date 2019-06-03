//Mock of authentification logic backend with jwt accessToken

import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

class Auth {
  constructor() {
    this.cookies = new Cookies();
  }

  login(email, password, cb) {
    const token = this.autentificate(email, password);
    this.cookies.set("accessToken", token, { path: "/" });
    cb();
  }

  logout(cb) {
    this.cookies.remove("accessToken");
    cb();
  }

  isAuthenticated() {
    const token = this.cookies.get("accessToken");
    if (!token) return false;

    try {
      return jwt.verify(token, "secret");
    } catch (err) {
      console.log("access token verification failed");
      return false;
    }
  }

  //autentificate with 5 minute token (after token expires you will be logged out)
  autentificate(email, password) {
    //allow all users except when password is = "42"
    if (password !== "42") {
      return jwt.sign(
        {
          user: email,
          signedIn: Date.now(),
          exp: Math.floor(Date.now() / 1000) + 5 * 60
        },
        "secret"
      );
    }
  }
}

export default new Auth();
