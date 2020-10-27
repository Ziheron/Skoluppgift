import React, { useState } from 'react';
import Axios from 'axios';

export const Landing = () => {
  const [data, setData] = useState('');
  const [search, setSearch] = useState('');

  const fetchDataFromExternalAPI = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => setData(response.data))
      .catch((error) => setSearch('Could not find your Pokemon'));
  };

  const displayPokemonData = () => {
    return (
      <div>
        <h1>name: {data.name}</h1>
        <h1>id: {data.id}</h1>
        <h1>height: {data.height}</h1>
        <h1>weight: {data.weight}</h1>
      </div>
    );
  };

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => fetchDataFromExternalAPI()}>Search</button>
      <h1>{search}</h1>
      {displayPokemonData()}
    </div>
  );
};
