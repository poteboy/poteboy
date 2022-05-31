import React, { FC } from 'react';

export const Spacer: FC<{ size: number; horizontal?: boolean }> = ({
  size,
  horizontal,
}) => {
  return (
    <div
      style={
        horizontal
          ? {
              width: size,
              height: 'auto',
              display: 'inline-block',
              flexShrink: 0,
            }
          : { width: 'auto', height: size, display: 'block', flexShrink: 0 }
      }
    />
  );
};
