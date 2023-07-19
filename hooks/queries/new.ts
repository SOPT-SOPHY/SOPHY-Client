import { useMutation, useQueryClient } from 'react-query';
import { postBooktalk } from '../../apis/new';

const QUERY_KEY = {
  booktalkNew: 'booktalkNew',
};

export const usePostBooktalk = () => {
  const queryClient = useQueryClient();
  return useMutation(postBooktalk, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.booktalkNew]);
    },
    onError(e) {
      console.log(e);
    },
  });
};
