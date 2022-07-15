import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Ctx, Pokemon, PokemonListResponse } from '../../interfaces';
import { Sprites } from '../../interfaces/pokemon-full';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonPage({ pokemon }: Props) {
  return (
    <Layout title="Algún pokemon">
      <Grid.Container css={{ marginTop: '5ox' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-iamge.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card.Header
            css={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}
            </Text>
            <Button color="gradient" ghost>
              Guardar en favoritos
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction="row" display="flex" gap={0}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export async function getStaticPaths() {
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