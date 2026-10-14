import React, { useState } from 'react';
import { ActivePage } from '../types/jewelry';

interface AdminLoginViewProps {
  onLoginSuccess: (email: string) => void;
  onNavigateHome: () => void;
}

export const AdminLoginView: React.FC<AdminLoginViewProps> = ({ onLoginSuccess, onNavigateHome }) => {
  const [email, setEmail] = useState('admin@rupuornaments.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('যাচাই করা হচ্ছে (Verifying Vault Token)...');

    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('অনুমোদিত সেশন তৈরি হয়েছে। অ্যাডমিন ড্যাশবোর্ডে স্থানান্তর করা হচ্ছে...');
      setTimeout(() => {
        onLoginSuccess(email);
      }, 700);
    }, 900);
  };

  return (
    <div className="bg-[#f0eded] text-[#1b1c1c] min-h-screen flex flex-col justify-between selection:bg-[#4a0e17] selection:text-white">
      {/* Top Header */}
      <header className="w-full pt-6 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onNavigateHome}
            className="flex flex-col text-left cursor-pointer focus:outline-none"
          >
            <span className="font-headline-md text-xl md:text-2xl text-[#2a0006] tracking-widest uppercase">
              RUPU ORNAMENTS
            </span>
            <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-[0.25em] uppercase font-semibold">
              Kolkata • Haute Joaillerie
            </span>
          </button>
          <div className="flex items-center gap-2 text-[#544343] font-label-uppercase text-[11px] tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#735c00]">lock</span>
            <span>256-Bit Vault SSL</span>
          </div>
        </div>
      </header>

      {/* Main Split Container */}
      <main className="w-full flex-1 flex flex-col items-center justify-center py-10 px-4 md:px-6">
        <div className="flex flex-col w-full items-center justify-center relative">
          {/* Subtle Ambient Glow in Background */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[480px] bg-gradient-to-b from-[#4a0e17]/10 via-[#735c00]/5 to-transparent blur-3xl pointer-events-none -z-10"></div>

          {/* Main Luxury Split Container */}
          <div className="w-full max-w-5xl bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden relative border border-[#d9c1c1]/40">
            {/* Left Column: Visual Heritage & Vault Ambiance */}
            <div className="lg:w-5/12 bg-[#4a0e17] text-white flex flex-col justify-between p-8 lg:p-12 relative overflow-hidden">
              {/* Background Filigree / Ornament Image with Scrim */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF47ESV_hs-x8IS2dAXmIVwmx41o9A6ZKQ_b_pR6XetPPzC5yFXGRTLW-SJJ26oTcMqELjSIDm9UQC96E7hd9hBZk0UGhg0ZgAOC8W5qZYw4W8NmNZO6-oT-OZsxTps2rZk0BpBdjbAXOH7DEfWlizO_CDFmFkHY58jqYhsSxxSFvernRaqb5oIZlNp35WuO2WWqoRFIKM4f6q9lmIRzgz771hAkuwn7pFw5gf5dGCwo1qebzvfRE')" }}
              ></div>
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0006] via-[#4a0e17]/90 to-[#4a0e17]/70"></div>

              {/* Top Heritage Emblem */}
              <div className="relative z-10 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#ffe088]">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  <span className="font-label-uppercase text-[11px] tracking-[0.25em] text-[#ffe088] font-bold">
                    KOLKATA ARCHIVAL ATELIER
                  </span>
                </div>
                <p className="font-headline-sm text-2xl text-white tracking-wide pt-1 font-serif">
                  রূপু অর্নামেন্টস
                </p>
                <span className="font-label-uppercase text-[10px] text-[#d9c1c1] tracking-[0.2em] uppercase">
                  Est. 1984 • Haute Joaillerie
                </span>
              </div>

              {/* Center Filigree Arch Decorative Element */}
              <div className="relative z-10 my-8 flex flex-col items-start">
                <div className="w-12 h-1 bg-[#e9c349] mb-4"></div>
                <h3 className="font-headline-md text-2xl text-white leading-tight mb-2 font-serif">
                  পণ্য ক্যাটালগ ও ভল্ট ব্যবস্থাপনা
                </h3>
                <p className="font-body-md text-sm text-[#e5e2e1] font-light leading-relaxed">
                  মহার্ঘ রত্নরাজি ও ঐতিহ্যবাহী সোনার অলঙ্কারের কেন্দ্রীয় ইনভেন্টরি, অর্ডার ও খোদাই কারিগরির নিরাপদ প্রশাসন।
                </p>

                {/* Artisanal Metric Indicator */}
                <div className="mt-6 w-full bg-[#2a0006]/60 p-4 flex items-center justify-between border border-[#735c00]/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#e9c349] text-[26px]">
                      shield_person
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-uppercase text-[10px] text-[#e5e2e1]">নিরাপত্তা স্তর</span>
                      <span className="font-price-md text-sm text-white font-semibold">Vault Grade Tier-IV</span>
                    </div>
                  </div>
                  <span className="font-label-uppercase text-[10px] text-[#ffe088] bg-[#4a0e17]/80 px-2 py-1 font-semibold">
                    22K BIS
                  </span>
                </div>
              </div>

              {/* Bottom System Status */}
              <div className="relative z-10 pt-4 border-t border-[#2a0006]/40 flex items-center justify-between text-[#e5e2e1] font-body-sm text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3de273] animate-pulse"></span>
                  সিস্টেম অনলাইন ও এনক্রিপ্টেড
                </span>
                <span className="font-label-uppercase text-[10px] text-[#d9c1c1]">
                  RUPU-OS v4.2
                </span>
              </div>
            </div>

            {/* Right Column: Authentication Credentials Form */}
            <div className="lg:w-7/12 bg-white p-8 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Portal Tagline & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fed65b]/30 text-[#241a00] font-label-uppercase text-[11px] uppercase tracking-widest font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-[#735c00]">admin_panel_settings</span>
                    RUPU ADMIN VAULT
                  </span>
                  <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                    নিরাপদ পোর্টাল
                  </span>
                </div>

                {/* Section Title */}
                <h1 className="font-headline-lg text-3xl text-[#2a0006] tracking-tight font-serif">
                  অ্যাডমিন লগইন
                </h1>
                <p className="font-subheading-editorial text-sm text-[#544343] mt-1 mb-6">
                  আপনার রূপু অর্নামেন্টস ইনভেন্টরি ও পণ্য ক্যাটালগ সুরক্ষিত রাখতে প্রবেশ করুন।
                </p>

                {/* Access Form */}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  {/* Field: Username / Email */}
                  <div className="flex flex-col gap-1 text-left">
                    <label className="font-label-uppercase text-[11px] text-[#2a0006] tracking-widest flex items-center justify-between font-semibold" htmlFor="adminEmail">
                      <span>ইউজারনেম বা অফিসিয়াল ইমেইল</span>
                      <span className="text-[#544343] font-normal lowercase">admin@rupuornaments.com</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-[#544343] text-[20px] pointer-events-none">badge</span>
                      <input 
                        className="w-full pl-11 pr-4 py-3 bg-[#fcf9f8] text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:bg-white focus:border-[#735c00] focus:outline-none transition-all placeholder:text-[#867273]" 
                        id="adminEmail" 
                        placeholder="admin@rupuornaments.com" 
                        required 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Field: Password */}
                  <div className="flex flex-col gap-1 text-left">
                    <div className="flex items-center justify-between">
                      <label className="font-label-uppercase text-[11px] text-[#2a0006] tracking-widest font-semibold" htmlFor="adminPassword">
                        নিরাপত্তা পাসওয়ার্ড
                      </label>
                      <button 
                        type="button"
                        onClick={() => alert('পাসওয়ার্ড রিকভারি নির্দেশনা আপনার নিবন্ধিত ইমেইলে পাঠানো হয়েছে।')}
                        className="font-label-uppercase text-[10px] text-[#735c00] hover:text-[#2a0006] transition-colors tracking-widest cursor-pointer"
                      >
                        পাসওয়ার্ড ভুলে গেছেন?
                      </button>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-[#544343] text-[20px] pointer-events-none">lock</span>
                      <input 
                        className="w-full pl-11 pr-12 py-3 bg-[#fcf9f8] text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:bg-white focus:border-[#735c00] focus:outline-none transition-all placeholder:text-[#867273]" 
                        id="adminPassword" 
                        placeholder="গোপন পাসওয়ার্ড প্রদান করুন" 
                        required 
                        type={showPassword ? 'text' : 'password'} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button 
                        aria-label="Toggle password view" 
                        className="absolute right-3.5 text-[#544343] hover:text-[#2a0006] transition-colors p-1 flex items-center justify-center focus:outline-none cursor-pointer" 
                        onClick={() => setShowPassword(!showPassword)} 
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Device Checkbox */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input 
                        checked={rememberMe} 
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 accent-[#4a0e17] bg-[#fcf9f8] rounded-none cursor-pointer" 
                        id="rememberDevice" 
                        type="checkbox" 
                      />
                      <span className="font-body-sm text-xs text-[#544343]">
                        এই ডিভাইসটি মনে রাখুন (Remember Device)
                      </span>
                    </label>
                    <span className="font-label-uppercase text-[10px] text-[#867273] tracking-wider">
                      24-HR SESSION
                    </span>
                  </div>

                  {/* Feedback Banner */}
                  {statusMessage && (
                    <div className="p-3 bg-[#002c0f] text-[#66ff8e] font-body-sm text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button 
                      disabled={isLoading}
                      className="w-full bg-[#4a0e17] text-white py-3.5 px-4 font-label-uppercase text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#2a0006] shadow-lg cursor-pointer group disabled:opacity-70" 
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">lock_open</span>
                      <span>{isLoading ? 'যাচাই করা হচ্ছে...' : 'লগইন করুন (Access Admin Dashboard)'}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Security Disclaimers & Fallback Navigation */}
              <div className="pt-6 mt-6 border-t border-[#eae7e7] flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5 text-[#544343] font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[#735c00] text-[18px]">lock_clock</span>
                    <span>256-Bit SSL এনক্রিপশন দ্বারা সুরক্ষিত</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#544343] font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[#735c00] text-[18px]">gavel</span>
                    <span>অনুমোদিত কর্মকর্তাদের জন্য সংরক্ষিত</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button 
                    onClick={onNavigateHome}
                    className="inline-flex items-center gap-1.5 text-[#544343] hover:text-[#2a0006] transition-colors font-label-uppercase text-[10px] tracking-wider uppercase cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    গ্রাহক স্টোরসাইটে ফিরে যান (Public Store)
                  </button>
                  <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold">
                    RUPU SECURE ATELIER
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Minimalist Footing Accent */}
          <div className="mt-6 flex items-center gap-3 opacity-60">
            <div className="w-12 h-px bg-[#d9c1c1]"></div>
            <span className="font-label-uppercase text-[10px] text-[#544343] tracking-[0.25em]">
              AUTHENTIC BENGALI HEIRLOOM JEWELRY
            </span>
            <div className="w-12 h-px bg-[#d9c1c1]"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full pb-6 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-[#544343]">
          <p>© 2025 RUPU ORNAMENTS. All Rights Reserved. Heirloom Atelier Standards.</p>
          <div className="flex items-center gap-4">
            <span className="font-label-uppercase text-[10px] uppercase cursor-pointer hover:text-[#2a0006]">Heritage Terms</span>
            <span className="font-label-uppercase text-[10px] uppercase cursor-pointer hover:text-[#2a0006]">Concierge Assistance</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
