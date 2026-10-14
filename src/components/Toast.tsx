import React from 'react';

interface ToastProps {
  message: string | null;
  icon?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, icon = 'check_circle', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#2a0006] text-white px-6 py-3.5 shadow-2xl flex items-center gap-3 transition-all duration-300 border border-[#735c00]/40 animate-fade-in">
      <span className="material-symbols-outlined text-[#ffe088] text-xl">
        {icon}
      </span>
      <span className="font-body-md text-sm">
        {message}
      </span>
      <button 
        onClick={onClose}
        className="ml-2 text-white/70 hover:text-white cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
