// Components/Editor.tsx
import React, { useState } from 'react';

interface EditorProps {
  isDarkMode: boolean;
}

const Editor: React.FC<EditorProps> = ({ isDarkMode }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownContent(event.target.value);
  };

  return (
    <div className={`w-1/2 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <textarea
        className={`w-full h-64 p-2 border border-${isDarkMode ? 'gray-600' : 'gray-400'}`}
        value={markdownContent}
        onChange={handleChange}
        placeholder="Type your markdown here..."
      />
    </div>
  );
};

export default Editor;
