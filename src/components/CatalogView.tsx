import React, { useState, useMemo } from 'react';
import { Product, CategoryKey } from '../types/jewelry';
import { CATEGORIES, generateWhatsAppOrderUrl } from '../data/mockProducts';

interface CatalogViewProps {
  products: Product[];
  initialCategory?: CategoryKey;
  onSelectProduct: (product: Product) => void;
  onNavigateHome: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  initialCategory = 'all',
  onSelectProduct,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const categoryTitles: Record<CategoryKey, string> = {
    all: 'সকল গহনা ও ক্যাটালগ',
    earrings: 'কানের দুল ও ঝুমকা কালেকশন',
    necklace: 'নেকলেস, চোকার ও রানিহার',
    rings: 'হীরক ও স্বর্ণের আংটি সম্ভার',
    'bracelets-and-bangles': 'বালা, চুড়ি ও রতনচূর কালেকশন',
    sets: 'পূর্ণাঙ্গ ব্রাইডাল কম্বো ও সেট'
  };

  return (
    <div className="w-full bg-[#fcf9f8] min-h-screen py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body-sm text-[13px] text-[#544343]">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#2a0006] transition-colors cursor-pointer"
          >
            হোম
          </button>
          <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
          <span className="text-[#2a0006] font-semibold">{categoryTitles[selectedCategory]}</span>
        </div>

        {/* Page Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#d9c1c1]/40">
          <div className="space-y-1">
            <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
              রয়্যাল হেরিটেজ ক্যাটালগ
            </span>
            <h1 className="font-headline-lg text-3xl md:text-4xl text-[#2a0006] font-serif">
              {categoryTitles[selectedCategory]}
            </h1>
            <p className="font-body-md text-sm text-[#544343]">
              খাঁটি ২২ ও ২৩ ক্যারেট গোল্ড প্লেটেড অলংকার, সম্পূর্ণ নিরাপদ ক্যাশ অন ডেলিভারি
            </p>
          </div>

          <div className="text-right">
            <span className="font-body-sm text-xs text-[#544343]">
              মোট <strong>{filtered.length}</strong> টি পণ্য পাওয়া গেছে
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#f6f3f2] p-4 border border-[#d9c1c1]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all' 
                  ? 'bg-[#2a0006] text-white' 
                  : 'bg-white text-[#544343] hover:text-[#2a0006]'
              }`}
            >
              সকল
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.categoryKey)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === c.categoryKey 
                    ? 'bg-[#2a0006] text-white' 
                    : 'bg-white text-[#544343] hover:text-[#2a0006]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-[#544343]">
                search
              </span>
              <input
                type="text"
                placeholder="খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-8 pr-3 py-1.5 text-xs border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white px-3 py-1.5 text-xs border border-[#d9c1c1] focus:outline-none cursor-pointer"
            >
              <option value="featured">ফিচার্ড প্রথম</option>
              <option value="price-asc">দাম: কম থেকে বেশি</option>
              <option value="price-desc">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-[#f6f3f2] border border-[#d9c1c1]/40">
            <span className="material-symbols-outlined text-4xl text-[#867273]">search_off</span>
            <p className="font-headline-sm text-lg text-[#2a0006]">কোনো পণ্য পাওয়া যায়নি</p>
            <p className="font-body-sm text-xs text-[#544343]">অনুসন্ধান পরিবর্তন করুন বা অন্য ক্যাটাগরি দেখুন।</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-[#2a0006] text-white text-xs font-semibold uppercase tracking-wider"
            >
              ফিল্টার রিসেট করুন
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <div 
                key={product.id}
                className="bg-white border border-[#d9c1c1]/50 hover:border-[#735c00] transition-all flex flex-col justify-between group"
              >
                {/* Image */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[4/5] bg-[#f0eded] overflow-hidden p-3 cursor-pointer"
                >
                  <img 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={product.imageUrl} 
                  />
                  
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
                      className="font-headline-sm text-base text-[#2a0006] font-serif leading-snug cursor-pointer hover:text-[#4a0e17] transition-colors"
                    >
                      {product.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#544343] line-clamp-1 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#d9c1c1]/30 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="font-price-lg text-lg text-[#2a0006] font-bold">
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
                        className="py-2 px-2 text-center border border-[#2a0006] text-[#2a0006] hover:bg-[#2a0006] hover:text-white font-label-uppercase text-[10px] tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        বিস্তারিত
                      </button>
                      <a 
                        className="py-2 px-2 text-center bg-[#25D366] hover:bg-[#128C7E] text-white font-label-uppercase text-[10px] tracking-wider uppercase flex items-center justify-center gap-1 transition-colors shadow-sm"
                        href={generateWhatsAppOrderUrl(product)}
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
