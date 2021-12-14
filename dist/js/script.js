const firstInput = document.querySelector('#firstPokemon');
const secondInput = document.querySelector('#secondPokemon');
const button = document.querySelector('#runButton');
const tableStats = document.querySelector('#tableStats');
const [tableLeft, tableRight] = Array.from(tableStats.children);

button.addEventListener('click', async () => {
  buildScreen();
  const tableData = document.querySelector('#tableData');
  tableData.style.display = 'block';
});

// Monta o pokemon 
async function buildScreen() {
  const dataPokemonLeft = await fetchPokemon(firstInput.value.toLowerCase());
  const dataPokemonRight = await fetchPokemon(secondInput.value.toLowerCase());
  createPokemonLeft(dataPokemonLeft.name, dataPokemonLeft.sprites.front_default);
  createPokemonRight(dataPokemonRight.name, dataPokemonRight.sprites.front_default)
  settingTableLeft(getPokemonStats(dataPokemonLeft));
  settingTableRight(getPokemonStats(dataPokemonRight));
}

// Pega os status do pokemon
function getPokemonStats(pokemon) {
  const { stats } = pokemon;
  const [hp, attack, defense, specialAttack, specialDefense, speed] = stats;

  return stats.map((item) => {
    const { stat, base_stat } = item;
    return {
      stat: stat.name,
      base_stat,
    }
  });
}

// Monta tabela da esquerda
function settingTableLeft(pokemonLeft) {
  Array.from(tableLeft.children).forEach((element, index) => {
    element.innerText = `${pokemonLeft[index].stat}: ${pokemonLeft[index].base_stat} `;
  });
}
// Monta tabela da direita
function settingTableRight(pokemonRight) {
  Array.from(tableRight.children).forEach((element, index) => {
    element.innerText = `${pokemonRight[index].stat}: ${pokemonRight[index].base_stat} `;
  });
}

window.onload = async () => {
  const tableData = document.querySelector('#tableData');
  tableData.style.display = 'none';
}