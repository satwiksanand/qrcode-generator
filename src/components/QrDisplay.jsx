import React from "react";
import Button from "./Button";
import { ReactComponent as DownloadIcon } from "../icons/DownloadIcon.svg";
import { ReactComponent as DeleteIcon } from "../icons/DeleteIcon.svg";

function QrDisplay({ children, src, onClick }) {
  return (
    <>
      <div className="app-overlay">
        <img src={src} alt="qrcode" />
      </div>
      {children}
      <div className="button-bar">
        <Button type="cancel" onClick={onClick}>
          <DeleteIcon style={{ stroke: "white" }} /> Cancel
        </Button>
        <Button type="download">
          <a download="qrCode.png" href={src} className="w-full">
            <DownloadIcon style={{ stroke: "black" }} /> Download
          </a>
        </Button>
      </div>
    </>
  );
}

export default QrDisplay;
