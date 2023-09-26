/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ColorCheckIcon,
  GrayCheckIcon,
  InactiveCheckboxIcon,
  ActiveCheckboxIcon,
  MoreIcon,
} from '../../../assets/icon';
import theme from '../../../styles/theme';
import { usePostDuplicatedEmail } from '../../../hooks/queries/auth';
import PageTitle from '../../../components/common/Title/PageTitle';
import {
  handleAllAgree,
  handleConfirmPassword,
  handleMarketingAgree,
  handleNameChange,
  handlePasswordChange,
  handlePrivacyAgree,
  handleSignup,
  handleTermsAgree,
  phoneChange,
} from '../../../hooks/auth/signup';

interface StyledComponentProps {
  string?: string | null;
  boolean?: boolean | null;
  confirmPassword?: string | null;
}

function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(
    null,
  );
  const [isPasswordAvailable, setIsPasswordAvailable] = useState<
    boolean | null
  >(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | null>(null);

  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [onlyEssentialAgreed, setOnlyEssentialAgreed] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isDuplicatedEmailChecked, setIsDuplicatedEmailChecked] =
    useState(false);

  const { mutate, data, isError } = usePostDuplicatedEmail();

  useEffect(() => {
    if (isError === false) {
      setIsEmailAvailable(true);
    } else {
      setIsEmailAvailable(false);
    }
  }, [isError]);

  const handleEmailDuplicateCheck = (e: any) => {
    console.log(e.target.value);
    mutate({ email });
    console.log(data);
    setIsDuplicatedEmailChecked(true);
  };

  useEffect(() => {
    if (termsAgreed && privacyAgreed && marketingAgreed) {
      setAllAgreed(true);
    }
    if (termsAgreed && privacyAgreed && !marketingAgreed) {
      setOnlyEssentialAgreed(true);
    } else {
      setOnlyEssentialAgreed(false);
    }
  }, [termsAgreed, privacyAgreed, marketingAgreed]);

  useEffect(() => {
    if (password === '') {
      setPassword('');
      setIsPasswordMatch(false);
    } else if (confirmPassword === '') {
      setConfirmPassword('');
      if (password !== '') {
        setIsPasswordMatch(false);
      }
    } else if (password === confirmPassword) setIsPasswordMatch(true);
    else setIsPasswordMatch(false);
  }, [password, confirmPassword]);

  useEffect(() => {
    const term = onlyEssentialAgreed || allAgreed;
    if (
      isEmailAvailable &&
      isPasswordMatch &&
      email &&
      password &&
      confirmPassword &&
      name &&
      phone &&
      term &&
      isDuplicatedEmailChecked
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    isEmailAvailable,
    isPasswordMatch,
    email,
    password,
    confirmPassword,
    name,
    phone,
    onlyEssentialAgreed,
    allAgreed,
    isDuplicatedEmailChecked,
  ]);

  return (
    <>
      <PageTitle pageTitleText="회원가입" />
      <InputTitle>
        <InputTitleContent>이메일 주소</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <EmailInputWrapper>
        <EmailInput
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <DoubleCheckButton type="button" onClick={handleEmailDuplicateCheck}>
          중복 확인
        </DoubleCheckButton>
      </EmailInputWrapper>
      <LoginLine boolean={isError} string={email} />
      {data && !isError ? (
        <ValidationMessage boolean={!isError}>
          사용 가능한 이메일 주소입니다
        </ValidationMessage>
      ) : isError ? (
        <ValidationMessage boolean={!isError}>
          이미 사용중인 이메일 주소입니다
        </ValidationMessage>
      ) : (
        <></>
      )}
      <InputTitle>
        <InputTitleContent>비밀번호</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <InputWrapper>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e: any) =>
            handlePasswordChange(e, setPassword, setIsPasswordAvailable)
          }
        />
      </InputWrapper>
      <PasswordLine boolean={isPasswordAvailable} />
      {password === '' ? (
        <InputConditionMessage>
          비밀번호는 8~16자, 영문, 숫자를 포함해야 합니다.
        </InputConditionMessage>
      ) : isPasswordAvailable ? (
        <ValidationMessage boolean={isPasswordAvailable}>
          사용 가능한 비밀번호 입니다.
        </ValidationMessage>
      ) : (
        <ValidationMessage boolean={isPasswordAvailable}>
          비밀번호는 8~16자, 영문, 숫자를 포함해야 합니다.
        </ValidationMessage>
      )}
      <InputTitle>
        <InputTitleContent>비밀번호 확인</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <InputWrapper>
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          value={confirmPassword}
          onChange={(e: any) => handleConfirmPassword(e, setConfirmPassword)}
        />
      </InputWrapper>
      <ConfirmPasswordLine
        boolean={isPasswordMatch}
        confirmPassword={confirmPassword}
      />
      {isPasswordMatch === null ? (
        <></>
      ) : confirmPassword === null ? (
        <></>
      ) : isPasswordMatch ? (
        <ValidationMessage boolean={isPasswordMatch}>
          비밀번호가 일치합니다.
        </ValidationMessage>
      ) : (
        confirmPassword?.length > 0 && (
          <ValidationMessage boolean={isPasswordMatch}>
            비밀번호가 일치하지 않습니다.
          </ValidationMessage>
        )
      )}
      <InputTitle>
        <InputTitleContent>이름 (실명입력)</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(event: any) => handleNameChange(event, setName)}
        />
      </InputWrapper>
      <LoginLine boolean string={name} />
      <InputMultipleConditionMessage>
        소피는 <PrimaryColorSpan>한글 실명</PrimaryColorSpan>으로 운영되고
        있습니다.
        <br /> 반드시 한글 실명으로 가입해주세요.
        <br /> 실명이 아닐 경우, 서비스 이용에 제약이 생길 수 있습니다.
      </InputMultipleConditionMessage>
      <InputTitle>
        <InputTitleContent>휴대전화 번호 ('-' 구분없이 입력)</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <InputWrapper>
        <Input
          type="tel"
          placeholder="번호를 입력해주세요."
          value={phone}
          onChange={(e: any) => phoneChange(e, setPhone)}
        />
      </InputWrapper>
      <LoginLine boolean string={phone} />
      <InputTitle>
        <InputTitleContent>이용약관 동의</InputTitleContent>
        <PrimaryColorStar>*</PrimaryColorStar>
      </InputTitle>
      <AllAgreeButton
        type="button"
        onClick={() =>
          handleAllAgree(
            setAllAgreed,
            setTermsAgreed,
            setPrivacyAgreed,
            setMarketingAgreed,
            allAgreed,
          )
        }>
        네, 모두 동의합니다
        {allAgreed ? (
          <Image
            src={ColorCheckIcon}
            alt="유색의 체크 모양의 아이콘"
            style={{ marginLeft: '0.6rem' }}
          />
        ) : (
          <Image
            src={GrayCheckIcon}
            alt="무색의 체크 모양의 아이콘"
            style={{ marginLeft: '0.6rem' }}
          />
        )}
      </AllAgreeButton>
      <div>
        <TermsWrapper>
          <TermsContentWrapper>
            {termsAgreed ? (
              <Image
                src={ActiveCheckboxIcon}
                alt="체크되었음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handleTermsAgree(setTermsAgreed, setAllAgreed, termsAgreed)
                }
              />
            ) : (
              <Image
                src={InactiveCheckboxIcon}
                alt="체크되지 않았음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handleTermsAgree(setTermsAgreed, setAllAgreed, termsAgreed)
                }
              />
            )}
            <div>(필수) 이용약관 동의</div>
          </TermsContentWrapper>
          <More>
            보기
            <Image
              src={MoreIcon}
              alt="약관 더 보기 아이콘"
              style={{ marginLeft: '0.5rem' }}
            />
          </More>
        </TermsWrapper>
        <TermsWrapper>
          <TermsContentWrapper>
            {privacyAgreed ? (
              <Image
                src={ActiveCheckboxIcon}
                alt="체크되었음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handlePrivacyAgree(
                    setPrivacyAgreed,
                    setAllAgreed,
                    privacyAgreed,
                  )
                }
              />
            ) : (
              <Image
                src={InactiveCheckboxIcon}
                alt="체크되지 않았음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handlePrivacyAgree(
                    setPrivacyAgreed,
                    setAllAgreed,
                    privacyAgreed,
                  )
                }
              />
            )}
            <div>(필수) 개인정보 취급방침 동의</div>
          </TermsContentWrapper>
          <More>
            보기
            <Image
              src={MoreIcon}
              alt="약관 더 보기 아이콘"
              style={{ marginLeft: '0.5rem' }}
            />
          </More>
        </TermsWrapper>
        <TermsWrapper>
          <TermsContentWrapper>
            {marketingAgreed ? (
              <Image
                src={ActiveCheckboxIcon}
                alt="체크되었음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handleMarketingAgree(
                    setMarketingAgreed,
                    setAllAgreed,
                    marketingAgreed,
                  )
                }
              />
            ) : (
              <Image
                src={InactiveCheckboxIcon}
                alt="체크되지 않았음을 나타내는 아이콘"
                style={{ marginRight: '0.6rem' }}
                onClick={() =>
                  handleMarketingAgree(
                    setMarketingAgreed,
                    setAllAgreed,
                    marketingAgreed,
                  )
                }
              />
            )}
            <div>(선택) 마케팅 정보 수신 동의</div>
          </TermsContentWrapper>
          <More>
            보기
            <Image
              src={MoreIcon}
              alt="약관 더 보기 아이콘"
              style={{ marginLeft: '0.5rem' }}
            />
          </More>
        </TermsWrapper>
      </div>

      <SignupButton
        type="button"
        onClick={() =>
          handleSignup(email, name, password, phone, marketingAgreed, router)
        }
        disabled={!isFormValid}>
        회원가입
      </SignupButton>
    </>
  );
}

