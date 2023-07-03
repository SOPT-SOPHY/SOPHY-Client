import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backArrow from '../../assets/icon/backArrow.svg';
import Link from 'next/link';

interface DongBoxProps {
  isSelected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const RegionSelect = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionSelect = (region: string) => {
    setSelectedRegion((prevRegion) => (prevRegion === region ? '' : region));
  };

  return (
    <>
      <Body>
        <Header>
          <ImageContainer>
            <Image src={backArrow} width={30} height={30} alt="뒤로가기" />
          </ImageContainer>
          <Title>북토크 개설 신청</Title>
        </Header>
        <div>
          <SubTItle>지역을 선택해주세요.</SubTItle>
          <RegionContainer>
            <RegionBox>
              <VerticalLine />
              <SelectBox>
                <h1>의정부</h1>
              </SelectBox>
              <DongBoxContainer>
                <DongBox
                  onClick={() => handleRegionSelect('Americas')}
                  isSelected={selectedRegion === 'Americas'}>
                  <li>Americas</li>
                  <span>{selectedRegion === 'Americas' ? '✔' : ''}</span>
                </DongBox>
                <DongBox
                  onClick={() => handleRegionSelect('Asia')}
                  isSelected={selectedRegion === 'Asia'}>
                  <li>Asia</li>
                  <span>{selectedRegion === 'Asia' ? '✔' : ''}</span>
                </DongBox>
                <DongBox
                  onClick={() => handleRegionSelect('Africa')}
                  isSelected={selectedRegion === 'Africa'}>
                  <li>Africa</li>
                  <span>{selectedRegion === 'Africa' ? '✔' : ''}</span>
                </DongBox>
                <DongBox
                  onClick={() => handleRegionSelect('Europe')}
                  isSelected={selectedRegion === 'Europe'}>
                  <li>Europe</li>
                  <span>{selectedRegion === 'Europe' ? '✔' : ''}</span>
                </DongBox>
                <DongBox
                  onClick={() => handleRegionSelect('Oceania')}
                  isSelected={selectedRegion === 'Oceania'}>
                  <li>Oceania</li>
                  <span>{selectedRegion === 'Oceania' ? '✔' : ''}</span>
                </DongBox>
                <DongBox>
                  <li>낙양동</li>
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
        <Link href={`./nextPage?region=${selectedRegion}`} passHref>
          <NextButton as="a" disabled={!selectedRegion}>
            다음으로
          </NextButton>
        </Link>
      </Body>
    </>
  );
};

export default RegionSelect;

const Body = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  margin: 0 auto;
  padding: 0;
  border: 1px solid black;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.81rem;

  padding-top: 1.57rem;
`;

const ImageContainer = styled.div`
  margin-left: 1.25rem;
  width: 1.875rem;
  height: 1.875rem;

  img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 8.06rem;
  font-family: Pretendard;
`;

const SubTItle = styled.h2`
  font-size: 1.25rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.625rem;

  margin-left: 1.25rem;
  margin-bottom: 1rem;
`;

const RegionContainer = styled.div`
  width: 20.9375rem;
  height: 27.8125rem;
  flex-shrink: 0;

  margin: 0 auto;

  border-radius: 8px;
  background: var(--gray-gray-11, #f6f7fa);
`;

const RegionBox = styled.div`
  position: relative;

  width: 20.9375rem;
  height: 27.8125rem;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background-color: #e2e6ea;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 10.4375rem;
  height: 2.375rem;
  flex-shrink: 0;

  position: relative;
  top: 1.37rem;
  background-color: #54b7b5;

  h1 {
    color: #fff;
    font-size: 0.875rem;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 1.375rem;

    margin-left: 1.88rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const DongBoxContainer = styled.ul`
  position: absolute;
  top: 1.37rem;
  left: 50%;
  gap: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
`;

const DongBox = styled.div<DongBoxProps>`
  width: 10.4375rem;
  height: 2.375rem;
  flex-shrink: 0;

  position: relative;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? '#e2e6ea' : '#f6f7fa')};
  li {
    color: #36393c;
    font-size: 0.875rem;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 1.375rem;

    border: none;

    margin-left: 1.87rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: ${({ isSelected }) => (isSelected ? '#54b7b5' : 'transparent')};
  }

  &:hover {
    background-color: #e2e6ea;
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20.9375rem;
  height: 3.25rem;
  flex-shrink: 0;

  border: none;
  border-radius: 6px;
  background: #56b5b3;

  margin-top: 3.12rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  color: #fff;
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.5rem;

  background: ${({ disabled }) => (disabled ? '#ccc' : '#56b5b3')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
