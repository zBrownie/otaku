import React, { useState, useEffect } from "react";

import "./styles.css";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { useSelector } from "react-redux";
import { addImagem } from "../../../services/firebase_store";

export default function Register() {
  const user = useSelector(state => state.userdata);
  const history = useHistory();

  const [title, settitle] = useState("");
  const [link, setlink] = useState("");
  const [link2, setlink2] = useState("");
  const [pos, setpos] = useState();
  const [streaming, setstreaming] = useState();
  const [dia, setdia] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const optionsDay = [
    { value: 1, label: "Segunda" },
    { value: 2, label: "Terça" },
    { value: 3, label: "Quarta" },
    { value: 4, label: "Quinta" },
    { value: 5, label: "Sexta" },
    { value: 6, label: "Sabado" },
    { value: 7, label: "Domingo" }
  ];

  const optionsStreaming = [
    { value: 1, label: "Passando" },
    { value: 0, label: "Hiato" }
  ];

  const handleDate = selectedOption => {
    setdia(selectedOption.label);
    setpos(selectedOption.value);
  };

  async function handleAddAnime(event) {
    event.preventDefault();

    let data = {
      title,
      link,
      link2,
      pos,
      streaming,
      dia,
      desc
    };

    await addImagem(file, data).then(doc => {
      history.push("/list");
    });
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro de animes</h1>
          <div className="preview-poster">
            <img
              src={
                file == null
                  ? "https://via.placeholder.com/200x300"
                  : URL.createObjectURL(file)
              }
              alt="Preview Logo"
            />
          </div>
        </section>
        <form onSubmit={handleAddAnime}>
          <input
            type="file"
            id="inputfile"
            name="inputfile"
            placeholder="Imagem"
            onChange={event => setfile(event.target.files[0])}
            className="inputfile"
          />
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={event => settitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Link oficial"
            value={link}
            onChange={event => setlink(event.target.value)}
          />
          <input
            type="text"
            placeholder="Link pirata"
            value={link2}
            onChange={event => setlink2(event.target.value)}
          />

          <div className="input-group">
            <Select
              options={optionsDay}
              className="select"
              value={pos}
              onChange={handleDate}
            />

            <Select
              options={optionsStreaming}
              className="select"
              value={streaming}
              onChange={event => setstreaming(event.value)}
            />
          </div>
          <textarea
            value={desc}
            onChange={event => setdesc(event.target.value)}
          ></textarea>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
