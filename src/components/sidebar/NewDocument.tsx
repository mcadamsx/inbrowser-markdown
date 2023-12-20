// Components/NewDocumentButton.tsx
import React from 'react';

const NewDocumentButton: React.FC = () => {
  const handleNewDocument = () => {
    alert('New document added!');

    // Clear local storage to start a fresh document
    localStorage.removeItem('currentDocumentTitle');
    localStorage.removeItem('currentDocumentContent');
  };

  return <button onClick={handleNewDocument}>New Document</button>;
};

export default NewDocumentButton