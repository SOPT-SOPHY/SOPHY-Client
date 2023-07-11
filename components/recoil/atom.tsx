// atom 선언
import { atom } from 'recoil';

export const modalOpen = atom<boolean>({
  key: 'modalOpen',
  default: false,
});
