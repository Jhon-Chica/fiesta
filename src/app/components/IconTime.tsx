"use client";

import { useEffect } from "react";

export default function IconTime() {
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
                src="https://cdn.lordicon.com/twpfmtiv.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#16a9c7,secondary:#104891"
                style="width:50px;height:50px">
            </lord-icon>
                `,
        }}
      />
    </div>
  );
}
