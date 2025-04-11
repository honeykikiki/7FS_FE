import axios from "axios";

// export const url = "http://39.119.222.230:8080/";
export const URL = "http://localhost/";

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: URL, // API 기본 URL 설정
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
  (error) => {
    const hasRedirected = localStorage.getItem("hasRedirected") === "true";
    // 네트워크 에러인 경우
    console.log("error", error);

    if ((hasRedirected === true && error.response?.status === 403) || error.response?.status === 302) {
      localStorage.setItem("hasRedirected", "false");
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  },
);

export default apiClient;
