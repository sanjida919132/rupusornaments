import React, { useState } from 'react';
import { Product, ActivePage, CategoryKey } from '../types/jewelry';
import { generateWhatsAppOrderUrl } from '../data/mockProducts';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: ActivePage, cat?: CategoryKey) => void;
  onShowToast: (message: string, icon?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onSelectProduct,
  onNavigate,
  onShowToast
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Fallback gallery if product only has 1 image
  const gallery = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.imageUrl];

  const currentImageUrl = gallery[selectedImageIndex] || product.imageUrl;

  // Recommendations: products in same category or other featured items
  const recommendations = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const formattedPrice = `৳${product.price.toLocaleString('bn-BD')}`;
  const productShareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/#product-${product.id}` 
    : `https://rupuornaments.com/products/${product.id}`;

  const prefilledMessage = `আসসালামু আলাইকুম। আমি আপনাদের এই গহনাটি অর্ডার করতে চাই।
পণ্যের নাম: ${product.title}
পণ্যের দাম: ${formattedPrice}
পণ্যের লিংক: ${productShareUrl}
দয়া করে পণ্যটি সম্পর্কে বিস্তারিত জানাবেন এবং অর্ডার করার নিয়ম জানাবেন। ধন্যবাদ।`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(prefilledMessage).then(() => {
      setCopied(true);
      onShowToast('মেসেজ সফলভাবে কপি হয়েছে!', 'content_copy');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      onShowToast('কপি ব্যর্থ হয়েছে, দয়া করে ম্যানুয়ালি কপি করুন।', 'error');
    });
  };

  return (
    <div className="flex flex-col w-full bg-[#fcf9f8]">
      {/* Editorial Breadcrumb Bar */}
      <div className="w-full bg-[#f6f3f2] py-4 px-6 lg:px-12 border-b border-[#d9c1c1]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <nav className="flex items-center gap-2 font-body-sm text-[13px] text-[#544343]">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#2a0006] transition-colors cursor-pointer"
            >
              হোম
            </button>
            <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
            <button 
              onClick={() => onNavigate('all-products', product.category)} 
              className="hover:text-[#2a0006] transition-colors cursor-pointer"
            >
              {product.categoryName}
            </button>
            <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
            <span className="text-[#2a0006] font-medium truncate max-w-xs md:max-w-md">
              {product.title}
            </span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="font-label-uppercase text-[11px] bg-[#fed65b] text-[#745c00] px-2.5 py-1 uppercase tracking-widest font-semibold">
              BIS 23K GOLD POLISHED
            </span>
            <span className="font-body-sm text-xs text-[#544343] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#735c00]">verified</span>
              সার্টিফাইড অরিজিনাল
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Presentation Spread */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT COLUMN: ARCHIVAL VISUAL SHOWCASE */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Master Showcase Frame */}
            <div className="relative bg-[#f0eded] w-full overflow-hidden group border border-[#d9c1c1]/40">
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                <span className="font-label-uppercase text-[11px] bg-[#2a0006] text-white px-3 py-1.5 uppercase tracking-widest shadow-sm">
                  হেরিটেজ ব্রাইডাল আর্ট
                </span>
                {product.discountPercent && (
                  <span className="font-label-uppercase text-[11px] bg-[#735c00] text-white px-3 py-1 uppercase tracking-widest">
                    {product.discountPercent}% বিশেষ ছাড়
                  </span>
                )}
              </div>

              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="bg-white/90 text-[#2a0006] hover:bg-[#2a0006] hover:text-white transition-all p-2.5 shadow-sm inline-flex items-center gap-1.5 font-label-uppercase text-[11px] cursor-pointer" 
                  title="জুম ভিউ টগল করুন"
                >
                  <span className="material-symbols-outlined text-base">
                    {isZoomed ? 'zoom_out' : 'zoom_in'}
                  </span>
                  <span className="hidden sm:inline">
                    {isZoomed ? 'রিসেট' : 'জুম করুন'}
                  </span>
                </button>
              </div>

              {/* Main Stage Image */}
              <div className="aspect-[4/5] w-full bg-[#eae7e7] flex items-center justify-center relative overflow-hidden">
                <img 
                  alt={product.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isZoomed ? 'scale-135 cursor-zoom-out' : 'scale-100 hover:scale-105'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  src={currentImageUrl} 
                />
              </div>

              <div className="p-4 bg-[#2a0006] text-white flex items-center justify-between text-xs font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffe088] text-base">verified_user</span>
                  <span>হ্যান্ডক্রাফটেড প্রিমিয়াম কুন্দন ও ব্রাস গোল্ড প্লেটেড কারুকাজ</span>
                </div>
                <span className="font-label-uppercase text-[10px] text-[#ffe088] tracking-wider">
                  রূপু এক্সক্লুসিভ
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 lg:gap-4">
              {gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-square overflow-hidden p-1 transition-all focus:outline-none cursor-pointer border ${
                    selectedImageIndex === idx 
                      ? 'border-[#2a0006] bg-[#2a0006] ring-1 ring-[#2a0006]' 
                      : 'border-[#d9c1c1] bg-[#f0eded] hover:border-[#735c00]'
                  }`}
                >
                  <img 
                    alt={`View ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                    src={img} 
                  />
                </button>
              ))}
            </div>

            {/* Archival Atelier Trust Strip */}
            <div className="bg-[#f6f3f2] p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#1b1c1c] border border-[#d9c1c1]/40">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#eae7e7] flex items-center justify-center text-[#2a0006] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">workspace_premium</span>
                </div>
                <div>
                  <p className="font-headline-sm text-sm font-semibold text-[#2a0006]">১০০% কারিগরি নিখুঁত</p>
                  <p className="font-body-sm text-xs text-[#544343]">দক্ষ অলংকার শিল্পীদের নিপুণ হাতের ছোঁয়ায় নির্মিত।</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#eae7e7] flex items-center justify-center text-[#2a0006] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">published_with_changes</span>
                </div>
                <div>
                  <p className="font-headline-sm text-sm font-semibold text-[#2a0006]">চেক করে মূল্য পরিশোধ</p>
                  <p className="font-body-sm text-xs text-[#544343]">ডেলিভারির সময় বক্স খুলে দেখে নেওয়ার পূর্ণ নিশ্চয়তা।</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#eae7e7] flex items-center justify-center text-[#2a0006] flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">shield</span>
                </div>
                <div>
                  <p className="font-headline-sm text-sm font-semibold text-[#2a0006]">সুরক্ষিত প্যাকিং</p>
                  <p className="font-body-sm text-xs text-[#544343]">ভেলভেট জুয়েলারি বক্সে অক্ষত অবস্থায় পৌঁছানো হবে।</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT DOSSIER & DIRECT WHATSAPP VIP CONCIERGE */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Header & Classification */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-label-uppercase text-[11px] tracking-[0.2em] text-[#735c00] bg-[#f0eded] px-3 py-1 font-semibold">
                  {product.categoryName} • ব্রাইডাল কালেকশন
                </span>
                <span className="font-label-uppercase text-[11px] text-[#544343] tracking-wider font-mono">
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="font-headline-md text-2xl lg:text-3xl text-[#2a0006] leading-tight font-medium font-serif">
                {product.title}
              </h1>

              {product.englishTitle && (
                <p className="font-subheading-editorial text-[#544343] italic text-sm md:text-base">
                  {product.englishTitle}
                </p>
              )}

              {/* Rating & Social Proof */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex text-[#D4AF37] items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="font-body-sm text-xs font-bold text-[#1b1c1c]">
                  {product.rating}/৫
                </span>
                <span className="text-[#867273] text-xs">•</span>
                <span className="font-body-sm text-xs text-[#2a0006] underline underline-offset-4">
                  ({product.reviewCount}টি ভেরিফাইড রিভিউ)
                </span>
              </div>
            </div>

            {/* Pricing & Stock Anchor */}
            <div className="bg-[#f6f3f2] p-6 flex flex-col gap-3 border border-[#d9c1c1]/40">
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="font-price-lg text-3xl text-[#2a0006] font-bold">
                  {formattedPrice}
                </span>
                {product.originalPrice && (
                  <span className="font-body-lg text-lg text-[#867273] line-through">
                    ৳{product.originalPrice.toLocaleString('bn-BD')}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="bg-[#ffdad6] text-[#93000a] px-2 py-0.5 font-label-uppercase text-[11px] font-bold">
                    {product.discountPercent}% ছাড়
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#d9c1c1]/30">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-[#25D366] animate-pulse' : 'bg-[#ba1a1a]'}`}></span>
                  <span className={`font-body-sm text-xs font-medium ${product.inStock ? 'text-[#001404]' : 'text-[#ba1a1a]'}`}>
                    {product.inStock ? 'স্টকে আছে (রেডি টু শিপ)' : 'বর্তমানে স্টক আউট'}
                  </span>
                </div>
                {product.inStock && product.stockCount && (
                  <span className="font-body-sm text-xs text-[#544343]">
                    মাত্র {product.stockCount} সেট অবশিষ্ট
                  </span>
                )}
              </div>
            </div>

            {/* PRIMARY VIP WHATSAPP ORDER BOX (HIGH CONVERSION) */}
            <div className="bg-white p-6 lg:p-7 shadow-[0_4px_24px_rgba(74,14,23,0.06)] border border-[#d9c1c1]/50 relative flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-label-uppercase text-[11px] text-[#2a0006] tracking-widest uppercase block mb-1 font-semibold">
                    দ্রুত অর্ডার ও পরামর্শ
                  </span>
                  <h2 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                    সরাসরি WhatsApp-এ কথা বলে অর্ডার কনফার্ম করুন
                  </h2>
                </div>
                <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
              </div>

              <p className="font-body-sm text-xs text-[#544343] leading-relaxed">
                কোনো জটিলতা ছাড়া মাত্র ১ ক্লিকে আমাদের জুয়েলারি কনসিয়ার্জের সাথে সরাসরি চ্যাটে অর্ডার বুকিং করুন।
              </p>

              {/* WhatsApp Primary Action */}
              <a 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 font-body-md text-sm font-semibold tracking-wider uppercase text-center inline-flex items-center justify-center gap-3 transition-colors shadow-md"
                href={generateWhatsAppOrderUrl(product)}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-2xl leading-none">chat</span>
                <span>WhatsApp-এ অর্ডার করুন</span>
              </a>

              {/* Live WhatsApp Message Preview Card */}
              <div className="bg-[#f0eded] p-4 border border-[#d9c1c1]/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-uppercase text-[10px] text-[#544343] flex items-center gap-1.5 font-semibold">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">mark_chat_read</span>
                    মেসেজের নমুনা (WhatsApp Preview)
                  </span>
                  <button 
                    onClick={handleCopyMessage}
                    className="font-label-uppercase text-[10px] text-[#2a0006] hover:text-[#735c00] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    <span>{copied ? 'কপি হয়েছে!' : 'কপি করুন'}</span>
                  </button>
                </div>

                <div className="bg-white p-3 font-body-sm text-xs text-[#1b1c1c] leading-relaxed select-all border border-[#d9c1c1]/30">
                  আসসালামু আলাইকুম। আমি আপনাদের এই গহনাটি অর্ডার করতে চাই।<br />
                  <strong className="font-medium text-[#2a0006]">পণ্যের নাম:</strong> {product.title}<br />
                  <strong className="font-medium text-[#2a0006]">পণ্যের দাম:</strong> {formattedPrice}<br />
                  <strong className="font-medium text-[#2a0006]">পণ্যের লিংক:</strong> {productShareUrl}<br />
                  দয়া করে পণ্যটি সম্পর্কে বিস্তারিত জানাবেন এবং অর্ডার করার নিয়ম জানাবেন। ধন্যবাদ।
                </div>
              </div>
            </div>

            {/* Artisanal Specification Matrix */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-lg text-[#2a0006] font-serif">
                  অলংকারের বৈশিষ্ট্য ও বিবরণ
                </h3>
                <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold">
                  DETAILED SPECS
                </span>
              </div>

              <div className="bg-[#f6f3f2] p-5 space-y-2.5 font-body-sm text-xs border border-[#d9c1c1]/40">
                <div className="flex justify-between items-start gap-4 py-2 bg-white px-3 border-b border-[#f0eded]">
                  <span className="text-[#544343]">উপাদান</span>
                  <span className="font-medium text-[#1b1c1c] text-right">
                    {product.specs?.material || 'প্রিমিয়াম ব্রাস ও কপার অ্যালয়, ২৩ ক্যারেট গোল্ড পলিশ'}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 bg-white px-3 border-b border-[#f0eded]">
                  <span className="text-[#544343]">রত্ন / পাথর</span>
                  <span className="font-medium text-[#1b1c1c] text-right">
                    {product.specs?.gemstone || 'সেমি-প্রেশাস কুন্দন স্টোন ও রুবি ড্রপস'}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 bg-white px-3 border-b border-[#f0eded]">
                  <span className="text-[#544343]">মোট ওজন</span>
                  <span className="font-medium text-[#1b1c1c] text-right">
                    {product.specs?.weight || '৮৫ গ্রাম প্রায়'}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 bg-white px-3 border-b border-[#f0eded]">
                  <span className="text-[#544343]">সেটে অন্তর্ভুক্ত</span>
                  <span className="font-medium text-[#1b1c1c] text-right">
                    {product.specs?.setIncludes || '১টি চোকার নেকলেস, ১ জোড়া ঝুমকা কানের দুল'}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 bg-white px-3">
                  <span className="text-[#544343]">সাইজ ও পরিমাপ</span>
                  <span className="font-medium text-[#1b1c1c] text-right">
                    {product.specs?.size || 'অ্যাডজাস্টেবল সুতা / ট্যাসেল (সকল গলার মাপে মানানসই)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Nationwide Delivery & Assurance Matrix */}
            <div className="bg-[#f0eded] p-6 space-y-4 border border-[#d9c1c1]/40">
              <h4 className="font-headline-sm text-sm font-semibold text-[#2a0006]">
                ডেলিভারি চার্জ ও গ্রাহক নিরাপত্তা
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-3.5 border border-[#d9c1c1]/30">
                  <div className="flex items-center gap-2 text-[#2a0006] mb-1">
                    <span className="material-symbols-outlined text-base">local_shipping</span>
                    <span className="font-body-sm text-xs font-semibold">ডেলিভারি চার্জ</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#544343]">
                    ঢাকা সিটিতে <strong>৬০৳</strong> | ঢাকার বাইরে <strong>১২০৳</strong>
                  </p>
                </div>
                <div className="bg-white p-3.5 border border-[#d9c1c1]/30">
                  <div className="flex items-center gap-2 text-[#2a0006] mb-1">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span className="font-body-sm text-xs font-semibold">ডেলিভারি সময়</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#544343]">
                    ২-৩ কার্যদিবসের মধ্যে দ্রুত হোম ডেলিভারি।
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#fed65b]/40 text-[#745c00] font-body-sm text-xs flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lg flex-shrink-0">check_circle</span>
                <span>১০০% ক্যাশ অন ডেলিভারি এবং পার্সেল রিসিভ করার সময় পণ্য চেক করার পূর্ণ সুবিধা রয়েছে।</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CURATED ARTISANAL RECOMMENDATIONS */}
      <section className="w-full bg-[#f6f3f2] py-16 px-6 lg:px-12 mt-6 border-t border-[#d9c1c1]/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase block mb-1 font-semibold">
                সাদৃশ্যপূর্ণ ঐতিহ্যবাহী গহনা
              </span>
              <h2 className="font-headline-md text-2xl text-[#2a0006] font-serif">
                একই ধরনের আরও রাজকীয় অলংকার
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('all-products')}
              className="font-body-sm text-xs text-[#2a0006] hover:text-[#735c00] font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>সকল কালেকশন এক্সপ্লোর করুন</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* 4 Luxury Recommendation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <div 
                key={rec.id}
                className="bg-white border border-[#d9c1c1]/40 flex flex-col transition-all hover:-translate-y-1 duration-300"
              >
                <div 
                  onClick={() => {
                    onSelectProduct(rec);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative aspect-[4/5] bg-[#f0eded] overflow-hidden group cursor-pointer"
                >
                  <img 
                    alt={rec.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={rec.imageUrl} 
                  />
                  {rec.badge && (
                    <span className="absolute top-3 left-3 font-label-uppercase text-[10px] bg-[#2a0006] text-white px-2.5 py-1 tracking-wider uppercase">
                      {rec.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="font-label-uppercase text-[10px] text-[#735c00] font-semibold">
                      {rec.categoryName}
                    </span>
                    <h3 
                      onClick={() => {
                        onSelectProduct(rec);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-headline-sm text-sm font-semibold text-[#2a0006] mt-1 line-clamp-1 cursor-pointer hover:text-[#4a0e17]"
                    >
                      {rec.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-price-md text-base text-[#2a0006] font-bold">
                        ৳{rec.price.toLocaleString('bn-BD')}
                      </span>
                      {rec.originalPrice && (
                        <span className="font-body-sm text-xs text-[#867273] line-through">
                          ৳{rec.originalPrice.toLocaleString('bn-BD')}
                        </span>
                      )}
                    </div>
                  </div>

                  <a 
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-center inline-flex items-center justify-center gap-2 transition-colors"
                    href={generateWhatsAppOrderUrl(rec)}
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>WhatsApp অর্ডার</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
