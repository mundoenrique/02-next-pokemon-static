import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray100.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0px 20px',
        width: '100%',
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="wihte" h2>
            P
          </Text>
          <Text color="wihte" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="wihte">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
}
