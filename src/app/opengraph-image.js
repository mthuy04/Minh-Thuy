// src/app/opengraph-image.js — branded social preview card
import { ImageResponse } from "next/og";
import { hero, profile } from "@/data/portfolio";

export const alt = "Nguyen Minh Thuy — Business Analyst Portfolio";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 900, letterSpacing: -2 }}>
          {profile.wordmark}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#2563eb", marginBottom: 18 }}>
            {profile.positioning}
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 900, letterSpacing: -3, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#475569", marginTop: 18 }}>
            {hero.headline.join(" ")}
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {hero.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 28px",
                borderRadius: 20,
                border: "2px solid #e2e8f0",
                background: "#f8fafc",
              }}
            >
              <div style={{ display: "flex", fontSize: 40, fontWeight: 900 }}>{m.value}</div>
              <div style={{ display: "flex", fontSize: 20, color: "#475569" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
