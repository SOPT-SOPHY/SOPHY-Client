import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import backArrow from '../../../assets/icon/ic_backArrow.svg';
import BTInfo from '../../../components/booktalkApply/BTInfo';
// import BTData from '../../data/BTData';
import CheckBox from '../../../components/booktalkApply/CheckBox';
import { useFetchBookTalkDetail } from '../../../hooks/queries/booktalk';
import PageTitle from '../../../components/common/Title/PageTitle';
import BooktalkImage from '../../../components/common/booktalk/BooktalkImage';

function BTDetail() {
  const router = useRouter();
  const id = router.query;
  const data = useFetchBookTalkDetail(id?.booktalkId);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Body>
      <PageTitle pageTitleText="북토크 상세정보" booktalkDetail={true} />
      {/* <hr style={{ borderTop: '1px solid #F6F7FA' }} /> */}
      <DetailImg>
        <DetailImageContainer
          src={data?.booktalk_image_url}
          alt="북토크 상세 이미지"
        />
      </DetailImg>

      <div>
        <BTInfo
          title={data?.title}
          author={data?.author}
          bookCategory={data?.bookCategory}
          book={data?.book}
          startDate={data?.startDate}
          endDate={data?.endDate}
          participant={data?.participant}
          participationFee={data?.participationFee}
          preliminaryInfo={data?.preliminaryInfo}
          description={data?.description}
          placeName={data?.placeName}
          placeAddress={data?.placeAddress}
        />
      </div>
      <CheckBox booktalkId={id?.booktalkId} />
    </Body>
  );
}

export default BTDetail;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};
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

  top: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

const DetailImg = styled.div`
  /* 이미지 가운데 정렬 위해 수정했어요!*/

  display: flex;
  justify-content: center;
  margin-top: 6.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.9rem;
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

const DetailImageContainer = styled.img`
  width: 18.4rem;
  height: 18.4rem;
`;
