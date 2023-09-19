import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const handleLogin = async (email: any, password: any) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });

    console.log(`response: ${response}`);

    // eslint-disable-next-line camelcase
    const { accessToken, refreshToken } = response.data.data;
    console.log(accessToken);

    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
  } catch (error) {
    console.error('로그인 에러 발생', error);
  }
};

export const handleSignup = async (
  email: any,
  name: any,
  password: any,
  phone: any,
  marketingAgreed: any,
  router: any,
) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, {
      email,
      name,
      password,
      phoneNum: phone,
      marketingAgree: marketingAgreed,
    });

    console.log(response);

    router?.push('/auth/firstSignup');

    handleLogin(email, password);
  } catch (e: any) {
    console.log(e);
  }
};

export const handleAllAgree = (
  setAllAgreed: any,
  setTermsAgreed: any,
  setPrivacyAgreed: any,
  setMarketingAgreed: any,
  allAgreed: any,
) => {
  setAllAgreed(!allAgreed);
  setTermsAgreed(!allAgreed);
  setPrivacyAgreed(!allAgreed);
  setMarketingAgreed(!allAgreed);
};

export const handleTermsAgree = (
  setTermsAgreed: any,
  setAllAgreed: any,
  termsAgreed: any,
) => {
  setTermsAgreed(!termsAgreed);
  setAllAgreed(false);
};

export const handlePrivacyAgree = (
  setPrivacyAgreed: any,
  setAllAgreed: any,
  privacyAgreed: any,
) => {
  setPrivacyAgreed(!privacyAgreed);
  setAllAgreed(false);
};

export const handleMarketingAgree = (
  setMarketingAgreed: any,
  setAllAgreed: any,
  marketingAgreed: any,
) => {
  setMarketingAgreed(!marketingAgreed);
  setAllAgreed(false);
};

export const handleNameChange = (e: any, setName: any) => {
  const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  if (koreanRegex.test(e.target.value)) {
    setName(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const handleConfirmPassword = (e: any, setConfirmPassword: any) => {
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  if (alphanumericRegex.test(e.target.value)) {
    setConfirmPassword(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const phoneChange = (e: any, setPhone: any) => {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(e.target.value)) {
    setPhone(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const handlePasswordChange = (
  e: any,
  setPassword: any,
  setIsPasswordAvailable: any,
) => {
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  if (alphanumericRegex.test(e.target.value)) {
    setPassword(e.target.value);
  } else {
    e.target.value = '';
    return;
  }

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$/;
  if (e.target.value === '') {
    setIsPasswordAvailable(null);
  } else if (passwordRegex.test(e.target.value)) {
    setIsPasswordAvailable(true);
  } else {
    setIsPasswordAvailable(false);
  }
};
