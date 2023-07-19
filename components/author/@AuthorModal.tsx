import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import theme from '../../styles/theme';
import { BookIcon } from '../../assets/icon';
import { usePostBookTalkOpen } from '../../hooks/queries/author';
import { formComplete } from '../../atoms/selector';

function AuthorModal({ onClose }: any) {
  const form = useRecoilValue(formComplete);
  const { mutate, data } = usePostBookTalkOpen();
  const handleOpen = () => {
    mutate(form);
    console.log(data);
  };
  return (
    <ModalSection>
      <ModalBackground />
      <Modal>
        <Image
          src={BookIcon}
          alt="북토크 알림"
          width={48}
          height={48}
          style={{ marginTop: '2.2rem' }}
        />
        <ModalTitle>북토크 개설을 신청하시겠어요?</ModalTitle>
        <ModalSubTitle>
          공간 매칭 완료 전까지 북토크 철회가 가능해요
        </ModalSubTitle>
        <ButtonWrapper>
          <ModalCancelButton type="button" onClick={onClose}>
            취소
          </ModalCancelButton>
          <Link href="confirm">
            <ModalConfirmButton type="button" onClick={handleOpen}>
              신청하기
            </ModalConfirmButton>
          </Link>
        </ButtonWrapper>
      </Modal>
    </ModalSection>
  );
}

export default AuthorModal;
const ModalSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Modal = styled.div`
  position: absolute;
  top: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 33.5rem;
  height: 23rem;

  background-color: ${theme.colors.white};
  border-radius: 1.2rem;
`;
const ModalTitle = styled.h1`
  margin-top: 1.2rem;
  fonts: ${theme.fonts.subhead2_bold};
  color: ${theme.colors.black};
`;
const ModalSubTitle = styled.h2`
  margin-top: 0.6rem;
  fonts: ${theme.fonts.body2_medium};
  color: ${theme.colors.gray06};
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  margin-top: 3.2rem;
`;
const ModalCancelButton = styled.button`
  width: 14.1rem;
  height: 4.7rem;

  border-radius: 0.6rem;
  border: none;

  fonts: ${theme.fonts.subhead3_semibold};
  background: ${theme.colors.gray11};
  color: ${theme.colors.gray07};
`;

const ModalConfirmButton = styled.button`
  width: 14.1rem;
  height: 4.7rem;

  border-radius: 0.6rem;
  border: none;

  fonts: ${theme.fonts.subhead3_semibold};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
