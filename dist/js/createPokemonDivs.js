function createPokemonLeft(name, sourceImg) {
  const nameH3 = document.querySelector('#colLeftH3');
  const imgPokemon = document.querySelector('#colLeftImg');
  nameH3.innerHTML = name;
  imgPokemon.src = sourceImg;
}

function createPokemonRight(name, sourceImg) {
  const nameH3 = document.querySelector('#colRightH3');
  const imgPokemon = document.querySelector('#colRightImg');
  nameH3.innerHTML = name;
  imgPokemon.src = sourceImg;
}