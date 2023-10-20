import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import theme from '../../../styles/theme';
import dayjs from 'dayjs';

interface booktalkDetailProps {
  preliminaryInfo: string;
  booktalkImageUrl: string;
  startDate: string;
  width: number;
  height: number;
}

const BooktalkImage = ({
  preliminaryInfo,
  booktalkImageUrl,
  startDate,
  width,
  height,
}: booktalkDetailProps) => {
  const now = dayjs();
  const booktalkStartDate = dayjs(startDate);
  const dday = Math.floor(booktalkStartDate.diff(now, 'day')) + 1;
  return (
    <div>
      {preliminaryInfo === 'PRE_READING' ? (
        <PreBooktalkImageWrapper width={width} height={height}>
          <SBooktalkImage
            src={booktalkImageUrl}
            alt="북토크 썸네일 이미지"
            width={width}
            height={height}
          />
          {booktalkStartDate.isAfter(now) ? (
            <BooktalkDday>D - {dday}</BooktalkDday>
          ) : (
            <></>
          )}
        </PreBooktalkImageWrapper>
      ) : (
        <BooktalkImageWrapper width={width} height={height}>
          <SBooktalkImage
            src={booktalkImageUrl}
            alt="북토크 썸네일 이미지"
            width={width}
            height={height}
          />
          {booktalkStartDate.isAfter(now) ? (
            <BooktalkDday>D - {dday}</BooktalkDday>
          ) : (
            <></>
          )}
        </BooktalkImageWrapper>
      )}
    </div>
  );
};

export default BooktalkImage;

const PreBooktalkImageWrapper = styled.div<{ width: number; height: number }>`
  background-color: #d9d9d9;
  opacity: 0.5;
  z-index: 1;
  width: ${(props) => props.width / 10}rem;
  height: ${(props) => props.height / 10}rem;

  border-radius: 0.8rem;
  position: relative;
`;

const BooktalkImageWrapper = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width / 10}rem;
  height: ${(props) => props.height / 10}rem;

  border-radius: 0.8rem;
  position: relative;
`;

const SBooktalkImage = styled(Image)`
  border-radius: 0.8rem;
  object-fit: contain;
`;

const BooktalkDday = styled.div`
  position: absolute;
  bottom: 0;

  height: 3rem;
  width: 100%;

  border-radius: 0rem 0rem 0.8rem 0.8rem;

  background-color: rgba(0, 0, 0, 0.6);

  color: white;
  ${theme.fonts.body3_medium};

  display: flex;
  justify-content: center;
  align-items: center;
`;
