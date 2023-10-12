/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import Layout from '../../../components/common/Layout';
import {
  ColoredCheckboxIcon,
  ColoredRadioIcon,
  EmptyCheckboxIcon,
  EmptyRadioIcon,
  GoBackIcon,
} from '../../../assets/icon';
import theme from '../../../styles/theme';
import {
  isRegionChangedState,
  mypageSelectedSpaceState,
} from '../../../atoms/atom';
import { uesFetchMyInfo, usePatchMyInfo } from '../../../hooks/queries/mypage';

function ManagingInfo() {
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      router.push('/auth/login');
    }
  }, [accessToken, refreshToken, router]);

  const handleGoBack = () => {
    router.push('/mypage');
  };

  const { myInfo } = uesFetchMyInfo();
  const { data, mutate } = usePatchMyInfo();

  const [gender, setGender] = useState<null | string>(null);
  const [birth, setBirth] = useState('');
  // const [birthYear, setBirthYear] = useState<number>();
  // const [birthMonth, setBirthMonth] = useState<number>();
  // const [birthDay, setBirthDay] = useState<number>();
  const [marketingTerm, setMarketingTerm] = useState(false);
  const [region, setRegion] = useRecoilState(mypageSelectedSpaceState);
  const [isSaveAvailable, setIsSaveAvailable] = useState(false);
  const [isRegionChanged, setIsRegionChanged] =
    useRecoilState(isRegionChangedState);
  const [hasValueChanged, setHasValueChanged] = useState(false);

  useEffect(() => {
    if (isRegionChanged) {
      setRegion(region);
      setHasValueChanged(true);
    } else {
      setRegion(myInfo?.city);
    }
  }, [myInfo]);

  // 맨 처음 데이터 fetch (get 의 데이터)
  useEffect(() => {
    setFinalData(myInfo);
    setGender(myInfo?.gender);
    setBirth(myInfo?.birth);
    // setBirth(myInfo?.birth);
    if (myInfo?.birth !== null) {
      console.log(`birth${myInfo?.birth}`);
      // setBirthYear(myInfo?.birth?.slice(0, 4));
      // setBirthMonth(myInfo?.birth?.slice(4, 6));
      // setBirthDay(myInfo?.birth?.slice(6, 8));
    }
    setMarketingTerm(myInfo?.marketingAgree);
  }, [myInfo]);

  // 수정된 이후 데이터 fetch (patch 의 데이터)
  useEffect(() => {
    setFinalData(data);
    setGender(myInfo?.gender);
    setBirth(myInfo?.birth);
    // setBirthYear(myInfo?.birth?.slice(0, 4));
    // setBirthMonth(myInfo?.birth?.slice(4, 6));
    // setBirthDay(myInfo?.birth?.slice(6, 8));
    setMarketingTerm(myInfo?.marketingAgree);
  }, [data]);

  const [finalData, setFinalData] = useState<any>();

  const regions: any = {
    UIJEONGBU_SI: '전체',
    UIJEONGBU_DONG: '의정부동',
    HOWON_DONG: '호원동',
    JANGAM_DONG: '장암동',
    SINGOK_DONG: '신곡동',
    YOUNGHYUN_DONG: '용현동',
    MINRAK_DONG: '민락동',
    NAKYANG_DONG: '낙양동',
    GEUMO_DONG: '금오동',
    GANEUNG_DONG: '가능동',
    NOKYANG_DONG: '녹양동',
    GOSAN_DONG: '고산동',
  };

  useEffect(() => {
    if (hasValueChanged) {
      setIsSaveAvailable(true);
    } else {
      setIsSaveAvailable(false);
    }
  }, [gender, birth, marketingTerm, hasValueChanged]);

  const handleSaveButton = () => {
    mutate({
      email: myInfo.email,
      name: myInfo.name,
      phone_num: myInfo.phone_num,
      gender,
      birth: birth,
      city: region,
      marketingAgree: marketingTerm,
    });
    setHasValueChanged(false);
    setIsRegionChanged(false);
  };

  return (
    <Layout>
      <Head>
        <Image
          src={GoBackIcon}
          alt="뒤로가기 아이콘"
          onClick={handleGoBack}
          style={{ cursor: 'pointer' }}
        />
        <PageTitle>내 정보 관리</PageTitle>
        <TitleBlank
          isSaveAvailable={isSaveAvailable}
          onClick={handleSaveButton}>
          저장
        </TitleBlank>
      </Head>
      <HeadBlank />
      <InputTitle>
        <InputTitleContent>이메일</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>{finalData?.email}</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>이름</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>{finalData?.name}</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>휴대폰 번호</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>{finalData?.phoneNum}</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>비밀번호</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>본인인증 후 변경 가능합니다</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>성별</InputTitleContent>
      </InputTitle>
      <RadioWrapper>
        <Radio>
          <Image
            src={gender !== '여성' ? EmptyRadioIcon : ColoredRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
            onClick={() => {
              setGender('여성');
              if (gender !== '여성') {
                setHasValueChanged(true);
              }
            }}
          />
          여성
        </Radio>
        <Radio>
          <Image
            src={gender !== '남성' ? EmptyRadioIcon : ColoredRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
            onClick={() => {
              setGender('남성');
              if (gender !== '남성') {
                setHasValueChanged(true);
              }
            }}
          />
          남성
        </Radio>
        <Radio>
          <Image
            src={gender !== null ? EmptyRadioIcon : ColoredRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
            onClick={() => {
              setGender(null);
              if (gender !== null) {
                setHasValueChanged(true);
              }
            }}
          />
          선택안함
        </Radio>
      </RadioWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>생년월일</InputTitleContent>
      </InputTitle>
      <BirthInputWrapper>
        <BirthInput
          placeholder="YYYY년 MM월 DD일"
          onChange={(e: any) => {
            setBirth(e.target.value);
            setHasValueChanged(true);
          }}
          value={birth}
        />
        {/* <BirthYearInput
          placeholder="YYYY"
          type="text"
          inputMode="numeric"
          onChange={(e: any) => {
            if (e.target.value.length >= 5) {
              e.preventDefault();
              return;
            }
            setBirthYear(e.target.value);
            setHasValueChanged(true);
          }}
          value={birthYear}
        />
        <BirthMonthInput
          placeholder="MM"
          type="text"
          inputMode="numeric"
          onChange={(e: any) => {
            if (e.target.value.length >= 3) {
              e.preventDefault();
              return;
            }
            setBirthMonth(e.target.value);
            setHasValueChanged(true);
          }}
          value={birthMonth}
        />
        <BirthDayInput
          placeholder="DD"
          type="text"
          inputMode="numeric"
          onChange={(e: any) => {
            if (e.target.value.length >= 3) {
              e.preventDefault();
              return;
            }
            setBirthDay(e.target.value);
            setHasValueChanged(true);
          }}
          value={birthDay}
        /> */}
      </BirthInputWrapper>
      <BirthNotice>
        회원님의 성별, 생년월일은 맞춤 서비스를 제공하는 데 사용됩니다.
      </BirthNotice>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>우리동네 설정하기</InputTitleContent>
      </InputTitle>
      <RegionSelectionWrapper>
        <RegionSelectionButton
          type="button"
          onClick={() => {
            router.push('/mypage/managingInfo/selectRegion');
          }}>
          {region !== null ? `의정부시 ${regions[region]}` : '우리동네 선택'}
        </RegionSelectionButton>
      </RegionSelectionWrapper>
      <LoginLine />
      <TermWrapper>
        {marketingTerm ? (
          <Image
            src={ColoredCheckboxIcon}
            alt="체크된 체크 박스 아이콘"
            style={{ marginRight: '0.8rem' }}
            onClick={() => {
              setMarketingTerm(!marketingTerm);
              if (marketingTerm) {
                setHasValueChanged(true);
              }
            }}
          />
        ) : (
          <Image
            src={EmptyCheckboxIcon}
            alt="체크되지 않은 체크 박스 아이콘"
            style={{ marginRight: '0.8rem' }}
            onClick={() => {
              setMarketingTerm(!marketingTerm);
              if (!marketingTerm) {
                setHasValueChanged(true);
              }
            }}
          />
        )}
        (선택)마케팅 정보수신 동의
        <TermContent>
          마케팅 정보 수신에 동의하시면, 1)소피 매거진 제공 2)제휴 혜택 안내
          3)이벤트 소식을 빠르게 전해드립니다.
        </TermContent>
      </TermWrapper>
      <WithdrawalWrapper>
        <WithdrawalText>로그아웃</WithdrawalText>
        <WithdrawalText>회원탈퇴</WithdrawalText>
      </WithdrawalWrapper>
    </Layout>
  );
}

