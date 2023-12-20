// Components/DeleteDocumentButton.tsx
import React from 'react';
import DeleteIcon from "../../assets/icon-delete.svg";
import DeletePromptModal from './DeletePromptModal';

const DeleteDocumentButton: React.FC = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const title = localStorage.getItem('currentDocumentTitle');
    const savedDocuments = JSON.parse(localStorage.getItem('markdownDocumentList') || '[]');

    // Remove the document with the matching title from the list
    const updatedDocuments = savedDocuments.filter((document: any) => document.title !== title);
    localStorage.setItem('markdownDocumentList', JSON.stringify(updatedDocuments));

    // Clear the content of the current document
    localStorage.removeItem('currentDocumentContent');
    
    alert('Document deleted!');
    setIsDeleteModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <button className='ml-auto ' onClick={handleDelete}>
        <img src={DeleteIcon} aria-hidden={true} alt="" />
        <span className="sr-only">delete markdown document</span>
      </button>
      <DeletePromptModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
export default DeleteDocumentButton;