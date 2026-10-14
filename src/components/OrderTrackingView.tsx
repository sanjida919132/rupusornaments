import React, { useState } from 'react';
import { Order } from '../types/jewelry';
import { MOCK_ORDERS, generateWhatsAppOrderTrackingUrl } from '../data/mockProducts';

interface OrderTrackingViewProps {
  onNavigateHome: () => void;
  onShowToast: (message: string, icon?: string) => void;
}

export const OrderTrackingView: React.FC<OrderTrackingViewProps> = ({
  onNavigateHome,
  onShowToast
}) => {
  const [searchId, setSearchId] = useState('RO-2025-104');
  const [activeOrder, setActiveOrder] = useState<Order | null>(MOCK_ORDERS['RO-2025-104']);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanId = searchId.trim().toUpperCase();
    
    // Look up by ID or by phone number
    const found = Object.values(MOCK_ORDERS).find(
      o => o.orderId.toUpperCase() === cleanId || o.phone.replace(/[^0-9]/g, '') === cleanId.replace(/[^0-9]/g, '')
    );

    if (found) {
      setActiveOrder(found);
      setHasSearched(true);
      onShowToast(`অর্ডার (${found.orderId}) এর তথ্য প্রদর্শিত হচ্ছে`, 'local_shipping');
    } else {
      setActiveOrder(null);
      setHasSearched(true);
      onShowToast('এই নম্বরে কোনো অর্ডার পাওয়া যায়নি', 'error');
    }
  };

  const handleSelectSample = (id: string) => {
    setSearchId(id);
    setActiveOrder(MOCK_ORDERS[id] || null);
    setHasSearched(true);
  };

  return (
    <div className="w-full bg-[#fcf9f8] min-h-screen py-10 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body-sm text-[13px] text-[#544343]">
          <button onClick={onNavigateHome} className="hover:text-[#2a0006] transition-colors cursor-pointer">
            হোম
          </button>
          <span className="material-symbols-outlined text-xs text-[#867273]">chevron_right</span>
          <span className="text-[#2a0006] font-semibold">অর্ডার ট্র্যাকিং</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-[0.25em] uppercase font-bold">
            লাইভ অর্ডার ট্র্যাকার
          </span>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-[#2a0006] font-serif">
            আপনার গহনার বর্তমান অবস্থা ট্র্যাক করুন
          </h1>
          <div className="w-16 h-0.5 bg-[#735c00] mx-auto"></div>
          <p className="font-body-md text-[#544343] text-sm md:text-base">
            আপনার অর্ডার আইডি (যেমন: RO-2025-104) অথবা অর্ডার করার সময় ব্যবহৃত ফোন নম্বর দিয়ে বর্তমান অবস্থান জানুন।
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-[#f6f3f2] p-6 lg:p-8 border border-[#d9c1c1]/50 shadow-sm space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#544343] text-xl">
                search
              </span>
              <input 
                type="text" 
                placeholder="অর্ডার আইডি (e.g. RO-2025-104) অথবা ফোন নম্বর..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full bg-white pl-11 pr-4 py-3.5 text-sm md:text-base border border-[#d9c1c1] focus:outline-none focus:border-[#735c00] uppercase tracking-wider font-semibold placeholder:font-normal placeholder:capitalize"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#2a0006] hover:bg-[#4a0e17] text-white font-label-uppercase text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-lg">local_shipping</span>
              <span>ট্র্যাক করুন</span>
            </button>
          </form>

          {/* Quick Click Sample Orders */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#544343]">
            <span className="font-semibold">নমুনা অর্ডার দেখুন:</span>
            <button 
              type="button"
              onClick={() => handleSelectSample('RO-2025-104')}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                searchId === 'RO-2025-104' ? 'bg-[#2a0006] text-white border-[#2a0006]' : 'bg-white hover:bg-[#eae7e7] border-[#d9c1c1]'
              }`}
            >
              RO-2025-104 (ট্রানজিটে)
            </button>
            <button 
              type="button"
              onClick={() => handleSelectSample('RO-2025-209')}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                searchId === 'RO-2025-209' ? 'bg-[#2a0006] text-white border-[#2a0006]' : 'bg-white hover:bg-[#eae7e7] border-[#d9c1c1]'
              }`}
            >
              RO-2025-209 (কারিগরি চলছে)
            </button>
            <button 
              type="button"
              onClick={() => handleSelectSample('RO-2025-402')}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                searchId === 'RO-2025-402' ? 'bg-[#2a0006] text-white border-[#2a0006]' : 'bg-white hover:bg-[#eae7e7] border-[#d9c1c1]'
              }`}
            >
              RO-2025-402 (ডেলিভারি সম্পন্ন)
            </button>
          </div>
        </div>

        {/* Order Result Card */}
        {activeOrder ? (
          <div className="bg-white border border-[#d9c1c1]/50 shadow-md space-y-8 p-6 lg:p-10">
            {/* Top Status Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#d9c1c1]/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-label-uppercase text-[11px] text-[#735c00] tracking-widest font-mono font-bold">
                    ORDER ID: {activeOrder.orderId}
                  </span>
                  <span className="bg-[#fed65b]/40 text-[#745c00] font-label-uppercase text-[10px] px-2 py-0.5 font-semibold">
                    {activeOrder.courierPartner}
                  </span>
                </div>
                <h2 className="font-headline-sm text-xl text-[#2a0006] font-serif">
                  {activeOrder.productTitle}
                </h2>
                <p className="font-body-sm text-xs text-[#544343]">
                  কুরিয়ার ট্র্যাকিং নম্বর: <strong className="font-mono text-[#1b1c1c]">{activeOrder.trackingNumber}</strong>
                </p>
              </div>

              {/* Status Badge */}
              <div className="text-left md:text-right space-y-1">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 font-label-uppercase text-xs font-semibold ${
                  activeOrder.statusCode === 'delivered' 
                    ? 'bg-[#3de273]/20 text-[#005322]' 
                    : activeOrder.statusCode === 'in_transit'
                    ? 'bg-[#fed65b] text-[#745c00]'
                    : 'bg-[#ffdad6] text-[#93000a]'
                }`}>
                  <span className="material-symbols-outlined text-sm">
                    {activeOrder.statusCode === 'delivered' ? 'check_circle' : 'schedule'}
                  </span>
                  <span>{activeOrder.currentStatus}</span>
                </span>
                <p className="font-body-sm text-xs text-[#544343]">
                  প্রত্যাশিত ডেলিভারি: <strong className="text-[#2a0006]">{activeOrder.estimatedDelivery}</strong>
                </p>
              </div>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-base text-[#2a0006] font-serif">
                  ডেলিভারি পর্যায় ও অগ্রগতি
                </h3>
                <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold">
                  TIMELINE
                </span>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#d9c1c1]">
                {activeOrder.timeline.map((stage) => (
                  <div key={stage.id} className="relative flex items-start gap-4">
                    {/* Bullet marker */}
                    <div className={`absolute -left-6 mt-1 w-5 h-5 flex items-center justify-center rounded-full border ${
                      stage.completed 
                        ? 'bg-[#25D366] text-white border-[#25D366]' 
                        : stage.current 
                        ? 'bg-[#4a0e17] text-white border-[#4a0e17] ring-4 ring-[#ffe088]'
                        : 'bg-white text-[#867273] border-[#d9c1c1]'
                    }`}>
                      {stage.completed ? (
                        <span className="material-symbols-outlined text-xs">check</span>
                      ) : stage.current ? (
                        <span className="w-2 h-2 rounded-full bg-[#ffe088] animate-ping"></span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d9c1c1]"></span>
                      )}
                    </div>

                    {/* Stage Info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className={`font-headline-sm text-sm font-semibold ${
                          stage.current ? 'text-[#4a0e17]' : stage.completed ? 'text-[#2a0006]' : 'text-[#867273]'
                        }`}>
                          {stage.title}
                        </h4>
                        <span className="font-body-sm text-[11px] text-[#867273]">
                          {stage.timestamp}
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-[#544343]">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Details: Customer Address & Financial Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#d9c1c1]/40">
              {/* Left: Customer & Delivery Address */}
              <div className="bg-[#f6f3f2] p-5 space-y-3 border border-[#d9c1c1]/30">
                <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold block">
                  ডেলিভারি ঠিকানা
                </span>
                <div className="space-y-1 font-body-sm text-xs text-[#544343]">
                  <p className="font-bold text-sm text-[#2a0006]">{activeOrder.customerName}</p>
                  <p>ফোন: <span className="font-semibold text-[#1b1c1c]">{activeOrder.phone}</span></p>
                  <p>{activeOrder.address}, {activeOrder.city}</p>
                  <p className="pt-2 text-[11px] text-[#735c00] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>হোম ডেলিভারি চেক সুবিধা সক্রিয়</span>
                  </p>
                </div>
              </div>

              {/* Right: Payment & Summary */}
              <div className="bg-[#f6f3f2] p-5 space-y-3 border border-[#d9c1c1]/30">
                <span className="font-label-uppercase text-[10px] text-[#735c00] tracking-widest uppercase font-semibold block">
                  মূল্য ও পেমেন্ট বিবরণী
                </span>
                <div className="space-y-2 font-body-sm text-xs text-[#544343]">
                  <div className="flex justify-between">
                    <span>পণ্যের মূল্য</span>
                    <span className="font-price-md text-sm text-[#1b1c1c]">৳ {activeOrder.productPrice.toLocaleString('bn-BD')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="font-price-md text-sm text-[#1b1c1c]">৳ {activeOrder.deliveryFee.toLocaleString('bn-BD')}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#d9c1c1]/40 font-bold text-sm text-[#2a0006]">
                    <span>সর্বমোট প্রদেয়</span>
                    <span className="font-price-lg text-base text-[#4a0e17]">৳ {activeOrder.totalAmount.toLocaleString('bn-BD')}</span>
                  </div>
                  <p className="text-[11px] text-[#867273] pt-1">
                    পেমেন্ট পদ্ধতি: <strong className="text-[#1b1c1c]">{activeOrder.paymentMethod}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Help Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f0eded]/60 p-4 border border-[#d9c1c1]/40">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#25D366]">support_agent</span>
                <div>
                  <p className="font-headline-sm text-sm font-semibold text-[#2a0006]">কোনো প্রশ্ন বা ডেলিভারি নির্দেশিকা আছে?</p>
                  <p className="font-body-sm text-xs text-[#544343]">আমাদের লাইভ কাস্টমার কেয়ার প্রতিনিধির সাথে কথা বলুন</p>
                </div>
              </div>
              <a
                href={generateWhatsAppOrderTrackingUrl(activeOrder.orderId)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp-এ আপডেট জানুন</span>
              </a>
            </div>
          </div>
        ) : hasSearched && (
          <div className="py-16 text-center space-y-3 bg-[#f6f3f2] border border-[#d9c1c1]/40 p-8">
            <span className="material-symbols-outlined text-4xl text-[#867273]">search_off</span>
            <h3 className="font-headline-sm text-lg text-[#2a0006]">কোনো অর্ডার রেকর্ড খুঁজে পাওয়া যায়নি</h3>
            <p className="font-body-sm text-xs text-[#544343] max-w-md mx-auto">
              অনুগ্রহ করে আপনার অর্ডার আইডি অথবা ফোন নম্বরটি পুনরায় যাচাই করুন। সাম্প্রতিক অর্ডারের তথ্যের জন্য সরাসরি আমাদের WhatsApp হেল্পলাইনে যোগাযোগ করতে পারেন।
            </p>
            <div className="pt-2">
              <a 
                href={generateWhatsAppOrderTrackingUrl(searchId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp সাপোর্টে যোগাযোগ করুন</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
