// src/components/MotionProvider.js
"use client";
import { MotionConfig } from "framer-motion";

// Respects the visitor's prefers-reduced-motion setting for every motion component.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
