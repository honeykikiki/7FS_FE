import axios from "axios";

// export const url = "http://39.119.222.230:8080/";
export const url = "http://localhost/";
let hasRedirected = false; // 인터셉터 바깥에 선언

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: url, // API 기본 URL 설정
  timeout: 10000, // 요청 타임아웃 설정
  headers: {
    // "Content-Type": "application/json",
    // "X-AUTH-TOKEN": `${localStorage.getItem("X-AUTH-TOKEN")}`,
  },
  withCredentials: true,
});

// 요청 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    // 요청이 보내지기 전에 수행할 작업
    return config;
  },
  (error) => {
    // 요청 오류가 있는 경우 수행할 작업
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터 처리
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // console.log("originalRequest.url", originalRequest.url);
    // console.log("error", error.response?.status);

    if (
      !hasRedirected &&
      originalRequest.url !== "/api/token/refresh" &&
      error.response?.status === 401 // 예시로 401 에러만 처리
    ) {
      hasRedirected = true;
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  },
);

export default apiClient;
