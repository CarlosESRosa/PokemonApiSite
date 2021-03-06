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

  settingTable(getPokemonStats(dataPokemonLeft), getPokemonStats(dataPokemonRight));
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

function doCompare(pokemons, arrTableLeft, arrTableRight) {
  pokemons.forEach((pokemon, index) => {
    const [left, right] = pokemon;    
    const { firstElementChild: statsLeft } = arrTableLeft[index];
    const { firstElementChild: statsRight } = arrTableRight[index];

    const leftStronger = left > right;

    statsLeft.className = leftStronger ? 'fas fa-sort-up' : 'fas fa-sort-down';
    statsLeft.style.color = leftStronger ? 'green' : 'red';    

    statsRight.className = !leftStronger ? 'fas fa-sort-up' : 'fas fa-sort-down';
    statsRight.style.color = !leftStronger ? 'green' : 'red';       
  })
}

function settingTable(pokemonLeft, pokemonRight) {
  const arrTableLeft = Array.from(tableLeft.children);
  const arrTableRight = Array.from(tableRight.children)
  const arrayLeft = []
  const arrayRight = []

  arrTableLeft.forEach((element, index) => {
    arrayLeft.push(pokemonLeft[index].base_stat);
    element.innerText = `${pokemonLeft[index].stat}: ${pokemonLeft[index].base_stat} `;
    const contentAfter = document.createElement('span');
    element.appendChild(contentAfter)
  });
  arrTableRight.forEach((element, index) => {
    arrayRight.push(pokemonRight[index].base_stat)
    element.innerText = `${pokemonRight[index].stat}: ${pokemonRight[index].base_stat} `;
    const contentAfter = document.createElement('i');
    element.appendChild(contentAfter)
  });
  //Junta stats de ambos pokemons
  const bothPokemonStats = arrayLeft.map((element, index) => {
    return [element, arrayRight[index]]
  });

  doCompare(bothPokemonStats, arrTableLeft, arrTableRight)  
}

window.onload = async () => {
  const tableData = document.querySelector('#tableData');
  tableData.style.display = 'none';
}


/*
 
.pokemonStats p:nth-of-type(1)::after {
  content: '???';
  color: green;
  content: '???';
  color: red;
}
 
var color = window.getComputedStyle(
  document.querySelector('.element'), ':before'
).getPropertyValue('color')

*/