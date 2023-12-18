import React, { useState,ReactElement } from "react";
import DocumentTitle from "./DocumentTitle";
import Logo from "./Logo";
import DeleteDocumentButton from "./DeleteBtn";
import SidebarButton from "./SidebarBtn";
import SaveDocumentButton from "./SaveDocumentBtn";


export default function Navbar(): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSidebar = () => {
      setIsMenuOpen((prev) => !prev);
      document.getElementsByTagName("body")[0].classList.toggle("menu-closed");
    };
  return (
    <header className="bg-neutral-300 grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] ">
        <SidebarButton/>
      <div className="grid grid-cols-[1fr_18px_41px] md:grid-cols-[1fr_18px_152px] xl:grid-cols-[auto_1fr_18px_152px] w-full pl-6 pr-2 content-center gap-6">
        <Logo />
        <DocumentTitle />
        <DeleteDocumentButton />
        <SaveDocumentButton/>
      </div>
    </header>
  );
}
