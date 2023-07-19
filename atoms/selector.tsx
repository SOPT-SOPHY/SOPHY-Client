import { selector } from 'recoil';
import {
  selectedRegion,
  selectedSpace,
  modalOpen,
  completedForm,
} from './atom';

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
export const regionKey = selector({
  key: 'regionKey',
  get: ({ get }) => {
    const region = get(selectedRegion);
    let REGION = '';
    switch (region) {
      case '가능동':
        REGION = 'GANEUNG_DONG';
        break;
      case '고산동':
        REGION = 'GOSAN_DONG';
        break;
      case '금오동':
        REGION = 'GEUMO_DONG';
        break;
      case '낙양동':
        REGION = 'NAKYANG_DONG';
        break;
      case '녹양동':
        REGION = 'NOKYANG_DONG';
        break;
      case '민락동':
        REGION = 'MINRAK_DONG';
        break;
      case '신곡동':
        REGION = 'SINGOK_DONG';
        break;
      case '용현동':
        REGION = 'YOUNGHYUN_DONG';
        break;
      case '의정부동':
        REGION = 'UIJEONGBU_DONG';
        break;
      case '장암동':
        REGION = 'JANGAM_DONG';
        break;
      case '호원동':
        REGION = 'HOWON_DONG';
        break;
      case '의정부시 전체':
        REGION = 'UIJEONGBU_SI';
        break;
      default:
    }
    return REGION;
  },
});
export const spaceSelect = selector({
  key: 'spaceSelect',
  get: ({ get }) => get(selectedSpace),
  set: ({ set }, newChange) => {
    set(selectedSpace, newChange);
  },
});

export const formComplete = selector({
  key: 'formComplete',
  get: ({ get }) => get(completedForm),
  set: ({ set }, newForm) => {
    set(completedForm, newForm);
  },
});
