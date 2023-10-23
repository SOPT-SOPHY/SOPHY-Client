/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const accessTokenFromCookie = Cookies.get('accessToken');

// url 호출 시 기본 값 셋팅
const api = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${accessTokenFromCookie}` }, // data type
});

api.interceptors.request.use(
  function (config: any) {
    const accessToken = Cookies.get('accessToken');

    // 요청시 AccessToken 계속 보내주기
    if (!accessToken) {
      config.headers.Authorization = null;
      return config;
    }

    if (config.headers && accessToken) {
      // const { accessToken } = JSON.parse(accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    console.log('에러입니다', error.response.data);
    if (status === 401) {
      if (error.response.data.message === '만료된 액세스 토큰입니다.') {
        const originalRequest = config;
        const refreshTokenFromCookie = await Cookies.get('refreshToken');
        try {
          const { data } = await axios.post(`${baseURL}/auth/reissue`, null, {
            headers: {
              Refresh: refreshTokenFromCookie,
              Authorization: `Bearer ${accessTokenFromCookie}`,
              accept: 'application/json;charset=UTF-8',
            },
          });
          // eslint-disable-next-line camelcase
          const { accessToken, refreshToken } = data.data;
          Cookies.set('accessToken', accessToken);
          Cookies.set('refreshToken', refreshToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          originalRequest.headers.Refresh = refreshToken;
          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          return api(originalRequest);
        } catch (e: any) {
          if (
            e?.response?.data.message ===
            '로그아웃 하여 리프레시 토큰이 존재하지 않는 상태입니다.'
          ) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            alert('로그인 정보가 만료되었습니다. 다시 로그인 해주세요.');
          }
          if (
            e?.response?.data.message ===
            '리프레시 토큰의 정보가 일치하지 않습니다.'
          ) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            alert('로그인 정보가 만료되었습니다. 다시 로그인 해주세요.');
          }
          if (
            error.response.data.message === '유효하지 않은 액세스 토큰입니다.'
          ) {
            alert('로그인 후 이용해 주세요.');
            Router.push('/auth/login');
          }
        }
      }
    }
    if (status === 404) {
      if (error.response.data.message === '존재하지 않는 유저입니다') {
        alert('로그인 후 이용해 주세요.');
        Router.push('/auth/login');
      }
    }

    return Promise.reject(error);
  },
);

export default api;
