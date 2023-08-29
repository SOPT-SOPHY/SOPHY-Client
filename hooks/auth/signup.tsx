import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const handleLogin = async (email, password) => {
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
  email,
  name,
  password,
  phone,
  marketingAgreed,
  router,
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

    router.push('/auth/firstSignup');

    handleLogin(email, password);
  } catch (e: any) {
    console.log(e);
  }
};

export const handleAllAgree = (
  setAllAgreed,
  setTermsAgreed,
  setPrivacyAgreed,
  setMarketingAgreed,
  allAgreed,
) => {
  setAllAgreed(!allAgreed);
  setTermsAgreed(!allAgreed);
  setPrivacyAgreed(!allAgreed);
  setMarketingAgreed(!allAgreed);
};

export const handleTermsAgree = (setTermsAgreed, setAllAgreed, termsAgreed) => {
  setTermsAgreed(!termsAgreed);
  setAllAgreed(false);
};

export const handlePrivacyAgree = (
  setPrivacyAgreed,
  setAllAgreed,
  privacyAgreed,
) => {
  setPrivacyAgreed(!privacyAgreed);
  setAllAgreed(false);
};

export const handleMarketingAgree = (
  setMarketingAgreed,
  setAllAgreed,
  marketingAgreed,
) => {
  setMarketingAgreed(!marketingAgreed);
  setAllAgreed(false);
};

export const handleNameChange = (e: any, setName) => {
  const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  if (koreanRegex.test(e.target.value)) {
    setName(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const handleConfirmPassword = (e: any, setConfirmPassword) => {
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  if (alphanumericRegex.test(e.target.value)) {
    setConfirmPassword(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const phoneChange = (e: any, setPhone) => {
  const numberRegex = /^[0-9]*$/;
  if (numberRegex.test(e.target.value)) {
    setPhone(e.target.value);
  } else {
    e.target.value = '';
  }
};

export const handlePasswordChange = (
  e: any,
  setPassword,
  setIsPasswordAvailable,
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
