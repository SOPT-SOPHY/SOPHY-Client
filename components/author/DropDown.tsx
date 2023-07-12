import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface CategoryProps {
  onClick?: () => void;
}

function DropDown({ giveSelected, giveCategory }) {
  const [clickedCategory, setClickedCategory] = useState<string>('');
  const categories = [
    '인문',
    '문학',
    '예술',
    '과학',
    '일상/취미',
    '어린이 ',
    '청소년',
    'IT/컴퓨터',
    '자기계발',
    '건강/요리',
    '여행',
    '기타',
  ];
  const handleClickCategories = (category: string) => {
    if (clickedCategory === category) {
      setClickedCategory('');
      return;
    }

    setClickedCategory(category);
    // 모달 닫기를 위해 선택되었는지 여부를 상위로 전달
    giveSelected(false);
    giveCategory(category);
  };
  return (
    <ListWrapper>
      <ListSpan />
      {categories.map((category) => (
        <>
          <List onClick={() => handleClickCategories(category)}>
            {category}
          </List>
          <Line />
        </>
      ))}
      <ListSpan />
    </ListWrapper>
  );
}

export default DropDown;
const ListWrapper = styled.ul`
  position: relative;
  flex-shrink: 0;

  width: 33.5rem;
  display: flex;
  flex-direction: column;

  background: ${theme.colors.white};
  border-radius: 0.6rem;
  border: none;
  /* sophy_shadow1 */
  box-shadow: 1px 1.8014705181121826px 12px 0px rgba(64, 119, 118, 0.17);
`;
const List = styled.li<CategoryProps>`
  display: flex;
  align-items: center;
  padding-left: 2rem;

  height: 4.4rem;

  font: ${theme.fonts.body2_regular};
  color: ${theme.colors.gray05};
  z-index: 1;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.gray05};
    font: ${theme.fonts.body2_bold};
    color: ${theme.colors.white};
  }
`;
const ListSpan = styled.span`
  height: 1.2rem;
`;
const Line = styled.div`
  width: 33.5rem;
  height: 0.1rem;

  background: ${theme.colors.gray11};
`;
