import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";

export default function Verify() {
  const [resetPage, setResetPage] = useState(false);
  const [verifyPage, setVerifyPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("page") === "verify") {
      setVerifyPage(true);
      setResetPage(false);
    } else if (params.get("page") === "reset") {
      setVerifyPage(false);
      setResetPage(true);
    } else {
      setVerifyPage(false);
      setResetPage(false);
      navigate("/login");
    }
  }, []);

  if (verifyPage === true) {
    return (
      <div className="w-full h-screen">
        <Header />
        <iframe
          title="verify"
          src="http://localhost:4200/login?source=1234230310"
          frameBorder="0"
          style={{
            minHeight: "100%",
            minWidth: "100%",
          }}
          id="verifyIframeId"
        ></iframe>
      </div>
    );
  } else if (resetPage === true) {
    return (
      <div className="w-full h-screen">
        <Header />
        <iframe
          title="verify"
          src="http://localhost:4200/login?source=1234230310"
          frameBorder="0"
          style={{
            minHeight: "100%",
            minWidth: "100%",
          }}
          id="resetIframeId"
        ></iframe>
      </div>
    );
  } else {
    return <Header />;
  }
}
