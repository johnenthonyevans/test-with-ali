"use client";

import { useState } from "react";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((r) => r + 360);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 600,
          color: "#e8e8e8",
          textAlign: "center",
        }}
      >
        Cool rotation button
      </h1>
      <button
        onClick={handleClick}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          padding: "1rem 2rem",
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "#0f0f1a",
          background: "linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0, 217, 255, 0.35)",
        }}
      >
        Click to rotate
      </button>
      <p style={{ fontSize: "0.875rem", color: "#888" }}>
        Each click adds a 360° spin
      </p>
    </main>
  );
}
