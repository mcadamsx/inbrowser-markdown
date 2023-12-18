import React, { ReactElement } from "react";
import SaveIcon from "../../assets/icon-save.svg";
import { toast } from "react-hot-toast";

export default function SaveDocumentBtn(): ReactElement {

  return (
    <button
      data-testid="saveBtn"
      aria-label="Save changes"
      className="primary-btn p-3 rounded-md"
    >
      <img src={SaveIcon} alt="" aria-hidden={true} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
}
