import { useMutation, useQueryClient } from 'react-query';
import { postDuplicatedEmail } from '../../apis/auth';

const QUERY_KEY = {
  duplicatedEmail: 'duplicatedEmail',
};

export const usePostDuplicatedEmail = () => {
  const queryClient = useQueryClient();

  return useMutation(postDuplicatedEmail, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.duplicatedEmail]);
    },
  });
};
