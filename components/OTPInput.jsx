"use client";
import { useRef, useState, useEffect } from "react";

export default function OTPInput({ length = 4, onSubmit }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const refs = useRef([]);
  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const submitIfComplete = (next) => {
    if (next.every(Boolean)) onSubmit?.(next.join(""));
  };

  const onChange = (i, v) => {
    const val = v.replace(/\D/g, "").slice(-1);
    const next = values.slice();
    next[i] = val;
    setValues(next);
    if (val && i < length - 1) refs.current[i + 1]?.focus();
    submitIfComplete(next);
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !values[i] && i > 0)
      refs.current[i - 1]?.focus();
  };

  const onPaste = (e) => {
    const text = (e.clipboardData.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, length);
    if (!text) return;
    const next = Array(length).fill("");
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    setValues(next);
    submitIfComplete(next);
    refs.current[Math.min(text.length, length) - 1]?.focus();
    e.preventDefault();
  };

  return (
    <div
      className="flex gap-3"
      role="group"
      aria-label="Enter verification code"
      onPaste={onPaste}
    >
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label={`Digit ${i + 1}`}
          className="w-14 h-14 text-center rounded-2xl border border-black/10 bg-black/5 
                     focus:outline-none focus:ring-2 focus:ring-brand.accent text-xl"
          value={v}
          onChange={(e) => onChange(i, e.target.value)}
          onKeyDown={(e) => onKeyDown(i, e)}
        />
      ))}
    </div>
  );
}
