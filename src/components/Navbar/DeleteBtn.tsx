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
    // Delete from local storage
    localStorage.removeItem('markdownDocument');
    // You can also update a list of documents in local storage if needed

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

