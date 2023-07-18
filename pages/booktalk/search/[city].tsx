import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import { useQuery } from 'react-query';
// import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import theme from '../../../styles/theme';
import btnUp from '../../../assets/icon/btn_up.svg';
import btnDown from '../../../assets/icon/btn_down.svg';
import SingleBookTalk from '../../../components/booktalkApply/SingleBookTalk';
import backArrow from '../../../assets/icon/ic_backArrow.svg';
import {
  NavBookGrayIcon,
  NavHomeColorIcon,
  NavPersonGrayIcon,
  NavPinGrayIcon,
} from '../../../assets/icon';
import { useFetchBooktalkRegion } from '../../../hooks/queries/booktalk';

interface BooktalkProps {
  booktalk_id: number;
  preliminary_info: string;
  title: string;
  author: string;
  start_date: string;
  end_date: string;
  place: string;
  participant: number;
  maximum: number;
  booktalk_image_url: string;
}

function BTList() {
  const router = useRouter();
  const { city } = router.query;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [booktalkList] = useFetchBooktalkRegion(city as string);

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen: boolean) => !prevIsOpen);
  };

  const handleRegionSelect = () => {
    setIsOpen(false);
  };

  //   const filterItems = (data: BooktalkProps[] | null, filterParam: string) => {
  //     const values: BooktalkProps[] = [];
  //     if (filterParam === 'All' && data) {
  //       values.push(...data);
  //     } else if (data) {
  //       values.push(...data.filter((item) => item.place === filterParam));
  //       console.log(values);
  //     }
  //     return values;
  //   };

  //   const resultItems = filterItems(booktalkList, selectedCity);

  //   const handleNextButtonClick = () => {
  //     router.push(`/booktalk/search/${city}`);
  //   };

  return (
    <Body>
      <Header>
        <Link href="/booktalkApply/SelectRegion">
          <ImageContainer>
            <Image src={backArrow} width={30} height={30} alt="뒤로가기" />
          </ImageContainer>
        </Link>
        <Title>우리 동네 북토크</Title>
      </Header>
      <SelectBoxContainer>
        <SelectBox onClick={handleDropdownToggle}>
          <SubTitle>{city}</SubTitle>
          <Image
            src={isOpen ? btnUp : btnDown}
            width={24}
            height={24}
            alt="selectBox 띄우기 버튼"
          />
        </SelectBox>
      </SelectBoxContainer>
      {isOpen && (
        <DropdownContainer>
          <DropdownBox>
            <DropdownItem onClick={() => handleRegionSelect()}>
              {city}
            </DropdownItem>
            <DropdownButton onClick={() => router.back()}>
              지역 선택
            </DropdownButton>
          </DropdownBox>
        </DropdownContainer>
      )}
      <SingleBookTalkContainer>
        {booktalkList &&
          booktalkList.map((item: BooktalkProps) => (
            <SingleBookTalk key={item?.booktalk_id} item={item} />
          ))}
      </SingleBookTalkContainer>
      <FooterWrapper>
        <Footer>
          <IconsWrapper>
            <IconWrapper>
              <Image src={NavHomeColorIcon} alt="홈 화면 바로가기 아이콘" />
              <IconText>홈</IconText>
            </IconWrapper>
            <IconWrapper>
              <Image src={NavPinGrayIcon} alt="지역 화면 바로가기 아이콘" />
              <UnClickedIconText>지역</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavBookGrayIcon}
                alt="소피스토리 화면 바로가기 아이콘"
              />
              <UnClickedIconText>소피스토리</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image src={NavPersonGrayIcon} alt="MY 페이지 바로가기 아이콘" />
              <UnClickedIconText>MY</UnClickedIconText>
            </IconWrapper>
          </IconsWrapper>
        </Footer>
      </FooterWrapper>
    </Body>
  );
}

export default BTList;

const Body = styled.div`
  position: relative;
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 2px solid ${({ theme }) => theme.colors.gray11};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: fixed;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 12.8rem;
`;

const SelectBoxContainer = styled.div`
  position: fixed;
  width: 37.5rem;
  height: 5.3rem;
  top: 4.4rem;

  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectBox = styled.button`
  display: flex;
  align-items: center;

  height: 2.4rem;
  /* z-index: 2; */

  margin-top: 2.1rem;
  margin-left: 2rem;

  gap: 0.2rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const DropdownContainer = styled.div`
  position: fixed;

  top: 9.7rem;
  margin-left: 2rem;
  z-index: 3;
`;

const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 22.7rem;
  height: 9.2rem;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  /* sophy_shadow1 */
  box-shadow: 1px 1.8014705181121826px 12px 0px rgba(64, 119, 118, 0.17);
`;

const DropdownItem = styled.button`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  background-color: transparent;
`;

const DropdownButton = styled.button`
  position: absolute;
  top: 5.2rem;
  left: 1.6rem;

  ${({ theme }) => theme.fonts.body1_medium};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  background-color: transparent;
`;

const SingleBookTalkContainer = styled.div`
  width: 37.5rem;
  margin-top: 9.7rem;
  margin-bottom: 8.3rem;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 37.5rem;
  height: 8.3rem;

  padding-left: 3rem;
  padding-right: 3rem;

  margin-top: 1rem;

  background-color: ${theme.colors.white};

  box-shadow: 0rem -0.4rem 0.8rem rgba(54, 57, 60, 4%);
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 4.9rem;
  height: 5.1rem;
`;

const IconText = styled.div`
  color: ${theme.colors.green06};
  ${theme.fonts.caption};
  text-align: center;
`;

const UnClickedIconText = styled.div`
  color: ${theme.colors.gray06};
  ${theme.fonts.caption};
  text-align: center;
`;

const IconsWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
`;