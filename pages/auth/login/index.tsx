/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { styled } from 'styled-components';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import { sophyLogoImg } from '../../../assets/img';
import { DeleteButtonIcon, HideButtonIcon } from '../../../assets/icon';
import theme from '../../../styles/theme';

interface ButtonProps {
  onClick: () => void;
  isLoginAvailable: boolean;
}

function Login() {
  // next.js 에서 환경 변수 쓸 땐 NEXT_PUBLIC_ 을 변수 앞에 꼭 붙여줘야 한다.
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const [showPswd, setShowPswd] = useState<boolean>(false);

  const [showToast, setShowToast] = useState(false);

  const [isLoginAvailable, setIsLoginAvailable] = useState(false);

  const accessTokenExpiredTime = 100;
  const refreshTokenExpiredTime = 200;

  const accessTokenExpiration = new Date(
    new Date().getTime() + accessTokenExpiredTime * 60000,
  );
  const refreshTokenExpiration = new Date(
    new Date().getTime() + refreshTokenExpiredTime * 60000,
  );

  const handleLogin = async () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email: 'kim@gmail.com',
        password: '1',
      });

      console.log(response);

      // eslint-disable-next-line camelcase
      const { access_token, refresh_token } = response.data.data;
      console.log(access_token);

      Cookies.set('accessToken', access_token, {
        expires: accessTokenExpiration,
      });
      Cookies.set('refreshToken', refresh_token, {
        expires: refreshTokenExpiration,
      });

      // router.push('/home');
    } catch (error) {
      console.error('로그인 에러 발생', error);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!emailRegex.test(email) && email) {
      setEmailError('일치하지 않는 이메일 형식입니다.');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (password && !emailError && email.length > 0) {
      setIsLoginAvailable(true);
    } else {
      setIsLoginAvailable(false);
    }
  }, [password, emailError, email]);

  return (
    <Layout noHeader noMenuBar noFooter>
      <Image
        src={sophyLogoImg}
        width={161}
        height={58}
        alt="sophy 로고"
        style={{ marginTop: '5.9rem', marginBottom: '7.9rem' }}
      />
      <InputsWrapper>
        <InputTitle>이메일 주소</InputTitle>
        <InputWrapper>
          <LoginInput
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          {email.length > 0 ? (
            <DeleteButton
              src={DeleteButtonIcon}
              alt="이메일 입력 초기화 아이콘"
              onClick={() => setEmail('')}
            />
          ) : (
            <NonEmailInput />
          )}
          <LoginLine />
          {emailError ? (
            <ErrorMessage>{emailError}</ErrorMessage>
          ) : (
            <NonError />
          )}
        </InputWrapper>
        <InputTitle>비밀번호</InputTitle>
        <InputWrapper>
          <LoginInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type={showPswd ? 'text' : 'password'}
          />
          <HideButton
            src={HideButtonIcon}
            alt="비밀번호 숨기기 아이콘"
            onClick={() => {
              setShowPswd(!showPswd);
            }}
          />
          <LoginLine />
        </InputWrapper>
      </InputsWrapper>
      <Button onClick={handleLogin} isLoginAvailable={isLoginAvailable}>
        로그인
      </Button>
      <FindingUserInfo>
        <LinkText>이메일 찾기</LinkText> <Separator>|</Separator>{' '}
        <LinkText>비밀번호 찾기</LinkText>
      </FindingUserInfo>
      {showToast && (
        <ToastContainer>이메일 또는 비밀번호를 확인해 주세요</ToastContainer>
      )}
    </Layout>
  );
}

export default Login;

const Button = styled.button<ButtonProps>`
  width: 33.5rem;
  height: 5.2rem;

  border-radius: 0.6rem;
  border: none;

  margin-top: 3.2rem;
  margin-bottom: 2rem;

  ${theme.fonts.subhead3_semibold};

  color: ${(props) =>
    props.isLoginAvailable ? theme.colors.white : theme.colors.gray07};
  background-color: ${(props) =>
    props.isLoginAvailable ? theme.colors.primary : theme.colors.gray11};

  cursor: ${(props) => (props.isLoginAvailable ? 'pointer' : 'not-allowed')};
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 33.5rem;
`;

const LoginInput = styled.input`
  width: 25rem;
  border: none;

  outline: none;

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body2_regular}
  }
`;

const LoginLine = styled.div`
  width: 33.5rem;
  border-top: 0.1rem solid ${theme.colors.gray09};
`;

const InputTitle = styled.div`
  font-size: 2.4rem;
  width: 33.5rem;
  ${theme.fonts.subhead4_semibold}
  color: ${theme.colors.gray01};
  margin-bottom: 1rem;
`;

const FindingUserInfo = styled.div`
  display: flex;
  justify-content: space-between;

  width: 16.9rem;
  height: 1.6rem;

  ${theme.fonts.body3_regular}

  color: ${theme.colors.gray04};
`;

const LinkText = styled.span`
  cursor: pointer;
`;

const Separator = styled.span`
  color: ${theme.colors.gray10};
`;

const ErrorMessage = styled.div`
  height: 1.6rem;
  margin-top: 0.4rem;
  margin-bottom: 1.2rem;

  ${theme.fonts.body3_regular};
  color: ${theme.colors.dangerRed};
`;

const NonError = styled.div`
  height: 3.2rem;
  width: 15.8rem;
`;

const HideButton = styled(Image)`
  cursor: pointer;
`;

const DeleteButton = styled(Image)`
  cursor: pointer;
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 4.8rem;

  position: fixed;
  bottom: 4.8rem;

  ${theme.fonts.subhead4_semibold};

  background-color: ${theme.colors.gray01};
  color: ${theme.colors.white};

  border-radius: 0.6rem;
`;

const NonEmailInput = styled.div`
  width: 3.6rem;
  height: 3.6rem;
`;
