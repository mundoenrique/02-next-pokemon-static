import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export async function getPokemonInfo(nameOrId: string) {
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
}

/*
// width arrow function
export const getPokemonInfo = async( nameOrId: string ) => {

    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        return null;
    }



}
*/
