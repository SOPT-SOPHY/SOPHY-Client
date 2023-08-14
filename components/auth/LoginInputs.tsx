/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Image from 'next/image';
import { DeleteButtonIcon, HideButtonIcon } from '../../assets/icon';
import {
  emailState,
  emailErrorState,
  passwordState,
  showPswdState,
} from '../../atoms/auth';
import theme from '../../styles/theme';

interface LoginInputsProps {
  inputType: string;
}

function LoginInputs(props: LoginInputsProps) {
  const { inputType } = props;
  const [email, setEmail] = useRecoilState<string>(emailState);
  const [emailError, setEmailError] = useRecoilState(emailErrorState);

  const [password, setPassword] = useRecoilState(passwordState);
  const [showPswd, setShowPswd] = useRecoilState(showPswdState);

  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!emailRegex.test(email) && email) {
      setEmailError('일치하지 않는 이메일 형식입니다.');
    } else {
      setEmailError('');
    }
  }, [email]);

  return (
    <>
      <InputTitle>{inputType}</InputTitle>
      <InputWrapper>
        {inputType === '이메일 주소' ? (
          <>
            <LoginInput
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            {email ? (
              <DeleteButton
                src={DeleteButtonIcon}
                alt="이메일 입력 초기화 아이콘"
                onClick={() => setEmail('')}
              />
            ) : (
              <NonEmailInput />
            )}
            <LoginLine string={emailError} />
            {emailError ? (
              <ErrorMessage>{emailError}</ErrorMessage>
            ) : (
              <NonError />
            )}
          </>
        ) : (
          <>
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
            <PasswordLine string={password} />
          </>
        )}
      </InputWrapper>
    </>
  );
}

export default LoginInputs;

const InputTitle = styled.div`
  font-size: 2.4rem;
  width: 33.5rem;
  ${theme.fonts.subhead4_semibold}
  color: ${theme.colors.gray01};
  margin-bottom: 1rem;
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

const LoginLine = styled.div<{ string: string }>`
  width: 100%;
  border-top: 0.1rem solid
    ${(props) => (props.string ? theme.colors.dangerRed : theme.colors.gray09)};
`;

const PasswordLine = styled.div<{ string: string }>`
  width: 33.5rem;
  border-top: 0.1rem solid
    ${(props) =>
      props.string && props.string.length > 0
        ? theme.colors.primary
        : theme.colors.gray09};
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

const NonEmailInput = styled.div`
  width: 3.6rem;
  height: 3.6rem;
`;
