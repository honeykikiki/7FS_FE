import apiClient from "./axios";

export const refreshToken = async () => {
  try {
    const res = await apiClient.post("/api/token/refresh");
    return res.data.accessToken;
  } catch (error) {
    return null;
  }
};
