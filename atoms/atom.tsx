// atom 선언
import { atom } from 'recoil';

export const modalOpen = atom<boolean>({
  key: 'modalOpen',
  default: false,
});
export const selectedRegion = atom<string[]>({
  key: 'selectedRegion',
  default: [],
});
// 공간 정보의 객체 리스트를 id, 즉 숫자로 정의한다고 가정
export const selectedSpace = atom<number>({
  key: 'selectedRegion',
  default: -1,
});

export const mypageSelectedSpaceState = atom<number | null>({
  key: 'mypageSelectedSpace',
  default: null,
});
