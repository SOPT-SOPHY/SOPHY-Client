import { atom } from 'recoil';

export const emailState = atom({
  key: 'email',
  default: '',
});

export const emailErrorState = atom({
  key: 'emailError',
  default: '',
});

export const passwordState = atom({
  key: 'password',
  default: '',
});

export const showPswdState = atom({
  key: 'showPswd',
  default: false,
});

export const showLoginToastState = atom({
  key: 'showLoginToast',
  default: false,
});

export const isLoginAvailableState = atom({
  key: 'isLoginAvailable',
  default: false,
});
