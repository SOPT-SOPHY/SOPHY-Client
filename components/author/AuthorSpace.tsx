import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';
import { BackButton, PeopleIcon } from '../../assets/icon';
import { regionKey, spaceSelect } from '../../atoms/selector';
import { useFetchRegionSpace } from '../../hooks/queries/author';

interface SpaceProps {
  isClick?: boolean;
  onClick?: () => void;
}
interface SpaceObjProps {
  address: string;
  maximum: number;
  name: string;
  place_id: number;
  place_image: string;
}
function AuthorSpace() {
  const selectedRegionKey = useRecoilValue(regionKey);

  const spaceInfo = selectedRegionKey && useFetchRegionSpace(selectedRegionKey);

  const spaces = spaceInfo?.data;

  const setSelectedSpaces = useSetRecoilState(spaceSelect); // 각 지역 선택
  const [clickedId, setClickedId] = useState<number>(-1);
  const [isSpaceValid, setIsSpaceValid] = useState<boolean>(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const handleClickSpaces = (index: number) => {
    setClickedId(index);
  };

  useEffect(() => {
    setSelectedSpaces(clickedId);
    if (clickedId !== -1) {
      setIsSpaceValid(true);
    }
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
        {spaces?.map((space: SpaceObjProps) => (
          <SpaceContainer key={space.place_id}>
            {/* <Image src={space.image} alt="공간 이미지" width={72} heigth={72} /> */}
            <SpaceWrapper
              onClick={() => handleClickSpaces(space?.place_id)}
              isClick={clickedId === space?.place_id}>
              <SpaceImage />
              <SpaceInfo isClick={clickedId === space?.place_id}>
                <SpaceName>{space?.name}</SpaceName>
                <SpaceAddress>{space?.address}</SpaceAddress>
                <MaxPeople>
                  <Image
                    src={PeopleIcon}
                    alt="최대명수 아이콘"
                    width={16}
                    height={16}
                  />
                  <span>최대 {space?.maximum}명</span>
                </MaxPeople>
              </SpaceInfo>
            </SpaceWrapper>
            <Divider />
          </SpaceContainer>
        ))}
      </SpaceSection>
      {isSpaceValid ? (
        <Link href="form">
          <AuthorButton />
        </Link>
      ) : (
        <InactiveAuthorModalButton>다음</InactiveAuthorModalButton>
      )}
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
  display: flex;
  gap: 0.4rem;
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.green05};
`;
const Divider = styled.div`
  width: 33.3rem;
  height: 0.1rem;
  background: ${theme.colors.gray11};
`;
const InactiveAuthorModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11.2rem;
  width: 33.5rem;
  height: 5.2rem;
  font: ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.gray07};
  border-radius: 0.375rem;
  background: ${theme.colors.gray11};
  border: none;
`;
