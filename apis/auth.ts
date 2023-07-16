import axios from 'axios';

interface PostDuplicatedEmail {
  email?: string;
  message?: string;
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const postDuplicatedEmail = async (
  props: PostDuplicatedEmail,
): Promise<PostDuplicatedEmail> => {
  const { data } = await axios.post(`${baseURL}/auth/dupl-check`, props);
  return data;
};
