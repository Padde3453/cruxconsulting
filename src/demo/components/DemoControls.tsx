import React from 'react';
import { Button } from '@/components/ui/button';

interface DemoControlsProps {
  onReset?: () => void;
  onTriggerResponse?: () => void;
  demoType: 'bandwerk' | 'instagram';
}

const DemoControls: React.FC<DemoControlsProps> = ({ 
  onReset, 
  onTriggerResponse, 
  demoType 
}) => {
  return (
    <div className="demo-controls">
      <span className="text-xs opacity-75">Demo Controls:</span>
      {onReset && (
        <button onClick={onReset}>
          Reset Chat
        </button>
      )}
      {onTriggerResponse && (
        <button onClick={onTriggerResponse}>
          {demoType === 'instagram' ? 'Auto Reply' : 'Bot Response'}
        </button>
      )}
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
  );
};

export default DemoControls;