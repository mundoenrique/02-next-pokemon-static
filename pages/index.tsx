import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';

export default function HomePage(props: any): JSX.Element {
  console.log(props);
  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>Pókemon</li>
        <li>Pókemon</li>
        <li>Pókemon</li>
        <li>Pókemon</li>
        <li>Pókemon</li>
        <li>Pókemon</li>
        <li>Pókemon</li>
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
  const { data } = await pokeApi.get('pokemon?limit=151');

  return {
    props: { pokemonts: data.results },
  };
}
