const pokemonImage = document.querySelector('.pokemon_image');
const pokemonName = document.querySelector('.pokemom_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search')
const btnRetroceder = document.querySelector('.btn-prev');
const btnAvancar = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => { 
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status ===200){
        const data = await APIResponse.json();

         return data;}
}
 

const renderPokemon = async (pokemon) => {

    pokemonNumber.innerHTML = "";
    pokemonName.innerHTML="Buscando..."
const data = await fetchPokemon(pokemon);

if(data) {
    pokemonImage.style.display = 'block';
pokemonName.innerHTML = data.name;
pokemonNumber.innerHTML = data.id;
pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
searchPokemon = data.id;
} else {
    pokemonImage.style.display = 'none';
    pokemonNumber.innerHTML = "";
    pokemonName.innerHTML ="Inexistente.";
}
}


/* EventListener aguarda os parâmetros de ação a "ouvir/observar/aguardar ação do alvo" e a função, que engloba dentro de sim as ações a executar*/ 

form.addEventListener('submit', (event) => {

event.preventDefault();

renderPokemon(input.value.toLowerCase());
input.value= '';
}

);

btnRetroceder.addEventListener ('click',() =>{
    if(searchPokemon >1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
} 
);

btnAvancar.addEventListener ('click' , () =>{
   searchPokemon += 1;
   renderPokemon(searchPokemon);
}
);

renderPokemon(searchPokemon);