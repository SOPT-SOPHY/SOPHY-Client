import { selector } from 'recoil';
import { selectedRegion, allRegionSelect } from './atom';

//각 지역 선택
export const selectedRegionList = selector({
  key: 'SelectedRegionList',
  get: ({ get }) => get(selectedRegion),
  set: ({ set }, newRegion) => {
    set(selectedRegion, newRegion);
  },
});

//의정부 전체 선택
export const checkAllRegion = selector({
  key: 'checkAllRegion',
  get: ({ get }) => get(allRegionSelect),
  set: ({ set }, toggleAllSelect) => {
    set(allRegionSelect, toggleAllSelect);
  },
});
