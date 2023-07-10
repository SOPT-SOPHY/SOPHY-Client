import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';
import {
  AddPhoto,
  DownButton,
  NextButton,
  ClockIcon,
  ScheduleIcon,
  // InactiveCheckboxIcon,
  ActiveCheckboxIcon,
} from '../../assets/icon';

function AuthorForm() {
  return (
    <>
      <FormSection>
        <UploadImage>
          <Image src={AddPhoto} alt="이미지 업로드" />
          <UploadText>대표 이미지를 업로드해주세요.</UploadText>
        </UploadImage>
        <InputContainer>
          <FormHeading>북토크 제목</FormHeading>
          <TitleInput type="text" placeholder="북토크 제목을 입력해주세요" />
          <InputUnderLine />
        </InputContainer>

        <FormHeading>분야 선택</FormHeading>
        <CategoryContainer>
          <CategoryDropDown>카테고리를 선택해주세요</CategoryDropDown>
          <Image src={DownButton} alt="드롭다운" width={24} height={24} />
        </CategoryContainer>

        <FormHeading>도서 정보 불러오기</FormHeading>
        <BookInfoContainer>
          <BookInfoButton>내 도서 관리로 이동하기</BookInfoButton>
          <Image src={NextButton} alt="이동버튼" width={24} height={24} />
        </BookInfoContainer>

        <FormHeading>개최 일정</FormHeading>
        <DayContainer>
          <Image src={ScheduleIcon} alt="달력" width={24} height={24} />
          <DayInput type="text" placeholder="YY/MM/DD" />
        </DayContainer>

        <HourContainer>
          <StartWrapper>
            <FormHeading>시작 시간</FormHeading>
            <StartHourBox>
              <Image src={ClockIcon} alt="시계" />
              <StartHourInput type="text" placeholder="HH:MM" />
            </StartHourBox>
          </StartWrapper>
          <EndWrapper>
            <FormHeading>종료 시간</FormHeading>
            <EndHourBox>
              <Image src={ClockIcon} alt="시계" />
              <EndHourInput type="text" placeholder="HH:MM" />
            </EndHourBox>
          </EndWrapper>
        </HourContainer>
        <SubDescription>24시간 기준으로 입력해주세요. ex) 19:30</SubDescription>
        <InputContainer>
          <FormHeading>참여 인원</FormHeading>
          <TitleInput
            type="text"
            placeholder="참여 인원을 숫자로 작성해주세요"
          />
          <InputUnderLine />
        </InputContainer>
        <InputContainer>
          <FormHeading>참가비</FormHeading>
          <TitleInput
            type="text"
            placeholder="참가비를 원 단위로 작성해주세요"
          />

          <InputUnderLine />
          <CheckBox>
            <Image
              src={ActiveCheckboxIcon}
              alt="체크 아이콘"
              width={20}
              height={20}
            />
            무료
          </CheckBox>
        </InputContainer>
        <PreInfoContainer>
          <FormHeading>사전 정보</FormHeading>
          <PreInfoButtonWrapper>
            <PreInfoButton>미리 읽어와주세요</PreInfoButton>
            <PreInfoButton>발췌문을 드려요</PreInfoButton>
          </PreInfoButtonWrapper>
          <PreInfoButtonWrapper>
            <PreInfoButton>질문을 준비해주세요</PreInfoButton>
            <PreInfoButton>편하게 와주세요</PreInfoButton>
          </PreInfoButtonWrapper>
        </PreInfoContainer>
        <IntroduceContainer>
          <FormHeading>북토크 소개글</FormHeading>
          <IntroduceInput
            type="text"
            placeholder="북토크 소개글을 작성해주세요"
          />
        </IntroduceContainer>
      </FormSection>

      <Link href="detail">
        <AuthorButton />
      </Link>
    </>
  );
}

export default AuthorForm;
const FormSection = styled.div`
  margin: 0rem 2rem;
`;
const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.5rem;
  height: 18.4rem;
  margin: 2.4rem 0rem;
  border-radius: 0.8rem;
  background: ${theme.colors.gray11};
