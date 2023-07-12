import React from 'react';
import Image from 'next/image';
import router from 'next/router';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import {
  EmptyCheckboxIcon,
  EmptyRadioIcon,
  GoBackIcon,
} from '../../../assets/icon';
import theme from '../../../styles/theme';

function ManagingInfo() {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout noFooter noMenuBar noHeader>
      <Head>
        <Image src={GoBackIcon} alt="뒤로가기 아이콘" onClick={handleGoBack} />
        <PageTitle>내 정보 관리</PageTitle>
        <TitleBlank>수정</TitleBlank>
      </Head>
      <HeadBlank />
      <InputTitle>
        <InputTitleContent>이메일</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>sophy327@gmail.com</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>이름</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>01012341234</Input>
      </InputWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>휴대폰 번호</InputTitleContent>
      </InputTitle>
      <InputWrapper>
        <Input>sophy327@gmail.com</Input>
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
            src={EmptyRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
          />
          여성
        </Radio>
        <Radio>
          <Image
            src={EmptyRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
          />
          남성
        </Radio>
        <Radio>
          <Image
            src={EmptyRadioIcon}
            alt="빈 라디오 아이콘"
            style={{ marginRight: '1rem' }}
          />
          선택안함
        </Radio>
      </RadioWrapper>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>생년월일</InputTitleContent>
      </InputTitle>
      <BirthInputWrapper>
        <BirthInput>1999년 09월 09일</BirthInput>
      </BirthInputWrapper>
      <BirthNotice>
        회원님의 성별, 생년월일은 맞춤 서비스를 제공하는 데 사용됩니다.
      </BirthNotice>
      <LoginLine />
      <InputTitle>
        <InputTitleContent>우리동네 설정하기</InputTitleContent>
      </InputTitle>
      <RegionSelectionWrapper>
        <RegionSelectionButton type="button">
          우리동네 선택
        </RegionSelectionButton>
      </RegionSelectionWrapper>
      <LoginLine />
      <TermWrapper>
        <Image
          src={EmptyCheckboxIcon}
          alt="체크되지 않은 체크 박스 아이콘"
          style={{ marginRight: '0.8rem' }}
        />
        (선택)마케팅 정보수신 동의
        <TermContent>
          마케팅 정보 수신에 동의하시면, 1)소피 매거진 제공 2)제휴 혜택 안내
          3)이벤트 소식을 빠르게 전해드립니다.
        </TermContent>
      </TermWrapper>
      <SaveProfileButton type="button">프로필 저장</SaveProfileButton>
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

const TitleBlank = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-right: 2rem;

  width: 2.8rem;
  height: 4.4rem;

  color: ${theme.colors.gray06};
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

const BirthInput = styled.div`
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
`;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 33.5rem;

  margin-top: 3.2rem;
  margin-bottom: 4.8rem;

  color: ${theme.colors.gray01};
  ${theme.fonts.body1_medium};
`;

const TermContent = styled.div`
  color: ${theme.colors.gray07};
  ${theme.fonts.body3_regular};

  margin-left: 3.2rem;
  margin-top: 0.8rem;
`;

const SaveProfileButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  ${theme.fonts.subhead3_semibold};

  background-color: ${theme.colors.gray11};
  color: ${theme.colors.gray07};

  border-radius: 0.6rem;
  border: none;
`;

const WithdrawalWrapper = styled.div`
  width: 33.5rem;

  margin-top: 2.8rem;
  margin-bottom: 1.6rem;
`;

const WithdrawalText = styled.div`
  width: 33.5rem;

  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray05};

  margin-bottom: 1.6rem;
`;
