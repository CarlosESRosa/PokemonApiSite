const firstInput = document.querySelector('#firstPokemon');
const secondInput = document.querySelector('#secondPokemon');
const button = document.querySelector('#runButton');

button.addEventListener('click', async () => {
    const dataPokemonLeft = await fetchPokemon(firstInput.value.toLowerCase());
    const dataPokemonRight = await fetchPokemon(secondInput.value.toLowerCase());
    createPokemonLeft(dataPokemonLeft.name, dataPokemonLeft.sprites.front_default);
    createPokemonRight(dataPokemonRight.name, dataPokemonRight.sprites.front_default)
});

function getPokemonStats(pokemon) {
  const { stats } = pokemon;
  const [hp, attack, defense, specialAttack, specialDefense, speed] = stats;
  
  return stats.map((item) => {
    const { stat, base_stat} = item;
    console.log(stat.name, base_stat)
  });
}

window.onload = async () => {
  const pokemonLeft = await fetchPokemon('empoleon');
  const pokemonRight = await fetchPokemon('milotic');
  createPokemonLeft(pokemonLeft.name, pokemonLeft.sprites.front_default);
  createPokemonRight(pokemonRight.name, pokemonRight.sprites.front_default)
  
  // getPokemonStats(pokemonLeft) 
  // getPokemonStats(pokemonRight) 
}