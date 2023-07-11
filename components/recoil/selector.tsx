import { selector } from 'recoil';
import { modalOpen } from './atom';

// 모달 열렸는지 유무
export const isModalOpen = selector({
  key: 'isModalOpen',
  get: ({ get }) => get(modalOpen),
  set: ({ set }, newChange) => {
    set(modalOpen, newChange);
  },
});
