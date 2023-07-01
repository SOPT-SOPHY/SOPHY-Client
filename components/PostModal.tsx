import { useState } from 'react';
import styled from 'styled-components';
import Modal from './ModalPractice';
import ModalPortal from './ModalPortal';

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickButton = () => {
    setIsModalOpen(true);
  };

  return (
    <AppWrap>
      <Button type="button" onClick={onClickButton}>
        신청하기
      </Button>
      {isModalOpen && (
        <ModalPortal>
          <Modal
            open={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </ModalPortal>
      )}
    </AppWrap>
  );
};

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;
export default Post;
