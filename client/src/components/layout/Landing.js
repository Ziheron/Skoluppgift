import React, { useState } from 'react';
import Axios from 'axios';

export const Landing = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');

  const fetchDataFromExternalAPI = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const displayPokemonData = () => {
    if (data) {
      return (
        <div>
          <h1>name: {data.name}</h1>
          <h1>id: {data.id}</h1>
          <h1>height: {data.height}</h1>
          <h1>weight: {data.weight}</h1>
          <h1>type: {data.types[0].type.name}</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => fetchDataFromExternalAPI()}>Search</button>
      {displayPokemonData()}
    </div>
  );
};
