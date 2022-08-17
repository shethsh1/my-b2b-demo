import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event.data);
    });
  }, []);

  return (
    <div className="mt-10">
      <iframe
        title="bp-header"
        src="http://localhost:4200/header?source=1234230310"
        id="headerIframeId"
        frameBorder="0"
        style={{
          minWidth: "320px",
          maxHeight: "42px",
        }}
      ></iframe>
      <div className="w-full h-screen">
        <iframe
          title="login"
          src="http://localhost:4200/login?source=1234230310"
          frameBorder="0"
          style={{
            minHeight: "100%",
            minWidth: "100%",
          }}
          id="loginIframeId"
        ></iframe>
      </div>
    </div>
  );
}
