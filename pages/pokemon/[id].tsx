import { GetStaticPaths, GetStaticProps } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Ctx, Pokemon, PokemonListResponse } from '../../interfaces';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonPage({ pokemon }: Props) {
  return (
    <Layout title="Algún pokemon">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths(ctx: GetStaticPaths) {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Ctx) {
  const { id } = params;
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);
  return {
    props: { pokemon: data },
  };
}
/*
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);
  return {
    props: { pokemon: data },
  };
};
 */
