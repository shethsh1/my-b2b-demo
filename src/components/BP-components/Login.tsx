import React, { useEffect } from "react";
import Header from "./Header";

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full h-screen">
      <Header />
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
  );
}
