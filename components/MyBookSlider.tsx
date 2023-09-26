/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from '../styles/theme';

const ContainerWrapper = styled.div`
  width: 37.5rem;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 75rem;
  margin-left: -35.5rem;
`;

const StyledSlider = styled(Slider as any)`
  .slick-slide div {
    outline: none;
  }
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin: auto 0;
    padding: 0;
    margin-top: 0.7rem;
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
  .slick-list {
    height: 18rem;
    padding: 0 2rem;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  .title {
    font-size: 15px;
    font-weight: 700;
    margin-top: 0.8rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
  }
  .author {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme.colors.gray05};
    margin-top: 0.2rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
  }
`;
const ImageContainer = styled.img`
  width: 9.4rem;
  height: 14.2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const BlankImageContainer = styled.div`
  width: 12.7rem;
  height: 10rem;
  background-color: ${theme.colors.white};
  border-radius: 1rem 1rem 0 0;
`;

const BlankDdayContainer = styled.div`
  width: 12.7rem;
  height: 2.8rem;
  border-radius: 0 0 1rem 1rem;
  background-color: white;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SimpleSlider(props: any) {
  const { booktalkList } = props;
  console.log(booktalkList);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  return (
    <ContainerWrapper>
      <Container>
        <StyledSlider {...settings}>
          {booktalkList?.map((item: any) => (
            <SliderItem key={item}>
              <ImageContainer
                src={item?.book_image_url}
                alt="나의 도서 썸네일"
              />
            </SliderItem>
          ))}
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
        </StyledSlider>
      </Container>
    </ContainerWrapper>
  );
}
