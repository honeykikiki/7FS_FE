import { Dispatch, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Employee } from "src/models/employee";
import apiClient from "src/remote/axios";

interface AuthProps {
  emp: Employee | null;
  setEmp: Dispatch<SetStateAction<Employee | null>>;
  tokenInvalid: () => Promise<void>;
  tokenLogin: (username: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [emp, setEmp] = useState<Employee | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/auth/login") {
      tokenInvalid();
    }
  }, []);

  const tokenInvalid = async () => {
    try {
      const res = await apiClient.post("/api/token/invalid");
      if (res.data.user) {
        setEmp(res.data.user);
      }
    } catch (error) {
      // 토큰 있는지 확인 하는 로직
      console.log("invalid 실패");
      try {
        await refreshToken();
      } catch (error) {
        setEmp(null);
        router.push("/auth/login");
      }
    }
  };

  const refreshToken = async () => {
    const res = await apiClient.post("/api/token/refresh");
    return res.data.accessToken;
  };

  const tokenLogin = async (username: string, password: string) => {
    try {
      const formData = new FormData();
      formData.append("emplNo", username);
      formData.append("password", password);

      const response = await apiClient.post("/api/login", formData);
      const data = response.data;

      if (data) {
        setEmp(data.user);
        return true;
      }
    } catch (error) {
      console.log("error");
    }

    return false;
  };

  const values = useMemo(() => ({ emp, setEmp, tokenInvalid, tokenLogin }), [emp]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export function useAuthContext() {
  const values = useContext(AuthContext);

  if (values === undefined || values === null) {
    throw new Error("AlertContext 내부에서 사용해주세요.");
  }

  return values;
}
