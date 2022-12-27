import React, {
  FC,
  memo,
  useReducer,
  useCallback,
  MouseEventHandler,
} from "react";
import styled from "@emotion/styled";
import { useColorTheme } from "@src/styles";
import { useEffect } from "react";

export const ThemeToggle: FC = memo(() => {
  const { changeTheme, isDarkMode } = useColorTheme();

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <Button
      tabIndex={0}
      onClick={changeTheme}
      aria-label="テーマ切り替えボタン"
      role="switch"
      aria-checked={isDarkMode}
    >
      <Bar
        dark={isDarkMode}
        style={{ background: isDarkMode ? "#fff" : "#000" }}
      />
      <Thumb dark={isDarkMode} />
    </Button>
  );
});

const Button = styled.button`
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 24px;
`;

const Bar = styled.span<{ dark: boolean }>`
  /* background: ${(props) => (props.dark ? "#fff" : "#000")}; */
  width: 50px;
  height: 24px;
  border-radius: 9999px;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: background ease 200ms;
`;

const Thumb = styled.span<{ dark: boolean }>`
  z-index: 2;
  position: absolute;
  top: 1px;
  left: 1px;
  transform: ${(props) =>
    props.dark ? "translateX(0px)" : "translateX(26px)"};
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  background: #fff;
  transition: transform ease 200ms, background ease 200ms;
  box-shadow: 0 0 2px 3px #ffa7c4;
`;
