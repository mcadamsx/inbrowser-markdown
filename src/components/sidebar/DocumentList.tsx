// Components/DocumentList.tsx
import React from 'react';

const DocumentList: React.FC = () => {
  const savedDocuments = JSON.parse(localStorage.getItem('markdownDocumentList') || '[]');

  return (
    <div>
      <h2>Saved Documents</h2>
      <ul>
        {savedDocuments.map((document: any, index: number) => (
          <li key={index}>{document.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;