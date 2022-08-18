import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../Loading";
import Login from "./Login";

export default function Verify() {
  const [resetPage, setResetPage] = useState(false);
  const [verifyPage, setVerifyPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function setVerifyIframeSrc() {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get("userId"),
        token = params.get("token"),
        source = params.get("source");

      if (userId && token && source) {
        const wrapper = document.getElementById(
          "verifyIframeId"
        ) as HTMLIFrameElement;
        wrapper.src = `http://localhost:4200/verify?userId=${userId}&token=${token}&source=${source}`;
      }
    }

    function setResetPasswordIframeSrc() {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get("userId"),
        token = params.get("token"),
        source = params.get("source");

      if (userId && token && source) {
        const wrapper = document.getElementById(
          "resetIframeId"
        ) as HTMLIFrameElement;
        wrapper.src = `http://localhost:4200/reset?userId=${userId}&token=${token}&source=${source}`;
      }
    }

    const params = new URLSearchParams(window.location.search);

    if (params.get("page") === "verify") {
      setVerifyPage(true);
      setResetPage(false);
      window.addEventListener("load", setVerifyIframeSrc);
    } else if (params.get("page") === "reset") {
      setVerifyPage(false);
      setResetPage(true);
      window.addEventListener("load", setResetPasswordIframeSrc);
    } else {
      setVerifyPage(false);
      setResetPage(false);
      navigate("/login");
    }
  }, []);

  if (verifyPage === true) {
    return (
      <div className="w-full h-screen">
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
    return <Loading />;
  }
}
