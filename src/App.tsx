// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Editor from './components/Editor/Editor';
import Preview from './components/preview/Preview';

const App: React.FC = () => {
  const [showEditor, setShowEditor] = useState(true);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const toggleEditorPreview = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <div className="flex flex-row">
          {showEditor ? (
            <Editor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />
          ) : (
            <Preview markdownContent={markdownContent} />
          )}
          <div className="mt-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={toggleEditorPreview}
            >
              {showEditor ? 'Preview' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;