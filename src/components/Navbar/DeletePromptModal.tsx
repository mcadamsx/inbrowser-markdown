import React from 'react'

interface DeletePromptModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }
  
const DeletePromptModal: React.FC<DeletePromptModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute left-0 top-0 bg-transparent dark:bg-lightTransparent w-screen h-screen`}">
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div  className="w-[343px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-100 rounded-md p-6">
      <p className="my-4 text-neutral-600 dark:text-neutral-700 font-serif font-normal text-sm">Are you sure you want to delete this document?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  </div>
  </div>
   
  );
};

export default DeletePromptModal;
