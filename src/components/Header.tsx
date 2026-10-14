import React, { useState } from 'react';
import { ActivePage, CategoryKey } from '../types/jewelry';
import { WHATSAPP_DISPLAY, generateWhatsAppInquiryUrl } from '../data/mockProducts';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage, categoryFilter?: CategoryKey) => void;
  isAdminLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, isAdminLoggedIn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage, cat?: CategoryKey) => {
    onNavigate(page, cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fcf9f8]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(74,14,23,0.04)]">
      {/* Top Banner Ticker */}
      <div className="bg-[#2a0006] text-white py-1.5 px-4 text-center font-label-uppercase text-[11px] tracking-widest hidden md:block">
        ROYAL HERITAGE ATELIER • 100% HALLMARKED HANDCRAFTED JEWELLERY • FREE NATIONWIDE INSURED SHIPPING
      </div>

      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <img 
              alt="RUPU ORNAMENTS Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1UDQ9hXYYprTVd9I0Zl2XPQdNavTUEkRI9BcB482IALan50_tAL4r8epf96-PU-HRnUohSMmj_VmU1WLa7Y6JsX8W3MXQyhYvKlKzobzZGa2kjjKkmmsSBPKFW_x8fYG-otDUPy9pEwHXPrVzIUUP7zG1W_gniZzr9U_Z27itNOPSckbB9fPsJ12BKbXcRrLGKOan3Xglssms4BZcEiXwTdNB-h78ZGD2f6JawO3nfnT6PBGfkRb-M7" 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-xl text-[#2a0006] tracking-wider uppercase font-medium">
                RUPU
              </span>
              <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-[0.25em] -mt-1 font-semibold">
                ORNAMENTS
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 font-body-md text-[14px]">
          <button 
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'home' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            হোম
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'all')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'all-products' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            সকল গহনা
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'earrings')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'earrings' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            কানের দুল
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'necklace')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'necklace' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            নেকলেস ও হার
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'rings')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'rings' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            আংটি
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'bracelets-and-bangles')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'bracelets-and-bangles' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            ব্রেসলেট ও চুড়ি
          </button>
          <button 
            onClick={() => handleNavClick('customer-reviews')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'customer-reviews' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            রিভিউ
          </button>
          <button 
            onClick={() => handleNavClick('order-tracking')}
            className={`px-3 py-2 transition-colors cursor-pointer flex items-center gap-1 ${
              activePage === 'order-tracking' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">local_shipping</span>
            <span>অর্ডার ট্র্যাকিং</span>
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 transition-colors cursor-pointer ${
              activePage === 'contact' 
                ? 'text-[#2a0006] font-bold bg-[#eae7e7]' 
                : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            যোগাযোগ
          </button>
        </nav>

        {/* Action Zone: WhatsApp, Admin Vault, Profile */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <a 
            href={generateWhatsAppInquiryUrl()}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-2 text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 transition-all shadow-[0_2px_10px_rgba(37,211,102,0.2)]"
          >
            <span className="material-symbols-outlined text-lg leading-none">chat</span>
            <span className="hidden sm:inline font-body-sm text-[13px]">WhatsApp-এ যোগাযোগ</span>
          </a>

          {/* Admin Vault Access */}
          <button 
            onClick={() => handleNavClick(isAdminLoggedIn ? 'admin-portal' : 'admin-login')}
            className="p-2 text-[#867273] hover:text-[#2a0006] hover:bg-[#f0eded] transition-colors inline-flex items-center cursor-pointer"
            title="Admin Quick Access"
          >
            <span className="material-symbols-outlined text-xl">admin_panel_settings</span>
          </button>

          {/* Profile Avatar */}
          <div className="relative group cursor-pointer" onClick={() => handleNavClick(isAdminLoggedIn ? 'admin-portal' : 'admin-login')}>
            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#d9c1c1]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBIJ3r2NEShHtXQNlDsrLQxN9DRuzdZ2FN3RFNcgwzW3xwp4M_DSbBbm6ExjznAeEkLHxd7qLJbipp39ICHMLY2IViM4HM0uxgGr7gDR9Yice1XLyX5NvyTIfDa_9HWWbLIkYDZoSF_r_5dAFkeGjIgrc7oP2jKQuY3tZNYnZ8RG93AlAu38WO65FNzuRwbnlymQldqx2DpqI7DWIUgpMPnHSNLBA5ImUykFOvXYlfgShYPNqdwqs" 
            />
            {isAdminLoggedIn && (
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] border border-white rounded-full"></span>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#2a0006] hover:bg-[#f0eded] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcf9f8] border-b border-[#d9c1c1] px-6 py-4 space-y-2 shadow-lg">
          <button 
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3 py-2.5 text-sm font-medium ${
              activePage === 'home' ? 'bg-[#eae7e7] text-[#2a0006] font-bold' : 'text-[#544343]'
            }`}
          >
            হোম
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'all')}
            className={`block w-full text-left px-3 py-2.5 text-sm font-medium ${
              activePage === 'all-products' ? 'bg-[#eae7e7] text-[#2a0006] font-bold' : 'text-[#544343]'
            }`}
          >
            সকল গহনা
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'earrings')}
            className="block w-full text-left px-3 py-2 text-sm text-[#544343] hover:text-[#2a0006]"
          >
            কানের দুল ও ঝুমকা
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'necklace')}
            className="block w-full text-left px-3 py-2 text-sm text-[#544343] hover:text-[#2a0006]"
          >
            নেকলেস ও হার
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'rings')}
            className="block w-full text-left px-3 py-2 text-sm text-[#544343] hover:text-[#2a0006]"
          >
            আংটি
          </button>
          <button 
            onClick={() => handleNavClick('all-products', 'bracelets-and-bangles')}
            className="block w-full text-left px-3 py-2 text-sm text-[#544343] hover:text-[#2a0006]"
          >
            ব্রেসলেট ও চুড়ি
          </button>
          <button 
            onClick={() => handleNavClick('customer-reviews')}
            className={`block w-full text-left px-3 py-2 text-sm ${
              activePage === 'customer-reviews' ? 'bg-[#eae7e7] text-[#2a0006] font-bold' : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            গ্রাহক রিভিউ ও রেটিং
          </button>
          <button 
            onClick={() => handleNavClick('order-tracking')}
            className={`block w-full text-left px-3 py-2 text-sm flex items-center gap-2 ${
              activePage === 'order-tracking' ? 'bg-[#eae7e7] text-[#2a0006] font-bold' : 'text-[#544343] hover:text-[#2a0006]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">local_shipping</span>
            <span>অর্ডার ট্র্যাকিং</span>
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-sm text-[#544343] hover:text-[#2a0006]"
          >
            যোগাযোগ ও কাস্টমার সার্ভিস
          </button>
          <div className="pt-2 border-t border-[#d9c1c1] flex items-center justify-between">
            <button 
              onClick={() => handleNavClick(isAdminLoggedIn ? 'admin-portal' : 'admin-login')}
              className="text-xs font-semibold text-[#4a0e17] flex items-center gap-1.5 py-2"
            >
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
              <span>{isAdminLoggedIn ? 'অ্যাডমিন ড্যাশবোর্ড' : 'অ্যাডমিন লগইন'}</span>
            </button>
            <span className="text-xs text-[#867273]">{WHATSAPP_DISPLAY}</span>
          </div>
        </div>
      )}
    </header>
  );
};
