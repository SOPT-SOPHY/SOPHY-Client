import { useRef, useState } from 'react';

interface ToastHookReturnType {
  isOpenToast: boolean;
  msg: string;
  showToast: (msg: string) => void;
}

const useToast = (): ToastHookReturnType => {
  const [msg, setMsg] = useState('');
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (msg: string) => {
    setIsOpenToast(true);
    setMsg(msg);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsOpenToast(false);
      setMsg('');
    }, 3000);
    toastTimer.current = timer;
  };

  return { isOpenToast, msg, showToast };
};

export default useToast;
