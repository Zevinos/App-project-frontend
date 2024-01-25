import React, { useState } from "react";
import myApi from "../../api/myApi";
import "./NewGamePage.css";
import { useNavigate } from "react-router-dom";

/**
 * Un form pour ajouter un jeu a ma bdd
 * Un form:
 * - des inputs
 * - un state par input
 * - gerer les changements qui ont lieu sur les inputs
 * Pouvoir submit le form
 * Faire une requete post pour creer le jeu
 *
 */

function NewGamePage() {
  const [name, setName] = useState("");
  const [released, setReleased] = useState("");
  const [background_image, setbackground_Image] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleReleased = (event) => setReleased(event.target.value);
  const handleBackground_Image = (event) =>
    setbackground_Image(event.target.value);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newGame = {
        name: name,
        released: released,
        background_image: background_image,
        description: description,
      };
      const response = await myApi.post(`/games`, newGame);
      console.log(response);
      navigate(`/games/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"> Game name :</label>
        <input type="text" id="name" value={name} onChange={handleName} />
      </div>
      <div>
        <label htmlFor="released"> Released date :</label>
        <input
          type="text"
          id="released"
          value={released}
          onChange={handleReleased}
        />
      </div>
      <div>
        <label htmlFor="description"> Game description:</label>
        <input
          type="text"
          id="description"
          value={description}
          cols="30"
          rows="10"
          onChange={handleDescription}
        />
      </div>
      <div>
        <label htmlFor="imageUrl"> Image URL :</label>
        <input
          type="text"
          id="imageUrl"
          value={background_image}
          onChange={handleBackground_Image}
        />
      </div>
      <button> Create new game</button>
    </form>
  );
}

export default NewGamePage;
