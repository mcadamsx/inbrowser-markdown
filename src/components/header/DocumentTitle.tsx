import React, { ChangeEvent, ReactElement } from "react";
import CopyIcon from "../../assets/icon-document.svg";
import { toast } from "react-hot-toast";

export default function DocumentTitle(): ReactElement {

  
  return (
    <div title="test.md" className="relative flex items-center overflow-x-auto mr-96">
      <button >
        <img src={CopyIcon} alt="copy markdown" />
      </button>
      <div className="ml-4 ">
        <label className="hidden text-neutral-600 text-xs leading-none md:block" htmlFor="docName">
          Document Name
        </label>
        <input
          id="docName"
          data-testid="titleInput"
          type="text"
          className={`text-white bg-[transparent] outline-none border-b border-b-[transparent] focus:border-b-neutral-800 caret-primary-100 selection:bg-primary-100`}
          value= ""
        />
      </div>
    </div>
  );
}
