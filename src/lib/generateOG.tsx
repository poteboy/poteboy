import { ImageResponse } from "next/og";

type Size = {
  width: number;
  height: number;
};

export async function generateOgImage({ size }: { size: Size }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#67b0f2",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <img
          src="/ogp.jpg"
          alt=""
          role="presentation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
