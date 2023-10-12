import Cookies from 'js-cookie';
import api from '.';

export const fetchSophyStory = async () => {
  const {
    data: { data },
  } = await api.get(`/sophy-story/booktalks`);
  return data;
};
