import api from '.';

export const fetchRegionSpace = async (key: string) => {
  const { data } = await api.get(`place/search/${key}`);

  return data;
};

export const fetchBookTalkDetail = async () => {
  const { data } = await api.get('booktalk/1/detail');

  return data;
};
