import { z } from "zod";
import { useState, useCallback, useEffect } from "react";
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
  baseBgTranslucent: "var(--base-bg-translucent)",

  baseText: "var(--base-text)",
  baseTextLight: "var(--base-text-light)",
  baseTextLink: "var(--base-text-link)",
} as const;

// ①_app.tsx　で1番最初に呼ばれる
export const colorFromStorage = () => {
  const result = themeSchema.safeParse(localStorage.getItem(themeKey));
  if (result.success) return result.data;
  else return "dark";
};

export const useColorTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // ② １の発火後にdocument.body.dataset.themeは埋められているのでローカルStateに保存
  useBrowserLayoutEffect(() => {
    setTheme((init) =>
      (() => {
        const result = themeSchema.safeParse(document.body.dataset.theme);
        if (result.success) return result.data;
        else return init;
      })()
    );
  }, []);

  const changeTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  // ③
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  return { changeTheme, isDarkMode };
};
