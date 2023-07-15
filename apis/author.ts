import api from '.';

export const fetchRegionBooktalk = async () => {
  const { data } = await api.get('booktalk/search', {
    city: 0,
  });

  return data;
};

export const fetchBookTalkDetail = async () => {
  const { data } = await api.get('booktalk/1/detail');

  return data;
};
