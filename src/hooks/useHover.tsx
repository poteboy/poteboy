import { useEffect, useRef, useState } from 'react';

export const useHover = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const elm = ref.current;
    if (elm) {
      elm.addEventListener('mouseover', () => setHovered(true));
      elm.addEventListener('mouseout', () => setHovered(false));
    }
  }, [ref.current]);

  return { hoverRef: ref, hovered };
};
