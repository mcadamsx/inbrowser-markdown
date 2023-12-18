import React, { ReactElement } from "react";
import Logo from "../../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar(props: SidebarProps): ReactElement{
  return (
    <aside data-testid="sidebar" className="sidebar relative px-6 py-7 bg-neutral-200 h-screen">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="my-7">
        <span className="text-neutral-600 font-medium uppercase text-sm tracking-widest">my documents</span>
      </div>
      <ThemeToggle />
    </aside>
  );
}
