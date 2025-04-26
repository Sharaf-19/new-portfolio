// src/custom.d.ts

declare module './components/HeroModels/Room' {
  import { GroupProps } from '@react-three/fiber';
  import { ReactElement } from 'react';

  export function Room(props: GroupProps): ReactElement;
}
