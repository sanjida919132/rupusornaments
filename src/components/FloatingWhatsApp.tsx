import React from 'react';
import { generateWhatsAppInquiryUrl } from '../data/mockProducts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 shadow-[0_4px_20px_rgba(37,211,102,0.35)] flex items-center gap-3 transition-transform hover:scale-105 group" 
      href={generateWhatsAppInquiryUrl('আসসালামু আলাইকুম, আমি সরাসরি রূপু অর্নামেন্টসের জুয়েলারি কনসালট্যান্টের সাথে কথা বলতে চাই।')}
      rel="noopener noreferrer" 
      target="_blank"
      title="Chat with WhatsApp Support"
    >
      <span className="material-symbols-outlined text-2xl leading-none">chat</span>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase font-bold tracking-widest leading-tight text-white/90">
          সরাসরি অর্ডার করুন
        </span>
        <span className="text-xs font-bold leading-tight">
          WhatsApp Support
        </span>
      </div>
    </a>
  );
};
