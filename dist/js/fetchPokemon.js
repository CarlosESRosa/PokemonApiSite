async function fetchPokemon(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  const response = await fetch(url);
  const data = response.json();
  return data;
};

