import Cookies from 'js-cookie';
import axios from 'axios';
import router from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  emailErrorState,
  emailState,
  isLoginAvailableState,
  passwordState,
  showLoginToastState,
} from '../../atoms/auth';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const useLogin = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const setShowToast = useSetRecoilState(showLoginToastState);
  const emailError = useRecoilValue(emailErrorState);
  const setIsLoginAvailable = useSetRecoilState(isLoginAvailableState);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data.data;

      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);

      router.push('/home');

      setEmail('');
      setPassword('');
    } catch (error) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  // 이렇게 하면 안돼 현수야..
  useEffect(() => {
    if (password && !emailError && email.length > 0) {
      setIsLoginAvailable(true);
    } else {
      setIsLoginAvailable(false);
    }
  }, [password, emailError, email]);

  return { handleLogin };
};

export default useLogin;
