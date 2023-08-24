import React from 'react';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';
import Image from 'next/image';
import { GoBackIcon } from '../../assets/icon';

function GoBackButton() {
  const router = useRouter();
  return (
    <GoBackImageWrapper>
      <GoBackImage
        src={GoBackIcon}
        alt="뒤로가기 아이콘"
        onClick={() => router.push('/auth')}
      />
    </GoBackImageWrapper>
  );
}

export default GoBackButton;

const GoBackImageWrapper = styled.div`
  width: 37.5rem;
`;

const GoBackImage = styled(Image)`
  cursor: pointer;
`;
