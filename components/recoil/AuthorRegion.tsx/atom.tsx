//atom 선언
import { atom } from 'recoil';

export const selectedRegion = atom<string[]>({
  key: 'selectedRegion',
  default: [],
});

export const allRegionSelect = atom<boolean>({
  key: 'allRegionSelect',
  default: false,
});
