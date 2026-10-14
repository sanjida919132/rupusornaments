import { Product, CategoryCardData, CustomerReview } from '../types/jewelry';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'kundan-choker-set-104',
    sku: 'RUPU-NK-104',
    title: 'রাজকীয় কুন্দন চোকার ও কানের দুল সেট',
    englishTitle: 'Royal Kundan Choker & Jhumka Set in 23K Antique Polish',
    category: 'necklace',
    categoryName: 'নেকলেস ও হার',
    price: 2450,
    originalPrice: 2900,
    discountPercent: 15,
    inStock: true,
    stockCount: 4,
    badge: 'বেস্টসেলার',
    finishing: '22K গোল্ড প্লেটেড',
    description: 'খাঁটি কুন্দন পাথরের সাথে প্রাকৃতিক মুক্তার ঝালর ও কানের দুল সহ পূর্ণাঙ্গ সেট। দক্ষ অলংকার শিল্পীদের নিপুণ হাতের ছোঁয়ায় নির্মিত হেরিটেজ ব্রাইডাল আর্ট।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCjapzX6ovUO5B128ubfKqGBFN9-RZiBuGDv5PG_B5yJaT0Udgvz1zeMcUN8L8fiV6wMrwnUPcK9ND2y251stzARjeuhm84Jelc3DJystTe6-ap-sBkoY2KiDbBMVyoX2jsNbaRzB9YtYDMtVbo6c1-YpM1pPB_2ZAddjnpdacfo3d3RciAB4iFQDpi2TWFv-taBKsKhtl9uKD95ilWUQrjy5dHzHwjtfiuYIkPeiyXQn4nSwd00k',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCjapzX6ovUO5B128ubfKqGBFN9-RZiBuGDv5PG_B5yJaT0Udgvz1zeMcUN8L8fiV6wMrwnUPcK9ND2y251stzARjeuhm84Jelc3DJystTe6-ap-sBkoY2KiDbBMVyoX2jsNbaRzB9YtYDMtVbo6c1-YpM1pPB_2ZAddjnpdacfo3d3RciAB4iFQDpi2TWFv-taBKsKhtl9uKD95ilWUQrjy5dHzHwjtfiuYIkPeiyXQn4nSwd00k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdw3_o-OnvrN24QvHPYykZczt2Lt-Dz2rsHesSsROTY-fgBRlZWXllByfknR04e4AD6Qce0GWcVVTwI5bMJGj5pJmorrZF_SWbR5f-orfKjianWsfsgI0aF5o_atT8TYcLnkysNbrZltAdrLsIDN-ji_eKzSk7hP4NRhVwJNM_TlvGq9Ldiz4DfAwjjf5ps-ytpBt1mkfsUSSxwGG8gtlr2Zy3sQG7NVF4edHzb0vvs0jY_cwEtsY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApEb4AzSSlo9GzcBXa_tKUgM0PcGF-waGCgy1JTzEPdY5lpX-GitO6g9OnrnIBqW91xnzmriKZjkY0iAp5WtOQW_4vGUFXu2TCoG1p7GwBI56OT6T0xRremW7JNwwBaYhrrui803mORUyGERSV4UOmjdBjflQZwV4DyM1Hkiy-a5xkkh4o6OgThIuaJ1JjGn-Cbg_-c6VFqzGh7yvx8hPK4w-TRx7hgFEkWWh0X9GOhkDEgNvZyko',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4LNegWq3rIjtI9gVbdn67LSFXx9SJPJnxyKHol3LhqPCST3qVFxNVMyr-aEQbuqCDXlPdkg_HQAMRI_ujCu8EjcCTJW_7WHXO6fD22xMA2OvRow4ghTyRPKlcmQ6vrMAnS0_xWqPzo-256tJw9yFbtqZHfbr4lmbbHqdI3NQOeRfds3HhhC78i53lpII-dihnARgqCdFVoJn7WesO-jWSEY3zZzdDsXtejTz9PAC96b-e5rEkEVM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgIN3XbDczwHNEg6fvfCDC6hM1PmogRqO-OFhN77siBUABai5jW2aZx2OdxGT2ZUcEf7J8CyW2Xnwk7OId6BzxWVAi1NGDNmZq8z8sccfM_kDLHmNKWbAsGnUPkmIqagk39bev5JudusztAI9WJhGbsSHEQH5Hvb9Y2GtmWY86RgyU4YYgLG62HyUOIP_Cn91jXKyxZl5NgnTh0qCpGmcbBuojOMk7nS44MNFp7Fs_WuCnScRDfS8'
    ],
    tags: ['all', 'trending', 'bridal'],
    rating: 4.9,
    reviewCount: 28,
    specs: {
      material: 'প্রিমিয়াম ব্রাস ও কপার অ্যালয়, ২৩ ক্যারেট গোল্ড পলিশ',
      gemstone: 'সেমি-প্রেশাস কুন্দন স্টোন ও রুবি ড্রপস',
      weight: '৮৫ গ্রাম প্রায় (চোকার ও দুল মিলিয়ে)',
      setIncludes: '১টি চোকার নেকলেস, ১ জোড়া ঝুমকা কানের দুল',
      size: 'অ্যাডজাস্টেবল সুতা / ট্যাসেল (সকল গলার মাপে মানানসই)'
    },
    createdAt: '2025-01-10'
  },
  {
    id: 'mayurpankhi-jhumka-209',
    sku: 'RUPU-ER-209',
    title: 'ময়ূরপঙ্খী ঝুমকা জোড়া',
    englishTitle: 'Mayurpankhi Royal Gold Jhumka Earrings',
    category: 'earrings',
    categoryName: 'কানের দুল',
    price: 850,
    originalPrice: 1050,
    discountPercent: 19,
    inStock: true,
    stockCount: 12,
    badge: 'নতুন',
    finishing: 'হালকা ওজন',
    description: 'ঐতিহ্যবাহী ময়ূর মোটিফে নিখুঁত নকশিকাজ, পরতে অত্যন্ত আরামদায়ক ও নিখুঁত ফিনিশিং।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLCDXRHmiPalB4G4ZBJFOcAAubzh7wnCiTGHDL76-RBqNN_iVR_TMrKZ19IvTvC_AeK2bA6A2sjLxlLileCPp8KDcey4Z27knaEp7IGTw8wT3b_F8sDacFwgZaiJh57a9o3SNzUPPqwQ6-Lrd3SRQBZzoWlZqZiAvndOoCSg706lvSpkFtQ6oGpYtrbfhoYfTy5bUg1mxKEjobNWk5VQcljYoRQVLqzxN6TDUu2gTBOM4bHWZdFc',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLCDXRHmiPalB4G4ZBJFOcAAubzh7wnCiTGHDL76-RBqNN_iVR_TMrKZ19IvTvC_AeK2bA6A2sjLxlLileCPp8KDcey4Z27knaEp7IGTw8wT3b_F8sDacFwgZaiJh57a9o3SNzUPPqwQ6-Lrd3SRQBZzoWlZqZiAvndOoCSg706lvSpkFtQ6oGpYtrbfhoYfTy5bUg1mxKEjobNWk5VQcljYoRQVLqzxN6TDUu2gTBOM4bHWZdFc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnEvsj8lCgxVdMddqWaGyl21fkLlS5bqvHzFi1L8ls4vDOdcnvKEKVK9LkCpFLhQGNf_QflB854HvNtC2tL4y5AOeo6xJpApa9nEKeDlLrjYZBBWb10Rs7FEgc9cyj8MoqEfb7FRwYuCroQY9mnVx_N0IwKyMEAMwRT0Rh8MN5ZZnR0xQpHbt9g5pntCepA_sMcT9m7CTZRRl2HRYPJ2RKaBo5Hu7DhzMnjMn32Ed00KSivkSyiEk'
    ],
    tags: ['all', 'new', 'trending'],
    rating: 4.8,
    reviewCount: 19,
    specs: {
      material: '২২ ক্যারেট গোল্ড প্লেটেড অ্যালয়',
      gemstone: 'গোল্ড বল ড্রপস ও খোদাই কাজ',
      weight: '২৫ গ্রাম (জোড়া)',
      setIncludes: '১ জোড়া ময়ূরপঙ্খী ঝুমকা',
      size: 'স্ট্যান্ডার্ড ব্রাইডাল সাইজ (২.৫ ইঞ্চি দৈর্ঘ্য)'
    },
    createdAt: '2025-01-18'
  },
  {
    id: 'royal-solitaire-ring-315',
    sku: 'RUPU-RG-315',
    title: 'রয়্যাল সলিটায়ার ডায়মন্ড রিং',
    englishTitle: 'Royal Solitaire American Diamond Ring',
    category: 'rings',
    categoryName: 'আংটি',
    price: 1200,
    originalPrice: 1500,
    discountPercent: 20,
    inStock: true,
    stockCount: 8,
    badge: 'নতুন',
    finishing: 'এডজাস্টেবল সাইজ',
    description: 'উচ্চমানের সুইস জিরকন ও খাঁটি প্রিমিয়াম ফিনিশিং এর আভিজাত্য। যে কোনো আঙ্গুলের মাপে সহজে মানানসই।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWtlZJMLCCC7MG1cxsatsS-4gRHDz2ARFvFr9jjUNb6zoOstNMX3K9bcgfK1lJlPYCdmR8n66yHFWeUuIHOG5HliT0BkCkg9i4yv9gHyhYIkyecSrHkWb1GjGum1KGPX19rR7yXkzHOMuSoTFJDG3oJ3SEMHHG0cGIIIOdiWOiRYVjykQn23ZKRv-0xjTeV-TUVi1cgMLoKNDVVcimoA5lgVofSwTV81AFx6za7aUteT1VN7VJqs',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWtlZJMLCCC7MG1cxsatsS-4gRHDz2ARFvFr9jjUNb6zoOstNMX3K9bcgfK1lJlPYCdmR8n66yHFWeUuIHOG5HliT0BkCkg9i4yv9gHyhYIkyecSrHkWb1GjGum1KGPX19rR7yXkzHOMuSoTFJDG3oJ3SEMHHG0cGIIIOdiWOiRYVjykQn23ZKRv-0xjTeV-TUVi1cgMLoKNDVVcimoA5lgVofSwTV81AFx6za7aUteT1VN7VJqs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDcoKHCEJvMm7h1SwlYjAmFOqTJz08II8WVeoKWInpSShKN5XssiJRvaVKKNEcTw-b1T277ffZNQ7o0av5zun6bheUhRlAb5dUM-o6M98gr0mYCkC6CAocv2TAsp443CzdznXa5uX3tbJgsUqmYHdCKQvxK-bdQQ1tANexWfXFHJnfT1boYkfnQcJFH-PhF3BvOswLAnDmXRkpLf8m25Jh7TFvW880rQbJkNcUWa1MIkn6aC6vgY0'
    ],
    tags: ['all', 'new'],
    rating: 4.9,
    reviewCount: 34,
    specs: {
      material: '১৮ ক্যারেট হোয়াইট ও গোল্ড ডুয়াল টোন ফিনিশ',
      gemstone: 'সুইস এএএ+ গ্রেড আমেরিকান ডায়মন্ড',
      weight: '৬.২ গ্রাম',
      setIncludes: '১টি সলিটায়ার রিং ও ভেলভেট বক্স',
      size: 'ফ্রি সাইজ অ্যাডজাস্টেবল'
    },
    createdAt: '2025-01-22'
  },
  {
    id: 'rose-bala-pair-402',
    sku: 'RUPU-BL-402',
    title: 'গোলাপ নকশি স্বর্ণবালা জোড়া',
    englishTitle: 'Rose Embossed Royal Bridal Bala Pair',
    category: 'bracelets-and-bangles',
    categoryName: 'বালা ও চুড়ি',
    price: 2450,
    originalPrice: 3100,
    discountPercent: 21,
    inStock: true,
    stockCount: 6,
    badge: 'বেস্টসেলার',
    finishing: '২ পিস সেট',
    description: 'মাস্টার কারিগরের হাতে খোদাই করা প্রাচীন গোলাপ নকশার ঐতিহ্যবাহী ব্রাইডাল বালা। খাঁটি সোনার রঙের আভিজাত্য।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkEWiBxlLhn9VEwLCduOUAY1lu6l6qn_RUjEWJf_fFVYRO29MPYzJUaaQplWD107zll7DBncQ4bjEVj4R_x0ZQ3rpPfbdv_gFLbMa10IxhwLvFoR4mDJeMPr77xjliwtpzxY2nbTMtZtlc2vdYEbIqUdeu9sAlsMXOLJABnfnNAnQ7I0WYntdds1CEwGKo-AX8I--iNGf6iXoWn4qL2tVhXSbo6VattDlQ-T2bImTbtsVdfco4QXk',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkEWiBxlLhn9VEwLCduOUAY1lu6l6qn_RUjEWJf_fFVYRO29MPYzJUaaQplWD107zll7DBncQ4bjEVj4R_x0ZQ3rpPfbdv_gFLbMa10IxhwLvFoR4mDJeMPr77xjliwtpzxY2nbTMtZtlc2vdYEbIqUdeu9sAlsMXOLJABnfnNAnQ7I0WYntdds1CEwGKo-AX8I--iNGf6iXoWn4qL2tVhXSbo6VattDlQ-T2bImTbtsVdfco4QXk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLkgKvIuDut2XrYZ5xLVFzUNGm1cvekWVyBadXBQaXXybuSuWTCJZv__nJKGJ1ZUaHuFgeIUeRNiu2_5b5tSm6eErHFZ1qyU0ss0YhXRUrUNfbn-YgGpPbAspcf4NOz7SpCS2RHCgAiRnPNXHjtjbuhbpRckO8bh9JlldI7al3jeHsyT2iCD1I2XlHd-peQlhBZgIETn7wJrTfZYD5M-WDQ0qY4R80neErrmyrXJeB6H3wUdpS6M'
    ],
    tags: ['all', 'trending', 'bridal'],
    rating: 5.0,
    reviewCount: 42,
    specs: {
      material: '২২ ক্যারেট মাইক্রোপ্লেটেড ডুরাগোল্ড',
      gemstone: 'হাতুড়ি খোদাই গোলাপ মোটিফ',
      weight: '৪৮ গ্রাম (জোড়া)',
      setIncludes: '২ পিস ম্যাচিং রয়্যাল বালা',
      size: 'সাইজ ২-৪, ২-৬ ও ২-৮ উপলব্ধ'
    },
    createdAt: '2025-01-05'
  },
  {
    id: 'meenakari-royal-choker-108',
    sku: 'RUPU-NK-108',
    title: 'মীনাঙ্কারী রাজকীয় চোকার হার',
    englishTitle: 'Meenakari Royal Heritage Choker Necklace',
    category: 'necklace',
    categoryName: 'নেকলেস ও হার',
    price: 2180,
    originalPrice: 2600,
    discountPercent: 16,
    inStock: true,
    stockCount: 5,
    badge: 'হিট কালেকশন',
    finishing: 'মীনাঙ্কিত কারুকাজ',
    description: 'ঐতিহ্যবাহী মীনাঙ্কারী সবুজ পান্না ও সাদা পার্ল ড্রপসের মেলবন্ধনে রাজকীয় ব্রাইডাল নেকলেস।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIfaGwUiyFv98oQCmyTLnnvttk19wqI2D4N6UkVsTHJAanpeFcsk7Jk7hg5M-yg3v-8TSo1IS9Wi6lqWpRPm9M242DvZ1-m7wfXxEeVyv5xK7tlk_x3HNoMLHcgFvS70GXeILFbXZCJVjnxpMRULgp0IJ3u9MEBLWC8j9D7OnzWxwmCX24oox-M1r4KDaogofcZhgoMxvAmT1jmxpvX1xNdtC8cT976kFPXZo1fxESGHJCW0175A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIfaGwUiyFv98oQCmyTLnnvttk19wqI2D4N6UkVsTHJAanpeFcsk7Jk7hg5M-yg3v-8TSo1IS9Wi6lqWpRPm9M242DvZ1-m7wfXxEeVyv5xK7tlk_x3HNoMLHcgFvS70GXeILFbXZCJVjnxpMRULgp0IJ3u9MEBLWC8j9D7OnzWxwmCX24oox-M1r4KDaogofcZhgoMxvAmT1jmxpvX1xNdtC8cT976kFPXZo1fxESGHJCW0175A'
    ],
    tags: ['all', 'trending', 'bridal'],
    rating: 4.7,
    reviewCount: 16,
    specs: {
      material: 'ব্রাস ও হ্যান্ড ক্রাফটেড এনামেল মীনা',
      gemstone: 'এমারেল্ড গ্রিন কুন্দন ও সুইটওয়াটার পার্ল',
      weight: '৭২ গ্রাম',
      setIncludes: '১টি চোকার ও ম্যাচিং ড্রপ ইয়াররিংস',
      size: 'অ্যাডজাস্টেবল ভেলভেট ডোরি'
    },
    createdAt: '2025-01-25'
  },
  {
    id: 'mayurkanthi-sitahar-long-112',
    sku: 'RUPU-NK-112',
    title: 'ময়ূরকণ্ঠী ঐতিহ্যবাহী সীতাহার',
    englishTitle: 'Mayurkanthi Traditional Bengali Sitahar',
    category: 'necklace',
    categoryName: 'নেকলেস ও হার',
    price: 3600,
    originalPrice: 4200,
    discountPercent: 14,
    inStock: true,
    stockCount: 3,
    badge: 'ব্রাইডাল ফেভারিট',
    finishing: 'লং চেইন সীতাহার',
    description: 'বহু স্তর বিশিষ্ট রয়্যাল ময়ূরকণ্ঠী সীতাহার। বিয়ের দিনে লাল বেনারসি বা কাঞ্জিভরম শাড়ির সাথে অতুলনীয়।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_elCBo2oyyw36yG3KnoCWWjMXxzcHBcIBTYMsLeljq-YAuxEbFOIzBePTR9O4Um1FqBOv4UV0lWkBaP0Y4Htxa0bIFbZ6K_0pgj2CcK3lnJrU4aQUxIv9kGG8Oy97RDLnQPCP6zbrM54EHbUB99ugJzigtKM6DjCagwczB8Hu56HEn3nWHGOOHIh55sEd3YTQNAvVthg-eK7oewkk-dOUJ-5T0skmYLbTMOd-4M1Q_XxpjIcUzUM',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_elCBo2oyyw36yG3KnoCWWjMXxzcHBcIBTYMsLeljq-YAuxEbFOIzBePTR9O4Um1FqBOv4UV0lWkBaP0Y4Htxa0bIFbZ6K_0pgj2CcK3lnJrU4aQUxIv9kGG8Oy97RDLnQPCP6zbrM54EHbUB99ugJzigtKM6DjCagwczB8Hu56HEn3nWHGOOHIh55sEd3YTQNAvVthg-eK7oewkk-dOUJ-5T0skmYLbTMOd-4M1Q_XxpjIcUzUM'
    ],
    tags: ['all', 'bridal'],
    rating: 4.9,
    reviewCount: 38,
    specs: {
      material: '২২ ক্যারেট গোল্ড প্লেটেড কপার',
      gemstone: 'রুবী রেড স্টোন ও গোল্ড ঘুংরু',
      weight: '১১০ গ্রাম',
      setIncludes: '১টি লং সীতাহার নেকলেস',
      size: '২৮ ইঞ্চি চেইন ঝুল'
    },
    createdAt: '2025-01-08'
  },
  {
    id: 'polki-chandbali-earrings-215',
    sku: 'RUPU-ER-215',
    title: 'পোলকি কুন্দন চাঁদবালী কানের দুল',
    englishTitle: 'Oversized Polki Kundan Chandbali Earrings',
    category: 'earrings',
    categoryName: 'কানের দুল',
    price: 1550,
    originalPrice: 1850,
    discountPercent: 16,
    inStock: true,
    stockCount: 7,
    badge: 'এক্সক্লুসিভ',
    finishing: 'অ্যান্টিক পলিশ',
    description: 'রাজকীয় চাঁদবালী নকশা, যাতে ব্যবহার করা হয়েছে আনকাট পোলকি স্টোন ও খাঁটি মুক্তোর কাজ।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx1TB9jbg1lnyuTXHxNtmzTGtff72yRX5cdjl91sRmo6C1nEeZR3eTEMip0hEQ5SZozhKeEcpeEDD4kDH4k-qTxo3A6YAleOgopjToTzPjxLNSSW0R4UfpHbh7haH9fMsSP1HcldQehG8BN0xNwLKFjrGpxac_AweV8QO-6GSVf_7_2TVdm5ECQVZ4_DMn8g4219yo8ZrGEE9M7Wx1Du5aioUsz_x8Mgn9nIEF84Iza-GqoD7T-XY',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDx1TB9jbg1lnyuTXHxNtmzTGtff72yRX5cdjl91sRmo6C1nEeZR3eTEMip0hEQ5SZozhKeEcpeEDD4kDH4k-qTxo3A6YAleOgopjToTzPjxLNSSW0R4UfpHbh7haH9fMsSP1HcldQehG8BN0xNwLKFjrGpxac_AweV8QO-6GSVf_7_2TVdm5ECQVZ4_DMn8g4219yo8ZrGEE9M7Wx1Du5aioUsz_x8Mgn9nIEF84Iza-GqoD7T-XY'
    ],
    tags: ['all', 'trending'],
    rating: 4.8,
    reviewCount: 22,
    specs: {
      material: 'ব্রাস গোল্ড ফয়েল ও কুন্দন কারুকাজ',
      gemstone: 'প্রাকৃতিক মুক্তো ও সুইজারল্যান্ড কুন্দন',
      weight: '৩৫ গ্রাম (জোড়া)',
      setIncludes: '১ জোড়া রাজকীয় চাঁদবালী',
      size: '৩.২ ইঞ্চি'
    },
    createdAt: '2025-01-20'
  },
  {
    id: 'ratanchur-bangle-set-501',
    sku: 'RUPU-RC-501',
    title: 'রাজকীয় রতনচূর ও হাতের বালা সেট',
    englishTitle: 'Royal Bengali Bridal Ratanchur Hand Harness',
    category: 'bracelets-and-bangles',
    categoryName: 'হাত ও কব্জির গহনা',
    price: 1950,
    originalPrice: 2300,
    discountPercent: 15,
    inStock: true,
    stockCount: 5,
    badge: 'নতুন আগমন',
    finishing: 'আঙুল সংযোজিত রতনচূর',
    description: 'আঙুল থেকে কব্জি পর্যন্ত বিস্তৃত রাজকীয় নকশা। নববধূর হাতের আভিজাত্য দ্বিগুণ করে তুলতে অনন্য।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLwRdxrKBOCLOITEp9rDBDLlEdw45T746AlxQKGv-igJtRSsw-0npJ3RPJxJEB81-bU3GY9ASikZGBJ_PsdBNGN1PH5ML9RqNoDX1ix6Rap5ZHNnlSj-_Cfh0WQYXEKJTld9GBUyXjnW8mimAo-eAdoWHDB2bFIKl_2IKzmkCMhnEdbnG4r3mplo2KFMqhbYtYwGnYdVSlhSGVY-tgBsPUfWHzVAWOaioob3vYEr6RaomCvBqD-R0',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLwRdxrKBOCLOITEp9rDBDLlEdw45T746AlxQKGv-igJtRSsw-0npJ3RPJxJEB81-bU3GY9ASikZGBJ_PsdBNGN1PH5ML9RqNoDX1ix6Rap5ZHNnlSj-_Cfh0WQYXEKJTld9GBUyXjnW8mimAo-eAdoWHDB2bFIKl_2IKzmkCMhnEdbnG4r3mplo2KFMqhbYtYwGnYdVSlhSGVY-tgBsPUfWHzVAWOaioob3vYEr6RaomCvBqD-R0'
    ],
    tags: ['all', 'new', 'bridal'],
    rating: 4.9,
    reviewCount: 27,
    specs: {
      material: '২২ ক্যারেট সোনালী পালিশের অ্যালয়',
      gemstone: 'রুবী ক্রিস্টাল ও সূক্ষ্ম জালিকাজ',
      weight: '৪২ গ্রাম (১ পিস)',
      setIncludes: '১টি পূর্ণাঙ্গ রতনচূর রিং সহ',
      size: 'অ্যাডজাস্টেবল রিং ও বালা চেইন'
    },
    createdAt: '2025-01-28'
  },
  {
    id: 'emerald-statement-ring-088',
    sku: 'RUPU-RG-088',
    title: 'পান্না খচিত রাজকীয় আংটি',
    englishTitle: 'Emerald Filigree Statement Ring',
    category: 'rings',
    categoryName: 'আংটি',
    price: 1200,
    originalPrice: 1450,
    discountPercent: 17,
    inStock: true,
    stockCount: 9,
    badge: 'এক্সক্লুসিভ',
    finishing: 'খাঁটি পান্না মোটিফ',
    description: 'গাঢ় সবুজ পান্না স্টোন এবং সূক্ষ্ম সোনার জালিকাজের সংমিশ্রণে তৈরি আভিজাত্যপূর্ণ রিং।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASYVBjGK6CE39sXhF1kXde-3op2hl96oAZQ0JlRE5Vok3N-Xbhdbh2H_nDtrXxyEoKfPhw7ZBVsVMiXVHE5-0CLlZgnV9r74KO5XEtrIjxpTh1CDE1HnDH6479VDv5zjs2GTDvoY5eTD0rWeqMss1MPO-AbvmNrxL5tYlGS_fa-uYVsZ_Hsl4JHF7NW1TAzL1nb1NQwP14JhSZDU8AKdUMP1yKw2bTruMPMo0jMHmFtecnx-S-oz4',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASYVBjGK6CE39sXhF1kXde-3op2hl96oAZQ0JlRE5Vok3N-Xbhdbh2H_nDtrXxyEoKfPhw7ZBVsVMiXVHE5-0CLlZgnV9r74KO5XEtrIjxpTh1CDE1HnDH6479VDv5zjs2GTDvoY5eTD0rWeqMss1MPO-AbvmNrxL5tYlGS_fa-uYVsZ_Hsl4JHF7NW1TAzL1nb1NQwP14JhSZDU8AKdUMP1yKw2bTruMPMo0jMHmFtecnx-S-oz4'
    ],
    tags: ['all'],
    rating: 4.8,
    reviewCount: 15,
    specs: {
      material: '২২ ক্যারেট গোল্ড কোটিং',
      gemstone: 'ল্যাব ক্রিয়েটেড পান্না (Emerald)',
      weight: '৭.৫ গ্রাম',
      setIncludes: '১টি রাজকীয় আংটি',
      size: 'অ্যাডজাস্টেবল সাইজ'
    },
    createdAt: '2025-01-02'
  },
  {
    id: 'minakari-bridal-chur-312',
    sku: 'RUPU-BG-312',
    title: 'মিনাকারি ব্রাইডাল চুড়ি সেট',
    englishTitle: 'Minakari Bridal Chur Set in 22K',
    category: 'bracelets-and-bangles',
    categoryName: 'চুড়ি ও বালা',
    price: 2150,
    originalPrice: 2600,
    discountPercent: 17,
    inStock: false,
    stockCount: 0,
    badge: 'স্টক আউট',
    finishing: '৪ পিস চুড় সেট',
    description: 'লাল ও সবুজ মিনাকারিতে রঞ্জিত চিরায়ত বাঙ্গালী চুড় সেট। ঐতিহ্যবাহী নববধূর অলংকার।',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmkz0TBdAB5prBrtTRCzkl0bOiAx-gOEcKyeZp9REdZIV3ON9iWhjIIqGKsE0_mfEJFtwdLsQqh6MRLw2R4ePx6wTc9C01fp67xihF2LQ14sUeXzWNJSLyDGFvY28ehmTARIuw3TeiHjOQTuVGO7j90Dhc200kYlzX-Bjp0kl2RNkfVDae-aqgKbruwj0rae7mTP2tBfx7onI1DxQk21_UpkuWtQZkPluu4qGCVY69BOn3hmzN1U',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmkz0TBdAB5prBrtTRCzkl0bOiAx-gOEcKyeZp9REdZIV3ON9iWhjIIqGKsE0_mfEJFtwdLsQqh6MRLw2R4ePx6wTc9C01fp67xihF2LQ14sUeXzWNJSLyDGFvY28ehmTARIuw3TeiHjOQTuVGO7j90Dhc200kYlzX-Bjp0kl2RNkfVDae-aqgKbruwj0rae7mTP2tBfx7onI1DxQk21_UpkuWtQZkPluu4qGCVY69BOn3hmzN1U'
    ],
    tags: ['all', 'bridal'],
    rating: 4.6,
    reviewCount: 11,
    specs: {
      material: 'ব্রাস অ্যালয় ও ফায়ারড এনামেল',
      gemstone: 'মিনা কারুকাজ',
      weight: '৫৫ গ্রাম (৪ পিস)',
      setIncludes: '৪টি হস্তনির্মিত চুড়',
      size: '২-৬'
    },
    createdAt: '2024-12-15'
  }
];

