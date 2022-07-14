import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element;
}

export function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Enrique Peñaloza" />
        <meta
          name="description"
          content={`Información sobre el pokemón ${title}`}
        />
        <meta name="kewords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
}
