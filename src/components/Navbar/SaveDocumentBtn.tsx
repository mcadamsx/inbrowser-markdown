// Components/SaveDocumentButton.tsx
import React from 'react';

import SaveIcon from "../../assets/icon-save.svg";
const SaveDocumentButton: React.FC = () => {
  const handleSave = () => {
    const title = localStorage.getItem('currentDocumentTitle');
    const savedDocuments = JSON.parse(localStorage.getItem('markdownDocumentList') || '[]');

    // Get the current document content from the editor
    const documentContent = localStorage.getItem('currentDocumentContent') || '';

    // Check if the document with the same title already exists
    const existingDocument = savedDocuments.find((document: any) => document.title === title);

    if (existingDocument) {
      // Update the existing document's content
      existingDocument.content = documentContent;
    } else {
      // Add a new document to the list
      savedDocuments.push({ title, content: documentContent });
    }

    // Save the updated list of documents to local storage
    localStorage.setItem('markdownDocumentList', JSON.stringify(savedDocuments));

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