export const CATEGORIES: CategoryCardData[] = [
  {
    id: 'cat-earrings',
    title: 'কানের দুল ও ঝুমকা',
    subtitle: 'ঐতিহ্যবাহী ঝুমকা, সুক্ষ্ম কানপাশা এবং ডায়মন্ড স্টাড',
    designCount: '৮৫+ ডিজাইন',
    categoryKey: 'earrings',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANLY_xQFCitSizSj60k-IJkl4uQyKtCxDUYslatEJ4GA06CD-ZFtecpt0eAnlHeR6V8ahd1rayPEeeOO6p3crBfoIf7QFhpTTFHp7UN1XNnj3BeHJwb2FHUuDcACy8qFhR3dU09Lqnn9EPuHwiFJ9deNFSJcqL32mNAVnlhnqzjLKGtJ8Nf_PW8seecnmioO6ROgDzScMdSXhzwTbXFxZnSMlazGbaTWI_GeTbWCp7bkfpb7barUA'
  },
  {
    id: 'cat-necklace',
    title: 'নেকলেস ও রানিহার',
    subtitle: 'ব্রাইডাল ভারী চোকার, সীতাহার ও মডার্ন পেণ্ডেন্ট',
    designCount: '১২০+ ডিজাইন',
    categoryKey: 'necklace',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwCC9xDtMUtJ-ex6eqixzONu4vxqiPw9cSb_DiKYRttyKJ4BTcbO2x5UZWpyB3_jqDUXe5NW5_Kc_FD2BdMEml1LrRrpPBp9-UNcsfH6WuvHwY5lGATFn5yaxtRiiNuTkFo9CuOsa0vdIypU3nmz57w4q2aLSSKTl02k9PBFmIheYedKeLn48TkevBGb-Mz9uxMi7KMz3fHU4ZBSTLYJnJK4gWWIbiX-LVNMOzv4Ys_gp2F2zzV4M'
  },
  {
    id: 'cat-rings',
    title: 'হীরক ও স্বর্ণের আংটি',
    subtitle: 'ডায়মন্ড কাট, সলিটায়ার ও ট্র্যাডিশনাল স্বর্ণাঙ্গুরী',
    designCount: '১১০+ ডিজাইন',
    categoryKey: 'rings',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDcoKHCEJvMm7h1SwlYjAmFOqTJz08II8WVeoKWInpSShKN5XssiJRvaVKKNEcTw-b1T277ffZNQ7o0av5zun6bheUhRlAb5dUM-o6M98gr0mYCkC6CAocv2TAsp443CzdznXa5uX3tbJgsUqmYHdCKQvxK-bdQQ1tANexWfXFHJnfT1boYkfnQcJFH-PhF3BvOswLAnDmXRkpLf8m25Jh7TFvW880rQbJkNcUWa1MIkn6aC6vgY0'
  },
  {
    id: 'cat-bracelets',
    title: 'ব্রেসলেট ও রতনচূর',
    subtitle: 'ক্লাসিক ও সমসাময়িক চেইন ব্রেসলেট এবং রতনচূর',
    designCount: '৬৫+ ডিজাইন',
    categoryKey: 'bracelets-and-bangles',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjasI-l84TCQBrwyBaOmdFWZAMTEfkCJ1rnPXBfayz-MaAngFn8pw1gCyXPizO3PY-aWazkYR1Jm_-YHeCN-vDR3oL4JGVkkGlHO8QBzydEAOY5yMtUFUgdBF2wELjCMAFoXdn4zaktA3kMn2bxkhEEp5aJMdmcs6yOoniK-08fzzRXqy1bNJWpqguPWGExICrg69KVEo4vI1KDnEXD97XvkM8FV7rTSsrR2xBC6xkLMnZaU0SEsA'
  },
  {
    id: 'cat-bangles',
    title: 'চুড়ি ও নকশি বালা',
    subtitle: 'সনাতনী মযূরমুখ বালা, সোনার চুড় ও কারুকাজ খচিত বালা',
    designCount: '৯৫+ ডিজাইন',
    categoryKey: 'bracelets-and-bangles',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLkgKvIuDut2XrYZ5xLVFzUNGm1cvekWVyBadXBQaXXybuSuWTCJZv__nJKGJ1ZUaHuFgeIUeRNiu2_5b5tSm6eErHFZ1qyU0ss0YhXRUrUNfbn-YgGpPbAspcf4NOz7SpCS2RHCgAiRnPNXHjtjbuhbpRckO8bh9JlldI7al3jeHsyT2iCD1I2XlHd-peQlhBZgIETn7wJrTfZYD5M-WDQ0qY4R80neErrmyrXJeB6H3wUdpS6M'
  },
  {
    id: 'cat-bridal-combo',
    title: 'পূর্ণাঙ্গ ব্রাইডাল কম্বো',
    subtitle: 'বিবাহের রাজকীয় সীতাহার, টিকলি, কানবালা ও নথ সেট',
    designCount: '৪০+ সেট',
    categoryKey: 'sets',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiHX8O2_L17nTKCEsklUnHwkCe-ZdeeGVfEOdcFdaGBOLPPzcTLkMVXJN3OWvFKQI-TZkNKKRUAVYgZ5VeHiAkOrr9LKs4wmWbjUHRLooq-vvu1ZWyCYXNn-689MquOVXE45hCBCHiTLKFLB1F1w8FqgJ1_zLxx3SnSgDnjP3tGp8BI7T0CVKj7QoUZWlLq8p4sRO00SkTDYejWJWcO236AuABKwUNsEcxGx9Z2qdTr74lXXuOCLU'
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'ফারহানা চৌধুরী',
    location: 'ধানমন্ডি, ঢাকা',
    verified: true,
    rating: 5,
    quote: '“আমার বিয়ের রিসেপশনের জন্য কুন্দন চোকার সেটটি নিয়েছিলাম। সত্যি বলতে অনলাইনে এত নিখুঁত কারুকাজ আর প্রিমিয়াম ওজন আশা করিনি! সবাই প্রশংসা করেছে।”',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1udecFUDiCtHFqFPHw1G4e8L9Ex_TnA5uOE_aVNN2ivtZXVN_RflgipRYzRwthvxyCGz1LjamhveifRqlQN9SFDhclOqRU4Un88FibHjmIZ53Ofz7jUU6pyIRAK24Kbi_MJ6t7pWDBMmhJRrDDPa-xsytg3Fs3FFgFolb1rHccFMhWh55har2UAgr68yozFmahE_Qhf36D3kLhTO3a0yaZOxNDwcCh3ojJzvVFjY-1MotKQlwRTQ',
    productName: 'রাজকীয় কুন্দন চোকার ও কানের দুল সেট',
    reviewDate: '৮ অক্টোবর, ২০২৫',
    helpfulCount: 24
  },
  {
    id: 'rev-2',
    author: 'সাবরিনা রহমান',
    location: 'খুলশী, চট্টগ্রাম',
    verified: true,
    rating: 5,
    quote: '“WhatsApp-এ অর্ডার করার পদ্ধতিটি অবিশ্বাস্যরকম দ্রুত। মাত্র ১ দিনের মাথায় চট্টগ্রামে হোম ডেলিভারি পেয়েছি। প্যাকেজিং ও জুয়েলারি বক্সটি অত্যন্ত আভিজাত্যপূর্ণ।”',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-c7w10tF9Yc2PNveLfZ5KcB3QMywZi5Yq7Fxz1kOlvJG20eeEoov5L0SZpt1k7MkExAJN3xNUprBzYFtogLvMBEfEyGeVcMHuGwqm4IEWU6s2gC0jj8JzSKG3pmlZTS4q66aYae9odrPp-Y4QEZFiFOWwXjsBcCdEQwASwYppJbm2FztxxMh-AUQ4C73H5TeuvBEf8cWXSXIMaWFrNUr0ZgiCTOurXBMJRKzCW_q29YeDHf-NPdo',
    productName: 'গোলাপ নকশি স্বর্ণবালা জোড়া',
    reviewDate: '৫ অক্টোবর, ২০২৫',
    helpfulCount: 31
  },
  {
    id: 'rev-3',
    author: 'নুসরাত জাহান',
    location: 'উত্তরা, ঢাকা',
    verified: true,
    rating: 5,
    quote: '“ময়ূরপঙ্খী ঝুমকা জোড়া অর্ডার করেছিলাম উপহার দেওয়ার জন্য। ফিনিশিং আর খাঁটি সোনার ঔজ্জ্বল্য সত্যিই প্রশংসনীয়। রূপু অর্নামেন্টসের সততা আমাকে মুগ্ধ করেছে।”',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmFvz9Xd_oUqeSlUh2K20ok2PqfGyqo6_FNdW8v72dWKp8oVW7-fh7yI8APJkaMN6iY-MCITdQVtMNHJ3NQKregQsmaI5M05MHFKYxSX2USSaIBcpheqSVuAzsFn-Tg-tT2jA3qT_CJD_LzVdItNBgEC-_cT6bDX_cu3-wJ4yWXbmorCcuYMsPMfQ6zqLWS1U9EESV0ZAiuflQg7PxUIqER88o2VyClIE53_SWBpsB0-hlGe1exhU',
    productName: 'ময়ূরপঙ্খী ঝুমকা জোড়া',
    reviewDate: '১ অক্টোবর, ২০২৫',
    helpfulCount: 19
  },
  {
    id: 'rev-4',
    author: 'তানজিলা তাসনিম',
    location: 'গুলশান-২, ঢাকা',
    verified: true,
    rating: 5,
    quote: '“ডায়মন্ড সলিটায়ার রিং-এর কাটিং ও ফিনিশ এককথায় অসাধারণ। আঙুলে পরলে একদম নিখুঁত দেখায় এবং সাইজ অ্যাডজাস্টেবল হওয়াতে কোনো চিন্তা নেই।”',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1udecFUDiCtHFqFPHw1G4e8L9Ex_TnA5uOE_aVNN2ivtZXVN_RflgipRYzRwthvxyCGz1LjamhveifRqlQN9SFDhclOqRU4Un88FibHjmIZ53Ofz7jUU6pyIRAK24Kbi_MJ6t7pWDBMmhJRrDDPa-xsytg3Fs3FFgFolb1rHccFMhWh55har2UAgr68yozFmahE_Qhf36D3kLhTO3a0yaZOxNDwcCh3ojJzvVFjY-1MotKQlwRTQ',
    productName: 'রয়্যাল সলিটায়ার ডায়মন্ড রিং',
    reviewDate: '২৮ সেপ্টেম্বর, ২০২৫',
    helpfulCount: 15
  },
  {
    id: 'rev-5',
    author: 'সামিয়া হক',
    location: 'সিলেট সদর, সিলেট',
    verified: true,
    rating: 5,
    quote: '“ময়ূরকণ্ঠী ঐতিহ্যবাহী সীতাহারটি হাতে পাওয়ার পর আমি স্তব্ধ হয়ে গেছি। ছবির চেয়ে বাস্তবে বহুগুণ সুন্দর! কুরিয়ারে খুব সুরক্ষিতভাবে পাঠানো হয়েছিল।”',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-c7w10tF9Yc2PNveLfZ5KcB3QMywZi5Yq7Fxz1kOlvJG20eeEoov5L0SZpt1k7MkExAJN3xNUprBzYFtogLvMBEfEyGeVcMHuGwqm4IEWU6s2gC0jj8JzSKG3pmlZTS4q66aYae9odrPp-Y4QEZFiFOWwXjsBcCdEQwASwYppJbm2FztxxMh-AUQ4C73H5TeuvBEf8cWXSXIMaWFrNUr0ZgiCTOurXBMJRKzCW_q29YeDHf-NPdo',
    productName: 'ময়ূরকণ্ঠী ঐতিহ্যবাহী সীতাহার',
    reviewDate: '২০ সেপ্টেম্বর, ২০২৫',
    helpfulCount: 28
  }
];

