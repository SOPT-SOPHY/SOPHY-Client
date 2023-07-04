import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  selectedRegionList,
  checkAllRegion,
} from '../recoil/AuthorRegion.tsx/selectors';
type TModalText = {
  isClicked: boolean;
};
const RegionModal = ({ onClose }: any) => {
  const regions = [
    '가능동',
    '가능 1동',
    '고산동',
    '금오동',
    '낙양동',
    '녹양동',
    '민락동',
    '산곡동',
  ];
  const [clickedRegion, setClickedRegion] = useRecoilState(selectedRegionList);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [clickedAllRegion, setclickedAllRegion] =
    useRecoilState(checkAllRegion);

  const regionRef = useRef([]);
  regionRef.current = [];

  const regionDomRef = useRef();
  console.log(regionDomRef);

  const addToRefs = (el) => {
    regionRef.current.push(el);
    console.log(regionRef.current);
  };

  const handleClickAllRegions = () => {
    setIsClicked((isClicked) => !isClicked);
    return setclickedAllRegion(!clickedAllRegion);
  };

  const handleClickRegions = (region: string) => {
    const newRegion = [...clickedRegion, region];
    setClickedRegion(newRegion);
    addToRefs({ region });
  };

  return (
    <St.ModalSection>
      <St.ModalTextContainer>
        <St.ModalText isClicked={true}>의정부</St.ModalText>
        <span></span>
        <St.ModalTextList>
          <St.ModalText isClicked={isClicked} onClick={handleClickAllRegions}>
            의정부시 전체
          </St.ModalText>
          {regions.map((region, index) => (
            <St.ModalText
              isClicked={isClicked}
              onClick={() => handleClickRegions({ region })}
              key={index}
              ref={regionDomRef}>
              {region}
            </St.ModalText>
          ))}
        </St.ModalTextList>
      </St.ModalTextContainer>
      <St.ModalBtn type="button" onClick={onClose}>
        완료
      </St.ModalBtn>
    </St.ModalSection>
  );
};
export default RegionModal;
const St = {
  ModalSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 21.375rem;
    height: 32.5rem;
    border-radius: 10px;
    border: 1px solid #000;
    background: #fff;
  `,
  ModalTextContainer: styled.article`
    display: flex;
    flex-direction: row;
    & > span {
      width: 0.0625rem;
      height: 20rem;
      background: #000;
      margin: 1rem;
    }
  `,
  ModalText: styled.div<TModalText>`
    font-size: 1.2rem;
    padding: 0.5rem;
    pointer: cursor;
    color: ${({ isClicked }) => (isClicked ? 'red' : 'black')};
  `,
  ModalTextList: styled.article`
    font-size: 1.2rem;
  `,
  ModalBtn: styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
  `,
};
