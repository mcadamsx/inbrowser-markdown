// Components/Preview.tsx
import React from 'react';
import marked from 'marked';

interface PreviewProps {
  markdownContent: string;
  isDarkMode: boolean;
}

const Preview: React.FC<PreviewProps> = ({ markdownContent, isDarkMode }) => {
  return (
    <div className={`w-1/2 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div
        dangerouslySetInnerHTML={{ __html: marked(markdownContent) }}
        className={`text-${isDarkMode ? 'white' : 'black'}`}
      />
    </div>
  );
};

export default Preview;
