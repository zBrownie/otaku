import React, { useState, useEffect } from "react";

import "./styles.css";
import logoImg from "../../../assets/app_icon.png";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { createUser } from "../../../services/firebase_auth";
import { useSelector } from "react-redux";

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();
  const user = useSelector(state => state.userdata);

  async function handleRegister(event) {
    event.preventDefault();
    await createUser(email, password);
  }

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="register-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />
        <form onSubmit={handleRegister}>
          <h1>Faça seu cadastro</h1>
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
            Cadastrar
          </button>
          <Link to="/login" className="back-link">
            <FiArrowLeft size={16} color="#F7882F" />
            Voltar login
          </Link>
        </form>
      </section>

      {/* <img src={heroesImg} alt="Heroes Logo" /> */}
    </div>
  );
}
