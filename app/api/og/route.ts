// app/api/og/route.ts
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          fontWeight: 700,
          background: "white",
          color: "black",
        }}
      >
        Devaraj — Portfolio
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
