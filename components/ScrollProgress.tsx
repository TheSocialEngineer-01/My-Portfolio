"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const percent = max > 0 ? (scrolled / max) * 100 : 0;
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-track" aria-hidden="true">
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
};
