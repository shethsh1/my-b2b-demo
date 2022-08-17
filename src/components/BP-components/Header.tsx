import React from "react";

export default function Header() {
  return (
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
  );
}
