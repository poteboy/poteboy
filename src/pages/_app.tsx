import type { AppProps } from "next/app";
import type { TRPCLink } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import SuperJSON from "superjson";
import { AppRouter } from "@src/server/route";
import { withTRPC } from "@trpc/next";
import { ChakraProvider } from "@chakra-ui/react";
import { theme, colorFromStorage } from "@src/styles";
import "../styles/styles.css";
import { useBrowserLayoutEffect } from "@src/hooks";

function App({ Component, pageProps }: AppProps) {
  useBrowserLayoutEffect(() => {
    const result = colorFromStorage();
    document.body.dataset.theme = result;
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links: TRPCLink<any>[] = [
      loggerLink(),
      httpBatchLink({
        url,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      },
      links,
      headers() {
        if (ctx?.req) {
          ctx?.res?.setHeader("access-control-allow-origin", "*/*");
          ctx?.res?.setHeader(
            "access-control-allow-headers",
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          );
          ctx?.res?.setHeader("credentials", "include");

          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        } else return {};
      },
      transformer: SuperJSON,
      ssr: true,
    };
  },
})(App);

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://poteboy.com`;

export const url = `${baseUrl}/api/trpc`;
