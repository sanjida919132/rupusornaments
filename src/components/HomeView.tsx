import React, { useState } from 'react';
import { Product, CategoryCardData, CollectionFilter, CategoryKey } from '../types/jewelry';
import { CATEGORIES, REVIEWS, generateWhatsAppOrderUrl, generateWhatsAppInquiryUrl, WHATSAPP_DISPLAY } from '../data/mockProducts';

interface HomeViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigateToCategory: (category: CategoryKey) => void;
  onNavigateToContact: () => void;
  onNavigateToAllProducts: () => void;
  onNavigateToReviews?: () => void;
  onNavigateToOrderTracking?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  onSelectProduct,
  onNavigateToCategory,
  onNavigateToContact,
  onNavigateToAllProducts,
  onNavigateToReviews,
  onNavigateToOrderTracking
}) => {
  const [activeTab, setActiveTab] = useState<CollectionFilter>('all');

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.tags.includes(activeTab));

  return (
    <div className="flex flex-col w-full">
      {/* Top Luxury Announcement Ticker */}
      <section className="w-full bg-[#4a0e17] text-white py-2.5 px-6 border-b border-[#735c00]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ffe088] animate-ping"></span>
            <span className="font-label-uppercase text-[11px] tracking-[0.2em] text-[#e9c349] uppercase">
              সারাদেশে নিরাপদ ক্যাশ অন ডেলিভারি এবং বিশেষ হোম ট্রায়াল সুবিধা
            </span>
          </div>
          <div className="flex items-center gap-6 font-body-sm text-[13px] text-[#eae7e7]">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#ffe088]">verified</span> 
              ১০০% হলমার্কযুক্ত স্বর্ণ ও রৌপ্য
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#ffe088]">lock</span> 
              সুরক্ষিত কেনাকাটা
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#ffe088]">support_agent</span> 
              সার্বক্ষণিক কনসিয়ার্জ সেবা
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: Hero Banner */}
      <section className="relative w-full bg-[#f6f3f2] overflow-hidden py-16 lg:py-24">
        {/* Subtle Background Ambient Radial Gradient */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#fed65b]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#4a0e17]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Editorial Typography & CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fcf9f8] border border-[#735c00]/40">
                <span className="material-symbols-outlined text-sm text-[#735c00]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                <span className="font-label-uppercase text-[11px] text-[#2a0006] font-bold tracking-widest uppercase">
                  হেরিটেজ ব্রাইডাল অটেলিয়ার ২০২৫
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-headline-lg text-4xl lg:text-[54px] lg:leading-[62px] text-[#2a0006] font-serif tracking-tight">
                  আপনার সৌন্দর্যে যোগ হোক <br />
                  <span className="italic text-[#4a0e17] font-light">অনন্য রাজকীয়</span> আভিজাত্য
                </h1>
                <p className="font-body-lg text-base lg:text-[18px] text-[#544343] max-w-xl leading-relaxed">
                  আপনার পছন্দের গহনা, এখন আরও সহজে। দেশের সেরা কারিগরদের নিখুঁত হাতে তৈরি প্রিমিয়াম ডিজাইনের অলংকার কালেকশন। প্রতিটি সূক্ষ্ম কারুকাজে ঐতিহ্যের অনন্য স্পর্শ।
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button 
                  onClick={onNavigateToAllProducts}
                  className="px-8 py-4 bg-[#2a0006] hover:bg-[#4a0e17] text-white font-label-uppercase text-[11px] uppercase tracking-[0.2em] text-center shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>গহনা দেখুন</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>

                <a 
                  className="px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-label-uppercase text-[11px] tracking-[0.14em] text-center shadow-[0_6px_20px_rgba(37,211,102,0.25)] transition-all flex items-center justify-center gap-2"
                  href={generateWhatsAppInquiryUrl()}
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  <span className="flex flex-col text-left leading-none">
                    <span className="text-[12px] font-bold">WhatsApp-এ যোগাযোগ</span>
                    <span className="text-[9px] opacity-80 tracking-widest">{WHATSAPP_DISPLAY}</span>
                  </span>
                </a>
              </div>

              {/* Trust Metric Micro Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#d9c1c1]/40 max-w-lg">
                <div className="space-y-1">
                  <div className="font-price-lg text-2xl text-[#2a0006] font-bold">১০০%</div>
                  <div className="font-body-sm text-xs text-[#544343]">হলমার্ক সার্টিফাইড</div>
                </div>
                <div className="space-y-1">
                  <div className="font-price-lg text-2xl text-[#2a0006] font-bold">২৫,০০০+</div>
                  <div className="font-body-sm text-xs text-[#544343]">সন্তুষ্ট গ্রাহক</div>
                </div>
                <div className="space-y-1">
                  <div className="font-price-lg text-2xl text-[#2a0006] font-bold">৭ দিন</div>
                  <div className="font-body-sm text-xs text-[#544343]">সহজ রিটার্ন পলিসি</div>
                </div>
              </div>
            </div>

            {/* Right: Luxury Visual Montage & Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Showcase Frame */}
                <div className="bg-[#fcf9f8] p-3 shadow-xl border border-[#735c00]/30 relative">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#4a0e17]">
                    <img 
                      alt="RUPU ORNAMENTS Royal Gold Bridal Choker" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Obv9ArnVTTMXU7kB64rSEy2TsC9AE1QnlRQBPmItkFIBmawajI6-wt2bPIx0rz-wO9uVyMWCo1ljBpu0VrI5Iqn2cjtJ2dUjbRkNls_mVnzhnSKeLOL9OS2evARvbLRhxEck8NPKyWUu_LUP3gt_-ol4dZncpDNSvK_cRzcBtp0XSnZV3H6gHlFlLN9kPqxywzsRtwgxd0dNaV4ZIMcyovATbJWYGRHZ5f7BZikINsA68PC_iXc" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a0006]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-label-uppercase text-[11px] text-[#ffe088] tracking-widest uppercase">
                        এক্সক্লুসিভ ব্রাইডাল আর্ট
                      </span>
                      <p className="font-headline-sm text-lg text-white font-serif">
                        মহারানী পোলকি সীতাহার কালেকশন
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge 1: 100% খাটি অলংকার */}
                <div className="absolute -top-6 -left-6 bg-[#fcf9f8] p-3.5 shadow-xl border border-[#735c00]/40 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#fed65b]/40 flex items-center justify-center text-[#745c00]">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified_user
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-body-sm text-xs font-bold text-[#2a0006]">১০০% খাঁটি অলংকার</p>
                    <p className="font-label-uppercase text-[10px] text-[#544343] uppercase tracking-wider">BIS Hallmarked 22K</p>
                  </div>
                </div>

                {/* Floating Trust Badge 2: হস্তনির্মিত কারুকাজ */}
                <div className="absolute top-1/2 -right-8 bg-[#fcf9f8] p-3.5 shadow-xl border border-[#735c00]/40 flex items-center gap-3 hidden sm:flex">
                  <div className="w-10 h-10 bg-[#4a0e17] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">handyman</span>
                  </div>
                  <div className="text-left">
                    <p className="font-body-sm text-xs font-bold text-[#2a0006]">হস্তনির্মিত কারুকাজ</p>
                    <p className="font-label-uppercase text-[10px] text-[#544343] uppercase tracking-wider">মাস্টার কারিগর শৈলী</p>
                  </div>
                </div>

                {/* Floating Trust Badge 3: ক্যাশ অন ডেলিভারি */}
                <div className="absolute -bottom-6 left-6 bg-[#fcf9f8] p-3.5 shadow-xl border border-[#735c00]/40 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">local_shipping</span>
                  </div>
                  <div className="text-left">
                    <p className="font-body-sm text-xs font-bold text-[#2a0006]">ক্যাশ অন ডেলিভারি</p>
                    <p className="font-label-uppercase text-[10px] text-[#544343] uppercase tracking-wider">সারা বাংলাদেশে ২৪-৭২ ঘণ্টায়</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Categories Section */}
      <section className="w-full bg-[#fcf9f8] py-20 px-6 lg:px-12 border-t border-[#d9c1c1]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
              কিউরেটেড ক্যাটাগরি
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#2a0006] font-serif">
              ক্যাটাগরি অনুযায়ী বেছে নিন
            </h2>
            <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
            <p className="font-body-md text-[#544343]">
              আপনার প্রতিটি বিশেষ মুহূর্তের জন্য নিখুঁত এবং রাজকীয় অলংকারের সম্ভার
            </p>
          </div>

          {/* Category Grid: 6 Distinct Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigateToCategory(category.categoryKey)}
                className="group relative bg-[#f6f3f2] border border-[#d9c1c1]/50 hover:border-[#735c00] transition-all duration-300 p-6 flex flex-col justify-between text-left cursor-pointer overflow-hidden"
              >
                <div className="aspect-square w-full overflow-hidden mb-6 bg-[#f0eded] relative">
                  <img 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={category.imageUrl} 
                  />
                  <span className="absolute top-3 left-3 bg-[#2a0006] text-white font-label-uppercase text-[10px] px-2 py-0.5">
                    {category.designCount}
                  </span>
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif group-hover:text-[#4a0e17] transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-body-sm text-xs text-[#544343]">
                    {category.subtitle}
                  </p>
                  <div className="pt-3 inline-flex items-center gap-1 font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase group-hover:gap-2 transition-all">
                    <span>কালেকশন দেখুন</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Collection Section with Filter Tabs */}
      <section className="w-full bg-[#f6f3f2] py-20 px-6 lg:px-12 border-t border-[#d9c1c1]/30" id="featured-collection">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Title & Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
                সিগনেচার ডিজাইন
              </span>
              <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#2a0006] font-serif">
                আমাদের গহনার কালেকশন
              </h2>
              <p className="font-body-md text-[#544343]">
                সবচেয়ে জনপ্রিয় এবং নতুন ডিজাইনের বিশুদ্ধ কারুশিল্পের অলংকার
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#d9c1c1]/40">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 font-label-uppercase text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-[#2a0006] text-white' 
                    : 'bg-[#fcf9f8] text-[#544343] hover:text-[#2a0006] hover:bg-[#f0eded]'
                }`}
              >
                সকল (All)
              </button>
              <button 
                onClick={() => setActiveTab('new')}
                className={`px-4 py-2 font-label-uppercase text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'new' 
                    ? 'bg-[#2a0006] text-white' 
                    : 'bg-[#fcf9f8] text-[#544343] hover:text-[#2a0006] hover:bg-[#f0eded]'
                }`}
              >
                নতুন আগমন
              </button>
              <button 
                onClick={() => setActiveTab('trending')}
                className={`px-4 py-2 font-label-uppercase text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'trending' 
                    ? 'bg-[#2a0006] text-white' 
                    : 'bg-[#fcf9f8] text-[#544343] hover:text-[#2a0006] hover:bg-[#f0eded]'
                }`}
              >
                ট্রেন্ডিং
              </button>
              <button 
                onClick={() => setActiveTab('bridal')}
                className={`px-4 py-2 font-label-uppercase text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'bridal' 
                    ? 'bg-[#2a0006] text-white' 
                    : 'bg-[#fcf9f8] text-[#544343] hover:text-[#2a0006] hover:bg-[#f0eded]'
                }`}
              >
                ব্রাইডাল
              </button>
            </div>
          </div>

          {/* 4-Column Responsive Grid of Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <div 
                key={product.id}
                className="bg-[#fcf9f8] border border-[#d9c1c1]/50 hover:border-[#735c00] transition-all flex flex-col justify-between group"
              >
                {/* Product Image Stage */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[4/5] bg-[#f0eded] overflow-hidden p-3 cursor-pointer"
                >
                  <img 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={product.imageUrl} 
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="bg-[#2a0006] text-white font-label-uppercase text-[10px] px-2 py-0.5 tracking-wider uppercase">
                        {product.badge}
                      </span>
                    )}
                    <span className="bg-[#fed65b] text-[#745c00] font-label-uppercase text-[10px] px-2 py-0.5 tracking-wider uppercase font-semibold">
                      {product.categoryName}
                    </span>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 text-[#2a0006] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" 
                    title="জুম করুন"
                  >
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#544343] font-label-uppercase text-[11px] mb-1">
                      <span>কোড: {product.sku}</span>
                      <span className="text-[#735c00] font-semibold">{product.finishing || '22K ফিনিশ'}</span>
                    </div>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-headline-sm text-lg text-[#2a0006] font-serif leading-snug cursor-pointer hover:text-[#4a0e17] transition-colors"
                    >
                      {product.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#544343] line-clamp-1 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#d9c1c1]/30 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="font-price-lg text-xl text-[#2a0006] font-bold">
                        ৳{product.price.toLocaleString('bn-BD')}
                      </span>
                      {product.originalPrice && (
                        <span className="font-body-sm text-xs line-through text-[#867273]">
                          ৳{product.originalPrice.toLocaleString('bn-BD')}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => onSelectProduct(product)}
                        className="py-2.5 px-2 text-center border border-[#2a0006] text-[#2a0006] hover:bg-[#2a0006] hover:text-white font-label-uppercase text-[10px] tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        বিস্তারিত
                      </button>
                      <a 
                        className="py-2.5 px-2 text-center bg-[#25D366] hover:bg-[#128C7E] text-white font-label-uppercase text-[10px] tracking-wider uppercase flex items-center justify-center gap-1 transition-colors shadow-sm"
                        href={generateWhatsAppOrderUrl(product)}
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        <span>WhatsApp অর্ডার</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom View All Button */}
          <div className="pt-8 text-center">
            <button 
              onClick={onNavigateToAllProducts}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#2a0006] text-[#2a0006] hover:bg-[#2a0006] hover:text-white font-label-uppercase text-[11px] tracking-[0.2em] uppercase transition-all shadow-sm cursor-pointer"
            >
              <span>সকল গহনা ও ক্যাটালগ দেখুন</span>
              <span className="material-symbols-outlined text-base">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: How WhatsApp Ordering Works */}
      <section className="w-full bg-[#fcf9f8] py-20 px-6 lg:px-12 border-t border-[#d9c1c1]/30">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
              সহজ কেনাকাটার প্রক্রিয়া
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#2a0006] font-serif">
              কিভাবে WhatsApp-এ সহজে অর্ডার করবেন?
            </h2>
            <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
            <p className="font-body-md text-[#544343]">
              কোনো ঝামেলা ছাড়াই মাত্র ৩টি সহজ ধাপে আপনার কাঙ্ক্ষিত গহনাটি পৌঁছে যাবে আপনার ঘরে
            </p>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#f6f3f2] p-8 border border-[#d9c1c1]/40 relative space-y-4">
              <div className="w-14 h-14 bg-[#2a0006] text-white flex items-center justify-center font-headline-md text-2xl font-serif">
                ০১
              </div>
              <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                পছন্দের গহনা নির্বাচন করুন
              </h3>
              <p className="font-body-md text-[#544343] leading-relaxed">
                আমাদের সমৃদ্ধ ক্যাটালগ থেকে আপনার পছন্দের নেকলেস, ঝুমকা বা আংটি বেছে নিন এবং কোডটি লক্ষ্য করুন।
              </p>
              <div className="pt-2 flex items-center gap-2 text-[#735c00] font-label-uppercase text-[11px] font-semibold">
                <span className="material-symbols-outlined text-base">manage_search</span>
                <span>১০০% অথেনটিক ক্যাটালগ</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f6f3f2] p-8 border border-[#d9c1c1]/40 relative space-y-4">
              <div className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center font-headline-md text-2xl font-serif">
                ০২
              </div>
              <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                'WhatsApp-এ অর্ডার' ক্লিক করুন
              </h3>
              <p className="font-body-md text-[#544343] leading-relaxed">
                প্রতিটি গহনার নিচে থাকা সরাসরি সবুজ বাটনে ক্লিক করলেই স্বয়ংক্রিয়ভাবে গহনার বিবরণ ও মূল্যসহ চ্যাট চালু হবে।
              </p>
              <div className="pt-2 flex items-center gap-2 text-[#128C7E] font-label-uppercase text-[11px] font-semibold">
                <span className="material-symbols-outlined text-base">chat_bubble</span>
                <span>ইনস্ট্যান্ট প্রাক-সংযুক্ত বার্তা</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f6f3f2] p-8 border border-[#d9c1c1]/40 relative space-y-4">
              <div className="w-14 h-14 bg-[#2a0006] text-white flex items-center justify-center font-headline-md text-2xl font-serif">
                ০৩
              </div>
              <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                ঠিকানা দিন ও ডেলিভারি নিন
              </h3>
              <p className="font-body-md text-[#544343] leading-relaxed">
                আমাদের কনসিয়ার্জকে আপনার ডেলিভারি ঠিকানা দিন। পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ নিরাপদে ক্যাশ অন ডেলিভারি করুন।
              </p>
              <div className="pt-2 flex items-center gap-2 text-[#735c00] font-label-uppercase text-[11px] font-semibold">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>ক্যাশ অন ডেলিভারি সুরক্ষা</span>
              </div>
            </div>
          </div>

          {/* Quick Concierge CTA Box */}
          <div className="bg-[#2a0006] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-label-uppercase text-[11px] text-[#ffe088] tracking-widest uppercase">
                ব্যক্তিগত নির্দেশিকা চান?
              </span>
              <h4 className="font-headline-md text-2xl md:text-3xl font-serif">
                আমাদের ব্রাইডাল জুয়েলারি কনসালট্যান্টের সাথে কথা বলুন
              </h4>
              <p className="font-body-sm text-[13px] text-[#eae7e7] max-w-xl">
                আপনার শাড়ী বা লেহেঙ্গার রঙের সাথে মিলিয়ে সেরা গহনা বেছে নিতে আমাদের অভিজ্ঞ ডিজাইনাররা সম্পূর্ণ বিনামূল্যে পরামর্শ দেন।
              </p>
            </div>
            <a 
              className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-label-uppercase text-[11px] tracking-widest uppercase flex items-center gap-3 flex-shrink-0 transition-colors shadow-lg"
              href={generateWhatsAppInquiryUrl('Hello Rupu Ornaments, I would like a personal bridal consultation.')}
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-xl">perm_phone_msg</span>
              <span>ফ্রি পরামর্শ নিন</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Customer Reviews & Trust Showcase */}
      <section className="w-full bg-[#f6f3f2] py-20 px-6 lg:px-12 border-t border-[#d9c1c1]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
              গ্রাহকের ভালোবাসা
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#2a0006] font-serif">
              গ্রাহকদের সন্তুষ্টি ও রাজকীয় অভিজ্ঞতা
            </h2>
            <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
            <p className="font-body-md text-[#544343]">
              আমাদের অলংকার পরে বিশেষ দিনগুলোতে দ্যুতি ছড়িয়েছেন হাজারো সম্মানিত নারী
            </p>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="bg-[#fcf9f8] p-8 border border-[#d9c1c1]/40 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center text-[#735c00] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-[#1b1c1c] leading-relaxed italic">
                    {review.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-[#d9c1c1]/30">
                  <img 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full object-cover border border-[#735c00]/40" 
                    src={review.avatar} 
                  />
                  <div>
                    <h5 className="font-body-md font-bold text-[#2a0006]">
                      {review.author}
                    </h5>
                    <p className="font-label-uppercase text-[11px] text-[#544343] uppercase">
                      {review.location} • <span className="text-[#735c00] font-semibold">ভেরিফাইড ক্রেতা</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Actions Banner */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigateToReviews?.()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4a0e17] text-white hover:bg-[#2a0006] transition-all font-semibold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-[#ffe088]">rate_review</span>
              <span>সকল গ্রাহক রিভিউ ও রেটিং দেখুন (৩৮০+ পর্যালোচনা)</span>
            </button>
            <button
              onClick={() => onNavigateToReviews?.()}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#735c00] text-[#4a0e17] hover:bg-[#f2ebe5] transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer bg-white"
            >
              <span className="material-symbols-outlined text-base">edit_square</span>
              <span>আপনার রিভিউ লিখুন</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Order Tracking Banner Section */}
      <section className="w-full bg-gradient-to-r from-[#2a0006] via-[#3d0b13] to-[#2a0006] text-white py-14 px-6 lg:px-12 border-y border-[#735c00]/30 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#ffe088]/30 rounded-full">
              <span className="material-symbols-outlined text-sm text-[#ffe088]">local_shipping</span>
              <span className="font-label-uppercase text-[11px] tracking-wider text-[#ffe088] uppercase font-bold">
                লাইভ পার্সেল ট্র্যাকিং
              </span>
            </div>
            <h3 className="font-headline-md text-2xl lg:text-3xl font-serif text-[#ffe088]">
              আপনার অলংকারটি এখন কোথায় আছে ট্র্যাক করুন
            </h3>
            <p className="font-body-sm text-sm text-[#d9c1c1] max-w-xl">
              অর্ডার আইডি বা মোবাইল নম্বর দিয়ে আপনার মূল্যবান জুয়েলারি পার্সেলের রিয়েল-টাইম ডেলিভারি স্ট্যাটাস ও স্টিডফাস্ট কুরিয়ার ট্র্যাকিং কোড জানুন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigateToOrderTracking?.()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#ffe088] hover:bg-[#ebd074] text-[#2a0006] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">search_check</span>
              <span>অর্ডার ট্র্যাক করুন</span>
            </button>
            <a
              href="https://wa.me/8801700000000?text=%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B8%20%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg text-[#25D366]">chat</span>
              <span>WhatsApp হেল্পলাইন</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: About Rupu Ornaments (আমাদের ঐতিহ্য ও বিশ্বাস) */}
      <section className="w-full bg-[#fcf9f8] py-20 px-6 lg:px-12 border-t border-[#d9c1c1]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Story */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#4a0e17] p-4 border border-[#735c00]/40 shadow-xl relative">
                <div className="aspect-[3/4] overflow-hidden bg-[#2a0006]">
                  <img 
                    alt="কারিগরদের নিখুঁত শিল্পকর্ম" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArjbW2egQB-WipEEnZNIWfEjG9j5WYrK55mgfYt4Vgvc69mh-tF4LrrTDhXKLWsLlJbH5d0FEZpH7JtP9IuQ8IWli6swZtjrmbA_99NUEC4zmMuZFFEHspHvxTiKAYdqrQhTID5slljPX_h65WCojijVqL46LZRJbU4f6Pmp4Emg3kSbtJj6cYv8CbQfDeNORzZSdT9GYJUI0jhwzGrYDP9Uh5EE9Ey_bDHMXJ27gCp5Ep5zh1VhU" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#fcf9f8] p-5 border border-[#735c00] shadow-lg max-w-[200px] text-center hidden sm:block">
                  <span className="font-headline-sm text-2xl text-[#2a0006] font-serif font-bold">২৫+ বছর</span>
                  <p className="font-body-sm text-xs text-[#544343]">ঐতিহ্যের বিশ্বস্ত কারুকাজ</p>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eae7e7] border border-[#735c00]/40">
                <span className="font-label-uppercase text-[11px] text-[#2a0006] font-bold tracking-widest uppercase">
                  আমাদের ঐতিহ্য ও বিশ্বাস
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#2a0006] font-serif">
                বাঙ্গালী নারীর রূপের অপার মহিমা ও রাজকীয় আভিজাত্য
              </h2>
              <p className="font-body-md text-[#544343] leading-relaxed">
                'রূপু অর্নামেন্টস' শুধুমাত্র কোনো গহনা বিক্রির প্রতিষ্ঠান নয়; এটি প্রজন্মের পর প্রজন্ম ধরে চলে আসা খাঁটি ঐতিহ্য, বংশানুক্রমিক কারুশিল্প এবং অনুভূতির এক পবিত্র মেলবন্ধন। আমাদের প্রতিটি নকশায় রয়েছে বাংলার সমৃদ্ধ ইতিহাসের ছোঁয়া।
              </p>
              <p className="font-body-md text-[#544343] leading-relaxed">
                অভিজ্ঞ মাস্টার কারিগরদের পরম যত্নে তৈরি প্রতিটি অলংকার শতভাগ খাঁটি ধাতু ও পাথরে নির্মিত। বিবাহ, উৎসব কিংবা দৈনন্দিন রূপচর্চায় আপনার সৌন্দর্যকে অনন্য মহিমায় ফুটিয়ে তুলতে আমরা অঙ্গীকারবদ্ধ।
              </p>

              {/* 4 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#735c00] text-2xl">verified</span>
                  <div>
                    <h4 className="font-body-md font-bold text-[#2a0006]">হলমার্ক গ্যারান্টি</h4>
                    <p className="font-body-sm text-xs text-[#544343]">প্রতিটি অলংকারে বিশুদ্ধতার সরকারি মান</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#735c00] text-2xl">workspace_premium</span>
                  <div>
                    <h4 className="font-body-md font-bold text-[#2a0006]">লাইফটাইম পলিশ সেবা</h4>
                    <p className="font-body-sm text-xs text-[#544343]">আজীবন আপনার গহনার দীপ্তি অক্ষুণ্ণ রাখুন</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#735c00] text-2xl">card_giftcard</span>
                  <div>
                    <h4 className="font-body-md font-bold text-[#2a0006]">রয়্যাল আনবক্সিং</h4>
                    <p className="font-body-sm text-xs text-[#544343]">ভেলভেট বক্স ও উপহার মোড়কের নিশ্চয়তা</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#735c00] text-2xl">sync_alt</span>
                  <div>
                    <h4 className="font-body-md font-bold text-[#2a0006]">সহজ এক্সচেঞ্জ সুবিধা</h4>
                    <p className="font-body-sm text-xs text-[#544343]">পছন্দমতো যেকোনো সময় পরিবর্তন পলিসি</p>
                  </div>
                </div>
              </div>

              {/* Signature row */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#d9c1c1]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2a0006] text-white flex items-center justify-center font-serif font-bold text-lg">
                    RO
                  </div>
                  <div>
                    <p className="font-body-sm font-bold text-[#2a0006]">রূপু অর্নামেন্টস পরিবার</p>
                    <p className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <button 
                  onClick={onNavigateToContact}
                  className="font-label-uppercase text-[11px] text-[#2a0006] hover:text-[#735c00] underline tracking-widest uppercase transition-colors cursor-pointer"
                >
                  আমাদের সাথে যোগাযোগ করুন →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
