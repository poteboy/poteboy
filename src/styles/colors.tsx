import { z } from "zod";
import {
  useState,
  FC,
  ReactNode,
  memo,
  Children,
  useRef,
  MutableRefObject,
  useEffect,
} from "react";

export type Color = keyof typeof colors;

const themeKey = "poteboy-theme";
const themeSchema = z.enum(["white", "dark"]);
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

  const changeTheme = () =>
    theme.current.theme === "dark"
      ? (theme.current.theme = "white")
      : (theme.current.theme = "dark");

  return { changeTheme };
};

export const ThemeProvider: FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    useColorTheme();
    return <>{children}</>;
  }
);
