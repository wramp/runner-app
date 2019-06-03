import React from "react";
import style from "./style.module.scss";

import Button from "../../components/button";
import LabeledInput from "../../components/labeled-input";

import auth from "../../auth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className={style.login}>
        <div className={style.container}>
          <div className={style.logo}>Runner</div>
          <div className={style["input-group"]}>
            <LabeledInput
              labelText="Email"
              placeholder="example@gmail.com"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
            <LabeledInput
              labelText="Password"
              notFirst={true}
              type="password"
              placeholder="*******"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <div className={style["bottom-group"]}>
            <div className={style.remember}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <a href="/" className={style.forgot}>
              Forgot Password?
            </a>
          </div>
          <div className={style.login}>
            <Button
              onClick={() => {
                auth.login(email, password, () => {
                  this.props.history.push("/posts");
                });
              }}
              disabled={!email || !password}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
