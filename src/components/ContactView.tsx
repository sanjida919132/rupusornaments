import React, { useState } from 'react';
import { WHATSAPP_DISPLAY, generateWhatsAppInquiryUrl } from '../data/mockProducts';

interface ContactViewProps {
  onShowToast: (message: string, icon?: string) => void;
  onNavigateHome: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onShowToast, onNavigateHome }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullNote = `নাম: ${name}, ফোন: ${phone}. বার্তা: ${message}`;
    const url = generateWhatsAppInquiryUrl(fullNote);
    window.open(url, '_blank');
    onShowToast('আপনার বার্তা তৈরি হয়েছে, WhatsApp-এ স্থানান্তর করা হচ্ছে...', 'chat');
  };

  return (
    <div className="w-full bg-[#fcf9f8] min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body-sm text-[13px] text-[#544343]">
          <button onClick={onNavigateHome} className="hover:text-[#2a0006] cursor-pointer">হোম</button>
          <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
          <span className="text-[#2a0006] font-semibold">যোগাযোগ ও কনসিয়ার্জ সহায়তা</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
            গ্রাহক সহায়তা কেন্দ্র
          </span>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-[#2a0006] font-serif">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
          <p className="font-body-md text-[#544343] text-sm md:text-base">
            আপনার বিশেষ দিনের যেকোনো অলংকার নির্বাচন, সাইজ নির্ধারণ বা অর্ডার সংক্রান্ত যেকোনো তথ্যে আমরা সবসময় আপনার পাশে আছি।
          </p>
        </div>

        {/* 2-Column Split: Info & WhatsApp Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Boutique Hours */}
          <div className="md:col-span-5 bg-[#f6f3f2] p-8 border border-[#d9c1c1]/40 space-y-6">
            <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
              শো-রুম ও প্রধান কার্যালয়
            </h3>

            <div className="space-y-4 font-body-md text-sm text-[#544343]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#735c00] text-xl mt-0.5">location_on</span>
                <div>
                  <strong className="text-[#2a0006] block font-semibold">ঠিকানা</strong>
                  ধানমন্ডি রোড নং ২৭, ঢাকা - ১২০৯, বাংলাদেশ
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#735c00] text-xl mt-0.5">call</span>
                <div>
                  <strong className="text-[#2a0006] block font-semibold">সরাসরি কল</strong>
                  {WHATSAPP_DISPLAY}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#735c00] text-xl mt-0.5">mail</span>
                <div>
                  <strong className="text-[#2a0006] block font-semibold">ইমেইল</strong>
                  info@rupuornaments.com
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#735c00] text-xl mt-0.5">schedule</span>
                <div>
                  <strong className="text-[#2a0006] block font-semibold">সেবা সময়</strong>
                  সকাল ১০:০০ টা - রাত ৯:০০ টা (প্রতিদিন)
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#d9c1c1]/50 space-y-2">
              <span className="font-label-uppercase text-[10px] text-[#735c00] font-bold tracking-widest uppercase block">
                হোম ট্রায়াল সুবিধা
              </span>
              <p className="font-body-sm text-xs text-[#544343]">
                ঢাকা সিটির অভ্যন্তরে ব্রাইডাল সেটের জন্য বিশেষ হোম ডেলিভারি ও যাচাই সুবিধা রয়েছে।
              </p>
            </div>
          </div>

          {/* Right: Quick Direct Inquiry Form */}
          <div className="md:col-span-7 bg-white p-8 border border-[#d9c1c1]/50 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                অনলাইন বার্তা
              </span>
              <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                সরাসরি মেসেজ পাঠান
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase tracking-wider">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. সাদিয়া ইসলাম"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fcf9f8] px-4 py-3 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase tracking-wider">
                  ফোন নম্বর (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 01700000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#fcf9f8] px-4 py-3 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase tracking-wider">
                  আপনার প্রশ্ন বা বার্তা *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="কোন অলংকার বা সার্ভিস সম্পর্কে জানতে চান তা বিস্তারিত লিখুন..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#fcf9f8] p-4 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-label-uppercase text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp-এ সরাসরি মেসেজ পাঠান</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
