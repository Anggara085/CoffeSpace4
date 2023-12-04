import React, { Fragment, useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Gabung() {
  const Gabung = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const history = useHistory();

    const Gabung = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users", {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
        });
        history.push("/");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      }
    };
  };

  return (
    <Fragment>
      <main
        className="login-body"
        style={{ backgroundImage: 'url("assets/img/BackgroundLogin.jpg")' }}
      >
        {/* Login Admin */}
        <form onSubmit={Gabung} className="box">
          <div className="login-form">
            {/* logo-login */}
            <div className="logo-login">
              <a href="index.html">
                <img src="assets/img/logo/loder.png" alt="" />
              </a>
            </div>
            <h2>Registrasi</h2>
            <div className="form-input text-left">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                placeholder="Masukan nama lengkap"
                value={name}
                onchange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Alamat Email</label>
              <input
                type="email"
                name="email"
                placeholder="Alamat Email"
                value={email}
                onchange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukan password"
                value={password}
                onchange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Konfirmasi Password</label>
              <input
                type="password"
                name="password"
                placeholder="Konfirmasi Password"
                value={confPassword}
                onchange={(e) => setConfPassword(e.target.value)}
              />
            </div>
            <div className="col-2 mx-auto back pt-30">
              <a href="/Login" className="btn btn3">
                Gabung
              </a>
            </div>
            {/* Forget Password */}
            <a href="/Login" className="registration text-left">
              Masuk
            </a>
          </div>
        </form>
        {/* /end login form */}
      </main>
    </Fragment>
  );
}

export default Gabung;
