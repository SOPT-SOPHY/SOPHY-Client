import { selector } from 'recoil';
import { selectedRegion, selectedSpace } from './atom';

export const regionSelect = selector({
  key: 'regionSelect',
  get: ({ get }) => get(selectedRegion),
  set: ({ set }, newChange) => {
    set(selectedRegion, newChange);
  },
});
export const spaceSelect = selector({
  key: 'spaceSelect',
  get: ({ get }) => get(selectedSpace),
  set: ({ set }, newChange) => {
    set(selectedSpace, newChange);
  },
});
