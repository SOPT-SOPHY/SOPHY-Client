import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';
import { BackButton } from '../../assets/icon';
import { logincompleteImg } from '../../assets/img';
import { spaceSelect } from '../recoil/selector';

interface SpaceProps {
  isClick?: boolean;
  onClick?: () => void;
}

function AuthorSpace() {
  const setSelectedSpaces = useSetRecoilState(spaceSelect); // 각 지역 선택
  const [clickedId, setClickedId] = useState<number>(-1);
  const spaces = [
    {
      id: 0,
      image: logincompleteImg,
      info: '가능동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      id: 1,
      image: logincompleteImg,
      info: '송산3동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      id: 2,
      image: logincompleteImg,
      info: '고산동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 8명',
    },
    {
      id: 3,
      image: logincompleteImg,
      info: '금오동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      id: 4,
      image: logincompleteImg,
      info: '낙양동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      id: 5,
      image: logincompleteImg,
      info: '예현동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 8명',
    },
    {
      id: 6,
      image: logincompleteImg,
      info: '수현동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 10명',
    },
    {
      id: 7,
      image: logincompleteImg,
      info: '성오동 작은도서관',
      address: '경기도 의정부시 용민로 230',
      people: '최대 1명',
    },
    {
      id: 8,
      image: logincompleteImg,
      info: '민지동 작은도서관',
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

  useEffect(() => {
    setSelectedSpaces(clickedId);
  }, [clickedId]);

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
              cursor: 'pointer',
            }}
          />
          <PageNumber>
            <span>2</span>/ 3
          </PageNumber>
          <PageTitle>공간을 선택해주세요</PageTitle>
        </Header>
      </Layout>
      <SpaceSection>
        {spaces.map((space) => (
          <SpaceContainer key={space.info}>
            {/* <Image src={space.image} alt="공간 이미지" width={72} heigth={72} /> */}
            <SpaceWrapper
              onClick={() => handleClickSpaces(space.id)}
              isClick={clickedId === space.id}>
              <SpaceImage />
              <SpaceInfo isClick={clickedId === space.id}>
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
  background: ${({ isClick }) =>
    isClick ? theme.colors.green03 : theme.colors.white};
  &:hover {
    background: ${theme.colors.gray11};
  }
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
