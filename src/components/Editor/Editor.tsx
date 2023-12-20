// src/components/Editor.tsx
import React, { useState, ChangeEvent } from 'react';

interface EditorProps {
  markdownContent: string;
  setMarkdownContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({ markdownContent, setMarkdownContent }) => {
  const handleEditorChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownContent(event.target.value);
  };

  return (
    <div>
      <textarea
         className="w-full bg-white dark:bg-neutral-100 dark:text-neutral-700 p-4 font-mono text-sm border-x-2 "
        placeholder="Type your Markdown here..."
        value={markdownContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
