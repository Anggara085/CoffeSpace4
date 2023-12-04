import React, { Fragment } from "react";
import Menu from "./Menu";

function Login() {
  return (
    <Fragment>
      <>
        <main
          className="login-body"
          style={{ backgroundImage: 'url("assets/img/BackgroundLogin.jpg")' }}
        >
          {/* Your login content goes here */}
          {/* Login Admin */}
          <form
            className="form-default"
            action="BackgroundLogin.jpg"
            method="POST"
          >
            <div className="login-form">
              {/* logo-login */}
              <div className="logo-login">
                <a href="index.html">
                  <img src="assets/img/logo/loder.png" alt="" />
                </a>
              </div>
              <h2>Login</h2>
              <div className="form-input text-left">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukan email yang terdaftar"
                />
              </div>
              <div className="form-input text-left">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Masukan Password"
                />
              </div>
              <div className="col-2 mx-auto pt-30">
                <a href="/Index2" className="btn btn3">
                  Masuk
                </a>
              </div>
              {/* Forget Password */}
              {/* <a href="#" class="forget">Forget Password</a> */}
              {/* Forget Password */}
              <a href="/Gabung" className="registration text-left">
                Registrasi
              </a>
            </div>
          </form>
          {/* /end login form */}
        </main>
      </>
    </Fragment>
  );
}

export default Login;
