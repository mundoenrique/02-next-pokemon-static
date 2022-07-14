import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

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
      <Text color="wihte" h2>
        P
      </Text>
      <Text color="wihte" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="wihte">Favoritos</Text>
    </div>
  );
}
