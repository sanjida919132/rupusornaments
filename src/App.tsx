import React, { useState, useEffect } from 'react';
import { Product, ActivePage, CategoryKey, CustomerReview } from './types/jewelry';
import { INITIAL_PRODUCTS, REVIEWS } from './data/mockProducts';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeView } from './components/HomeView';
import { ProductDetailView } from './components/ProductDetailView';
import { AdminLoginView } from './components/AdminLoginView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { CatalogView } from './components/CatalogView';
import { ContactView } from './components/ContactView';
import { OrderTrackingView } from './components/OrderTrackingView';
import { CustomerReviewsView } from './components/CustomerReviewsView';
import { Toast } from './components/Toast';

export default function App() {
  // Products list in state (stored in localStorage if modified)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('rupu_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((p: Product) => 
            p.id === 'mayurpankhi-jhumka-209' && p.price === 750 ? { ...p, price: 850 } : p
          );
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Customer reviews in state (stored in localStorage if user adds a review)
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    try {
      const saved = localStorage.getItem('rupu_reviews');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return REVIEWS;
  });

  // Admin login status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('rupu_admin_auth') === 'true';
    } catch (e) {
      return false;
    }
  });

  // Active page routing
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastIcon, setToastIcon] = useState<string>('check_circle');

  // Save products to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem('rupu_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  // Save reviews to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem('rupu_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  // Handle URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('product-')) {
      const prodId = hash.replace('product-', '');
      const found = products.find(p => p.id === prodId || p.sku.toLowerCase() === prodId.toLowerCase());
      if (found) {
        setSelectedProduct(found);
        setActivePage('product-detail');
      }
    } else if (hash === 'admin' || hash === 'admin-portal') {
      if (isAdminLoggedIn) {
        setActivePage('admin-portal');
      } else {
        setActivePage('admin-login');
      }
    } else if (hash === 'order-tracking') {
      setActivePage('order-tracking');
    } else if (hash === 'customer-reviews' || hash === 'reviews') {
      setActivePage('customer-reviews');
    } else if (['earrings', 'necklace', 'rings', 'bracelets-and-bangles', 'all-products'].includes(hash)) {
      setSelectedCategory(hash as CategoryKey);
      setActivePage('all-products');
    }
  }, []);

  const showToast = (message: string, icon = 'check_circle') => {
    setToastMessage(message);
    setToastIcon(icon);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (page: ActivePage, cat?: CategoryKey) => {
    if (cat) {
      setSelectedCategory(cat);
      setActivePage('all-products');
    } else {
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddProduct = (newProd: Product) => {
    setProducts(prev => [newProd, ...prev]);
  };

  const handleUpdateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    if (selectedProduct.id === updated.id) {
      setSelectedProduct(updated);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleAddReview = (newReview: CustomerReview) => {
    setReviews(prev => [newReview, ...prev]);
    showToast('আপনার মূল্যবান পর্যালোচনা সফলভাবে প্রকাশিত হয়েছে!', 'rate_review');
  };

  const handleAdminLogin = (email: string) => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('rupu_admin_auth', 'true');
    setActivePage('admin-portal');
    showToast(`স্বাগতম! (${email})`, 'verified_user');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('rupu_admin_auth');
    setActivePage('home');
    showToast('অ্যাডমিন সেশন সমাপ্ত হয়েছে', 'logout');
  };

  // Render view
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1b1c1c] antialiased">
      {/* Toast Notification Container */}
      <Toast 
        message={toastMessage} 
        icon={toastIcon} 
        onClose={() => setToastMessage(null)} 
      />

      {/* Screen 1 & 2: Public Store Header */}
      {activePage !== 'admin-login' && activePage !== 'admin-portal' && (
        <Header 
          activePage={activePage} 
          onNavigate={handleNavigate} 
          isAdminLoggedIn={isAdminLoggedIn} 
        />
      )}

      {/* Main Routed Content */}
      <main className={`flex-1 ${activePage !== 'admin-login' && activePage !== 'admin-portal' ? 'pt-20 md:pt-28' : ''}`}>
        {activePage === 'home' && (
          <HomeView
            products={products}
            onSelectProduct={handleSelectProduct}
            onNavigateToCategory={(cat) => handleNavigate('all-products', cat)}
            onNavigateToContact={() => handleNavigate('contact')}
            onNavigateToAllProducts={() => handleNavigate('all-products', 'all')}
            onNavigateToReviews={() => handleNavigate('customer-reviews')}
            onNavigateToOrderTracking={() => handleNavigate('order-tracking')}
          />
        )}

        {activePage === 'all-products' && (
          <CatalogView
            products={products}
            initialCategory={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductDetailView
            product={selectedProduct}
            allProducts={products}
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {activePage === 'order-tracking' && (
          <OrderTrackingView
            onNavigateHome={() => handleNavigate('home')}
            onShowToast={showToast}
          />
        )}

        {activePage === 'customer-reviews' && (
          <CustomerReviewsView
            reviews={reviews}
            products={products}
            onAddReview={handleAddReview}
            onNavigateHome={() => handleNavigate('home')}
            onShowToast={showToast}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            onShowToast={showToast}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {activePage === 'admin-login' && (
          <AdminLoginView
            onLoginSuccess={handleAdminLogin}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {activePage === 'admin-portal' && (
          <AdminDashboardView
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onNavigateHome={() => handleNavigate('home')}
            onLogout={handleAdminLogout}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Public Store Footer & Floating WhatsApp Widget */}
      {activePage !== 'admin-login' && activePage !== 'admin-portal' && (
        <>
          <Footer onNavigate={handleNavigate} />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}
