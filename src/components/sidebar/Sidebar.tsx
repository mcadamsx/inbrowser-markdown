// Components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  return (
    <div className={`bg-${showSidebar ? 'gray-900' : 'gray-300'} text-white p-4`}>
      <h2>Sidebar Content</h2>
      <p>This is some sample content in the sidebar.</p>
    </div>
  );
};

export default Sidebar;
