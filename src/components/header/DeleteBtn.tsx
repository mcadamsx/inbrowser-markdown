
import React, { ReactElement, useState } from "react";
import DeleteIcon from "../../assets/icon-delete.svg";


export default function DeleteBtn() {
 

  return (
    <>
      <button
        data-testid="removeBtn"
        className=""
    
      >
        <img src={DeleteIcon} aria-hidden={true} alt="" />
        <span className="sr-only">delete markdown document</span>
      </button>
    </>
  );

}
