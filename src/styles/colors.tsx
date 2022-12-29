import { z } from "zod";
import { useState, useCallback, useEffect } from "react";
import { useMemo } from "react";

export type Color = keyof typeof colors;

const themeKey = "poteboy-theme";
const themeSchema = z.enum(["light", "dark"]);
type ThemeMode = z.infer<typeof themeSchema>;

// styles.cssに合わせる
export const colors = {
  baseBg: "var(--base-bg)",
  baseBgLight: "var(--base-bg-light)",
  baseBgTranslucent: "var(--base-bg-translucent)",

  baseText: "var(--base-text)",
  baseTextLight: "var(--base-text-light)",
  baseTextLink: "var(--base-text-link)",
} as const;

export const colorFromStorage = () => {
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
