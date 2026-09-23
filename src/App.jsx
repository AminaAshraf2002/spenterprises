import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageHero from './components/PageHero';
import AboutTeaser from './components/AboutTeaser';
import FeaturedProducts from './components/FeaturedProducts';
import ImportExport from './components/ImportExport';
import LanSpiceStore from './components/LanSpiceStore';
import ProductsSection from './components/ProductsSection';
import ProductDetailModal from './components/ProductDetailModal';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ALL_PRODUCTS, FEATURED_PRODUCTS } from './data/contentData';
import { faLeaf, faShoppingBag, faCamera, faAward, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import lanlogoPng from './assets/lanlogo.png';
import aboutBannerImg from './assets/about.png';
import productsBannerImg from './assets/veg.png';
import lanspiceBannerImg from './assets/oils.png';
import galleryBannerImg from './assets/gallery.jpg';
import contactBannerImg from './assets/hero.png';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [catalogCategory, setCatalogCategory] = useState('All');
  const [inquiryProduct, setInquiryProduct] = useState('');

  // Handle URL hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'products', 'lanspice', 'gallery', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
  }, []);

  // Refresh AOS when page changes
  useEffect(() => {
    setTimeout(() => AOS.refresh(), 300);
  }, [currentPage]);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId) => {
    const prod = ALL_PRODUCTS.find((p) => p.id === productId) || FEATURED_PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSelectedProductModal(prod);
    }
  };

  const handleSelectCategoryFromHome = (categoryName) => {
    setCatalogCategory(categoryName);
    handleNavigate('products');
  };

  const handleInquireProduct = (productName) => {
    setInquiryProduct(productName);
    handleNavigate('contact');
  };

  return (
    <div className="app-wrapper">
      {/* Sticky Refined Organic Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 5-Page Content Routing Switcher */}
      <main className="page-fade" key={currentPage}>
        {/* PAGE 1: HOME */}
        {currentPage === 'home' && (
          <div>
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onInquire={() => handleNavigate('contact')}
            />

            <AboutTeaser
              onLearnMore={() => handleNavigate('about')}
            />

            <FeaturedProducts
              onSelectProduct={handleSelectProduct}
              onSeeAllProducts={() => {
                setCatalogCategory('All');
                handleNavigate('products');
              }}
            />

            <ImportExport
              onInquire={() => handleNavigate('contact')}
              onSelectCategory={handleSelectCategoryFromHome}
            />

            {/* LanSpice eCommerce Products Showcase (Home: 3 items + View Store button) */}
            <LanSpiceStore
              isHomePage={true}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* PAGE 2: PRODUCTS (14 Canonical Items with Dedicated Hero) */}
        {currentPage === 'products' && (
          <div>
            <PageHero
              badge="Export Catalog (14 Items)"
              title="Our Farm Products"
              subtitle="Pure, unadulterated agro-commodities cultivated across fertile Karnataka fields and processed under export-grade hygienic protocols."
              image={productsBannerImg}
              icon={faLeaf}
            />
            <ProductsSection
              selectedCategory={catalogCategory}
              onCategoryChange={setCatalogCategory}
              onSelectProduct={handleSelectProduct}
              onInquireProduct={handleInquireProduct}
            />
          </div>
        )}

        {/* PAGE 3: LANSPICE STORE (eCommerce Products with Dedicated Hero) */}
        {currentPage === 'lanspice' && (
          <div>
            <PageHero
              logo={lanlogoPng}
              badge="Official Consumer Label • LanSpice.com"
              title="LanSpice™ Kerala Spices & Pure Oils"
              subtitle="Direct retail and consumer-packaged spices, cold-pressed oils, and essential extracts sourced straight from pristine Kerala plantations."
              image={lanspiceBannerImg}
              icon={faShoppingBag}
            />
            <LanSpiceStore
              isHomePage={false}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* PAGE 4: GALLERY (Dedicated Hero) */}
        {currentPage === 'gallery' && (
          <div>
            <PageHero
              badge="Visual Tour"
              title="Our Farm & Field Gallery"
              subtitle="A transparent visual journey through our cultivation, tilling, irrigation systems, and coconut harvest operations in Periyapatna."
              image={galleryBannerImg}
              icon={faCamera}
            />
            <GallerySection />
          </div>
        )}

        {/* PAGE 5: ABOUT US (Replica Showcase with Dedicated Typography & Arched Imagery) */}
        {currentPage === 'about' && (
          <div>
            <PageHero
              badge="Our Heritage & Roots"
              title="Rooted in Nature, Driven by Taste"
              subtitle="From the fertile soils of Periyapatna, Mysuru, we cultivate, harvest, and process nature's finest spices, cold-pressed coconut oil, and farm produce."
              image={aboutBannerImg}
              icon={faAward}
            />
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 6: CONTACT (Dedicated Hero) */}
        {currentPage === 'contact' && (
          <div>
            <PageHero
              badge="Connect & Trade"
              title="Send Us a Message"
              subtitle="Get in touch with our operations center on B M Road, Mysuru, for export quotations, bulk orders, container allocations, or sample requests."
              image={contactBannerImg}
              icon={faEnvelopeOpenText}
            />
            <ContactSection
              selectedProductForInquiry={inquiryProduct}
              onClearSelectedProduct={() => setInquiryProduct('')}
            />
          </div>
        )}
      </main>

      {/* Unified Green Footer (across all pages) */}
      <Footer
        onNavigate={handleNavigate}
        onInquire={() => handleNavigate('contact')}
      />

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <ProductDetailModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          onInquireProduct={handleInquireProduct}
        />
      )}
    </div>
  );
}
