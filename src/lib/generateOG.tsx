import { ImageResponse } from "next/og";
import OGImage from "../../public/ogp.png";

type Size = {
  width: number;
  height: number;
};

export async function generateOgImage({
  size = {
    width: 1200,
    height: 600,
  },
  title,
}: {
  size?: Size;
  title: string;
  emoji?: string;
}) {
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
          src={
            "https://github.com/poteboy/poteboy/blob/ebe0925b05f8a200b11757018a5cb077c47298b2/public/ogp.png?raw=true"
          }
          alt=""
          role="presentation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "88%",
            marginInline: "auto",
          }}
        >
          {title.split(" ").map((word, i) => (
            <h1
              style={{
                zIndex: 2,
                textAlign: "center",
                color: "#191a1e",
                fontSize: "3.2em",
                fontWeight: 800,
                margin: "auto",
                transform: "translateY(-30%)",
              }}
              key={word + i.toString()}
            >
              {word}
              <br />
            </h1>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
