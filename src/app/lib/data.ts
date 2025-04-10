// fetches pokemon data
import { Pokemon, PokemonGeneration, PokemonType } from "./types";
interface PokemonDisplayProps {
  pokemonName: string;
}

export async function getPokemonGeneration() {
  const region = Object.values(PokemonGeneration);
  return region;
}  


export async function gottaCatchThemAll() {
  const promises = [];
  for (let i = 1; i <= 9; i++) {
  // for (let i = 1; i <= 1018; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  try {
    const results = await Promise.all(promises);

    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites['front_default'],
      id: result.id,
    }));

    return pokemon; // Return the pokemon array from the async function
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return [];
  }
}


export async function fetchPokemon({ pokemonName }: PokemonDisplayProps) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      if (response.status === 404) {
        return alert("Pokemon not found.");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const pokemonData = await response.json();
    // const pokemonSprite = pokemonData.sprite
    return pokemonData
    // fetchPokemonSprites(pokemonSprite);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return alert('Error Fetching Pokemon Data');
  }
}

// fetches pokedex entry
// const fetchPokedexEntry = ( name: string ) => {
//   const url = `https://pokeapi.co/api/v2/pokedex/${name}`;
// };

