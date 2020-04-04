import React, { useState, useEffect } from "react";

import "./styles.css";
import { getAnimesDaily } from "../../services/firebase_store";
import { AiFillFire, AiFillForward } from "react-icons/ai";
import {  useSelector } from "react-redux";
export default function Home() {
  const [daily, setdaily] = useState([]);

  const season = useSelector(state => state.season);

  useEffect(() => {
    getAnimesDaily().then(docs => {
      setdaily(docs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home-container">
      <div className="anime-display">
        <h1>
          <AiFillFire color="#F7882F" />
          Passando hoje
        </h1>

        <ul>
          {daily.map(anime => (
            <li key={anime.id}>
              <a
                href={
                  anime.link === "" || anime.link == null
                    ? anime.link2
                    : anime.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={anime.imgUrl} alt={anime.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="anime-display">
        <h1>
          <AiFillForward color="#F7C331" size={36} />
          Season
        </h1>
        <ul>
          {season.map(anime => (
            <li key={anime.id}>
              <a
                href={
                  anime.link === "" || anime.link == null
                    ? anime.link2
                    : anime.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={anime.imgUrl} alt={anime.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
