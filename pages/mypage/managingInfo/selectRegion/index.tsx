/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../../../components/Layout';
import { ColorCheckIcon, GoBackIcon } from '../../../../assets/icon';
import theme from '../../../../styles/theme';
import {
  isRegionChangedState,
  mypageSelectedSpaceState,
} from '../../../../atoms/atom';

function SelectRegion() {
  const router = useRouter();
  const [clickedDong, setClickedDong] = useRecoilState<null | string>(
    mypageSelectedSpaceState,
  );
  const [isRegionChanged, setIsRegionChanged] =
    useRecoilState<boolean>(isRegionChangedState);

  return (
    <Layout noHeader noMenuBar noFooter>
      <Head>
        <Image
          src={GoBackIcon}
          alt="뒤로가기 아이콘"
          onClick={() => {
            router.back();
            setClickedDong(null);
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
            dongName="UIJEONGBU_SI"
            clickedDong={clickedDong}
            onClick={() => setClickedDong('UIJEONGBU_SI')}>
            의정부시 전체
            {clickedDong === 'UIJEONGBU_SI' ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            dongName="UIJEONGBU_DONG"
            clickedDong={clickedDong}
            onClick={() => setClickedDong('UIJEONGBU_DONG')}>
            의정부동
            {clickedDong === 'UIJEONGBU_DONG' ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            dongName="HOWON_DONG"
            clickedDong={clickedDong}
            onClick={() => setClickedDong('HOWON_DONG')}>
            호원동
            {clickedDong === 'HOWON_DONG' ? (
              <Image
                src={ColorCheckIcon}
                alt="클릭되었음을 나타내는 체크 이미지"
              />
            ) : (
              <></>
            )}
          </Dong>
          <Dong
            dongName="JANGAM_DONG"
            clickedDong={clickedDong}
            onClick={() => setClickedDong('JANGAM_DONG')}>
            장암동
            {clickedDong === 'JANGAM_DONG' ? (
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
            dongName="SINGOK_DONG"
            onClick={() => setClickedDong('SINGOK_DONG')}>
            신곡동
            {clickedDong === 'SINGOK_DONG' ? (
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
            dongName="YOUNGHYUN_DONG"
            onClick={() => setClickedDong('YOUNGHYUN_DONG')}>
            용현동
            {clickedDong === 'YOUNGHYUN_DONG' ? (
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
            dongName="MINRAK_DONG"
            onClick={() => setClickedDong('MINRAK_DONG')}>
            민락동
            {clickedDong === 'MINRAK_DONG' ? (
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
            dongName="NAKYANG_DONG"
            onClick={() => setClickedDong('NAKYANG_DONG')}>
            낙양동
            {clickedDong === 'NAKYANG_DONG' ? (
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
            dongName="GEUMO_DONG"
            onClick={() => setClickedDong('GEUMO_DONG')}>
            금오동
            {clickedDong === 'GEUMO_DONG' ? (
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
            dongName="GANEUNG_DONG"
            onClick={() => setClickedDong('GANEUNG_DONG')}>
            가능동
            {clickedDong === 'GANEUNG_DONG' ? (
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
            dongName="NOKYANG_DONG"
            onClick={() => setClickedDong('NOKYANG_DONG')}>
            녹양동
            {clickedDong === 'NOKYANG_DONG' ? (
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
            dongName="GOSAN_DONG"
            onClick={() => setClickedDong('GOSAN_DONG')}>
            고산동
            {clickedDong === 'GOSAN_DONG' ? (
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
      {clickedDong ? (
        <RegionSelectedButton
          type="button"
          onClick={() => {
            setIsRegionChanged(true);
            router.push('/mypage/managingInfo');
          }}>
          완료
        </RegionSelectedButton>
      ) : (
        <InactiveAuthorModalButton>다음</InactiveAuthorModalButton>
      )}
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
  display: flex;
  flex-direction: column;

  width: 14.8rem;

  height: 46.8rem;
  gap: 2.2rem;
  margin-top: 2.4rem;

  overflow-y: auto;
`;

const Dong = styled.div<{ dongName: string; clickedDong: string | null }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 0.8rem;
  padding-right: 0.8rem;

  color: ${(props) =>
    props.dongName === props.clickedDong
      ? theme.colors.primary
      : theme.colors.gray02};

  ${(props) =>
    props.dongName === props.clickedDong
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
const InactiveAuthorModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 4rem;
  width: 33.5rem;
  height: 5.2rem;
  ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.gray07};
  border-radius: 0.375rem;
  background: ${theme.colors.gray11};
  border: none;
`;
