// styles.cssに合わせる
export const colors = {
  baseBg: "var(--base-bg)",
} as const;

export type Color = keyof typeof colors;
