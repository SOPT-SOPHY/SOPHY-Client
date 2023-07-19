import { useQuery } from 'react-query';
import { fetchSophyStory } from '../../apis/sophyStory';

const QUERY_KEY = {
  sophyStory: 'sophyStory',
};

export const uesFetchSophyStory = () => {
  const { data } = useQuery([QUERY_KEY.sophyStory], fetchSophyStory);
  return { sophyStory: data };
};
