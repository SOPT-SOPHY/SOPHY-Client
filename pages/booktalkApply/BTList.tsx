import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import theme from '../../styles/theme';
import btnUp from '../../assets/icon/btn_up.svg';
import btnDown from '../../assets/icon/btn_down.svg';
import SingleBookTalk from '../../components/booktalkApply/SingleBookTalk';
import backArrow from '../../assets/icon/ic_backArrow.svg';
import {
  NavBookGrayIcon,
  NavHomeColorIcon,
  NavPersonGrayIcon,
  NavPinGrayIcon,
} from '../../assets/icon';

interface CountryProps {
  alpha3Code: string;
  flag: { large: string };
  name: string;
  population: number;
  region: string | string[];
  capital: string;
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json',
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

function BTList() {
  const router = useRouter();
  const { region } = router.query;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen: boolean) => !prevIsOpen);
  };

  const handleRegionSelect = () => {
    setIsOpen(false);
  };

  const {
    data: fetchedItems,
    // isLoading,
    error,
  } = useQuery<CountryProps[], Error | AxiosError>('countries', fetchData);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filterItems = (data: CountryProps[] | null, filterParam: string) => {
    // if (filteredItems) {
    //   const values: CountryProps[] = [];
    //   for (const key in filteredItems) {
    //     if (filteredItems[key].region === filterParam) {
    //       values.push(filteredItems[key]);
    //     }
    //   }
    //   return values;
    // }
    // return [];
    const values: CountryProps[] = [];
    if (filterParam === 'All' && data) {
      Object.keys(data).forEach((key: string) => {
        const item: CountryProps = data[key];
        values.push(item);
      });
      return values;
    }
    if (data) {
      Object.keys(data).forEach((key: string) => {
        const item: CountryProps = data[key];
        if (item.region === filterParam) {
          values.push(item);
        }
      });
      return values;
    }

    return [];
  };

  const resultItems = fetchedItems
    ? filterItems(fetchedItems, region as string)
    : [];

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
          <SubTitle>{region}</SubTitle>
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
              {region}
            </DropdownItem>
            <DropdownButton onClick={() => router.back()}>
              지역 선택
            </DropdownButton>
          </DropdownBox>
        </DropdownContainer>
      )}
      <SingleBookTalkContainer>
        {resultItems.map((item) => (
          <SingleBookTalk key={item.alpha3Code} item={item} />
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
