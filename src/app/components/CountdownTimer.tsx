"use client";

import { useEffect } from "react";

// @ts-ignore
import simplyCountdown from "simplycountdown.js";

export default function CountdownTimer() {
  useEffect(() => {
    
      simplyCountdown(".countdown", {
        year: 2025,
        month: 6,
        day: 21,
        hours: 8,
        minutes: 0,
        seconds: 0,

        words: {
          days: {
            lambda: (root: string, count: number) => (count > 1 ? root : root),
            root:""
          },
          hours: {
            lambda: (root: string, count: number) => (count > 1 ? root : root),
            root:""
          },
          minutes: {
            lambda: (root: string, count: number) => (count > 1 ? root : root),
            root:""
          },
          seconds: {
            lambda: (root: string, count: number) => (count > 1 ? root : root),
            root:""
          },
        },

        inlineSeparator: ":",
        zeroPad: true,
        inline: true,
        enableUtc: false,
        refresh: 1000,

        onEnd: () => {
          console.log("¡Cuenta regresiva terminada!");
        },
      });
    
  }, []);

  return (
    
      <div id="container-reloj">
        <h2 id="faltan">Faltan</h2>
        <div className="countdown"></div>
      </div>
      
    
  );
}
