import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSelected } from "../features/pokemon/pokemonSlice";
import { TbBrandNpm, TbPokeball } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import "../StyleSheets/Pokemon.css";

export const CardPokemonName = ({ name, url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { id, name, stats, types, height, weight, sprites } = data;
        setData({ id, name, stats, types, height, weight, sprites });
      });
  }, []);

  const handleOnClick = () => {
    dispatch(pokemonSelected(Data));
    localStorage.setItem("Data", JSON.stringify(Data));
    navigate(`/${name}/pokemonData`);
  };

  const loading = (Data) => {
    return Data ? (
      <img
        src={Data ? Data.sprites.other.dream_world.front_default : ""}
        width="100px"
        height="100px"
      />
    ) : (
      <Loading />
    );
  };

  return (
    <div className="pokemon-item" onClick={handleOnClick}>
      <TbPokeball size="45px" className="pokeball" />
      <p>{name}</p>
      {loading(Data)}
    </div>
  );
};
