"use client";
import { useEffect, useState } from "react";

export default function AnimatedDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <>{dots}</>;
}
