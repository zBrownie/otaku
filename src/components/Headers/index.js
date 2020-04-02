import React, { useState, useEffect } from "react";

import "./styles.css";
import firebase from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetUser,
  handleGetToken,
  handleGetSeason,
  handleAddAnimes
} from "../../redux/actions";
import { getDataUser, signOut } from "../../services/firebase_auth";
import { Link } from "react-router-dom";
import { getAnimes, getAnimesSeason } from "../../services/firebase_store";

export default function Headers() {
  const user = useSelector(state => state.userdata);
  const dispatch = useDispatch();

  useEffect(() => {
    //VERIFICA USUARIO ESTA ONLINE OU NAO, E TROCA STATE DO REDUX PERSIST
    firebase.auth().onAuthStateChanged(state => {
      if (state != null) {
        getDataUser(state.uid).then(data => {
          dispatch(handleGetUser(data));
          dispatch(handleGetToken(data.id));
        });
      }

      dispatch(handleGetUser(null));
      dispatch(handleGetToken(null));
    });
    //PEGA OS ANIMES DO FIRESTORE E TROCA STATE NO REDUX PERSIST
    async function getData() {
      getAnimesSeason().then(docs => {
        dispatch(handleGetSeason(docs));
      });

      getAnimes().then(docs => {
        dispatch(handleAddAnimes(docs));
      });
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogout() {
    await signOut();
  }

  return (
    <div className="headercss">
      <div className="header-logo">
        <Link to="/">Otaku list</Link>
      </div>
      {user != null ? (
        <div className="header-menu">
          <Link to="/profile">{user.name}</Link>
          <Link to="/anime/register">Cadastrar</Link>
          <Link to="/list">Lista</Link>
          <Link to="/" onClick={handleLogout}>
            Sair
          </Link>
        </div>
      ) : (
        <div className="header-menu">
          <Link to="/list">Lista</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
