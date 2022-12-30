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
import { useBrowserLayoutEffect, HistoryProvider } from "@src/hooks";

function App({ Component, pageProps }: AppProps) {
  useBrowserLayoutEffect(() => {
    const result = colorFromStorage();
    document.body.dataset.theme = result;
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <HistoryProvider>
        <Component {...pageProps} />
      </HistoryProvider>
    </ChakraProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      return {
        transformer: SuperJSON,
        links: [
          httpBatchLink({
            url: "/api/trpc",
          }),
        ],
      };
    }

    return {
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          url: url,
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          const { connection: _connection, ...headers } = ctx.req.headers;
          return {
            ...headers,
            "x-ssr": "1",
          };
        } else return {};
      },
      ssr: true,
    };
  },
})(App);

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://poteboy.com`;

export const url = `${baseUrl}/api/trpc`;
