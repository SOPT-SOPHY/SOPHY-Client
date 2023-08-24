/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';

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
    console.log('request start', config);
  },
  function (error) {
    console.log('request error', error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    console.log('get response', response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    console.log('에러입니다', error.response.data);
    if (status === 401) {
      console.log('error message', error);
      if (error.response.data.message === '만료된 액세스 토큰입니다.') {
        const originalRequest = config;
        const refreshTokenFromCookie = await Cookies.get('refreshToken');
        // token refresh 요청
        try {
          const { data } = await axios.post(`${baseURL}/auth/reissue`, null, {
            headers: {
              Refresh: refreshTokenFromCookie,
              Authorization: `Bearer ${accessTokenFromCookie}`,
            },
          });
          // 리프레시 토큰 에러처리
          // 새로운 토큰 저장
          // eslint-disable-next-line camelcase
          const { accessToken, refreshToken } = data.data;
          console.log(`data: ${data}`);
          console.log(accessToken);
          console.log(refreshToken);
          Cookies.set('accessToken', accessToken);
          Cookies.set('refreshToken', refreshToken);
          originalRequest.headers.authorization = `Bearer ${accessToken}`;
          originalRequest.headers.Refresh = refreshToken;
          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          return api(originalRequest);
        } catch (e: any) {
          console.log(e);
          if (e?.response?.data.message === '만료된 리프레시 토큰입니다.') {
            console.log('리프레시 에러');
            console.log(e);
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            alert('로그인 정보가 만료되었습니다. 다시 로그인 해주세요.');
          }
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
