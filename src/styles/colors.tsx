import { z } from "zod";
import {
  useState,
  FC,
  ReactNode,
  memo,
  useCallback,
  useRef,
  MutableRefObject,
  useEffect,
} from "react";

export type Color = keyof typeof colors;

const themeKey = "poteboy-theme";
const themeSchema = z.enum(["light", "dark"]);
type ThemeMode = z.infer<typeof themeSchema>;

// styles.cssに合わせる
export const colors = {
  baseBg: "var(--base-bg)",
} as const;

export const useColorTheme = () => {
  const theme: MutableRefObject<{ theme: ThemeMode }> = useRef(
    new Proxy(
      {
        theme: (() => {
          if (typeof window === "undefined") return "dark";
          const result = themeSchema.safeParse(localStorage.getItem(themeKey));
          if (result.success) return result.data;
          else return "dark";
        })(),
      },
      {
        set(target, key, value: ThemeMode, receiver) {
          const result = Reflect.set(target, key, value, receiver);
          if (
            typeof window !== "undefined" &&
            typeof document !== "undefined"
          ) {
            document.body.dataset.theme = value;
            localStorage.setItem(themeKey, value);
          }
          return result;
        },
      }
    )
  );

  useEffect(() => {
    document.body.dataset.theme = theme.current.theme;
  }, []);

  const changeTheme = useCallback(
    () =>
      theme.current.theme === "dark"
        ? (theme.current.theme = "light")
        : (theme.current.theme = "dark"),
    []
  );

  // 実行されるまで評価されない
  const isDarkMode = () => {
    if (typeof window === "undefined") return true;
    else return document.body.dataset.theme === "dark";
    // (() => {
    //   if (typeof window === "undefined") return true;
    //   else return document.body.dataset.theme === "dark";
    // })();
  };

  return { changeTheme, isDarkMode };
};

export const ThemeProvider: FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    useColorTheme();
    return <>{children}</>;
  },
  (_prev, _curr) => true
);
