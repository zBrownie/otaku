import React, { useEffect } from "react";

import "./styles.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function List() {
  const allAnimes = useSelector((state) => state.animes);

  const history = useHistory();

  return (
    <div className="list-container">
      <div className="list-display">
        <ul>
          {allAnimes.map((anime) => (
            <li key={anime.id}>
              {anime.admin === 1 ? (
                <div className="admin-menu">
                  <button
                    style={{ background: "#77ab59" }}
                    onClick={() => {
                      history.push("/edit", { anime });
                    }}
                  >
                    Editar
                  </button>
                  <button style={{ background: "#d44d4d" }} onClick={() => {}}>
                    Deletar
                  </button>
                </div>
              ) : (
                <></>
              )}
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
