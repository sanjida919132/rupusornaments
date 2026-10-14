import React from 'react';
import { ActivePage, CategoryKey } from '../types/jewelry';

interface FooterProps {
  onNavigate: (page: ActivePage, cat?: CategoryKey) => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#f6f3f2] text-[#1b1c1c] pt-16 pb-12 mt-auto border-t border-[#d9c1c1]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                alt="RUPU ORNAMENTS Logo" 
                className="h-8 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UDQ9hXYYprTVd9I0Zl2XPQdNavTUEkRI9BcB482IALan50_tAL4r8epf96-PU-HRnUohSMmj_VmU1WLa7Y6JsX8W3MXQyhYvKlKzobzZGa2kjjKkmmsSBPKFW_x8fYG-otDUPy9pEwHXPrVzIUUP7zG1W_gniZzr9U_Z27itNOPSckbB9fPsJ12BKbXcRrLGKOan3Xglssms4BZcEiXwTdNB-h78ZGD2f6JawO3nfnT6PBGfkRb-M7" 
              />
              <span className="font-headline-sm text-xl text-[#2a0006] uppercase tracking-wider">
                RUPU ORNAMENTS
              </span>
            </div>
            <p className="font-body-sm text-[13px] text-[#544343] max-w-sm leading-relaxed">
              ঐতিহ্য, আভিজাত্য এবং পরম কারুশিল্পের এক অনন্য মেলবন্ধন। প্রতিটি অলংকারে আমরা ফুটিয়ে তুলি বাঙ্গালী নারীর রূপের অপার মহিমা ও রাজকীয় আভিজাত্য।
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="bg-[#fed65b] px-3 py-1 font-label-uppercase text-[11px] text-[#745c00] font-semibold">
                ১০০% হলমার্কযুক্ত স্বর্ণ ও রৌপ্য
              </div>
              <div className="bg-[#f0eded] px-3 py-1 font-label-uppercase text-[11px] text-[#544343]">
                লাইফটাইম গ্যারান্টি
              </div>
            </div>
          </div>

          {/* Column 1: Jewellery Collections */}
          <div>
            <h4 className="font-headline-sm text-base text-[#2a0006] mb-4 font-semibold">
              গহনার সম্ভার
            </h4>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#544343]">
              <li>
                <button 
                  onClick={() => onNavigate('all-products', 'all')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  সকল ঐতিহ্যবাহী গহনা
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('all-products', 'earrings')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  কানের দুল ও ঝুমকা
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('all-products', 'necklace')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  রাজকীয় সীতাহার ও নেকলেস
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('all-products', 'rings')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  হীরক ও স্বর্ণের আংটি
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('all-products', 'bracelets-and-bangles')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  বালা, চুড়ি ও রতনচূর
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care & Guides */}
          <div>
            <h4 className="font-headline-sm text-base text-[#2a0006] mb-4 font-semibold">
              গ্রাহক সেবা ও নির্দেশিকা
            </h4>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#544343]">
              <li>
                <button 
                  onClick={() => onNavigate('order-tracking')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer flex items-center gap-1 font-semibold text-[#4a0e17]"
                >
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  <span>অর্ডার ট্র্যাকিং</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('customer-reviews')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  গ্রাহক রিভিউ ও অভিজ্ঞতা
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  গ্রাহক সহায়তা কেন্দ্র
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  হোয়াটসঅ্যাপ অর্ডার পদ্ধতি
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer"
                >
                  এক্সচেঞ্জ ও রিটার্ন পলিসি
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('admin-login')} 
                  className="hover:text-[#2a0006] transition-colors text-left cursor-pointer text-[#4a0e17] font-medium"
                >
                  অ্যাডমিন পোর্টাল
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-headline-sm text-base text-[#2a0006] mb-4 font-semibold">
              যোগাযোগ ও ঠিকানা
            </h4>
            <p className="font-body-sm text-[13px] text-[#544343] mb-3 leading-relaxed">
              ধানমন্ডি রোড নং ২৭, ঢাকা - ১২০৯<br />
              কল: +৮৮০ ১৭০০-০০০০০০<br />
              ইমেইল: info@rupuornaments.com
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a 
                href="https://rupuornaments.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-[#f0eded] hover:bg-[#2a0006] hover:text-white transition-colors text-[#544343]"
                title="Website"
              >
                <span className="material-symbols-outlined text-base">public</span>
              </a>
              <a 
                href="mailto:info@rupuornaments.com" 
                className="w-8 h-8 flex items-center justify-center bg-[#f0eded] hover:bg-[#2a0006] hover:text-white transition-colors text-[#544343]"
                title="Email Us"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-[#f0eded] hover:bg-[#25D366] hover:text-white transition-colors text-[#544343]"
                title="WhatsApp Share"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 mt-4 border-t border-[#d9c1c1] flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-[13px] text-[#544343]">
          <div>
            © ২০২৫ রূপু অর্নামেন্টস (RUPU ORNAMENTS) • সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#2a0006] cursor-pointer">গোপনীয়তা নীতি</span>
            <span className="hover:text-[#2a0006] cursor-pointer">শর্তাবলী</span>
            <span className="hover:text-[#2a0006] cursor-pointer">সিকিউর পেমেন্ট</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
