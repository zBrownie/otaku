import React, { useState, useEffect } from "react";

import "./styles.css";
import logoImg from "../../../assets/app_icon.png";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { signInEmailPassword } from "../../../services/firebase_auth";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const user = useSelector(state => state.userdata);
  const history = useHistory();
  
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  async function handleLogin(event) {
    event.preventDefault();

    await signInEmailPassword(email, password);
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setemail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={event => setpassword(event.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#F7882F" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      {/* <img src={heroesImg} alt="Heroes Logo" /> */}
    </div>
  );
}
