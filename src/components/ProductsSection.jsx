import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBoxOpen, faEye, faPaperPlane, faSeedling, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ALL_PRODUCTS } from '../data/contentData';
import './ProductsSection.css';

export default function ProductsSection({ onSelectProduct, onInquireProduct, selectedCategory, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Oils', 'Fruits', 'Vegetables', 'Grains', 'Poultry'];

  const filteredProducts = ALL_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section products-section">
      <div className="container">

        {/* Filter & Search Bar */}
        <div className="products-section__filter-bar" data-aos="fade-up">
          {/* Category Tabs */}
          <div className="products-section__tabs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All'
                ? ALL_PRODUCTS.length
                : ALL_PRODUCTS.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`products-section__tab ${isActive ? 'products-section__tab--active' : 'products-section__tab--inactive'}`}
                >
                  <span>{cat}</span>
                  <span className={isActive ? 'products-section__tab-count--active' : 'products-section__tab-count--inactive'}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="products-section__search-wrap">
            <FontAwesomeIcon
              icon={faSearch}
              className="products-section__search-icon"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="products-section__search-input"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="products-section__empty">
            <p className="products-section__empty-text">
              No products found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="products-section__grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="card-white products-section__card"
                data-aos="fade-up"
                data-aos-delay={(prod.id % 4) * 100}
              >
                {/* Image */}
                <div
                  onClick={() => onSelectProduct(prod.id)}
                  className="products-section__card-image-wrap"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="products-section__card-image"
                  />

                  {/* Category Pill */}
                  <div className="products-section__card-category-pill">
                    {prod.category}
                  </div>

                  <div className="products-section__card-specs-badge">
                    <FontAwesomeIcon icon={faEye} className="products-section__card-specs-icon" />
                    <span>Specs</span>
                  </div>
                </div>

                {/* Content */}
                <div className="products-section__card-body">
                  <h3
                    onClick={() => onSelectProduct(prod.id)}
                    className="products-section__card-name"
                  >
                    {prod.name}
                  </h3>

                  <p className="products-section__card-desc">
                    {prod.description}
                  </p>

                  <div className="products-section__card-moq">
                    <FontAwesomeIcon icon={faBoxOpen} className="products-section__card-moq-icon" />
                    <span>MOQ: <strong style={{ color: 'var(--color-text-title)' }}>{prod.moq}</strong></span>
                  </div>

                  <div className="products-section__card-actions">
                    <button
                      onClick={() => onSelectProduct(prod.id)}
                      className="products-section__card-btn-specs"
                    >
                      Export Specs
                    </button>

                    <button
                      onClick={() => onInquireProduct(prod.name)}
                      className="products-section__card-btn-quote"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} className="products-section__card-btn-quote-icon" />
                      <span>Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
