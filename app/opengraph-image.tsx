import { ImageResponse } from "next/og";

export const alt = "Recklessly Loved Ministries — Dedicated to the One";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A150D",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#D4AF37",
            textAlign: "center",
            letterSpacing: "2px",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          Recklessly Loved Ministries
        </div>
        <div
          style={{
            width: 160,
            height: 6,
            backgroundColor: "#B8943E",
            marginTop: 40,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 42,
            color: "#FDF8F0",
            textAlign: "center",
          }}
        >
          Dedicated to the One
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#C9A84C",
            marginTop: 50,
          }}
        >
          recklesslylovedministries.org
        </div>
      </div>
    ),
    size
  );
}
