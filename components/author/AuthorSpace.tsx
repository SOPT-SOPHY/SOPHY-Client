import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';
import { BackButton } from '../../assets/icon';
import { logincompleteImg } from '../../assets/img';

interface SpaceProps {
  isClick?: boolean;
  onClick?: () => void;
}

function AuthorSpace() {
  const [clickedId, setClickedId] = useState<number>(-1);
  const spaces = [
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 8명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 8명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 8명',
    },
  ];
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const handleClickSpaces = (index: number) => {
    setClickedId(index);
  };
  return (
    <Space>
      <Layout>
        <Header>
          <Image
            src={BackButton}
            alt="뒤로가기"
            onClick={handleGoBack}
            height={44}
            width={44}
            style={{
              marginLeft: '-17px',
            }}
          />
          <PageNumber>
            <span>2</span>/ 3
          </PageNumber>
          <PageTitle>공간을 선택해주세요</PageTitle>
        </Header>
      </Layout>
      <SpaceSection>
        {spaces.map((space, index) => (
          <SpaceContainer key={space.info}>
            {/* <Image src={space.image} alt="공간 이미지" width={72} heigth={72} /> */}
            <SpaceWrapper
              onClick={() => handleClickSpaces(index)}
              isClick={clickedId === index}>
              <SpaceImage />
              <SpaceInfo
                onClick={() => handleClickSpaces(index)}
                isClick={clickedId === index}>
                <SpaceName>{space.info}</SpaceName>
                <SpaceAddress>{space.address}</SpaceAddress>
                <MaxPeople>{space.people}</MaxPeople>
              </SpaceInfo>
            </SpaceWrapper>
            <Divider />
          </SpaceContainer>
        ))}
      </SpaceSection>
      <Link href="form">
        <AuthorButton>다음</AuthorButton>
      </Link>
    </Space>
  );
}

export default AuthorSpace;
const Space = styled.div`
  display: flex;
  flex-direction: column;
`;
const Layout = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 14rem;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const PageNumber = styled.h1`
  margin-top: 0.8rem;
  color: ${theme.colors.gray06};
  font: ${theme.fonts.subhead2_medium};
  & > span {
    margin-right: 0.19rem;
    color: #56b5b3;
    font: ${theme.fonts.headline3_bold};
  }
`;

const PageTitle = styled.h1`
  margin-top: 1.6rem;
  font: ${theme.fonts.headline2};
`;

const SpaceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14rem; //14 + 3

  height: 51.8rem;
  overflow-y: auto;
`;
const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpaceWrapper = styled.div<SpaceProps>`
  display: flex;
  gap: 1.6rem;

  cursor: pointer;
  padding: 1.6rem;
  &:hover {
    background: ${theme.colors.gray11};
  }
  background: ${({ isClick }) =>
    isClick ? theme.colors.green03 : theme.colors.white};
`;
const SpaceImage = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 1rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const SpaceInfo = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  color: ${({ isClick }) =>
    isClick ? theme.colors.green08 : theme.colors.black};
`;
const SpaceName = styled.h1`
  margin-bottom: 0.6rem;
  fonts: ${theme.fonts.body2_bold};
  /* color: ${theme.colors.black}; */
`;
const SpaceAddress = styled.h2`
  margin-bottom: 0.8rem;
  fonts: ${theme.fonts.body3_regular};
  /* color: ${theme.colors.black}; */
`;
const MaxPeople = styled.span`
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.green05};
`;
const Divider = styled.div`
  width: 33.3rem;
  height: 0.1rem;
  background: ${theme.colors.gray11};
`;
