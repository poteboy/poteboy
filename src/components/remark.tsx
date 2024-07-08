import { HStack, Box } from "@kuma-ui/core";
import type { ReactNode } from "react";

export const Remark = ({ children }: { children: ReactNode }) => {
  return (
    <HStack
      as="aside"
      marginY="1.2rem"
      bg="#eeffe4"
      padding="1.4em 1em"
      borderRadius={8}
      gap={12}
      alignItems="center"
    >
      <Box width={24} height={24}>
        <svg viewBox="0 0 24 24" focusable="false">
          <title>check-circle</title>
          <path
            fill="#00a862"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </svg>
      </Box>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: children as string,
        }}
      />
    </HStack>
  );
};
