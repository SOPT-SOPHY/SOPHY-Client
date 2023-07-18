import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import Image from 'next/image';
// import Link from 'next/link';
import backArrow from '../../assets/icon/ic_backArrow.svg';
import icCheck from '../../assets/icon/ic_check.svg';

interface DongBoxProps {
  isSelected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function SelectRegion() {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const handleNextButtonClick = () => {
    const encodedRegion = encodeRegion(selectedRegion);
    router.push(`/booktalk/search/${encodedRegion}`);
  };

  const encodeRegion = (region: string) => {
    switch (region) {
      case '낙양동':
        return 'NAKYANG_DONG';
      case '민락동':
        return 'MINLAK_DONG';
      case '산곡동':
        return 'SANGOK_DONG';
      case '신곡1동':
        return 'SINGOK1_DONG';
      case '가능동':
        return 'GANENG_DONG';
      case '고산동':
        return 'GOSAN_DONG';
      case '금오동':
        return 'GUMO_DONG';
      case '가능1동':
        return 'GANENG1_DONG';
      default:
        return '';
    }
  };

  return (
    <Body>
      <Header>
        <ImageContainer>
          <Image src={backArrow} width={44} height={44} alt="뒤로가기" />
        </ImageContainer>
        <Title>지역 선택</Title>
      </Header>
      <div>
        <RegionContainer>
          <RegionBox>
            <VerticalLine />
            <SelectBox>
              <h1>의정부</h1>
            </SelectBox>
            <DongBoxContainer>
              <DongBox
                onClick={() => handleRegionSelect('의정부시 전체')}
                isSelected={selectedRegion === '의정부시 전체'}>
                <li>의정부시 전체</li>
                <span>
                  {selectedRegion === '의정부시 전체' && (
                    <Image
                      src={icCheck}
                      width={16}
                      height={16}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox
                onClick={() => handleRegionSelect('가능동')}
                isSelected={selectedRegion === '가능동'}>
                <li>가능동</li>
                <span>
                  {selectedRegion === '가능동' && (
                    <Image
                      src={icCheck}
                      width={16}
                      height={16}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox
                onClick={() => handleRegionSelect('Asia')}
                isSelected={selectedRegion === 'Asia'}>
                <li>가능 1동</li>
                <span>
                  {selectedRegion === 'Asia' && (
                    <Image
                      src={icCheck}
                      width={16}
                      height={16}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox
                onClick={() => handleRegionSelect('고산동')}
                isSelected={selectedRegion === '고산동'}>
                <li>고산동</li>
                <span>
                  {selectedRegion === '고산동' && (
                    <Image
                      src={icCheck}
                      width={16}
                      height={16}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox
                onClick={() => handleRegionSelect('금오동')}
                isSelected={selectedRegion === '금오동'}>
                <li>금오동</li>
                <span>
                  {selectedRegion === '금오동' && (
                    <Image
                      src={icCheck}
                      width={16}
                      height={16}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox
                onClick={() => handleRegionSelect('낙양동')}
                isSelected={selectedRegion === '낙양동'}>
                <li>낙양동</li>
                <span>
                  {selectedRegion === '낙양동' && (
                    <Image
                      src={icCheck}
                      width={24}
                      height={24}
                      alt="지역선택 체크 아이콘"
                    />
                  )}
                </span>
              </DongBox>
              <DongBox>
                <li>녹양동</li>
              </DongBox>
              <DongBox>
                <li>민락동</li>
              </DongBox>
              <DongBox>
                <li>산곡동</li>
              </DongBox>
              <DongBox>
                <li>신곡1동</li>
              </DongBox>
            </DongBoxContainer>
          </RegionBox>
        </RegionContainer>
      </div>
      {/* <Link href={`./BTList?region=${selectedRegion}`} passHref> */}
      <NextButtonWrapper>
        <NextButton onClick={handleNextButtonClick} isactive={selectedRegion}>
          선택완료
        </NextButton>
      </NextButtonWrapper>
      {/* </Link> */}
    </Body>
  );
}

export default SelectRegion;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 15.4rem;
`;

const RegionContainer = styled.div`
  flex-shrink: 0;

  height: 55rem;

  margin-top: 2.4rem;
  margin-left: 2rem;
  margin-right: 2rem;

  background-color: ${({ theme }) => theme.colors.gray12};
  border-radius: 0.8rem;
`;

const RegionBox = styled.div`
  position: relative;

  height: 55rem;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  top: 0;
  bottom: 0;
  left: 50%;

  background-color: ${({ theme }) => theme.colors.gray10};

  transform: translateX(-50%);
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 14.8rem;
  height: 4rem;
  top: 1.6rem;

  margin-left: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.6rem;

  h1 {
    margin-top: 0.8rem;
    margin-left: 1.6rem;

    ${({ theme }) => theme.fonts.subhead4_bold};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DongBoxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 1.6rem;
  left: 50%;
  gap: 0.6rem;

  list-style-type: none;
`;

const DongBox = styled.div<DongBoxProps>`
  position: relative;

  width: 16.1rem;
  height: 4rem;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.gray12};

  li {
    margin-top: 0.8rem;
    margin-left: 1.2rem;

    ${({ theme }) => theme.fonts.body1_medium};
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.gray02};

    border: none;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0.5rem;

    transform: translateY(-50%);

    img {
      width: 2.4rem;
      height: 2.4rem;

      fill: ${({ isSelected, theme }) =>
        isSelected ? theme.colors.primary : 'transparent'};
    }
  }
`;

const NextButton = styled.button<{ isactive: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4.8rem;

  border: none;
  border-radius: 0.6rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};

  ${(props) =>
    props.isactive &&
    css`
      /* 신청하기 버튼이 활성화된 상태일 때의 스타일 */
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    `}

  ${(props) =>
    !props.isactive &&
    css`
      /* 신청하기 버튼이 비활성화된 상태일 때의 스타일 */
      background-color: ${({ theme }) => theme.colors.gray11};
      color: ${({ theme }) => theme.colors.gray07};
      cursor: not-allowed;
    `};
`;

const NextButtonWrapper = styled.div`
  position: fixed;
  bottom: 4.8rem;
`;
