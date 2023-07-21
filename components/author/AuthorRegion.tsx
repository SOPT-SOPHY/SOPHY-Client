import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import theme from '../../styles/theme';
import AuthorButton from './AuthorButton';
import { ColorCheckIcon } from '../../assets/icon/index';
import AuthorLayout from './@AuthorLayout';
import { regionSelect } from '../../atoms/selector';

interface RegionProps {
  isClick?: boolean;
  onClick?: () => void;
}

function AuthorRegion() {
  const setSelectedRegions = useSetRecoilState(regionSelect); // 각 지역 선택
  const [isAllClicked, setIsAllClicked] = useState<boolean>(true); // 의정부시 전체가 선택되었는지 유무
  const [clickedId, setClickedId] = useState<number>(-1);
  const [isRegionValid, setIsRegionValid] = useState<boolean>(false);
  const regions = [
    '가능동',
    '고산동',
    '금오동',
    '낙양동',
    '녹양동',
    '민락동',
    '신곡동',
    '용현동',
    '의정부동',
    '장암동',
    '호원동',
  ];
  const handleClickAllRegions = () => {
    setIsAllClicked((isAllClicked) => !isAllClicked);
    if (clickedId === 100) {
      setClickedId(-1);
      return;
    }
    setClickedId(100);
  };

  const handleClickRegions = (index: number) => {
    if (clickedId === index) {
      setClickedId(-1);
      return;
    }
    setClickedId(index);
  };

  useEffect(() => {
    if (clickedId === 100) {
      setSelectedRegions('의정부시 전체');
    } else {
      setSelectedRegions(regions[clickedId]);
    }
  }, [clickedId]);

  useEffect(() => {
    if (clickedId !== -1) {
      setIsRegionValid(true);
    } else {
      setIsRegionValid(false);
    }
  }, [clickedId]);

  return (
    <Region>
      <AuthorLayout
        noPageNum={false}
        noPageTitle={false}
        pageNum="1"
        title="지역을 선택해주세요"
      />
      <RegionSection>
        <RegionWrapper>
          <UpperRegion>의정부</UpperRegion>
          <Divider />
          <LowerRegion>
            <Regions
              onClick={() => handleClickAllRegions()}
              isClick={!isAllClicked}>
              의정부시 전체
              <ImageContainer isClick={!isAllClicked}>
                <Image
                  src={ColorCheckIcon}
                  alt="체크 표시"
                  width={16}
                  height={12}
                />
              </ImageContainer>
            </Regions>
            {regions.map((region, index) => (
              <Regions
                key={region}
                onClick={() => handleClickRegions(index)}
                isClick={clickedId === index || !isAllClicked}>
                {region}
                <ImageContainer isClick={clickedId === index || !isAllClicked}>
                  <Image
                    src={ColorCheckIcon}
                    alt="체크 표시"
                    width={16}
                    height={12}
                  />
                </ImageContainer>
              </Regions>
            ))}
          </LowerRegion>
        </RegionWrapper>
      </RegionSection>
      {isRegionValid ? (
        <Link href="space">
          <AuthorButton />
        </Link>
      ) : (
        <InactiveAuthorModalButton>다음</InactiveAuthorModalButton>
      )}
    </Region>
  );
}

export default AuthorRegion;
const Region = styled.div`
  display: flex;
  flex-direction: column;
`;
const RegionSection = styled.div`
  width: 33.5rem;
  height: 50rem;
  margin: 2.4rem 0rem 4.5rem 0rem;

  border-radius: 0.8rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const RegionWrapper = styled.div`
  display: flex;
`;
const UpperRegion = styled.div`
  width: 14.8rem;
  height: 4rem;
  margin-top: 1.6rem;
  margin-left: 1rem;
  padding: 0.8rem 9.3rem 0.8rem 1.6rem;
  border-radius: 0.6rem;
  border: none;

  background: ${theme.colors.green05};
  ${theme.fonts.subhead4_bold};
  color: ${theme.colors.green01};
`;
const Divider = styled.div`
  height: 46.8rem;
  width: 0.1rem;

  margin: 1.6rem 1.6rem 1.6rem 1.2rem;
  background: ${theme.colors.gray10};
`;
const LowerRegion = styled.div`
  display: flex;
  flex-direction: column;

  width: 14.8rem;

  height: 46.8rem;
  gap: 2.2rem;
  margin-top: 2.4rem;

  overflow-y: auto;
`;
const Regions = styled.div<RegionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  padding-right: 0.8rem;

  cursor: pointer;
  ${theme.fonts.body1_medium};
  color: ${({ isClick }) =>
    isClick ? theme.colors.primary : theme.colors.gray02};
`;
const ImageContainer = styled.div<{ isClick: boolean }>`
  display: ${({ isClick }) => (isClick ? 'block' : 'none')};
`;
const InactiveAuthorModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11.2rem;
  width: 33.5rem;
  height: 5.2rem;
  ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.gray07};
  border-radius: 0.375rem;
  background: ${theme.colors.gray11};
  border: none;
`;