export default ManagingInfo;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: ${theme.colors.white};

  width: 37.5rem;
`;

const HeadBlank = styled.div`
  width: 37.5rem;
  height: 5.5rem;
`;

const PageTitle = styled.div`
  ${theme.fonts.subhead2_bold};
`;

const TitleBlank = styled.div<{ isSaveAvailable: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-right: 2rem;

  width: 2.8rem;
  height: 4.4rem;

  color: ${(props) =>
    props.isSaveAvailable ? theme.colors.primary : theme.colors.gray06};
  ${theme.fonts.subhead3_semibold};

  cursor: pointer;
`;

const InputTitle = styled.div`
  font-size: 2.4rem;
  width: 33.5rem;
  height: 2.7rem;
  ${theme.fonts.subhead4_semibold}
  color: ${theme.colors.gray01};
  margin-bottom: 0.8rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const InputTitleContent = styled.div`
  height: 2rem;

  color: ${theme.colors.gray06};
  ${theme.fonts.body2_regular};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 33.5rem;

  margin-bottom: 2rem;
`;

const Input = styled.div`
  width: 33.5rem;
  height: 2.4rem;
  border: none;

  outline: none;

  color: ${theme.colors.gray06};
  ${theme.fonts.body1_medium};

  /*
  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body2_regular}
  }
  */
