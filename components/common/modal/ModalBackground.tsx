import { styled } from 'styled-components';

const ModalBackground = (props: any) => {
  return <SModalBackground {...props} />;
};

export default ModalBackground;

const SModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
