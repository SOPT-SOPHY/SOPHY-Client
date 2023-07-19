/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { ColorCheckIcon, GoBackIcon } from '../../assets/icon';
import theme from '../../styles/theme';
import { memberSelectedSpaceState } from '../../atoms/atom';

function SelectRegion() {
  const router = useRouter();
  const [clickedDong, setClickedDong] = useRecoilState<number>(
    memberSelectedSpaceState,
  );

  const regions = [
    '의정부시 전체',
    '의정부시 가능동',
    '의정부시 가능 1동',
    '의정부시 고산동',
    '의정부시 금오동',
    '의정부시 낙양동',
    '의정부시 녹양동',
    '의정부시 민락동',
    '의정부시 산곡동',
    '의정부시 산곡 1동',
  ];

  return (
    <Layout noHeader noMenuBar noFooter>
      <Head>
        <Image
          src={GoBackIcon}
          alt="뒤로가기 아이콘"
          onClick={() => {
            router.back();
            setClickedDong(0);
          }}
        />
        <PageTitle />
        <TitleBlank />
      </Head>
      <HeadBlank />
      <RegionTitle>지역을 선택해주세요</RegionTitle>
      <RegionWrapper>
        <CityWrapper>
          <City>
            <div style={{ paddingTop: '0.8rem', marginLeft: '1.6rem' }}>
              의정부
            </div>
          </City>
        </CityWrapper>
        <Devider />
        <DongWrapper>
          <Dong
            dongNum={0}
            clickedDong={clickedDong}
            onClick={() => setClickedDong(0)}>
            의정부시 전체
            {clickedDong === 0 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={1}
            onClick={() => setClickedDong(1)}>
            가능동
            {clickedDong === 1 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={2}
            onClick={() => setClickedDong(2)}>
            가능 1동
            {clickedDong === 2 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={3}
            onClick={() => setClickedDong(3)}>
            고산동
            {clickedDong === 3 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={4}
            onClick={() => setClickedDong(4)}>
            금오동
            {clickedDong === 4 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={5}
            onClick={() => setClickedDong(5)}>
            낙양동
            {clickedDong === 5 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={6}
            onClick={() => setClickedDong(6)}>
            녹양동
            {clickedDong === 6 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={7}
            onClick={() => setClickedDong(7)}>
            민락동
            {clickedDong === 7 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={8}
            onClick={() => setClickedDong(8)}>
            산곡동
            {clickedDong === 8 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            clickedDong={clickedDong}
            dongNum={9}
            onClick={() => setClickedDong(9)}>
            신곡1동
            {clickedDong === 9 ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
        </DongWrapper>
      </RegionWrapper>
      <RegionSelectedButton
        type="button"
        onClick={() => router.push(`/booktalk/search/${regions[clickedDong]}`)}>
        선택완료
      </RegionSelectedButton>
    </Layout>
  );
}

export default SelectRegion;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: ${theme.colors.white};

  width: 37.5rem;
`;

const HeadBlank = styled.div`
  width: 37.5rem;
  height: 4.4rem;
`;

const PageTitle = styled.div`
  ${theme.fonts.subhead2_bold};
`;

const TitleBlank = styled.div`
  width: 4.4rem;
  height: 4.4rem;
`;

const RegionTitle = styled.div`
  width: 33.5rem;
  ${theme.fonts.subhead1_bold};

  margin-top: 4.5rem;
  margin-bottom: 1.6rem;
`;

const RegionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 33.5rem;
  height: 50rem;

  border-radius: 0.8rem;
  background-color: ${theme.colors.gray12};
`;

const CityWrapper = styled.div`
  width: 14.8rem;
  height: 43.8rem;

  margin-top: 1.6rem;
  margin-left: 1rem;
  margin-right: 1.6rem;
`;

const City = styled.div`
  width: 14.8rem;
  height: 4rem;

  border-radius: 0.6rem;

  background-color: ${theme.colors.green05};
  color: ${theme.colors.green01};

  ${theme.fonts.subhead4_bold};
`;

const Devider = styled.div`
  width: 0.1rem;
  height: 46.8rem;

  background-color: ${theme.colors.gray10};

  margin-right: 1.2rem;
  margin-top: 1.6rem;
`;

const DongWrapper = styled.div`
  width: 14.1rem;
  height: 50rem;

  margin-top: 2.4rem;
`;

const Dong = styled.div<{ dongNum: number; clickedDong: number | null }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 14.1rem;
  height: 2.4rem;

  margin-bottom: 2.2rem;

  color: ${(props) =>
    props.dongNum === props.clickedDong
      ? theme.colors.primary
      : theme.colors.gray02};

  ${(props) =>
    props.dongNum === props.clickedDong
      ? theme.fonts.subhead4_bold
      : theme.fonts.body1_medium};

  cursor: pointer;
`;

const RegionSelectedButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  border: none;
  border-radius: 0.6rem;

  margin-top: 4.5rem;
  margin-bottom: 4rem;
`;
