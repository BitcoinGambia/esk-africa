"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setUp(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={up ? "loading__screen slide-up" : "loading__screen"}>
      <div className="loading__grid-container">
        <div className="loading__grid-line loading__grid-line--v1"></div>
        <div className="loading__grid-line loading__grid-line--v2"></div>
        <div className="loading__grid-line loading__grid-line--v3"></div>
        <div className="loading__grid-line loading__grid-line--h1"></div>
        <div className="loading__grid-line loading__grid-line--h2"></div>

        <div className="loading__content">
          <div className="loading__text">
            <Image
              className="loading__logo"
              alt="ESK"
              src="/images/logo.webp"
              width={585}
              height={357}
              priority
            />
          </div>
          <div className="loading__message">
            Your experience is being carefully constructed
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
