import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative">
        <img
          src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/5ad346a8-12a4-dc92-f032-7045234ab6e2.png"
          alt="Loading..."
          className="w-60 h-30 animate-pulse"
        />
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;