`;
const UploadText = styled.span`
  margin-top: 1.4rem;
  font: ${theme.fonts.body2_medium};
  color: ${theme.colors.gray08};
`;
const FormHeading = styled.h1`
  margin-top: 3rem;
  fonts: ${theme.fonts.subhead4_semibold};
  color: ${theme.colors.gray01};
`;
const InputContainer = styled.div``;
const CheckBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1.2rem;
  flex-direction: reverse;
  gap: 0.8rem;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};
`;
const TitleInput = styled.input`
  width: 33.5rem;
  margin: 1rem 0rem;
  border: none;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray08};
  &::placeholder {
    fonts: ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
const InputUnderLine = styled.div`
  width: 33.5rem;
  height: 0.1rem;
  background: ${theme.colors.gray09};
`;
const CategoryContainer = styled.div`
  display: flex;

  margin-top: 0.8rem;
  padding: 1.2rem;
  width: 33.5rem;
  height: 4.4rem;

  gap: 15rem;
  border-radius: 0.6rem;
  border: none;

  background: ${theme.colors.gray11};
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray06};
`;
const CategoryDropDown = styled.div``;
const BookInfoContainer = styled.div`
  display: flex;

  margin-top: 0.8rem;
  padding: 1.2rem;
  width: 33.5rem;
  height: 4.4rem;

  gap: 15rem;

  border-radius: 0.6rem;
  border: none;

  color: ${theme.colors.green08};
  fonts: ${theme.fonts.body2_medium};
  background: ${theme.colors.green03};
`;
const BookInfoButton = styled.div``;
const DayContainer = styled.div`
  display: flex;

  width: 33.5rem;
  height: 4.4rem;
  margin-top: 0.8rem;
  padding: 1rem 0rem 1rem 1.2rem;
  gap: 1rem;

  border-radius: 0.6rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const DayInput = styled.input`
  width: 30rem;
  height: 2.4rem;

  border: none;
  background: none;
  &::placeholder {
    background: ${theme.colors.gray11};
  }
`;
const HourContainer = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;
const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
  margin-right: 1.1rem;
`;
const EndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.2rem;
`;
const StartHourBox = styled.div`
  display: flex;
  height: 4.4rem;
  margin-top: 0.8rem;

  padding: 1rem 0rem 1rem 1.2rem;
  gap: 1rem;
  border-radius: 0.6rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const StartHourInput = styled.input`
  width: 10rem;
  border: none;
  background: none;
  &::placeholder {
    background: ${theme.colors.gray11};
  }
`;
const EndHourBox = styled.div`
  display: flex;
  height: 4.4rem;
  margin-top: 0.8rem;

  padding: 1rem 0rem 1rem 1.2rem;
  gap: 1rem;
  border-radius: 0.6rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const EndHourInput = styled.input`
  width: 10rem;
  border: none;
  background: none;
  &::placeholder {
    background: ${theme.colors.gray11};
  }
`;
const SubDescription = styled.span`
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.gray07};
`;
const PreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PreInfoButtonWrapper = styled.div`
  margin-top: 0.2rem;
  display: flex;
  gap: 1.2rem;
`;
const PreInfoButton = styled.div`
  padding: 1rem 1.6rem;
  margin-top: 1.2rem;
  border-radius: 2rem;
  border: none;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray05};
  background: ${theme.colors.gray11};
`;
const IntroduceContainer = styled.div``;
const IntroduceInput = styled.input`
  width: 33.5rem;
  height: 10rem;
  padding: 1.2rem 15.8rem 6.8rem 1.2rem;
  margin-top: 0.8rem;
  margin-bottom: 5rem;
  background: ${theme.colors.gray11};
  border-radius: 0.6rem;
  border: none;
  color: ${theme.colors.gray06};

  &::placeholder {
    color: ${theme.colors.gray06};
  }
`;
