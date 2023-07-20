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
  width: 50rem;
  margin-left: -16rem;
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
const ImageContainer = styled.div`
  width: 12.7rem;
  height: 10rem;
  background-color: ${theme.colors.gray12};
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;
`;

const BlankImageContainer = styled.div`
  width: 12.7rem;
  height: 10rem;
  background-color: ${theme.colors.white};
  border-radius: 1rem 1rem 0 0;
`;

const DdayContainer = styled.div`
  width: 12.7rem;
  height: 2.8rem;
  border-radius: 0 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  // const today = new Date();
  // const month = today.getMonth() + 1;
  // const day = today.getDate();

  const countDday = (dDay: any) => {
    const setDate = new Date(dDay);
    // D-day 날짜의 연,월,일 구하기
    // const setDateYear = setDate.getFullYear();
    // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
    // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
    const now = new Date();

    // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
    const distance = setDate.getTime() - now.getTime();

    // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
    // 밀리초 값이기 때문에 1000을 곱한다.
    // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
    // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    return day;
  };

  return (
    <ContainerWrapper>
      <Container>
        <StyledSlider {...settings}>
          {booktalkList?.map((item: any) => (
            <SliderItem key={item}>
              <ImageContainer />
              <DdayContainer>D-{countDday(item?.start_date)}</DdayContainer>
              <div className="title">{item?.title}</div>
              <div className="author">{item?.author} 작가</div>
            </SliderItem>
          ))}
          <SliderItem>
            <BlankImageContainer />
            <BlankDdayContainer />
          </SliderItem>
        </StyledSlider>
      </Container>
    </ContainerWrapper>
  );
}
