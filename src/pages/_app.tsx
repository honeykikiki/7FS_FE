import { Global } from "@emotion/react";
import globalStyles from "@styles/globalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { AlertContextProvider } from "src/context/AlertContext";
import { AuthContextProvider } from "src/context/AuthContext";
import { BottomSheetProvider } from "src/context/BottomSheetContext";
import { LoaderContextProvider } from "src/context/LoaderContext";
import { ThemeContextProvider } from "src/context/ThemeContext";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* <Wrapper> */}
        <Global styles={globalStyles} />
        <AuthContextProvider>
          <ThemeContextProvider>
            <LoaderContextProvider>
              <AlertContextProvider>
                <BottomSheetProvider>
                  <Component {...pageProps} />
                </BottomSheetProvider>
              </AlertContextProvider>
            </LoaderContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
        {/* </Wrapper> */}
      </RecoilRoot>
    </QueryClientProvider>
  );
}
