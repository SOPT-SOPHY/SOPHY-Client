/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const accessToken = Cookies.get('accessToken');

// url 호출 시 기본 값 셋팅
const api = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${accessToken}` }, // data type
});

// Add a request interceptor
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
    // Do something before request is sent
    console.log('request start', config);
  },
  function (error) {
    // Do something with request error
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
      if (error.response.data.message === '만료된 액세스 토큰입니다.') {
        const originalRequest = config;
        const refreshToken = await Cookies.get('refreshToken');
        // token refresh 요청
        try {
          const { data } = await axios.post(
            `${baseURL}/auth/reissue`, // token refresh api
            {
              access_token: accessToken,
              refresh_token: refreshToken,
              access_token_expired_time: 5,
              refresh_token_expired_time: 10,
            },
          );
          // 리프레시 토큰 에러처리
          // 새로운 토큰 저장
          // eslint-disable-next-line camelcase
          const { access_token, refresh_token } = data.data;
          console.log(data);
          console.log(access_token);
          console.log(refresh_token);
          Cookies.set('accessToken', access_token);
          Cookies.set('refreshToken', refresh_token);
          originalRequest.headers.authorization = `Bearer ${access_token}`;
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
