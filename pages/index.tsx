import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListREsponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

export default function HomePage({ pokemons }: Props): JSX.Element {
  return (
    <Layout title="Listado de pokemons">
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>{`#${id} ${name}`}</li>
        ))}
      </ul>
    </Layout>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export async function getStaticProps(ctx: GetStaticProps) {
  const { data } = await pokeApi.get<PokemonListREsponse>('pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
}
