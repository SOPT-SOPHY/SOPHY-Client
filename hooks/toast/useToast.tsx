import { useRef, useState } from 'react';

interface ToastHookReturnType {
  isOpenToast: boolean;
  toastMsg: string;
  showToast: (msg: string) => void;
}

const useToast = (): ToastHookReturnType => {
  const [toastMsg, setToastMsg] = useState('');
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (msg: string) => {
    setIsOpenToast(true);
    setToastMsg(msg);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsOpenToast(false);
      setToastMsg('');
    }, 3000);
    toastTimer.current = timer;
  };

  return { isOpenToast, toastMsg, showToast };
};

export default useToast;
