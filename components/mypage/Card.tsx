/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MypageMoreIcon from '../../assets/icon/MypageMoreIcon.svg';
import theme from '../../styles/theme';

function Card(props: any) {
  const { expected, waiting, completed, is_author } = props;
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

      {is_author ? (
        <AuthorCardBody>
          <ExpectedAuthorHolding>
            <ExpectedAuthorHoldingCount>
              {expected === null ? 0 : expected}
            </ExpectedAuthorHoldingCount>
            <ExpectedTitle>개최예정</ExpectedTitle>
          </ExpectedAuthorHolding>
          <Line />
          <ExpectedAuthorParticipation>
            <ExpectedAuthorParticipationCount>
              {waiting === null ? 0 : waiting}
            </ExpectedAuthorParticipationCount>
            <ExpectedTitle>참여예정</ExpectedTitle>
          </ExpectedAuthorParticipation>
          <Line />
          <CompletedAuthorParticipation>
            <CompletedAuthorParticipationCount>
              {completed === null ? 0 : completed}
            </CompletedAuthorParticipationCount>
            <CompletedTitle>참여완료</CompletedTitle>
          </CompletedAuthorParticipation>
        </AuthorCardBody>
      ) : (
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
              {completed === null ? 0 : completed}
            </CompletedParticipationCount>
            <CompletedTitle>참여완료</CompletedTitle>
          </CompletedParticipation>{' '}
        </CardBody>
      )}
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

const AuthorCardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const ExpectedAuthorHolding = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 4.9rem;

  margin-right: 2.5rem;
`;
const ExpectedAuthorHoldingCount = styled.div`
  ${theme.fonts.headline3_medium};
  color: ${theme.colors.green04};
  text-align: center;
  margin-bottom: 0.4rem;
`;

const ExpectedAuthorParticipation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 4.9rem;
  margin-right: 2.5rem;
  margin-left: 2.5rem;
`;
const ExpectedAuthorParticipationCount = styled.div`
  ${theme.fonts.headline3_medium};
  color: ${theme.colors.green04};
  text-align: center;
  margin-bottom: 0.4rem;
`;

const CompletedAuthorParticipation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 4.9rem;
  margin-left: 2.5rem;
`;
const CompletedAuthorParticipationCount = styled.div`
  ${theme.fonts.headline3_medium};
  color: ${theme.colors.green04};
  text-align: center;
  margin-bottom: 0.4rem;
`;
