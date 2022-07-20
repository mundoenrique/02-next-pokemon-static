import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
  pokemons: number[];
}

export function FavoritePokemons({ pokemons }: Props): JSX.Element {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
}