export default Signup;

const InputTitle = styled.div`
  font-size: 2.4rem;
  width: 33.5rem;
  height: 2.7rem;
  ${theme.fonts.subhead4_semibold}
  color: ${theme.colors.gray01};
  margin-bottom: 1rem;
  margin-top: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 33.5rem;

  margin-bottom: 0.7rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 33.5rem;

  margin-bottom: 1rem;
`;

const EmailInput = styled.input`
  width: 25rem;
  border: none;

  outline: none;

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body2_regular}
  }
`;

const Input = styled.input`
  width: 33.5rem;
  height: 2rem;
  border: none;

  outline: none;

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body2_regular}
  }
`;

const LoginLine = styled.div<StyledComponentProps>`
  width: 33.5rem;
  border-top: 0.1rem solid
    ${(props) =>
      props.string && props?.string?.length > 0
        ? theme.colors.primary
        : theme.colors.gray09};
`;

const PasswordLine = styled.div<StyledComponentProps>`
  width: 33.5rem;
  border-top: 0.1rem solid
    ${(props) =>
      props.boolean || props.boolean === null
        ? theme.colors.gray09
        : theme.colors.dangerRed};
`;

const ConfirmPasswordLine = styled.div<StyledComponentProps>`
  width: 33.5rem;
  border-top: 0.1rem solid
    ${(props) =>
      props.boolean || props.boolean === null || props.confirmPassword === ''
        ? theme.colors.gray09
        : theme.colors.dangerRed};
`;

