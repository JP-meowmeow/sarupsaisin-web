import React from 'react';
import { Loader2 } from 'lucide-react';

const Spinner = ({ size = 'default', fullScreen = false, text = 'Loading...' }) => {
  // Size variants mapping
  const sizeMap = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  // If fullScreen, show spinner in center of viewport
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <Loader2 className={`${sizeMap[size]} animate-spin text-blue-500`} />
          <p className="text-gray-700 font-medium">{text}</p>
        </div>
      </div>
    );
  }

  // Regular inline spinner
  return (
    <div className="flex items-center justify-center space-x-2">
      <Loader2 className={`${sizeMap[size]} animate-spin text-blue-500`} />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

export default Spinner;