export const MOCK_ORDERS: Record<string, import('../types/jewelry').Order> = {
  'RO-2025-104': {
    orderId: 'RO-2025-104',
    customerName: 'সাদিয়া আফরিন',
    phone: '০১৭৮৮-১২৩৪৫৬',
    address: 'হাউজ #৪২, রোড #১১, সেক্টর #৪, উত্তরা',
    city: 'ঢাকা',
    productTitle: 'রাজকীয় কুন্দন চোকার ও কানের দুল সেট',
    productSku: 'RUPU-NK-104',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCjapzX6ovUO5B128ubfKqGBFN9-RZiBuGDv5PG_B5yJaT0Udgvz1zeMcUN8L8fiV6wMrwnUPcK9ND2y251stzARjeuhm84Jelc3DJystTe6-ap-sBkoY2KiDbBMVyoX2jsNbaRzB9YtYDMtVbo6c1-YpM1pPB_2ZAddjnpdacfo3d3RciAB4iFQDpi2TWFv-taBKsKhtl9uKD95ilWUQrjy5dHzHwjtfiuYIkPeiyXQn4nSwd00k',
    productPrice: 2450,
    deliveryFee: 60,
    totalAmount: 2510,
    paymentMethod: 'ক্যাশ অন ডেলিভারি (প্যাকেট খুলে চেক করার সুবিধা)',
    estimatedDelivery: 'আগামীকাল বিকাল ৫:০০ টার মধ্যে',
    courierPartner: 'Steadfast Premium Express',
    trackingNumber: 'ST-BD-89214',
    currentStatus: 'কুরিয়ার ডেলিভারি রাইডারের কাছে হস্তান্তর করা হয়েছে',
    statusCode: 'in_transit',
    timeline: [
      {
        id: 'stage-1',
        title: 'অর্ডার প্রাপ্তি ও ভেরিফিকেশন',
        description: 'অর্ডার কনফার্ম করা হয়েছে এবং ক্যাটালগ কোড RUPU-NK-104 লক করা হয়েছে।',
        timestamp: '১২ অক্টোবর ২০২৫, সকাল ১১:৩০',
        completed: true,
        current: false
      },
      {
        id: 'stage-2',
        title: 'কারিগরি প্রস্তুতি ও ২৩ ক্যারেট গোল্ড পলিশ',
        description: 'মাস্টার কারিগর দ্বারা রত্ন পাথর সেটিং এবং গোল্ড পলিশ সম্পন্ন।',
        timestamp: '১২ অক্টোবর ২০২৫, বিকাল ৩:৪৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-3',
        title: 'কোয়ালিটি অডিট ও প্রিমিয়াম ভেলভেট প্যাকিং',
        description: 'বিশুদ্ধতা যাচাই সার্টিফিকেট সহ লাক্সারি জুয়েলারি বক্সে সিল করা হয়েছে।',
        timestamp: '১৩ অক্টোবর ২০২৫, সকাল ১০:১৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-4',
        title: 'কুরিয়ার ট্রানজিট ও ডেলিভারির পথে',
        description: 'পার্সেলটি উত্তরা হাবের ডেলিভারি রাইডারের ব্যাগে রয়েছে।',
        timestamp: '১৩ অক্টোবর ২০২৫, দুপুর ২:০০',
        completed: false,
        current: true
      },
      {
        id: 'stage-5',
        title: 'ডেলিভারি সম্পন্ন ও ক্যাশ অন ডেলিভারি',
        description: 'গ্রাহক পণ্য চেক করে মূল্য পরিশোধ করবেন।',
        timestamp: 'প্রত্যাশিত: ১৪ অক্টোবর ২০২৫',
        completed: false,
        current: false
      }
    ]
  },
  'RO-2025-209': {
    orderId: 'RO-2025-209',
    customerName: 'নাজমুন নাহার',
    phone: '০১৮১২-৯৮৭৬৫৪',
    address: 'জিইসি মোড়, নাসিরাবাদ',
    city: 'চট্টগ্রাম',
    productTitle: 'ময়ূরপঙ্খী ঝুমকা জোড়া',
    productSku: 'RUPU-ER-209',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLCDXRHmiPalB4G4ZBJFOcAAubzh7wnCiTGHDL76-RBqNN_iVR_TMrKZ19IvTvC_AeK2bA6A2sjLxlLileCPp8KDcey4Z27knaEp7IGTw8wT3b_F8sDacFwgZaiJh57a9o3SNzUPPqwQ6-Lrd3SRQBZzoWlZqZiAvndOoCSg706lvSpkFtQ6oGpYtrbfhoYfTy5bUg1mxKEjobNWk5VQcljYoRQVLqzxN6TDUu2gTBOM4bHWZdFc',
    productPrice: 850,
    deliveryFee: 120,
    totalAmount: 970,
    paymentMethod: 'ক্যাশ অন ডেলিভারি',
    estimatedDelivery: '২ কার্যদিবসের মধ্যে',
    courierPartner: 'Pathao Courier VIP',
    trackingNumber: 'PT-CTG-44120',
    currentStatus: 'মাস্টার কারিগরের ওয়ার্কশপে সূক্ষ্ম পলিশিং চলছে',
    statusCode: 'crafting',
    timeline: [
      {
        id: 'stage-1',
        title: 'অর্ডার প্রাপ্তি ও ভেরিফিকেশন',
        description: 'WhatsApp-এ গ্রাহকের সাথে কথা বলে ঠিকানা যাচাই সম্পন্ন হয়েছে।',
        timestamp: '১৩ অক্টোবর ২০২৫, দুপুর ১২:০০',
        completed: true,
        current: false
      },
      {
        id: 'stage-2',
        title: 'কারিগরি প্রস্তুতি ও পলিশিং',
        description: 'ময়ূর মোটিফের খাঁটি ফিনিশিং ও পলিশ করা হচ্ছে।',
        timestamp: '১৩ অক্টোবর ২০২৫, বিকাল ৪:০০',
        completed: false,
        current: true
      },
      {
        id: 'stage-3',
        title: 'কোয়ালিটি অডিট ও প্যাকিং',
        description: 'অপেক্ষমাণ',
        timestamp: 'প্রত্যাশিত: ১৪ অক্টোবর ২০২৫',
        completed: false,
        current: false
      },
      {
        id: 'stage-4',
        title: 'কুরিয়ার ট্রানজিট',
        description: 'অপেক্ষমাণ',
        timestamp: 'প্রত্যাশিত: ১৫ অক্টোবর ২০২৫',
        completed: false,
        current: false
      },
      {
        id: 'stage-5',
        title: 'ডেলিভারি সম্পন্ন',
        description: 'অপেক্ষমাণ',
        timestamp: 'প্রত্যাশিত: ১৬ অক্টোবর ২০২৫',
        completed: false,
        current: false
      }
    ]
  },
  'RO-2025-402': {
    orderId: 'RO-2025-402',
    customerName: 'রুকসানা বেগম',
    phone: '০১৭৫২-৬৬৭৭৮৮',
    address: 'ধানমন্ডি লেক সার্কাস, রোড ৫',
    city: 'ঢাকা',
    productTitle: 'গোলাপ নকশি স্বর্ণবালা জোড়া',
    productSku: 'RUPU-BL-402',
    productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkEWiBxlLhn9VEwLCduOUAY1lu6l6qn_RUjEWJf_fFVYRO29MPYzJUaaQplWD107zll7DBncQ4bjEVj4R_x0ZQ3rpPfbdv_gFLbMa10IxhwLvFoR4mDJeMPr77xjliwtpzxY2nbTMtZtlc2vdYEbIqUdeu9sAlsMXOLJABnfnNAnQ7I0WYntdds1CEwGKo-AX8I--iNGf6iXoWn4qL2tVhXSbo6VattDlQ-T2bImTbtsVdfco4QXk',
    productPrice: 2450,
    deliveryFee: 60,
    totalAmount: 2510,
    paymentMethod: 'ক্যাশ অন ডেলিভারি (পরিশোধিত)',
    estimatedDelivery: 'ডেলিভারি সম্পন্ন',
    courierPartner: 'রূপু এক্সপ্রেস হোম ডেলিভারি',
    trackingNumber: 'RO-EXP-11029',
    currentStatus: 'গ্রাহক পণ্য হাতে পেয়ে চেক করে বুঝে নিয়েছেন',
    statusCode: 'delivered',
    timeline: [
      {
        id: 'stage-1',
        title: 'অর্ডার প্রাপ্তি ও ভেরিফিকেশন',
        description: 'অর্ডার নথিভুক্ত করা হয়েছে।',
        timestamp: '১০ অক্টোবর ২০২৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-2',
        title: 'কারিগরি প্রস্তুতি ও পলিশিং',
        description: '২২ ক্যারেট খাঁটি গোলাপ নকশা পলিশ সম্পন্ন।',
        timestamp: '১০ অক্টোবর ২০২৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-3',
        title: 'কোয়ালিটি অডিট ও প্যাকিং',
        description: 'ভেলভেট জুয়েলারি বক্সে প্রস্তুতকৃত।',
        timestamp: '১১ অক্টোবর ২০২৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-4',
        title: 'কুরিয়ার ট্রানজিট',
        description: 'হোম ডেলিভারির জন্য রওয়ানা হয়েছে।',
        timestamp: '১১ অক্টোবর ২০২৫',
        completed: true,
        current: false
      },
      {
        id: 'stage-5',
        title: 'ডেলিভারি সম্পন্ন',
        description: 'গ্রাহক স্বহস্তে পণ্য চেক করে ক্যাশ পরিশোধ করেছেন।',
        timestamp: '১২ অক্টোবর ২০২৫, বিকাল ৩:৩০',
        completed: true,
        current: false
      }
    ]
  }
};

export const WHATSAPP_NUMBER = '8801700000000';
export const WHATSAPP_DISPLAY = '+৮৮০ ১৭০০-০০০০০০';

export function generateWhatsAppOrderUrl(product: Product): string {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://rupuornaments.com';
  const productUrl = `${currentOrigin}/#product-${product.id}`;
  const message = `আসসালামু আলাইকুম। আমি আপনাদের এই গহনাটি অর্ডার করতে চাই।
পণ্যের নাম: ${product.title}
পণ্যের দাম: ৳${product.price.toLocaleString('bn-BD')}
কোড / SKU: ${product.sku}
পণ্যের লিংক: ${productUrl}
দয়া করে পণ্যটি সম্পর্কে বিস্তারিত জানাবেন এবং অর্ডার করার নিয়ম জানাবেন। ধন্যবাদ।`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppInquiryUrl(customNote?: string): string {
  const message = customNote || 'Hello Rupu Ornaments, I would like to inquire about your royal heritage jewelry collections.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppOrderTrackingUrl(orderId: string): string {
  const message = `আসসালামু আলাইকুম। আমার অর্ডার আইডি: ${orderId} এর বর্তমান ডেলিভারি স্ট্যাটাস সম্পর্কে জানতে চাচ্ছি।`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

