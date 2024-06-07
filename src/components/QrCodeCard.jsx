import React from "react";
import { useState } from "react";
import QRcode from "qrcode";
import AppLayout from "./AppLayout";
import QrDisplay from "./QrDisplay";

import { ReactComponent as ErrorIcon } from "../icons/ErrorIcon.svg";

function QrCodeCard() {
  const [dataUrl, setdataUrl] = useState("");
  const [showError, setShowError] = useState(false);
  const [src, setSrc] = useState("");

  function updatedataUrl(e) {
    setdataUrl(e.target.value);
  }

  function handleCancel() {
    setSrc("");
    setdataUrl("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!dataUrl) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } else {
      QRcode.toDataURL(`${dataUrl}`).then(setSrc);
    }
  }

  return (
    <form className="app-card" onSubmit={handleSubmit}>
      {!src && (
        <AppLayout onClick={handleSubmit}>
          <input
            type="dataUrl"
            placeholder="Enter a valid dataUrl"
            value={dataUrl}
            onChange={updatedataUrl}
          />
        </AppLayout>
      )}
      {src && (
        <QrDisplay onClick={handleCancel} src={src}>
          <input
            type="dataUrl"
            placeholder="Enter a valid dataUrl"
            value={dataUrl}
            onChange={updatedataUrl}
          />
        </QrDisplay>
      )}
      {showError && (
        <div className="mt-2 mb-1" id="app-error-box">
          <ErrorIcon style={{ stroke: "red" }} />
          Enter The dataUrl
        </div>
      )}
    </form>
  );
}

export default QrCodeCard;
