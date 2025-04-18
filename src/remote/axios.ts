import axios from "axios";
import { refreshToken } from "./auth";

// export const url = "http://39.119.222.230:8080/";
export const DEFAULT_URL = "http://localhost/";
// export const URL = "http://192.168.44.32/"; // 학원용

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: DEFAULT_URL, // API 기본 URL 설정
  timeout: 10000, // 요청 타임아웃 설정
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
    const hasRedirected = (localStorage.getItem("hasRedirected") ?? "true") === "true";
    // 네트워크 에러인 경우
    // console.log("error", error);
    // console.log("hasRedirected", hasRedirected);
    // console.log(error.response?.status);
    // console.log(error.request.responseURL);
    // console.log(((error.request.responseURL ?? "") as string).includes("/api/token/refresh"));

    if (
      hasRedirected &&
      error.response?.status === 403 &&
      !((error.request.responseURL ?? "") as string).includes("/api/token/refresh")
    ) {
      const accessToken = await refreshToken();
      if (accessToken !== null && accessToken !== "") {
        console.log("success");
        return apiClient(error.config);
      } else {
        localStorage.setItem("hasRedirected", "false");
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
