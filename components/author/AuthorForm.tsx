import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import theme from '../../styles/theme';
import ModalPortal from '../ModalPortal';
import AuthorModal from './@AuthorModal';
import {
  AddPhoto,
  DownButton,
  NextButton,
  ClockIcon,
  ScheduleBigIcon,
  InactiveCheckboxIcon,
  ActiveCheckboxIcon,
} from '../../assets/icon';
import { isModalOpen } from '../recoil/selector';
import AuthorLayout from './@AuthorLayout';
import DropDown from './DropDown';

interface Props {
  onClick: () => void;
  isClick?: boolean;
  setGray?: boolean;
  setPrimary?: boolean;
  setBlack?: boolean;
}
function AuthorForm() {
  const [modalOpen, setModalOpen] = useRecoilState(isModalOpen);

  const [imageSource, setImageSource]: any = useState(null);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('카테고리를 선택해주세요');
  const [preInfo, setPreInfo] = useState<number>(0);
  const [freeCheck, setFreeCheck] = useState<boolean>(false);
  // const [cost, setCost] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  // const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const HandleModal = () => {
    setModalOpen(true);
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImageSource(reader.result);
    };

    // const formData = new FormData();
    // formData.append('files', e.target.files[0]);
    // 서버 axios로 전달
    // await axios({
    //   method: 'post',
    //   url: '/api/files/images',
    //   data: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
  };
  const handlePreInfo = (index: number) => {
    if (index === preInfo) {
      setPreInfo(0);
      return;
    }
    setPreInfo(index);
  };

  const [inputValue, setInputValue] = useState({
    value: '원',
    setValue: (newValue) => {
      setInputValue({ ...inputValue, value: newValue });
    },
  });

  // const handleCost = (e: any) => {
  //   const regex = /^[0-9]+$/;
  //   if (regex.test(e.target.value)) {
  //     setCost(`${e.target.value}원`);
  //     setInputValue(`${e.target.value}원`);
  //   } else {
  //     e.target.value = '';
  //   }
  // };

  const onFocus = (e) => {
    e.target.selectionStart = 0;
  };

  const handlePeople = (e) => {
    const regex = /^[0-9]+$/;
    if (!regex.test(e.target.value)) {
      alert('숫자로 입력해주세요');
    } else {
      setPeople(e.target.value);
      console.log(people);
    }
  };

  useEffect(() => {
    if (imageSource && category && preInfo) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [imageSource, category, preInfo]);

  return (
    <Form>
      <AuthorLayout
        noPageNum={false}
        noPageTitle={false}
        pageNum="3"
        title="신청서를 작성해주세요"
      />
      <FormSection>
        <UploadImage htmlFor="file">
          {imageSource && (
            <Image
              src={imageSource}
              alt="업로드 이미지"
              width={335}
              height={184}
              style={{
                position: 'absolute',
                objectFit: 'cover',
                borderRadius: '0.8rem',
              }}
            />
          )}
          <Image src={AddPhoto} alt="이미지 업로드" />
          <UploadText>대표 이미지를 업로드해주세요.</UploadText>
        </UploadImage>
        <UploadInput
          accept="image/*"
          type="file"
          id="file"
          onChange={(e) => handleUpload(e)}
        />
        <InputContainer>
          <FormHeading>북토크 제목</FormHeading>
          <TitleInput type="text" placeholder="북토크 제목을 입력해주세요" />
          <InputUnderLine />
        </InputContainer>

        {/* 분야선택 */}
        <FormHeading>분야 선택</FormHeading>
        <CategoryContainer
          onClick={() => {
            setDropDown(!dropDown);
          }}
          setGray={category === '카테고리를 선택해주세요'}
          setPrimary={dropDown === true}
          setBlack={!dropDown && category !== '카테고리를 선택해주세요'}>
          <CategoryDropDown>{category}</CategoryDropDown>
          <Image src={DownButton} alt="드롭다운" width={24} height={24} />
        </CategoryContainer>
        <DropDownWrapper>
          {dropDown && (
            <DropDown
              giveCategory={(giveCategory) => setCategory(giveCategory)}
              giveSelected={(giveSelected) => setDropDown(giveSelected)}
            />
          )}
        </DropDownWrapper>

        <FormHeading>도서 정보 불러오기</FormHeading>
        <BookInfoContainer>
          <BookInfoButton>내 도서 관리로 이동하기</BookInfoButton>
          <Image src={NextButton} alt="이동버튼" width={24} height={24} />
        </BookInfoContainer>
        <FormHeading>개최 일정</FormHeading>
        <DayContainer>
          <Image src={ScheduleBigIcon} alt="달력" width={24} height={24} />
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
            onChange={handlePeople}
          />
          <InputUnderLine />
        </InputContainer>

        {/* 참가비 및 무료 버튼 */}
        <InputContainer>
          <FormHeading>참가비</FormHeading>
          <CostInputWrapper>
            <CostInput
              type="text"
              placeholder="참가비를 원 단위로 작성해주세요"
              onChange={(e: any) => setInputValue(e.target.value)}
              // value={true ? inputValue.value : ''}
              onFocus={onFocus}
            />
            {cost && <span>원</span>}
          </CostInputWrapper>

          <InputUnderLine />
          <CheckBox>
            <div>무료</div>
            <ImageWrapper
              onClick={() => {
                setFreeCheck((prev) => !prev);
              }}>
              {freeCheck ? (
                <Image
                  src={ActiveCheckboxIcon}
                  alt="체크 아이콘"
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <Image
                  src={InactiveCheckboxIcon}
                  alt="체크 비활성화 아이콘"
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </ImageWrapper>
          </CheckBox>
        </InputContainer>

        {/* 사전정보 버튼 */}
        <PreInfoContainer>
          <FormHeading>사전 정보</FormHeading>
          <PreInfoButtonWrapper>
            <PreInfoButton
              onClick={() => {
                handlePreInfo(1);
              }}
              isClick={preInfo === 1}>
              미리 읽어와주세요
            </PreInfoButton>
            <PreInfoButton
              onClick={() => {
                handlePreInfo(2);
              }}
              isClick={preInfo === 2}>
              발췌문을 드려요
            </PreInfoButton>
          </PreInfoButtonWrapper>
          <PreInfoButtonWrapper>
            <PreInfoButton
              onClick={() => {
                handlePreInfo(3);
              }}
              isClick={preInfo === 3}>
              질문을 준비해주세요
            </PreInfoButton>
            <PreInfoButton
              onClick={() => {
                handlePreInfo(4);
              }}
              isClick={preInfo === 4}>
              편하게 와주세요
            </PreInfoButton>
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

      <AuthorModalButton onClick={HandleModal}>다음</AuthorModalButton>
      {modalOpen && (
        <ModalPortal>
          <AuthorModal onClose={HandleModalShow} />
        </ModalPortal>
      )}
    </Form>
  );
}

export default AuthorForm;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormSection = styled.div`
  margin-top: 2.4rem;
`;
const UploadImage = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.5rem;
  height: 18.4rem;
  margin: 2.4rem 0rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background: ${theme.colors.gray11};
`;
const UploadInput = styled.input`
  display: none;
  /* position: absolute;
  width: 33.5rem;
  height: 18.4rem;
  border: none;
  background: none; */
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
const CostInputWrapper = styled.div`
  display: flex;
  width: 33.5rem;
  height: 4rem;
`;
const CostInput = styled.input`
  /* display: inline-block; */
  width: 100%;
  border: none;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};

  &::placeholder {
    fonts: ${theme.fonts.body2_regular};
    color: ${theme.colors.gray08};
  }
`;
const CheckBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1.2rem;
  flex-direction: reverse;
  gap: 0.8rem;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};
`;
const ImageWrapper = styled.div``;
const TitleInput = styled.input`
  width: 33.5rem;
  margin: 1rem 0rem;
  border: none;
  fonts: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};

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
const CategoryContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 1.2rem;
  width: 33.5rem;
  height: 4.4rem;

  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  background: ${theme.colors.gray11};
  fonts: ${theme.fonts.body2_regular};
  color: ${({ setPrimary, setGray }) =>
    setGray
      ? theme.colors.gray08
      : setPrimary
      ? theme.colors.primary
      : theme.colors.gray01};

  &:hover {
    color: ${theme.colors.primary};
  }
`;
const CategoryDropDown = styled.div``;
const DropDownWrapper = styled.div`
  position: absolute;
  top: 57.7rem;
  z-index: 3;
`;
const BookInfoContainer = styled.div`
  display: flex;

  margin-top: 0.8rem;
  padding: 1.2rem;
  width: 33.5rem;
  height: 4.4rem;

  gap: 15rem;

  border-radius: 0.6rem;
  border: none;
  cursor: pointer;

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
const PreInfoButton = styled.div<Props>`
  padding: 1rem 1.6rem;
  margin-top: 1.2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  fonts: ${({ isClick }) =>
    isClick ? theme.fonts.body2_medium : theme.fonts.body2_regular};
  color: ${({ isClick }) =>
    isClick ? theme.colors.green01 : theme.colors.gray05};
  background: ${({ isClick }) =>
    isClick ? theme.colors.primary : theme.colors.gray11};
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
const AuthorModalButton = styled.button`
  margin-bottom: 11.2rem;
  width: 33.5rem;
  height: 5.2rem;
  font: ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.white};
  border-radius: 0.375rem;
  background: ${theme.colors.green05};
  border: none;
`;
