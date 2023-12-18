// Components/SaveDocumentButton.tsx
import React from 'react';

import SaveIcon from "../../assets/icon-save.svg";
const SaveDocumentButton: React.FC = () => {
    const handleSave = () => {
        // Get the current document content from the editor
        const documentContent = localStorage.getItem('currentDocumentContent') || '';

        // Save the current document content to local storage
        localStorage.setItem('markdownDocument', documentContent);
        alert('Document saved!');
    };

    return (
        <div>
            <button onClick={handleSave}
                data-testid="saveBtn"
                aria-label="Save changes"
                className="primary-btn p-3 rounded-md">
                <img src={SaveIcon} alt="" aria-hidden={true} />
                <span className="hidden md:inline-block">Save Changes</span>

            </button>
        </div>
    );
};

export default SaveDocumentButton;
