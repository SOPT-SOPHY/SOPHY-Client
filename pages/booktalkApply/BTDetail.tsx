import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import backArrow from '../../assets/icon/ic_backArrow.svg';
import detailImage from '../../assets/img/detailImage.png';
import BTInfo from '../../components/booktalkApply/BTInfo';
// import BTData from '../../data/BTData';
import CheckBox from '../../components/booktalkApply/CheckBox';
import { useFetchBookTalkDetail } from '../../hooks/queries/booktalk';

function BTDetail() {
  // const router = useRouter();
  const id = 1;
  const data = useFetchBookTalkDetail(id as number);
  // const filteredData = BTData.filter((data) => data.id === 1);
  useEffect(() => {
    console.log(data);
  }, []);
  // if (!data) return;
  return (
    <Body>
      <Header>
        <Link href="/booktalkApply/BTList">
          <ImageContainer>
            <Image src={backArrow} width={44} height={44} alt="뒤로가기" />
          </ImageContainer>
        </Link>
        <Title>북토크 상세정보</Title>
      </Header>
      {/* <hr style={{ borderTop: '1px solid #F6F7FA' }} /> */}
      <DetailImg>
        <Image src={detailImage} width={335} height={184} alt="북토크이미지" />
      </DetailImg>
      <div>
        {/* {filteredData.map((data) => {
        return ( */}
        <BTInfo
          // key={data?.id}
          // booktalk_image_url={data?.booktalk_image_url}
          title={data?.title}
          author={data?.author}
          book_category={data?.book_category}
          book={data?.book}
          start_date={data?.start_date}
          participant={data?.participant}
          participation_fee={data?.participation_fee}
          preliminary_info={data?.preliminary_info}
          description={data?.description}
          place_name={data?.place_name}
          place_address={data?.place_address}
        />
      </div>
      <CheckBox />
    </Body>
  );
}

export default BTDetail;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.gray11};
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

const DetailImg = styled.div`
  margin-top: 2.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.9rem;

  img {
    width: 33.5rem;
    height: 18.4rem;
    flex-shrink: 0;
  }
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
