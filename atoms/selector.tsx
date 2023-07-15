import { selector } from 'recoil';
import { selectedRegion, selectedSpace, modalOpen } from './atom';

// 모달 열렸는지 유무
export const isModalOpen = selector({
  key: 'isModalOpen',
  get: ({ get }) => get(modalOpen),
  set: ({ set }, newChange) => {
    set(modalOpen, newChange);
  },
});
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
