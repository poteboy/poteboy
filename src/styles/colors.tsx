import { z } from "zod";
import {
  useState,
  FC,
  ReactNode,
  memo,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import { useMemo } from "react";
import { useBrowserLayoutEffect } from "@src/hooks";

export type Color = keyof typeof colors;

const themeKey = "poteboy-theme";
const themeSchema = z.enum(["light", "dark"]);
type ThemeMode = z.infer<typeof themeSchema>;

// styles.cssに合わせる
export const colors = {
  baseBg: "var(--base-bg)",
  baseBgLight: "var(--base-bg-light)",
  baseBgTranslucent: "--base-bg-translucent",
} as const;

const colorFromStorage = () => {
  const result = themeSchema.safeParse(localStorage.getItem(themeKey));
  if (result.success) return result.data;
  else return "dark";
};

export const useColorTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      (() => {
        const result = themeSchema.safeParse(document.body.dataset.theme);
        if (result.success) return result.data;
        else throw Error("unexpected error has occured");
      })()
    );
  }, []);

  const changeTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  return { changeTheme, isDarkMode };
};

export const ThemeProvider: FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    useBrowserLayoutEffect(() => {
      const result = colorFromStorage();
      document.body.dataset.theme = result;
    }, []);
    return <>{children}</>;
  },
  (_prev, _curr) => true
);
