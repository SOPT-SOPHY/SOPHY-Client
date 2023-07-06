import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  selectedRegionList,
  checkAllRegion,
} from '../recoil/AuthorRegion.tsx/selectors';

type TModalText = {
  isClicked: boolean;
};
function RegionModal({ onClose }: any) {
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

  // 선택 시 포커싱
  const regionRef = useRef([]);
  regionRef.current = [];
  const [length, setLength] = useState(1);
  const refs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const updateLength = (index) => {
    setLength(index);
  };

  useEffect(() => {
    refs.current[length - 1].current.style = 'color:blue;';
  }, [length]);

  const addToRefs = (el) => {
    regionRef.current.push(el);
    console.log(regionRef.current);
  };

  const handleClickAllRegions = () => {
    setIsClicked((isClicked) => !isClicked);
    return setclickedAllRegion(!clickedAllRegion);
  };

  const handleClickRegions = (region: string, index: number) => {
    const newRegion = [...clickedRegion, region];
    setClickedRegion(newRegion);
    addToRefs({ region });
    updateLength(index);
  };

  return (
    <St.ModalSection>
      <St.ModalTextContainer>
        <St.ModalText isClicked>의정부</St.ModalText>
        <span />
        <St.ModalTextList>
          <St.ModalText isClicked={isClicked} onClick={handleClickAllRegions}>
            의정부시 전체
          </St.ModalText>
          {regions.map((region, index) => (
            <St.ModalText
              isClicked={isClicked}
              onClick={() => handleClickRegions({ region, index })}
              key={index}
              ref={refs.current[index]}>
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
}
export default RegionModal;
const St = {
  ModalSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 21.375rem;
    height: 32.5rem;
    background: #fff;
    border: 1px solid #000;
    border-radius: 10px;
  `,
  ModalTextContainer: styled.article`
    display: flex;
    flex-direction: row;

    & > span {
      width: 0.0625rem;
      height: 20rem;
      margin: 1rem;
      background: #000;
    }
  `,
  ModalText: styled.div<TModalText>`
    padding: 0.5rem;
    font-size: 1.2rem;
    color: ${({ isClicked }) => (isClicked ? 'red' : 'black')};
    cursor: pointer;
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
