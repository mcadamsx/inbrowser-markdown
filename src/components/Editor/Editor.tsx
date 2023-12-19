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
    <div className="flex-1 p-4">
      <textarea
        className="w-full h-full p-2 border rounded focus:outline-none"
        placeholder="Type your Markdown here..."
        value={markdownContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
