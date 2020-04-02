import React, { useEffect } from "react";

import './styles.css';
import { useSelector } from "react-redux";
export default function List() {
  const allAnimes = useSelector(state => state.animes);
  return (
    <div className="list-container">
      <div className="anime-display">
        <ul>
          {allAnimes.map(anime => (
            <li key={anime.id}>
              <img
                src={anime.imgUrl}
                alt={anime.title}
                style={
                  anime.streaming === 1
                    ? { border: "4px solid #77ab59" }
                    : { border: "4px solid #d44d4d" }
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
