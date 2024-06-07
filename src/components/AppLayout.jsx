import React from "react";
import Button from "./Button";
import { ReactComponent as CreateIcon } from "../icons/CreateIcon.svg";

function AppLayout({ children, onClick }) {
  return (
    <>
      <div className="app-overlay">
        YOUR QR <br />
        <span>GENERATOR</span>
      </div>
      {children}
      <Button type={"generate"} onClick={onClick}>
        <CreateIcon style={{ stroke: "white" }} /> GENERATE
      </Button>
    </>
  );
}

export default AppLayout;