`;

const BirthInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 33.5rem;

  margin-bottom: 0.6rem;
`;

const BirthInput = styled.input`
  width: 33.5rem;
  height: 2.4rem;
  border: none;

  outline: none;

  color: ${theme.colors.gray01};
  ${theme.fonts.body1_medium};

  /*
  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body2_regular}
  }
  */
`;

const LoginLine = styled.div`
  width: 33.5rem;
  border-top: 0.1rem solid ${theme.colors.gray09};
`;

const RadioWrapper = styled.div`
  width: 33.5rem;

  margin-bottom: 1.1rem;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;

  width: 22.5rem;
  height: 2.5rem;

  color: ${theme.colors.gray01};
  ${theme.fonts.body2_regular};

  margin-bottom: 1.3rem;
`;

const BirthNotice = styled.div`
  width: 33.4rem;

  color: ${theme.colors.gray07};
  ${theme.fonts.body3_regular};

  margin-bottom: 2rem;
`;

const RegionSelectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 33.5rem;
  color: ${theme.colors.gray01};
`;

const RegionSelectionButton = styled.button`
  width: 33.5rem;
  height: 4.8rem;

  border-radius: 0.6rem;
  border: none;
  margin-bottom: 3.2rem;

  background-color: ${theme.colors.green02};
  color: ${theme.colors.green10};

  ${theme.fonts.body1_medium};

  cursor: pointer;
`;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 33.5rem;

  margin-top: 3.2rem;
  margin-bottom: 4.4rem;

  color: ${theme.colors.gray01};
  ${theme.fonts.body1_medium};
`;

const TermContent = styled.div`
  color: ${theme.colors.gray07};
  ${theme.fonts.body3_regular};

  margin-left: 3.2rem;
  margin-top: 0.8rem;
`;

const WithdrawalWrapper = styled.div`
  width: 33.5rem;

  margin-bottom: 1.6rem;
`;

const WithdrawalText = styled.div`
  width: 33.5rem;

  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray05};

  margin-bottom: 1.6rem;
`;

const BirthYearInput = styled.input`
  width: 7.2rem;
  height: 3.2rem;
  border-radius: 0.6rem;

  border: 0.1rem solid ${theme.colors.gray08};

  padding-left: 1.2rem;

  margin-right: 0.8rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body1_medium};
  }
`;

const BirthMonthInput = styled.input`
  width: 5.8rem;
  height: 3.2rem;
  border-radius: 0.6rem;

  padding-left: 1.2rem;

  border: 0.1rem solid ${theme.colors.gray08};

  margin-right: 0.8rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body1_medium};
  }
`;

const BirthDayInput = styled.input`
  width: 5.8rem;
  height: 3.2rem;
  border-radius: 0.6rem;

  padding-left: 1.2rem;

  border: 0.1rem solid ${theme.colors.gray08};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  ::placeholder {
    color: ${theme.colors.gray08};
    ${theme.fonts.body1_medium};
  }
`;