const DoubleCheckButton = styled.button`
  width: 7.5rem;
  height: 3rem;

  border-radius: 3.1rem;
  border: none;

  background-color: ${theme.colors.gray11};
  color: ${theme.colors.gray05};
`;

const ValidationMessage = styled.div<StyledComponentProps>`
  margin-top: 0.4rem;
  height: 1.6rem;
  width: 33.5rem;

  display: flex;
  align-items: center;

  color: ${(props) =>
    props.boolean ? theme.colors.successBlue : theme.colors.dangerRed};

  ${theme.fonts.body3_regular};
`;

const InputConditionMessage = styled.div`
  margin-top: 0.4rem;
  height: 1.6rem;
  width: 33.5rem;

  display: flex;
  align-items: center;

  color: ${theme.colors.gray07};
  ${theme.fonts.body3_regular};
`;

const InputMultipleConditionMessage = styled.div`
  margin-top: 0.4rem;
  height: 4.8rem;
  width: 33.5rem;

  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray07};
`;

const PrimaryColorSpan = styled.span`
  color: ${theme.colors.primary};
`;

const PrimaryColorStar = styled.span`
  color: ${theme.colors.primary};
  margin-left: 0.3rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
`;

const InputTitleContent = styled.div`
  height: 2.4rem;
`;

const AllAgreeButton = styled.button`
  width: 33.5rem;
  height: 4.4rem;

  border: none;
  border-radius: 0.6rem;

  background-color: ${theme.colors.green01};
  color: ${theme.colors.gray02};

  margin-bottom: 2.1rem;

  ${theme.fonts.subhead4_semibold};

  cursor: pointer;
`;

const TermsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 33.9rem;
  height: 2.4rem;

  margin-bottom: 1.2rem;

  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};
`;

const More = styled.div`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray05};
`;

const TermsContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SignupButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  margin-top: 3.6rem;
  margin-bottom: 4.8rem;

  border-radius: 0.6rem;
  border: none;
  ${theme.fonts.subhead3_semibold};
  background-color: ${(props) =>
    props.disabled ? theme.colors.gray11 : theme.colors.primary};
  color: ${(props) =>
    props.disabled ? theme.colors.gray07 : theme.colors.white};
`;
