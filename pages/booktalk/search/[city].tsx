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
  NavHomeGrayIcon,
  NavPersonGrayIcon,
  NavPinColorIcon,
} from '../../../assets/icon';
import { useFetchBooktalkRegion } from '../../../hooks/queries/booktalk';
import Footer from '../../../components/common/Footer/Footer';

interface BooktalkProps {
  booktalkId: number;
  preliminaryInfo: string;
  title: string;
  author: string;
  startDate: string;
  endDate: string;
  place: string;
  participant: number;
  maximum: number;
  booktalkImageUrl: string;
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

  const handleBooktalkClick = (booktalkId: number) => {
    router.push(`/booktalk/${booktalkId}/detail`);
    console.log(booktalkId);
  };

  const handlePreviousButtonClick = () => {
    router.back();
  };

  const decodeCity = (city: string) => {
    switch (city) {
      case 'UIJEONGBU_SI':
        return '의정부시 전체';
      case 'UIJEONGBU_DONG':
        return '의정부시 의정부동';
      case 'HOWON_DONG':
        return '의정부시 호원동';
      case 'NOKYANG_DONG':
        return '의정부시 녹양동';
      case 'NAKYANG_DONG':
        return '의정부시 낙양동';
      case 'MINRAK_DONG':
        return '의정부시 민락동';
      case 'SINGOK_DONG':
        return '의정부시 신곡동';
      case 'JANGAM_DONG':
        return '의정부시 장암동';
      case 'GANEUNG_DONG':
        return '의정부시 가능동';
      case 'GOSAN_DONG':
        return '의정부시 고산동';
      case 'GEUMO_DONG':
        return '의정부시 금오동';
      case 'YOUNGHYUN_DONG':
        return '의정부시 용현동';
      default:
        return '';
    }
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
        <ImageContainer>
          <Image
            src={backArrow}
            width={30}
            height={30}
            alt="뒤로가기"
            onClick={handlePreviousButtonClick}
          />
        </ImageContainer>
        <Title>우리 동네 북토크</Title>
      </Header>
      <SelectBoxContainer>
        <SelectBox onClick={handleDropdownToggle}>
          <SubTitle>{decodeCity(city as string)}</SubTitle>
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
              {decodeCity(city as string)}
            </DropdownItem>
            <Link href="/booktalkApply/SelectRegion">
              <DropdownButton>지역 선택</DropdownButton>
            </Link>
          </DropdownBox>
        </DropdownContainer>
      )}
      <SingleBookTalkContainer>
        {booktalkList &&
          booktalkList.map((item: BooktalkProps) => (
            <SingleBookTalk
              key={item?.booktalkId}
              item={item}
              onClick={() => handleBooktalkClick(item?.booktalkId)}
            />
          ))}
      </SingleBookTalkContainer>
      <Footer />
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

  /* border: 2px solid ${({ theme }) => theme.colors.gray11}; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  cursor: pointer;

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
  display: flex;
  /* position: fixed; */
  width: 37.5rem;
  height: 5.2rem;
  /* top: 4.4rem; */

  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectBox = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  height: 2.4rem;
  /* z-index: 2; */

  margin-top: 1.6rem;
  margin-left: 2.2rem;

  gap: 0.2rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const DropdownContainer = styled.div`
  position: absolute;

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
  height: 100%;
  /* margin-top: 9.7rem; */
  margin-bottom: 8.3rem;
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
`;
