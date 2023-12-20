import React, { ReactElement, useState } from "react";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close.svg";

export default function SidebarBtn() {

 
  return (
    <button 
      data-testid="menuBtn"
      className="flex items-center justify-center w-full h-14 md:h-[72px] bg-neutral-400 hover:bg-primary-100"
    >
      <span className="sr-only"></span>
      <img src={MenuIcon } alt="" />
    </button>
  );
}
