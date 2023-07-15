import api from '.';

export const fetchRegionSpace = async () => {
  const { data } = await api.get('/place?city=UIJEONG');

  return data;
};

export const fetchBookTalkDetail = async () => {
  const { data } = await api.get('booktalk/1/detail');

  return data;
};
