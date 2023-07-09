import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import icPeople from '../../assets/icon/ic_people_count.svg';

interface CountryProps {
  alpha3Code: string;
  flag: { large: string };
  name: string;
  population: number;
  region: string | string[];
  capital: string;
}

interface SingleBookTalkProps {
  item: CountryProps;
}

function SingleBookTalk({ item }: SingleBookTalkProps) {
  return (
    <>
      <BookTalkWrapper>
        <ImageContainer>
          {/* <Image src={item.flag.large} width={99} height={99} alt="국가 이미지" /> */}
        </ImageContainer>
        <TextWrapper>
          <BookName>{item.name}</BookName>
          <WriterName>{item.capital}</WriterName>
          <Date>{item.population}</Date>
          <Space>
            {Array.isArray(item.region) ? item.region.join(', ') : item.region}
          </Space>
        </TextWrapper>
        <CountWrapper>
          <Image src={icPeople} width={24} height={24} alt="사람" />
          <Count>3</Count>
          <TotalCount>/{item.population}</TotalCount>
        </CountWrapper>
      </BookTalkWrapper>
      <HorizontalLine />
    </>
  );
}

export default SingleBookTalk;

// 나머지 스타일 컴포넌트 코드 생략

const BookTalkWrapper = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  margin-top: 1.7rem;
  margin-bottom: 1.3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ImageContainer = styled.div`
  width: 9.9rem;
  height: 9.9rem;
  flex-shrink: 0;

  margin-right: 1.5rem;

  border-radius: 10px;
  background: #f4f4f4;

  img {
    width: 9.9rem;
    height: 9.9rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookName = styled.h1`
  margin-bottom: 0.3rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  color: ${({ theme }) => theme.colors.gray01};
`;

const WriterName = styled.h2`
  margin-bottom: 1.9rem;

  ${({ theme }) => theme.fonts.body3_medium};
  color: ${({ theme }) => theme.colors.gray01};
`;

const Date = styled.h3`
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.body3_regular};
  color: ${({ theme }) => theme.colors.gray04};
`;

const Space = styled.h3`
  ${({ theme }) => theme.fonts.body3_regular};
  color: ${({ theme }) => theme.colors.gray04};
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;

  top: 8rem;
  left: 28.8rem;

  margin-right: 2rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
  }
`;

const Count = styled.h1`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const TotalCount = styled.h1`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ theme }) => theme.colors.gray06};
`;

const HorizontalLine = styled.hr`
  margin-left: 2.2rem;
  margin-right: 2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray11};
`;
