// Your parent component
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const ParentComponent: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Sidebar showSidebar={showSidebar} />
      {/* Rest of your content */}
    </div>
  );
};

export default ParentComponent;
