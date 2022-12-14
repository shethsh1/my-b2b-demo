import React, { useEffect } from "react";
import Header from "./Header";

export default function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full h-screen">
      <Header />
      <iframe
        title="signup"
        src="http://localhost:4200/signup?source=1234230310"
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
