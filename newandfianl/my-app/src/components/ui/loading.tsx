// src/components/ui/Loading.tsx

import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-xl text-gray-700">{message}</p>
    </div>
  );
};

export {Loading};  // Default export
