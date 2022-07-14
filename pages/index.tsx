import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

export default function HomePage(): JSX.Element {
  return (
    <Layout title="Listado de pokemons">
      <Button color="gradient">Next APP</Button>
    </Layout>
  );
}
