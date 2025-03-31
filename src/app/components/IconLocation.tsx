"use client";

import { useEffect } from "react";

export default function LocationIcon() {
  useEffect(() => {
    // Cargar el script de Lordicon dinámicamente en el cliente
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <lord-icon
                src="https://cdn.lordicon.com/njlzolhx.json"
                trigger="loop"
                delay="2000"
                state="hover-jump-roll"
                colors="primary:#3B1E54,secondary:#9B7EBD"
                style="width:50px;height:50px">
            </lord-icon>
                `,
        }}
      />
    </div>
  );
}
