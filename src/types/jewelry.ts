export type CategoryKey = 
  | 'all'
  | 'earrings'
  | 'necklace'
  | 'rings'
  | 'bracelets-and-bangles'
  | 'sets';

export type CollectionFilter = 'all' | 'new' | 'trending' | 'bridal';

export interface ProductSpecs {
  material: string;
  gemstone: string;
  weight: string;
  setIncludes: string;
  size: string;
}

export interface Product {
  id: string;
  sku: string;
  title: string;
  englishTitle?: string;
  category: CategoryKey;
  categoryName: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  inStock: boolean;
  stockCount?: number;
  badge?: string;
  finishing?: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  tags: CollectionFilter[];
  rating: number;
  reviewCount: number;
  specs: ProductSpecs;
  createdAt: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number;
  quote: string;
  avatar: string;
  productName?: string;
  reviewDate?: string;
  photos?: string[];
  helpfulCount?: number;
}

export interface OrderStage {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
}

export type OrderStatusCode = 'received' | 'crafting' | 'quality_check' | 'in_transit' | 'delivered';

export interface Order {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  productTitle: string;
  productSku: string;
  productImage: string;
  productPrice: number;
  deliveryFee: number;
  totalAmount: number;
  paymentMethod: string;
  estimatedDelivery: string;
  courierPartner: string;
  trackingNumber: string;
  currentStatus: string;
  statusCode: OrderStatusCode;
  timeline: OrderStage[];
}

export interface CategoryCardData {
  id: string;
  title: string;
  subtitle: string;
  designCount: string;
  imageUrl: string;
  categoryKey: CategoryKey;
}

export type ActivePage = 
  | 'home'
  | 'all-products'
  | 'earrings'
  | 'necklace'
  | 'rings'
  | 'bracelets-and-bangles'
  | 'contact'
  | 'product-detail'
  | 'order-tracking'
  | 'customer-reviews'
  | 'admin-login'
  | 'admin-portal';
