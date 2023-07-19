import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MypageMoreIcon from '../../assets/icon/MypageMoreIcon.svg';

function Card(props: any) {
  const { expected, waiting, completed } = props;
  const router = useRouter();
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>소피와 함께한 북토크</CardTitle>
        <Count onClick={() => router.push('/sophyStory')}>
          {completed === null ? 0 : completed}개
        </Count>
        <Image src={MypageMoreIcon} width={6} height={11} alt="사람" />
      </CardHeader>
      <HorizontalLine />
      <CardBody>
        <ExpectedParticipation>
          <ExpectedParticipationCount>
            {waiting === null ? 0 : waiting}
          </ExpectedParticipationCount>
          <ExpectedTitle>참여예정</ExpectedTitle>
        </ExpectedParticipation>
        <Line />
        <CompletedParticipation>
          <CompletedParticipationCount>
            {expected === null ? 0 : expected}
          </CompletedParticipationCount>
          <CompletedTitle>참여완료</CompletedTitle>
        </CompletedParticipation>
      </CardBody>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  margin-top: 1.4rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 3.2rem;

  width: 33.5rem;
  height: 14.2rem;

  border-radius: 1.1rem;
  background: var(
    --main-gradient,
    linear-gradient(134deg, #61c8c6 2.49%, #57abbe 100%)
  );

  /* sophy_shadow1 */
  box-shadow: 1px 1.8014705181121826px 12px 0px rgba(64, 119, 118, 0.17);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.8rem;
  padding-left: 2rem;
  padding-right: 1.5rem;

  img {
    width: 0.6rem;
    height: 1.1rem;
  }
`;

const CardTitle = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_medium};
  color: ${({ theme }) => theme.colors.white};
`;

const Count = styled.span`
  margin-left: 9.7rem;
  margin-right: 0.8rem;

  ${({ theme }) => theme.fonts.subhead1_bold};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

const HorizontalLine = styled.hr`
  width: 29.8rem;

  margin-left: 2.2rem;
  margin-bottom: 1.6rem;

  border: 1px solid ${({ theme }) => theme.colors.green06};
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21.4rem;
  height: 5.2rem;

  margin-left: 6.1rem;
`;

const Line = styled.hr`
  width: 1px;
  height: 23px;

  border: 1px solid ${({ theme }) => theme.colors.green06};
`;

const ExpectedParticipation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 4.9rem;
  height: 5.2rem;
`;

const ExpectedParticipationCount = styled.h1`
  text-align: center;

  ${({ theme }) => theme.fonts.headline3_medium};
  color: ${({ theme }) => theme.colors.green04};
`;

const ExpectedTitle = styled.h1`
  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.green04};
`;

const CompletedParticipation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 4.9rem;
  height: 5.2rem;
`;

const CompletedParticipationCount = styled.h1`
  text-align: center;

  ${({ theme }) => theme.fonts.headline3_medium};
  color: ${({ theme }) => theme.colors.green04};
`;

const CompletedTitle = styled.h1`
  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.green04};
`;
