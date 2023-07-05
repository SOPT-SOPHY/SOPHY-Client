import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { styled } from 'styled-components';
import Layout from '../../../components/Layout';

function Signup() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const handleEmailCheck = async () => {
    try {
      // 이메일 중복확인을 위한 API 호출
      const response = await axios.get(`/api/checkEmail?email=${email}`);
      const { isAvailable } = response.data;
      setIsEmailAvailable(isAvailable);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth/signup`, {
        email: 'kim@gmail.com',
        nickname: '현수',
        password: '1',
      });

      console.log(response);

      const { token } = response.data;

      Cookies.set('token', token);

      router.push('/auth/login');
    } catch (e) {
      console.log(e);
    }
  };

  const handleAllAgree = () => {
    setAllAgreed(!allAgreed);
    setTermsAgreed(!allAgreed);
    setPrivacyAgreed(!allAgreed);
    setMarketingAgreed(!allAgreed);
  };

  const handleTermsAgree = () => {
    setTermsAgreed(!termsAgreed);
    setAllAgreed(false);
  };

  const handlePrivacyAgree = () => {
    setPrivacyAgreed(!privacyAgreed);
    setAllAgreed(false);
  };

  const handleMarketingAgree = () => {
    setMarketingAgreed(!marketingAgreed);
    setAllAgreed(false);
  };

  useEffect(() => {
    if (termsAgreed && privacyAgreed && marketingAgreed) {
      setAllAgreed(true);
    }
  }, [termsAgreed, privacyAgreed, marketingAgreed]);

  const isPasswordMatch = password === confirmPassword;
  const isFormValid =
    // isEmailAvailable &&
    isPasswordMatch &&
    email &&
    password &&
    confirmPassword &&
    name &&
    phone &&
    allAgreed;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout noHeader noMenuBar noFooter>
      <Head>
        <button type="button" onClick={handleGoBack}>
          뒤로가기
        </button>
        <div>회원가입</div>
      </Head>
      <InputName>이메일</InputName>
      <InputSize2
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={handleEmailCheck}>
        중복 확인
      </button>
      {!isEmailAvailable && <p>유효하지 않은 이메일입니다.</p>}
      <InputName>비밀번호</InputName>
      <InputSize1
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputName>비밀번호 확인</InputName>
      <InputSize1
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {!isPasswordMatch && <p>비밀번호가 일치하지 않습니다.</p>}
      <InputName>이름</InputName>
      <InputSize1
        type="text"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputName>휴대전화 번호</InputName>
      <InputSize1
        type="tel"
        placeholder="번호를 입력해주세요."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div>
        <label htmlFor="allAgreed">
          <input
            type="radio"
            id="allAgreed"
            checked={allAgreed}
            onClick={handleAllAgree}
          />
          모두 동의합니다
        </label>
        <div>
          <label htmlFor="termAgreed">
            <input
              type="radio"
              id="termAgreed"
              checked={termsAgreed}
              onClick={handleTermsAgree}
            />
            이용약관 동의
          </label>
          <label htmlFor="privacyAgreed">
            <input
              type="radio"
              id="privacyAgreed"
              checked={privacyAgreed}
              onClick={handlePrivacyAgree}
            />
            개인정보 취급방침 동의
          </label>
          <label htmlFor="marketingAgreed">
            <input
              type="radio"
              id="marketingAgreed"
              checked={marketingAgreed}
              onClick={handleMarketingAgree}
            />
            마케팅 정보 수신 동의
          </label>
        </div>
      </div>

      <button type="button" onClick={handleSignup} disabled={!isFormValid}>
        회원가입
      </button>
    </Layout>
  );
}

export default Signup;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 37.5rem;
`;

const InputName = styled.div`
  width: 37.5rem;
`;

const InputSize1 = styled.input`
  width: 33.7rem;
`;

const InputSize2 = styled.input`
  width: 23.6rem;
`;
