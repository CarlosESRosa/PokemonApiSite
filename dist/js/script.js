const firstInput = document.querySelector('#firstPokemon');
const secondInput = document.querySelector('#secondPokemon');
const button = document.querySelector('#runButton');
const colLeft = document.querySelector('#colLeft');
const colRight = document.querySelector('#colRight');

button.addEventListener('click', () => {
  console.log(firstInput.value);
  console.log(secondInput.value);
});

window.onload = async () => {
  const pokemonLeft = await fetchPokemon('vaporeon');
  const pokemonRight = await fetchPokemon('flareon');
  colLeft.innerHTML = pokemonLeft.name;
  colRight.innerHTML = pokemonRight.name;
}