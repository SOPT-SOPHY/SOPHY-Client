import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import backArrow from '../../../assets/icon/ic_backArrow.svg';
import BTInfo from '../../../components/booktalkApply/BTInfo';
import CheckBox from '../../../components/booktalkApply/CheckBox';
import { useFetchBookTalkDetail } from '../../../hooks/queries/booktalk';
import PageTitle from '../../../components/common/Title/PageTitle';
import BooktalkImage from '../../../components/common/booktalk/BooktalkImage';
import BootalkDetailHead from '../../../components/booktalk/detail/BootalkDetailHead';
import BootalkDetailContent from '../../../components/booktalk/detail/BootalkDetailContent';

function BTDetail() {
  const router = useRouter();
  const id = router.query;
  const data = useFetchBookTalkDetail(id?.booktalkId);

  return (
    <div>
      <PageTitle pageTitleText="북토크 상세정보" booktalkDetail={true} />
      <BooktalkBlank />
      <div style={{ marginLeft: '2rem' }}>
        <BooktalkImage
          preliminaryInfo={data.preliminaryInfo}
          booktalkImageUrl={data?.booktalkImageUrl}
          startDate={data.startDate}
          width={335}
          height={184}
        />
      </div>
      <BootalkDetailHead data={data} />
      <BootalkDetailContent data={data} />
      <CheckBox booktalkId={id?.booktalkId} data={data} />
    </div>
  );
}

export default BTDetail;

const BooktalkBlank = styled.div`
  width: 100%;
  height: 3.2rem;
`;
