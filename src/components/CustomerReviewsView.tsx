import React, { useState } from 'react';
import { CustomerReview, Product } from '../types/jewelry';

interface CustomerReviewsViewProps {
  reviews: CustomerReview[];
  products: Product[];
  onAddReview: (review: CustomerReview) => void;
  onNavigateHome: () => void;
  onShowToast: (message: string, icon?: string) => void;
}

export const CustomerReviewsView: React.FC<CustomerReviewsViewProps> = ({
  reviews,
  products,
  onAddReview,
  onNavigateHome,
  onShowToast
}) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // New review form states
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('ঢাকা');
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.title || 'রাজকীয় কুন্দন চোকার ও কানের দুল সেট');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [quote, setQuote] = useState('');

  // Helpful click tracker
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1
    }));
    onShowToast('আপনার মতামতের জন্য ধন্যবাদ!', 'thumb_up');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !quote.trim()) {
      onShowToast('দয়া করে নাম এবং পর্যালোচনার বিবরণ পূরণ করুন', 'error');
      return;
    }

    const avatars = [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1udecFUDiCtHFqFPHw1G4e8L9Ex_TnA5uOE_aVNN2ivtZXVN_RflgipRYzRwthvxyCGz1LjamhveifRqlQN9SFDhclOqRU4Un88FibHjmIZ53Ofz7jUU6pyIRAK24Kbi_MJ6t7pWDBMmhJRrDDPa-xsytg3Fs3FFgFolb1rHccFMhWh55har2UAgr68yozFmahE_Qhf36D3kLhTO3a0yaZOxNDwcCh3ojJzvVFjY-1MotKQlwRTQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-c7w10tF9Yc2PNveLfZ5KcB3QMywZi5Yq7Fxz1kOlvJG20eeEoov5L0SZpt1k7MkExAJN3xNUprBzYFtogLvMBEfEyGeVcMHuGwqm4IEWU6s2gC0jj8JzSKG3pmlZTS4q66aYae9odrPp-Y4QEZFiFOWwXjsBcCdEQwASwYppJbm2FztxxMh-AUQ4C73H5TeuvBEf8cWXSXIMaWFrNUr0ZgiCTOurXBMJRKzCW_q29YeDHf-NPdo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmFvz9Xd_oUqeSlUh2K20ok2PqfGyqo6_FNdW8v72dWKp8oVW7-fh7yI8APJkaMN6iY-MCITdQVtMNHJ3NQKregQsmaI5M05MHFKYxSX2USSaIBcpheqSVuAzsFn-Tg-tT2jA3qT_CJD_LzVdItNBgEC-_cT6bDX_cu3-wJ4yWXbmorCcuYMsPMfQ6zqLWS1U9EESV0ZAiuflQg7PxUIqER88o2VyClIE53_SWBpsB0-hlGe1exhU'
    ];

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: authorName,
      location: location || 'ঢাকা',
      verified: true,
      rating,
      quote: `“${quote}”`,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      productName: selectedProduct,
      reviewDate: 'আজকে',
      helpfulCount: 1
    };

    onAddReview(newReview);
    onShowToast('আপনার মূল্যবান রিভিউটি সফলভাবে প্রকাশিত হয়েছে! ধন্যবাদ।', 'verified');
    
    // Reset
    setAuthorName('');
    setQuote('');
    setIsFormOpen(false);
  };

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === filterRating);

  return (
    <div className="w-full bg-[#fcf9f8] min-h-screen py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body-sm text-[13px] text-[#544343]">
          <button onClick={onNavigateHome} className="hover:text-[#2a0006] transition-colors cursor-pointer">
            হোম
          </button>
          <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
          <span className="text-[#2a0006] font-semibold">গ্রাহক রিভিউ ও অভিজ্ঞতা</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
            গ্রাহকের ভালোবাসা ও বিশ্বাস
          </span>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-[#2a0006] font-serif">
            গ্রাহকদের সন্তুষ্টি ও রাজকীয় পর্যালোচনা
          </h1>
          <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
          <p className="font-body-md text-[#544343] text-sm md:text-base">
            আমাদের খাঁটি অলংকার পরে বিশেষ দিনগুলোতে দ্যুতি ছড়িয়েছেন যারা, তাদের বাস্তব মতামত ও অনুভূতি
          </p>
        </div>

        {/* Aggregated Rating & Trust Score Card */}
        <div className="bg-[#f6f3f2] p-8 border border-[#d9c1c1]/50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Average Score */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 md:border-r border-[#d9c1c1]/50 md:pr-8">
            <div className="font-headline-lg text-5xl text-[#2a0006] font-serif font-bold">
              ৪.৯ <span className="text-xl text-[#735c00] font-normal">/ ৫.০</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-[#D4AF37] gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <p className="font-body-sm text-xs text-[#544343]">
              ৩৫০+ এর অধিক ভেরিফাইড ক্রেতার মতামতের ভিত্তিতে
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fed65b]/40 text-[#745c00] font-label-uppercase text-[10px] font-semibold">
                <span className="material-symbols-outlined text-sm">recommend</span>
                ৯৮% গ্রাহক রূপু সুপারিশ করেছেন
              </span>
            </div>
          </div>

          {/* Star Distribution Progress Bars */}
          <div className="md:col-span-5 space-y-2 text-xs font-body-sm text-[#544343]">
            <div className="flex items-center gap-3">
              <span className="w-12">৫ স্টার</span>
              <div className="flex-1 h-2 bg-[#eae7e7] overflow-hidden">
                <div className="h-full bg-[#735c00]" style={{ width: '92%' }}></div>
              </div>
              <span className="w-8 text-right font-semibold">৯২%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12">৪ স্টার</span>
              <div className="flex-1 h-2 bg-[#eae7e7] overflow-hidden">
                <div className="h-full bg-[#735c00]" style={{ width: '6%' }}></div>
              </div>
              <span className="w-8 text-right font-semibold">৬%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12">৩ স্টার</span>
              <div className="flex-1 h-2 bg-[#eae7e7] overflow-hidden">
                <div className="h-full bg-[#735c00]" style={{ width: '2%' }}></div>
              </div>
              <span className="w-8 text-right font-semibold">২%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12">২ স্টার</span>
              <div className="flex-1 h-2 bg-[#eae7e7] overflow-hidden">
                <div className="h-full bg-[#735c00]" style={{ width: '0%' }}></div>
              </div>
              <span className="w-8 text-right font-semibold">০%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12">১ স্টার</span>
              <div className="flex-1 h-2 bg-[#eae7e7] overflow-hidden">
                <div className="h-full bg-[#735c00]" style={{ width: '0%' }}></div>
              </div>
              <span className="w-8 text-right font-semibold">০%</span>
            </div>
          </div>

          {/* Call to action: Write a review */}
          <div className="md:col-span-3 text-center md:text-right space-y-3">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full py-3.5 px-4 bg-[#2a0006] hover:bg-[#4a0e17] text-white font-label-uppercase text-xs tracking-widest uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">rate_review</span>
              <span>{isFormOpen ? 'ফর্ম বন্ধ করুন' : 'রিভিউ লিখুন'}</span>
            </button>
            <p className="font-body-sm text-[11px] text-[#867273]">
              আপনার অভিজ্ঞতা শেয়ার করে অন্য নারীদের সাহায্য করুন
            </p>
          </div>
        </div>

        {/* Collapsible Write Review Form */}
        {isFormOpen && (
          <div className="bg-white p-6 lg:p-8 border-2 border-[#735c00]/40 shadow-lg space-y-6 animate-fade-in">
            <div className="space-y-1 pb-3 border-b border-[#d9c1c1]/40">
              <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                আপনার প্রতিক্রিয়া
              </span>
              <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                অলংকার সম্পর্কে আপনার অভিজ্ঞতা লিখুন
              </h3>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-5">
              {/* Star selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#2a0006] font-label-uppercase uppercase">
                  আপনার রেটিং নির্বাচন করুন *
                </label>
                <div className="flex items-center gap-1.5 text-2xl text-[#D4AF37]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
                    >
                      <span 
                        className="material-symbols-outlined text-3xl"
                        style={{ fontVariationSettings: `'FILL' ${(hoverRating || rating) >= star ? 1 : 0}` }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                  <span className="text-xs text-[#544343] ml-2 font-semibold font-body-sm">
                    {rating === 5 ? 'অসাধারণ (৫/৫)' : `${rating}/৫ স্টার`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase">
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ফারহানা আহমেদ"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-[#fcf9f8] px-3.5 py-2.5 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase">
                    শহর / জেলা *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ধানমন্ডি, ঢাকা"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#fcf9f8] px-3.5 py-2.5 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase">
                    ক্রয়কৃত অলংকার *
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#fcf9f8] px-3.5 py-2.5 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] cursor-pointer"
                  >
                    {products.map(p => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a0006] mb-1 font-label-uppercase uppercase">
                  আপনার রিভিউ লিখুন *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="গহনার কারুকাজ, ফিনিশিং, প্যাকেজিং এবং সার্ভিস কেমন লেগেছে তা লিখুন..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full bg-[#fcf9f8] p-3.5 text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] resize-y"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 bg-[#f0eded] text-[#544343] text-xs font-semibold uppercase tracking-wider"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 bg-[#2a0006] hover:bg-[#4a0e17] text-white text-xs font-semibold uppercase tracking-widest shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>রিভিউ জমা দিন</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-[#d9c1c1]/40">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-4 py-2 font-label-uppercase text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                filterRating === 'all' 
                  ? 'bg-[#2a0006] text-white' 
                  : 'bg-[#f6f3f2] text-[#544343] hover:text-[#2a0006]'
              }`}
            >
              সকল রিভিউ ({reviews.length})
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-4 py-2 font-label-uppercase text-xs tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1 ${
                filterRating === 5 
                  ? 'bg-[#2a0006] text-white' 
                  : 'bg-[#f6f3f2] text-[#544343] hover:text-[#2a0006]'
              }`}
            >
              <span className="material-symbols-outlined text-sm text-[#ffe088]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span>৫ স্টার রিভিউ</span>
            </button>
          </div>

          <span className="font-body-sm text-xs text-[#544343]">
            {filteredReviews.length} টি ভেরিফাইড রিভিউ প্রদর্শিত হচ্ছে
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const currentHelpful = (rev.helpfulCount || 0) + (helpfulVotes[rev.id] || 0);

            return (
              <div 
                key={rev.id}
                className="bg-white p-7 border border-[#d9c1c1]/50 shadow-sm flex flex-col justify-between space-y-5 hover:border-[#735c00] transition-colors"
              >
                <div className="space-y-4">
                  {/* Rating Stars and Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D4AF37] items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                    {rev.reviewDate && (
                      <span className="font-body-sm text-[11px] text-[#867273]">
                        {rev.reviewDate}
                      </span>
                    )}
                  </div>

                  {/* Purchased product tag */}
                  {rev.productName && (
                    <div className="bg-[#f0eded] px-2.5 py-1 text-[11px] text-[#735c00] font-semibold inline-block truncate max-w-full">
                      {rev.productName}
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="font-body-md text-sm text-[#1b1c1c] leading-relaxed italic">
                    {rev.quote}
                  </p>
                </div>

                {/* Author Info & Helpful Button */}
                <div className="pt-4 border-t border-[#d9c1c1]/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img 
                      alt={rev.author} 
                      className="w-10 h-10 rounded-full object-cover border border-[#735c00]/40" 
                      src={rev.avatar} 
                    />
                    <div>
                      <h5 className="font-body-md text-sm font-bold text-[#2a0006]">
                        {rev.author}
                      </h5>
                      <p className="font-label-uppercase text-[10px] text-[#544343] uppercase">
                        {rev.location} • <span className="text-[#735c00] font-semibold">ভেরিফাইড</span>
                      </p>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button
                    onClick={() => handleHelpfulClick(rev.id)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#544343] hover:text-[#735c00] bg-[#f6f3f2] px-2 py-1 transition-colors cursor-pointer"
                    title="এই রিভিউটি সাহায্য করেছে"
                  >
                    <span className="material-symbols-outlined text-xs">thumb_up</span>
                    <span>{currentHelpful}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
