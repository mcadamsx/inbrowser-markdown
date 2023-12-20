// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Editor from './components/Editor/Editor';
import Preview from './components/preview/Preview';
const App: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <div className="flex-1  overflow-hidden flex">
          <div className="flex-1  bg-gray-100">
            <Editor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />
          </div>
          <div className="flex-1 bg-gray-100 overflow-auto">
            <Preview markdownContent={markdownContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;