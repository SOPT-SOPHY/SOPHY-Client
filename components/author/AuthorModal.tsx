import React from 'react';
import Image from 'next/image';
import { logincompleteImg } from '../../assets/img';

function AuthorModal() {
  return (
    <div>
      <Image src={logincompleteImg} alt="북토크 개설완료" />
    </div>
  );
}

export default AuthorModal;
