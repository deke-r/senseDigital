"use client";

import dynamic from "next/dynamic";

// Dynamically import QRCodeSVG (client-side only)
const QRCodeSVG = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeSVG),
  { ssr: false }
);

// Dynamically import QRCodeCanvas (client-side only)
const QRCodeCanvas = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

export default function MyQRCodePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "50px",marginBottom: "50px" }}>
      {/* SVG version */}
      <QRCodeSVG value="https://metasense.in" size={200} />

      {/* Canvas version */}
      <QRCodeCanvas value="https://metasense.in" size={200} />
    </div>
  );
}
