import Toast from './Toast';
import useToast from '../hooks/useToast';

const ToastCom = () => {
  const toastHook = useToast();
  const { isOpenToast, msg, showToast } = toastHook;

  const handleClick = () => {
    showToast('신청이 완료되었습니다.(토스트 3초 띄우기)');
  };

  return (
    <div>
      <button onClick={handleClick}>토스트 띄우기</button>
      {isOpenToast && <Toast msg={msg} />}
    </div>
  );
};

export default ToastCom;
