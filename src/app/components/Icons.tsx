"use client";

import { useEffect } from "react";

export default function LordIconComponent() {
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
    <div className="flex justify-center items-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <lord-icon
                src="https://cdn.lordicon.com/nfpjdyaz.json"
                trigger="loop"
                state="morph-open"
                colors="primary:#3B1E54,secondary:#9B7EBD"
                style="width: 150px; height: 150px;">
            </lord-icon>
          `,
        }}
      />
    </div>
  );
}
