import React, { useState } from 'react';
import { Product, CategoryKey, ActivePage } from '../types/jewelry';
import { generateWhatsAppOrderUrl } from '../data/mockProducts';

interface AdminDashboardViewProps {
  products: Product[];
  onAddProduct: (newProduct: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onNavigateHome: () => void;
  onLogout: () => void;
  onShowToast: (message: string, icon?: string) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onNavigateHome,
  onLogout,
  onShowToast
}) => {
  // Form state
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState<CategoryKey>('earrings');
  const [price, setPrice] = useState<string>('৮৫০');
  const [sku, setSku] = useState('RUPU-ER-209');
  const [finishing, setFinishing] = useState('২২ ক্যারেট গোল্ড প্লেটেড / কুন্দন');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlwKgnDU-zvL33kX_IkSWG6brMQjGFJPBH8ylFvjyzVFtBQx2iLnXHL3LP5lga6XOab0dGGJtsBCYqhZj-pt_DBOPcH-k8o05fEpr7uZnnwsdNN6KbQ00bSdNY1_lj3QWMNLYQHyuYZum8yC6qK0mXOOZy8C-C3JSeDe55zX09CSslwNoigtYTzfcoQ3t2PO9NC2vCDNprhUDGZr7IoNAiiRmkUP1S7IO6iex8duKHy4lUv1WKQ8'
  );

  // Table filters & search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Active item to delete
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Quick preset sample images for easy admin testing
  const sampleImages = [
    { label: 'ঝুমকা', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlwKgnDU-zvL33kX_IkSWG6brMQjGFJPBH8ylFvjyzVFtBQx2iLnXHL3LP5lga6XOab0dGGJtsBCYqhZj-pt_DBOPcH-k8o05fEpr7uZnnwsdNN6KbQ00bSdNY1_lj3QWMNLYQHyuYZum8yC6qK0mXOOZy8C-C3JSeDe55zX09CSslwNoigtYTzfcoQ3t2PO9NC2vCDNprhUDGZr7IoNAiiRmkUP1S7IO6iex8duKHy4lUv1WKQ8' },
    { label: 'চোকার', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZBAQ6a1nfgy0wo3qS88j8dZkCBrOM1rLPgo3Zw4jy3j1vo6HcRy-iu0j6A04pRoqty8lpv2xgTJ1MFYneSMcho68btwswaIe8h57uTSJq4I4qzZEZLY1KtFOvFD2aFyse0zT7JIlnNMZWaBhtshGVk7yme62NDjry0fWSp0MMTnakK1lHwkf-1SZdX7yrCCVKuK8frWX-_y4-Au7_8NqxhwiCjV5OOm5FAJnBAnJzWFSY2spDJgU' },
    { label: 'আংটি', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASYVBjGK6CE39sXhF1kXde-3op2hl96oAZQ0JlRE5Vok3N-Xbhdbh2H_nDtrXxyEoKfPhw7ZBVsVMiXVHE5-0CLlZgnV9r74KO5XEtrIjxpTh1CDE1HnDH6479VDv5zjs2GTDvoY5eTD0rWeqMss1MPO-AbvmNrxL5tYlGS_fa-uYVsZ_Hsl4JHF7NW1TAzL1nb1NQwP14JhSZDU8AKdUMP1yKw2bTruMPMo0jMHmFtecnx-S-oz4' },
    { label: 'বালা', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmkz0TBdAB5prBrtTRCzkl0bOiAx-gOEcKyeZp9REdZIV3ON9iWhjIIqGKsE0_mfEJFtwdLsQqh6MRLw2R4ePx6wTc9C01fp67xihF2LQ14sUeXzWNJSLyDGFvY28ehmTARIuw3TeiHjOQTuVGO7j90Dhc200kYlzX-Bjp0kl2RNkfVDae-aqgKbruwj0rae7mTP2tBfx7onI1DxQk21_UpkuWtQZkPluu4qGCVY69BOn3hmzN1U' },
  ];

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !sku.trim()) {
      onShowToast('দয়া করে পণ্যের নাম এবং কোড পূরণ করুন', 'error');
      return;
    }

    // Parse Bengali or standard numerals
    const parsedPrice = parseInt(price.replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d).toString()), 10) || 1200;

    const categoryNames: Record<CategoryKey, string> = {
      all: 'সকল গহনা',
      earrings: 'কানের দুল',
      necklace: 'নেকলেস ও চোকার',
      rings: 'আংটি',
      'bracelets-and-bangles': 'চুড়ি ও বালা',
      sets: 'ব্রাইডাল সেট'
    };

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      sku: sku.toUpperCase(),
      title: productName,
      category,
      categoryName: categoryNames[category] || 'অলংকার',
      price: parsedPrice,
      originalPrice: Math.round(parsedPrice * 1.2),
      discountPercent: 15,
      inStock: true,
      stockCount: 5,
      badge: 'নতুন',
      finishing,
      description: description || 'হস্তনির্মিত খাঁটি অলংকার, ঐতিহ্যবাহী নিখুঁত কারুকাজ।',
      imageUrl,
      gallery: [imageUrl],
      tags: ['all', 'new'],
      rating: 5.0,
      reviewCount: 1,
      specs: {
        material: finishing,
        gemstone: 'কুন্দন ও প্রিমিয়াম স্টোন',
        weight: '৩৫ গ্রাম প্রায়',
        setIncludes: '১টি পূর্ণাঙ্গ সেট',
        size: 'স্ট্যান্ডার্ড সাইজ'
      },
      createdAt: new Date().toISOString()
    };

    onAddProduct(newProduct);
    onShowToast('পণ্য সফলভাবে তালিকাভুক্ত হয়েছে!', 'check_circle');

    // Reset Form
    setProductName('');
    setDescription('');
    setSku(`RUPU-JW-${Math.floor(100 + Math.random() * 900)}`);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      onDeleteProduct(productToDelete.id);
      onShowToast(`"${productToDelete.title}" সফলভাবে ডিলিট করা হয়েছে!`, 'delete');
      setProductToDelete(null);
    }
  };

  const handleToggleStock = (prod: Product) => {
    const updated = { ...prod, inStock: !prod.inStock };
    onUpdateProduct(updated);
    onShowToast(`স্টক স্ট্যাটাস আপডেট করা হয়েছে: ${updated.inStock ? 'স্টকে আছে' : 'স্টক আউট'}`, 'update');
  };

  // Filter products for the table
  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;

    const matchesStatus = 
      selectedStatusFilter === 'all' || 
      (selectedStatusFilter === 'in_stock' && p.inStock) ||
      (selectedStatusFilter === 'out_stock' && !p.inStock);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#fcf9f8] text-[#1b1c1c] min-h-screen flex">
      {/* 1. Left Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-[#f6f3f2] z-50 flex-col justify-between py-6 px-4 shadow-[0_1px_8px_rgba(74,14,23,0.04)] border-r border-[#d9c1c1]/40">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <img 
              alt="RUPU ORNAMENTS Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1UDQ9hXYYprTVd9I0Zl2XPQdNavTUEkRI9BcB482IALan50_tAL4r8epf96-PU-HRnUohSMmj_VmU1WLa7Y6JsX8W3MXQyhYvKlKzobzZGa2kjjKkmmsSBPKFW_x8fYG-otDUPy9pEwHXPrVzIUUP7zG1W_gniZzr9U_Z27itNOPSckbB9fPsJ12BKbXcRrLGKOan3Xglssms4BZcEiXwTdNB-h78ZGD2f6JawO3nfnT6PBGfkRb-M7" 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-[#2a0006] font-medium uppercase">
                RUPU
              </span>
              <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-[0.2em] -mt-1 font-semibold">
                ADMIN VAULT
              </span>
            </div>
          </div>

          <div className="h-[1px] bg-[#d9c1c1] opacity-60 w-full"></div>

          <nav className="space-y-1">
            <button 
              className="w-full flex items-center gap-3 px-3 py-2.5 bg-[#2a0006] text-white font-semibold text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">dashboard</span>
              <span>ড্যাশবোর্ড ওভারভিউ</span>
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('manage-products-table');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-[#544343] hover:bg-[#f0eded] hover:text-[#1b1c1c] transition-colors text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">inventory_2</span>
              <span>অলংকার ক্যাটালগ</span>
            </button>
            <a 
              href="https://wa.me/8801700000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 text-[#544343] hover:bg-[#f0eded] hover:text-[#1b1c1c] transition-colors text-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">chat_bubble</span>
              <span>হোয়াটসঅ্যাপ মেসেজ</span>
            </a>
            <button 
              onClick={onNavigateHome}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-[#544343] hover:bg-[#f0eded] hover:text-[#1b1c1c] transition-colors text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">storefront</span>
              <span>লাইভ স্টোর দেখুন</span>
            </button>
          </nav>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#f0eded] text-[#544343] text-xs space-y-1 border border-[#d9c1c1]/40">
            <div className="font-semibold text-[#2a0006] uppercase font-label-uppercase text-[10px]">
              RUPU VAULT V2.4
            </div>
            <p>নিরাপদ অ্যাডমিন সেশন সক্রিয়</p>
          </div>
          <button 
            onClick={onLogout}
            className="w-full py-2 px-3 border border-[#ba1a1a]/40 text-[#ba1a1a] hover:bg-[#ba1a1a] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            <span>লগআউট করুন</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Top Fixed Admin Header */}
        <header className="sticky top-0 right-0 h-16 bg-[#fcf9f8]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(74,14,23,0.04)] z-40 flex items-center justify-between px-6 lg:px-8 border-b border-[#d9c1c1]/40">
          <div className="flex items-center gap-3">
            <img 
              alt="RUPU ORNAMENTS Logo" 
              className="h-7 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1UDQ9hXYYprTVd9I0Zl2XPQdNavTUEkRI9BcB482IALan50_tAL4r8epf96-PU-HRnUohSMmj_VmU1WLa7Y6JsX8W3MXQyhYvKlKzobzZGa2kjjKkmmsSBPKFW_x8fYG-otDUPy9pEwHXPrVzIUUP7zG1W_gniZzr9U_Z27itNOPSckbB9fPsJ12BKbXcRrLGKOan3Xglssms4BZcEiXwTdNB-h78ZGD2f6JawO3nfnT6PBGfkRb-M7" 
            />
            <span className="font-headline-sm text-base text-[#2a0006] uppercase tracking-wider font-semibold">
              RUPU ORNAMENTS PORTAL
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onNavigateHome}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#2a0006] hover:text-[#735c00] font-semibold uppercase tracking-wider cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">storefront</span>
              <span>স্টোর ভিউ</span>
            </button>

            <a 
              className="bg-[#25D366] text-white px-3 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow-[0_2px_8px_rgba(37,211,102,0.2)]" 
              href="https://wa.me/8801700000000" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp Inquiries</span>
            </a>

            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#d9c1c1]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBIJ3r2NEShHtXQNlDsrLQxN9DRuzdZ2FN3RFNcgwzW3xwp4M_DSbBbm6ExjznAeEkLHxd7qLJbipp39ICHMLY2IViM4HM0uxgGr7gDR9Yice1XLyX5NvyTIfDa_9HWWbLIkYDZoSF_r_5dAFkeGjIgrc7oP2jKQuY3tZNYnZ8RG93AlAu38WO65FNzuRwbnlymQldqx2DpqI7DWIUgpMPnHSNLBA5ImUykFOvXYlfgShYPNqdwqs" 
            />
          </div>
        </header>

        {/* Inner Content */}
        <main className="w-full px-6 lg:px-8 py-8 space-y-10">
          {/* Top Vault Summary & Primary Action */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#735c00] rotate-45 inline-block"></span>
                <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.2em] font-semibold">
                  ইনভেন্টরি ও ক্যাটালগ কনসোল
                </span>
              </div>
              <h1 className="font-headline-lg text-3xl text-[#2a0006] tracking-tight font-serif">
                অ্যাডমিন ড্যাশবোর্ড ও পণ্য ব্যবস্থাপনা
              </h1>
              <p className="font-body-md text-[#544343] max-w-2xl text-sm md:text-base">
                রূপু অর্নামেন্টস-এর বর্তমান সংগ্রহ, স্টক স্থিতি ও ডিজিটাল ক্যাটালগ নিয়ন্ত্রণ করুন একই প্ল্যাটফর্ম থেকে।
              </p>
            </div>

            {/* Quick Action Add Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => {
                  document.getElementById('add-product-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#2a0006] hover:bg-[#4a0e17] text-white font-body-md text-sm px-6 py-3.5 flex items-center gap-2.5 transition-colors shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                <span>+ নতুন পণ্য যোগ করুন</span>
              </button>
            </div>
          </div>

          {/* 1. Top Metrics Bar */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1: মোট পণ্য */}
            <div className="bg-[#f6f3f2] p-6 flex items-start justify-between relative overflow-hidden shadow-sm border border-[#d9c1c1]/40">
              <div className="space-y-3 z-10">
                <div className="flex items-center gap-2">
                  <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                    ক্যাটালগ পরিমাণ
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-headline-lg text-3xl text-[#2a0006] leading-none font-serif">
                    {products.length} <span className="font-headline-sm text-base text-[#544343]">টি</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#544343]">লাইভ স্টোরে সক্রিয় অলংকার সামগ্রী</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#f0eded] flex items-center justify-center text-[#2a0006] z-10">
                <span className="material-symbols-outlined text-2xl">diamond</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#e5e2e1]/40 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Metric 2: সক্রিয় ক্যাটাগরি */}
            <div className="bg-[#f6f3f2] p-6 flex items-start justify-between relative overflow-hidden shadow-sm border border-[#d9c1c1]/40">
              <div className="space-y-3 z-10">
                <div className="flex items-center gap-2">
                  <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                    সক্রিয় ক্যাটাগরি
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-headline-lg text-3xl text-[#2a0006] leading-none font-serif">
                    ০৬ <span className="font-headline-sm text-base text-[#544343]">টি শ্রেণি</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#544343]">ঝুমকা, চোকার, সীতা হার, বালা ও অন্যান্য</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#f0eded] flex items-center justify-center text-[#2a0006] z-10">
                <span className="material-symbols-outlined text-2xl">category</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#e5e2e1]/40 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Metric 3: নতুন যোগকৃত */}
            <div className="bg-[#f6f3f2] p-6 flex items-start justify-between relative overflow-hidden shadow-sm border border-[#d9c1c1]/40">
              <div className="space-y-3 z-10">
                <div className="flex items-center gap-2">
                  <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest uppercase font-semibold">
                    চলতি মাসের সংযোজন
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-headline-lg text-3xl text-[#735c00] leading-none font-serif">
                    ১৪ <span className="font-headline-sm text-base text-[#544343]">টি নতুন</span>
                  </div>
                  <p className="font-body-sm text-xs text-[#544343]">গত ৩০ দিনে ইনভেন্টরিতে যুক্ত হয়েছে</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#f0eded] flex items-center justify-center text-[#735c00] z-10">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#fed65b]/20 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </section>

          {/* 2. Add New Product Section */}
          <section className="bg-[#f6f3f2] p-8 shadow-sm border border-[#d9c1c1]/40" id="add-product-section">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 bg-[#f0eded]/60 -mx-8 -mt-8 p-8 gap-4 border-b border-[#d9c1c1]/40">
              <div className="space-y-1">
                <span className="font-label-uppercase text-[11px] text-[#735c00] uppercase tracking-[0.2em] font-semibold">
                  নতুন সংযোজন ফরম
                </span>
                <h2 className="font-headline-md text-2xl text-[#2a0006] font-serif">
                  নতুন গহনা যোগ করুন (Add New Ornament)
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[#544343] font-body-sm text-xs bg-white px-4 py-2 border border-[#d9c1c1]/40">
                <span className="material-symbols-outlined text-base text-[#735c00]">verified</span>
                <span>স্বয়ংক্রিয়ভাবে WhatsApp ক্যাটালগে সিঙ্ক হবে</span>
              </div>
            </div>

            <form className="space-y-8" onSubmit={handleSaveProduct}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Form Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* পণ্যের নাম */}
                  <div className="space-y-2">
                    <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                      পণ্যের নাম (Product Name) <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input 
                      className="w-full bg-white px-4 py-3.5 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] placeholder:text-[#867273]" 
                      placeholder="e.g. ময়ূরপঙ্খী পার্ল ঝুমকা" 
                      required 
                      type="text" 
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ক্যাটাগরি */}
                    <div className="space-y-2">
                      <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                        ক্যাটাগরি (Category) <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full bg-white px-4 py-3.5 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] appearance-none focus:outline-none focus:border-[#735c00] cursor-pointer pr-10"
                          value={category}
                          onChange={(e) => setCategory(e.target.value as CategoryKey)}
                        >
                          <option value="earrings">কানের দুল (Earrings)</option>
                          <option value="necklace">নেকলেস / হার (Necklaces)</option>
                          <option value="rings">আংটি (Rings)</option>
                          <option value="bracelets-and-bangles">ব্রেসলেট ও চুড়ি (Bracelets & Bangles)</option>
                          <option value="sets">গহনার সেট (Bridal Sets)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#544343]">
                          expand_more
                        </span>
                      </div>
                    </div>

                    {/* মূল্য (Price in BDT) */}
                    <div className="space-y-2">
                      <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                        মূল্য (Price in BDT ৳) <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-price-md text-base text-[#735c00]">
                          ৳
                        </span>
                        <input 
                          className="w-full bg-white pl-10 pr-4 py-3.5 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]" 
                          placeholder="৭৫০" 
                          required 
                          type="text" 
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* পণ্যের কোড / SKU */}
                    <div className="space-y-2">
                      <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                        পণ্যের কোড / SKU <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <input 
                        className="w-full bg-white px-4 py-3.5 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] uppercase tracking-wider font-semibold" 
                        placeholder="RUPU-ER-209" 
                        required 
                        type="text" 
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                      />
                    </div>

                    {/* ফিনিশিং */}
                    <div className="space-y-2">
                      <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                        ধাতব প্রকৃতি / ফিনিশিং
                      </label>
                      <input 
                        className="w-full bg-white px-4 py-3.5 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00]" 
                        placeholder="২২ ক্যারেট গোল্ড প্লেটেড / কুন্দন" 
                        type="text" 
                        value={finishing}
                        onChange={(e) => setFinishing(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* সংক্ষিপ্ত বিবরণ */}
                  <div className="space-y-2">
                    <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                      সংক্ষিপ্ত বিবরণ (Description)
                    </label>
                    <textarea 
                      className="w-full bg-white p-4 text-[#1b1c1c] font-body-md text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] resize-y" 
                      placeholder="উপাদান, সাইজ, খোদাই শৈলী এবং বিশেষ কারুকার্যের বিবরণ এখানে লিখুন..." 
                      rows={3} 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* Right Column: Media Upload Dropzone & Live Card Preview */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <label className="block font-label-uppercase text-[11px] text-[#4a0e17] uppercase tracking-wider font-semibold">
                      পণ্যের ছবি নির্বাচন বা আপলোড (Product Image)
                    </label>

                    {/* Preset Image Palette for Quick Selection */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#544343]">নমুনা নির্বাচন:</span>
                      {sampleImages.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setImageUrl(s.url)}
                          className={`text-[11px] px-2.5 py-1 border transition-colors cursor-pointer ${
                            imageUrl === s.url 
                              ? 'bg-[#2a0006] text-white border-[#2a0006]' 
                              : 'bg-white text-[#544343] border-[#d9c1c1]'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    {/* Upload Dropzone */}
                    <div 
                      onClick={() => {
                        const url = prompt('ছবির সরাসরি ইমেজ লিংক (URL) লিখুন:', imageUrl);
                        if (url) setImageUrl(url);
                      }}
                      className="bg-white border-2 border-dashed border-[#d9c1c1] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f0eded] transition-colors group relative overflow-hidden min-h-[220px]"
                    >
                      <div className="w-14 h-14 bg-[#f0eded] flex items-center justify-center text-[#2a0006] group-hover:scale-105 transition-transform mb-3">
                        <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                      </div>
                      <p className="font-headline-sm text-base text-[#2a0006] mb-1 font-serif">
                        ছবি আপলোড করুন (JPEG, PNG)
                      </p>
                      <p className="font-body-sm text-xs text-[#544343] max-w-xs">
                        সর্বোচ্চ ৫ মেগাবাইট। প্রফেশনাল পোর্ট্রেট অনুপাতে (৪:৫) উচ্চমানের ছবি ব্যবহার করুন।
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 bg-[#f0eded] px-3 py-1.5 text-xs text-[#2a0006] font-label-uppercase uppercase tracking-wider font-semibold">
                        <span className="material-symbols-outlined text-sm">cloud_upload</span> 
                        ব্রাউজ / লিংক পরিবর্তন
                      </div>
                    </div>
                  </div>

                  {/* Quick Preview Badge */}
                  <div className="bg-[#f0eded] p-5 flex items-center gap-4 border border-[#d9c1c1]/40">
                    <div className="w-16 h-16 bg-[#4a0e17] shrink-0 overflow-hidden flex items-center justify-center border border-[#735c00]/30">
                      <img 
                        className="w-full h-full object-cover" 
                        src={imageUrl} 
                        alt="Preview" 
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold">
                        লাইভ প্রিভিউ সিলেকশন
                      </span>
                      <p className="font-body-md text-sm font-semibold text-[#2a0006] truncate">
                        {productName || 'ময়ূরপঙ্খী পার্ল ঝুমকা'}
                      </p>
                      <p className="font-price-md text-base text-[#735c00]">
                        ৳ {price || '৮৫০'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-4 pt-6 bg-[#f0eded]/40 -mx-8 -mb-8 p-6 border-t border-[#d9c1c1]/40">
                <button 
                  className="px-6 py-3 bg-[#f0eded] hover:bg-[#eae7e7] text-[#544343] font-body-md text-sm transition-colors cursor-pointer" 
                  type="reset"
                  onClick={() => {
                    setProductName('');
                    setDescription('');
                  }}
                >
                  বাতিল করুন (Cancel)
                </button>
                <button 
                  className="px-8 py-3 bg-[#2a0006] hover:bg-[#4a0e17] text-white font-body-md text-sm transition-colors flex items-center gap-2 shadow-md cursor-pointer" 
                  type="submit"
                >
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>সংরক্ষণ করুন (Save Product)</span>
                </button>
              </div>
            </form>
          </section>

          {/* 3. Manage Products Table */}
          <section className="bg-[#f6f3f2] shadow-sm flex flex-col border border-[#d9c1c1]/40" id="manage-products-table">
            {/* Table Controls Header */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#f0eded]/60 border-b border-[#d9c1c1]/40">
              <div className="space-y-1">
                <span className="font-label-uppercase text-[11px] text-[#735c00] uppercase tracking-[0.2em] font-semibold">
                  ক্যাটালগ তালিকা
                </span>
                <h2 className="font-headline-md text-2xl text-[#2a0006] font-serif">
                  বর্তমান পণ্য তালিকা ও পরিচালনা
                </h2>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#544343] text-lg">
                    search
                  </span>
                  <input 
                    className="w-full bg-white pl-10 pr-4 py-2.5 text-[#1b1c1c] font-body-md text-xs sm:text-sm border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] placeholder:text-[#867273]" 
                    placeholder="পণ্য খুঁজুন (নাম বা SKU)..." 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                  <select 
                    className="bg-white px-4 py-2.5 text-[#1b1c1c] font-body-md text-xs sm:text-sm border border-[#d9c1c1] appearance-none focus:outline-none cursor-pointer pr-9"
                    value={selectedCategoryFilter}
                    onChange={(e) => {
                      setSelectedCategoryFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="all">সকল ক্যাটাগরি</option>
                    <option value="necklace">নেকলেস ও হার</option>
                    <option value="earrings">কানের দুল ও ঝুমকা</option>
                    <option value="rings">আংটি</option>
                    <option value="bracelets-and-bangles">চুড়ি ও বালা</option>
                    <option value="sets">ব্রাইডাল সেট</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#544343] text-lg">
                    arrow_drop_down
                  </span>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select 
                    className="bg-white px-4 py-2.5 text-[#1b1c1c] font-body-md text-xs sm:text-sm border border-[#d9c1c1] appearance-none focus:outline-none cursor-pointer pr-9"
                    value={selectedStatusFilter}
                    onChange={(e) => {
                      setSelectedStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="all">সকল স্ট্যাটাস</option>
                    <option value="in_stock">স্টকে আছে</option>
                    <option value="out_stock">স্টক আউট</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#544343] text-lg">
                    arrow_drop_down
                  </span>
                </div>
              </div>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f0eded] text-[#544343] font-label-uppercase text-[11px] uppercase tracking-wider border-b border-[#d9c1c1]/40">
                    <th className="py-4 px-6">ছবি</th>
                    <th className="py-4 px-6">পণ্যের নাম ও কোড</th>
                    <th className="py-4 px-6">ক্যাটাগরি</th>
                    <th className="py-4 px-6">মূল্য</th>
                    <th className="py-4 px-6">স্ট্যাটাস</th>
                    <th className="py-4 px-6">WhatsApp ইনকোয়ারি</th>
                    <th className="py-4 px-6 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0eded] text-[#1b1c1c] font-body-md text-sm">
                  {paginatedProducts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-[#544343]">
                        কোনো পণ্য খুঁজে পাওয়া যায়নি। অনুসন্ধান পরিবর্তন করুন।
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map((prod) => (
                      <tr 
                        key={prod.id}
                        className={`hover:bg-[#eae7e7]/60 transition-colors ${
                          !prod.inStock ? 'opacity-70 bg-[#f0eded]/30' : 'bg-white'
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="w-14 h-16 bg-[#4a0e17] shrink-0 overflow-hidden relative shadow-sm border border-[#d9c1c1]/30">
                            <img 
                              className={`w-full h-full object-cover ${!prod.inStock ? 'grayscale' : ''}`}
                              src={prod.imageUrl} 
                              alt={prod.title} 
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="space-y-0.5">
                            <p className={`font-headline-sm text-base text-[#2a0006] font-medium ${!prod.inStock ? 'line-through' : ''}`}>
                              {prod.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest font-mono">
                                SKU: {prod.sku}
                              </span>
                              {prod.finishing && (
                                <span className="bg-[#fed65b]/20 text-[#745c00] text-[10px] px-1.5 py-0.5 font-semibold">
                                  {prod.finishing}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-body-md text-sm text-[#544343]">
                          {prod.categoryName}
                        </td>
                        <td className="py-4 px-6">
                          <span className={`font-price-md text-base text-[#2a0006] font-semibold ${!prod.inStock ? 'line-through text-[#867273]' : ''}`}>
                            ৳ {prod.price.toLocaleString('bn-BD')}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleToggleStock(prod)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold cursor-pointer transition-colors ${
                              prod.inStock 
                                ? 'bg-[#3de273]/20 text-[#005322] hover:bg-[#3de273]/40' 
                                : 'bg-[#ffdad6] text-[#93000a] hover:bg-[#ffdad6]/80'
                            }`}
                            title="ক্লিক করে স্ট্যাটাস পরিবর্তন করুন"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${prod.inStock ? 'bg-[#00a249]' : 'bg-[#ba1a1a]'}`}></span>
                            {prod.inStock ? 'স্টকে আছে' : 'স্টক আউট'}
                          </button>
                        </td>
                        <td className="py-4 px-6">
                          {prod.inStock ? (
                            <a 
                              className="inline-flex items-center gap-1.5 text-xs text-[#128C7E] hover:underline font-medium" 
                              href={generateWhatsAppOrderUrl(prod)} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <span className="material-symbols-outlined text-sm">chat</span>
                              <span>লিংক দেখুন</span>
                            </a>
                          ) : (
                            <span className="text-xs text-[#867273] italic">বর্তমানে নিষ্ক্রিয়</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="inline-flex items-center gap-2">
                            <button 
                              onClick={() => {
                                const newPrice = prompt('নতুন মূল্য লিখুন (BDT ৳):', prod.price.toString());
                                if (newPrice) {
                                  const num = parseInt(newPrice, 10);
                                  if (!isNaN(num)) {
                                    onUpdateProduct({ ...prod, price: num });
                                    onShowToast('মূল্য আপডেট করা হয়েছে!', 'price_change');
                                  }
                                }
                              }}
                              className="p-2 text-[#544343] hover:text-[#2a0006] hover:bg-[#f0eded] transition-colors cursor-pointer" 
                              title="মূল্য এডিট করুন"
                            >
                              <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button 
                              onClick={() => setProductToDelete(prod)}
                              className="px-3 py-1.5 bg-[#ffdad6] text-[#93000a] hover:bg-[#ba1a1a] hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer" 
                              title="মুছে ফেলুন"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span>
                              <span>মুছে ফেলুন</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Pagination Footer */}
            <div className="p-4 md:p-6 bg-[#f0eded] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body-sm text-[#544343] border-t border-[#d9c1c1]/40">
              <div>
                মোট {filteredProducts.length} টির মধ্যে {filteredProducts.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, filteredProducts.length)} টি পণ্য প্রদর্শিত হচ্ছে
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 bg-[#eae7e7] hover:bg-[#e5e2e1] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  পূর্ববর্তী
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1.5 font-semibold transition-colors cursor-pointer ${
                      currentPage === i + 1 
                        ? 'bg-[#2a0006] text-white' 
                        : 'bg-white hover:bg-[#eae7e7] text-[#1b1c1c]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 bg-white hover:bg-[#eae7e7] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  পরবর্তী
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 4. Interactive Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a0006]/70 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full p-8 shadow-2xl relative space-y-6 border border-[#d9c1c1]">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ba1a1a]"></div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">warning</span>
              </div>
              <div className="space-y-1">
                <span className="font-label-uppercase text-[11px] text-[#ba1a1a] uppercase tracking-widest font-semibold">
                  সতর্কবার্তা • স্থায়ী অপসারণ
                </span>
                <h3 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                  পণ্যটি কি সত্যিই মুছে ফেলতে চান?
                </h3>
              </div>
            </div>

            {/* Message */}
            <div className="bg-[#f6f3f2] p-4 space-y-2 border border-[#d9c1c1]/40">
              <p className="font-body-md text-sm text-[#1b1c1c]">
                আপনি <strong className="font-semibold text-[#2a0006]">"{productToDelete.title}"</strong> <span className="font-mono text-xs text-[#735c00]">(SKU: {productToDelete.sku})</span> তালিকা থেকে মুছে ফেলতে চলেছেন।
              </p>
              <p className="font-body-sm text-xs text-[#544343]">
                এই পণ্যটি ডিলিট করলে গ্রাহকদের ওয়েবসাইট ও সরাসরি WhatsApp লিংকে আর প্রদর্শিত হবে না। এই প্রক্রিয়াটি পুনরায় ফিরিয়ে আনা সম্ভব নয়।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-[#f0eded] hover:bg-[#eae7e7] text-[#544343] font-body-md text-sm transition-colors text-center cursor-pointer" 
                onClick={() => setProductToDelete(null)}
              >
                বাতিল করুন (Cancel)
              </button>
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-[#ba1a1a] hover:bg-[#2a0006] text-white font-body-md text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer" 
                onClick={handleConfirmDelete}
              >
                <span className="material-symbols-outlined text-lg">delete_forever</span>
                <span>হ্যাঁ, মুছে ফেলুন (Confirm Delete)</span>
              </button>
            </div>

            {/* Close X Button */}
            <button 
              className="absolute top-4 right-4 text-[#544343] hover:text-[#2a0006] cursor-pointer" 
              onClick={() => setProductToDelete(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
