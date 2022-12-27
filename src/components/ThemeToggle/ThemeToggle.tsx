import React, {
  FC,
  memo,
  useReducer,
  useCallback,
  MouseEventHandler,
} from "react";
import styled from "@emotion/styled";
import { useColorTheme } from "@src/styles";
import { SunIcon, MoonIcon } from "./ThemeIcons";

export const ThemeToggle: FC = memo(() => {
  const { changeTheme, isDarkMode } = useColorTheme();

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
      >
        {!isDarkMode && (
          <SunIcon
            color="#fde047"
            style={{ top: "5px", left: "5px", position: "absolute" }}
            width={14}
            height={14}
          />
        )}
        {isDarkMode && (
          <MoonIcon
            color="#fde047"
            style={{ top: "5px", right: "5px", position: "absolute" }}
            width={15}
            height={15}
          />
        )}
      </Bar>
      <Thumb dark={isDarkMode}></Thumb>
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
  box-shadow: 0 0 1px 2px #fde047;
`;

// #ff886c
