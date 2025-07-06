import React from 'react';
import Draggable from 'react-draggable';
import { Button } from '@/components/ui/button';

interface DemoControlsProps {
  demoType: 'bandwerk' | 'instagram';
}

const DemoControls: React.FC<DemoControlsProps> = ({ 
  demoType 
}) => {
  return (
    <Draggable handle=".drag-handle">
      <div className="demo-controls">
        <div className="drag-handle cursor-move">
          <span className="text-xs opacity-75">Demo Controls: (Drag to move)</span>
        </div>
        <div className="text-xs opacity-60 mt-1">
          In order to reset the chat, refresh the page
        </div>
        <a 
          href={demoType === 'bandwerk' ? '/demo/instagram' : '/demo/bandwerk'}
          className="text-xs underline opacity-75 hover:opacity-100"
        >
          Switch Demo
        </a>
        <a 
          href="/"
          className="text-xs underline opacity-75 hover:opacity-100"
        >
          Back to Main Site
        </a>
      </div>
    </Draggable>
  );
};

export default DemoControls;