import { useLayoutEffect, useState, useEffect, useMemo } from "react";
import { MOBILE_SIZE } from "@src/styles";

export const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useMemo(() => windowSize.width < MOBILE_SIZE, [windowSize]);

  return { isMobile, windowSize };
};

export const useSVGResizer = (ref: React.RefObject<SVGSVGElement>) => {
  const [viewBox, setViewBox] = useState("0 0 0 0");
  useBrowserLayoutEffect(() => {
    if (ref.current) {
      const path = ref.current.firstChild as SVGAElement;
      const { x, y, width, height } = path.getBBox();
      setViewBox(`${x} ${y} ${width} ${height}`);
    }
  }, [ref]);
};

export * from "./useHistory";
