import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  // onClick: () => void;
}
const SophyBtn = (props: Props) => {
  const { children } = props;

  // const { onClick, children } = props;
  // const router = useRouter();
  return <St.nextButton type="button">{children}</St.nextButton>;
};

export default SophyBtn;
const St = {
  nextButton: styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
  `,
};
