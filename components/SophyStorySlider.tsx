/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SophyStoryRedCardImg, SophyStoryBlueCardImg } from '../assets/img';
import theme from '../styles/theme';

export default function SophyStorySlider(props: any) {
  const { sophyStory } = props;
  // console.log(data);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    dotsClass: 'dots_custom',
  };
  return (
    <ContainerWrapper>
      <Container>
        <StyledSlider {...settings}>
          {sophyStory?.map((item: any) => (
            <ImageContainer key={item}>
              <SophyStoryCard
                image={
                  item?.book_category === 'LITERATURE'
                    ? SophyStoryRedCardImg
                    : SophyStoryBlueCardImg
                }>
                <CardTitle>{item?.title}</CardTitle>
                <BookName>「{item?.book_name}」</BookName>
                <AuthorName>{item?.author_name} 작가</AuthorName>
                <DateAndPlace>
                  {item?.booktalk_date?.slice(2, 4)}년{' '}
                  {item?.booktalk_date?.slice(5, 7)}월{' '}
                  {item?.booktalk_date?.slice(8, 10)}일 {item?.place_name}
                </DateAndPlace>
              </SophyStoryCard>
            </ImageContainer>
          ))}
        </StyledSlider>
      </Container>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  width: 37.5rem;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Container = styled.div`
  width: 40rem;
  margin-left: -1.8rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin: auto 0;
    padding: 0;
    margin-top: 2.6rem;
  }
  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline;
    margin: 0 0.2rem;
    padding: 0;
  }
  .dots_custom li button {
    border: none;
    background: ${theme.colors.gray10};
    color: transparent;
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: ${theme.colors.primary};
    width: 1rem;
    height: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const ImageContainer = styled.div`
  width: 30.3rem;
  height: 32.3rem;
  display: flex;
  align-items: center;
`;

const SophyStoryCard = styled.div<{ image: any }>`
  background-image: url(${(props) => props.image.src});
  width: 100%;
  height: 37.9rem;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const CardTitle = styled.div`
  width: 13rem;
  ${theme.fonts.headline2_bold};
  color: ${theme.colors.white};

  margin-left: 3.5rem;
  padding-top: 9.8rem;
`;

const BookName = styled.div`
  ${theme.fonts.body2_medium};
  color: rgba(255, 255, 255, 0.75);

  padding-top: 0.8rem;
  margin-left: 3.5rem;
`;

const AuthorName = styled.div`
  ${theme.fonts.body2_medium};
  color: rgba(255, 255, 255, 0.75);

  margin-left: 3.5rem;
  margin-bottom: 6.1rem;
`;

const DateAndPlace = styled.div`
  ${theme.fonts.body3_regular};
  color: rgba(255, 255, 255, 0.75);

  margin-left: 3.5rem;
`;
