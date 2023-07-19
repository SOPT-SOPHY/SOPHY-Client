import api from '.';

export const postBooktalk = async (props: any) => {
  const {
    data: { data },
  } = await api.post(`booktalk`, props);
  return data;
};
