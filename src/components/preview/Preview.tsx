// src/components/Preview.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PreviewProps {
  markdownContent: string;
}

const Preview: React.FC<PreviewProps> = ({ markdownContent }) => {
  return (
    <div >
      <ReactMarkdown
       className={`overflow-y-auto p-6 bg-white dark:bg-neutral-100 w-full`}
      >{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default Preview;
