
import React, { useState } from 'react';
import CopyIcon from "../../assets/icon-document.svg";

const DocumentTitle: React.FC = () => {
    const [title, setTitle] = useState('Document Title');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <>
            <div title="test.md" className="relative flex items-center overflow-x-auto">

                <img src={CopyIcon} alt="copy markdown" />

                <div className="ml-4 ">
                    <label className="hidden text-neutral-600 text-xs leading-none md:block" htmlFor="docName">
                        Document Name
                    </label>
                    <input
                      className={`text-white bg-[transparent] outline-none border-b border-b-[transparent] focus:border-b-neutral-800 caret-primary-100 selection:bg-primary-100`}
                     type="text" 
                     value={title} 
                     onChange={handleTitleChange} 
                     placeholder="Document Title" />;

                </div>
            </div>
        </>


    )
};

export default DocumentTitle;
