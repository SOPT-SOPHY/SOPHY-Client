import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import Link from 'next/link';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';
import { logincompleteImg } from '../../assets/img';

function AuthorSpace() {
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
  return (
    <>
      <SpaceSection>
        {spaces.map((space) => (
          <SpaceContainer key={space.info}>
            {/* <Image src={space.image} alt="공간 이미지" width={72} heigth={72} /> */}
            <SpaceWrapper>
              <SpaceImage />
              <SpaceInfo>
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
    </>
  );
}

export default AuthorSpace;
const SpaceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15.3rem;
  margin-left: 2rem;
`;
const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpaceWrapper = styled.div`
  display: flex;

  gap: 1.6rem;
  margin-bottom: 1.6rem;
  margin-top: 1.6rem;
`;
const SpaceImage = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 1rem;
  border: none;

  background: ${theme.colors.gray11};
`;
const SpaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;
const SpaceName = styled.h1`
  margin-bottom: 0.6rem;
  fonts: ${theme.fonts.body2_bold};
  color: ${theme.colors.black};
`;
const SpaceAddress = styled.h2`
  margin-bottom: 0.8rem;
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.black};
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
