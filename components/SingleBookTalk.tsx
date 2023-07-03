import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import users from '../assets/icon/users.svg';

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

const SingleBookTalk: React.FC<SingleBookTalkProps> = ({ item }) => {
  return (
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
        <Image src={users} width={20} height={20} alt="사람" />
        <Count>3/6</Count>
      </CountWrapper>
    </BookTalkWrapper>
  );
};

export default SingleBookTalk;

// 나머지 스타일 컴포넌트 코드 생략

const BookTalkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  width: 6.1875rem;
  height: 6.1875rem;
  flex-shrink: 0;

  border-radius: 10px;
  background: #f4f4f4;

  margin-left: 1.25rem;
  margin-right: 1rem;

  img {
    width: 6.1875rem;
    height: 6.1875rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookName = styled.h1`
  color: var(--gray-gray-01, #36393c);
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
`;

const WriterName = styled.h2`
  color: var(--gray-gray-01, #36393c);
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
  margin-bottom: 0.63rem;
`;

const Date = styled.h3`
  color: var(--gray-gray-04, #7c8389);
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
`;

const Space = styled.h3`
  color: var(--gray-gray-04, #7c8389);
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1.25rem;
  margin-top: 4.88rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
`;

const Count = styled.h1`
  color: #57bebc;
  text-align: center;
  font-size: 0.875rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
  margin-left: 0.19rem;
`;
