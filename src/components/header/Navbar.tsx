import React, { ReactElement } from "react";
import SidebarBtn from "./sidebarBtn";
import DocumentTitle from "./DocumentTitle";
import DeleteBtn from "./DeleteBtn";
import SaveDocumentBtn from "./SaveDocumentBtn";
import Logo from "./Logo";

export default function Navbar(): ReactElement {
  return (
    <nav className="bg-neutral-300 grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] ">
      <SidebarBtn />
      <div className="grid grid-cols-[1fr_18px_41px] md:grid-cols-[1fr_18px_152px] xl:grid-cols-[auto_1fr_18px_152px] w-full pl-6 pr-2 content-center gap-6">
        <Logo />
        <DocumentTitle />
        <DeleteBtn />
        <SaveDocumentBtn />
      </div>
    </nav>
  );
}