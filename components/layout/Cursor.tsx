"use client";

import { useEffect, useRef } from "react";

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
      setTimeout(() => {
        if (follower.current) {
          follower.current.style.left = `${e.clientX}px`;
          follower.current.style.top = `${e.clientY}px`;
        }
      }, 50);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor"></div>
      <div ref={follower} className="cursor__follower"></div>
    </>
  );
};

export default Cursor;
