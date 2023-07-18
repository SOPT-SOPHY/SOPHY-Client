/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import Layout from '../../../components/Layout';
import {
  ColoredCheckboxIcon,
  ColoredRadioIcon,
  EmptyCheckboxIcon,
  EmptyRadioIcon,
  GoBackIcon,
} from '../../../assets/icon';
import theme from '../../../styles/theme';
import { mypageSelectedSpaceState } from '../../../atoms/atom';
import { uesFetchMyInfo, usePatchMyInfo } from '../../../hooks/queries/mypage';

function ManagingInfo() {
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const memberId = Cookies.get('memberId');

  useEffect(() => {
    if (!refreshToken && !accessToken && memberId) {
      Cookies.remove('memberId');
      router.push('/auth/login');
    }
  }, [accessToken, refreshToken, router]);

  const handleGoBack = () => {
    router.back();
  };

  const { myInfo } = uesFetchMyInfo();
  const { data, mutate } = usePatchMyInfo();

  const [gender, setGender] = useState('선택안함');
  const [birth, setBirth] = useState('');
  const [marketingTerm, setMarketingTerm] = useState(false);
  const [region, setRegion] = useRecoilState(mypageSelectedSpaceState);
  const [isSaveAvailable, setIsSaveAvailable] = useState(false);

  // 맨 처음 데이터 fetch (get 의 데이터)
  useEffect(() => {
    setFinalData(myInfo);
    setGender(myInfo?.gender);
    setBirth(myInfo?.birth);
    setMarketingTerm(myInfo?.marketing_agree);
  }, [myInfo]);

  // 수정된 이후 데이터 fetch (patch 의 데이터)
  useEffect(() => {
    setFinalData(data);
    setGender(myInfo?.gender);
    setBirth(myInfo?.birth);
    setMarketingTerm(myInfo?.marketing_agree);
  }, [data]);

  const [finalData, setFinalData] = useState<any>();

  const regions = [
    '의정부시 전체',
    '의정부시 가능동',
    '의정부시 가능 1동',
    '의정부시 고산동',
    '의정부시 금오동',
    '의정부시 낙양동',
    '의정부시 녹양동',
    '의정부시 민락동',
    '의정부시 산곡동',
    '의정부시 산곡 1동',
  ];

  useEffect(() => {
    if (gender !== '선택안함' || birth !== '' || marketingTerm !== false) {
      setIsSaveAvailable(true);
    } else {
      setIsSaveAvailable(false);
    }
  }, [gender, birth, marketingTerm]);

  const handleSaveButton = () => {
    mutate({
      email: myInfo.email,
      name: myInfo.name,
      phone_num: myInfo.phone_num,
      gender,
      birth,
      city: region,
      marketing_agree: marketingTerm,
    });
  };

  return (
    <Layout noFooter noMenuBar noHeader>
      <Head>
        <Image src={GoBackIcon} alt="뒤로가기 아이콘" onClick={handleGoBack} />
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
        <Input>{finalData?.phone_num}</Input>
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
            onClick={() => setGender('여성')}
          />
          여성
        </Radio>
        <Radio>
          <Image
            src={gender !== '남성' ? EmptyRadioIcon : ColoredRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
            onClick={() => setGender('남성')}
          />
          남성
        </Radio>
        <Radio>
          <Image
            src={gender !== '선택안함' ? EmptyRadioIcon : ColoredRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
            onClick={() => setGender('선택안함')}
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
          onChange={(e: any) => setBirth(e.target.value)}
          value={birth}
        />
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
          onClick={() => router.push('/mypage/managingInfo/selectRegion')}>
          {region !== null ? regions[region] : '우리동네 선택'}
        </RegionSelectionButton>
      </RegionSelectionWrapper>
      <LoginLine />
      <TermWrapper>
        {marketingTerm ? (
          <Image
            src={ColoredCheckboxIcon}
            alt="체크된 체크 박스 아이콘"
            style={{ marginRight: '0.8rem' }}
            onClick={() => setMarketingTerm(!marketingTerm)}
          />
        ) : (
          <Image
            src={EmptyCheckboxIcon}
            alt="체크되지 않은 체크 박스 아이콘"
            style={{ marginRight: '0.8rem' }}
            onClick={() => setMarketingTerm(!marketingTerm)}
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
  justify-content: space-between;
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
