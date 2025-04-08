import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import { InputFiled } from "@components/shared/InputFiled";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { useRouter } from "next/router";
import { useAuthContext } from "src/context/AuthContext";
import { useLoaderContext } from "src/context/LoaderContext";

function LoginPage() {
  const router = useRouter();
  const { loader } = useLoaderContext();
  const { emp, tokenLogin, tokenInvalid } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);

  useEffect(() => {
    invalid();
  }, []);

  const invalid = async () => {
    await tokenInvalid();
    if (emp !== null) {
      router.push("/");
    }
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  }, []);

  const loginPost = async () => {
    if (username.length === 0 || password.length === 0) {
      setLoginFail(true);
      return;
    }

    loader(true);
    try {
      const bSuccess = await tokenLogin(username, password);
      if (bSuccess) {
        router.push("/");
      } else {
        setLoginFail(true);
      }
    } catch (error) {
      console.log(error);
      setLoginFail(true);
    }

    loader(false);
  };

  return (
    <Wrapper>
      <LoginBox>
        <Flex justify="center">
          <MyText typography="t2">로그인</MyText>
        </Flex>
        <Spacing size="md" />
        <InputFiled
          label="아이디"
          name="username"
          placeholder="아이디를 입력해주세요."
          value={username}
          onChange={handleChange}
          hasError={loginFail && !username}
          maxLength={20}
        />
        <Spacing size="md" />
        <InputFiled
          label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handleChange}
          type="password"
          maxLength={20}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              loginPost();
            }
          }}
          hasError={loginFail && !password}
        />
        <Spacing size="lg" />
        <Button onClick={loginPost} full={true}>
          로그인
        </Button>
        {loginFail && <ErrorText>아이디 또는 비밀번호가 올바르지 않습니다.</ErrorText>}
      </LoginBox>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: ${colors.background};
  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #333;
  font-weight: 700;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
`;
