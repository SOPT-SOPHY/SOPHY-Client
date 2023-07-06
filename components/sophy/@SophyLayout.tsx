import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
const SophyLayout = (props: LayoutProps) => {
  const { children, title } = props;
  console.log(title);

  return (
    <>
      <St.Header>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>{title}</span>
      </St.Header>
      {children}
    </>
  );
};

export default SophyLayout;
const St = {
  Header: styled.header`
    padding: 2rem;
    font-size: 3rem;
  `,
};
