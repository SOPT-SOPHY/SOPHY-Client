import api from '.';

export const fetchRegionBooktalk = async () => {
  const { data } = await api.get('booktalk/search');

  return data;
};

export const fetchBookTalkDetail = async () => {
  const { data } = await api.get('booktalk/1/detail');

  return data;
};
