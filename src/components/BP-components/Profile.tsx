import React from "react";
import Header from "./Header";

export default function Profile() {
  return (
    <div className="w-full h-screen">
      <Header />
      <iframe
        title="profile"
        src="http://localhost:4200/profile/about-you?source=1234230310"
        frameBorder="0"
        style={{
          minHeight: "100%",
          minWidth: "100%",
        }}
        id="profileIframeId"
      ></iframe>
    </div>
  );
}
