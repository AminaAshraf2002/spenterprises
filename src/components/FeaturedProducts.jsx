import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faEye, faArrowRight, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FEATURED_PRODUCTS } from '../data/contentData';
import './FeaturedProducts.css';

export default function FeaturedProducts({ onSelectProduct, onSeeAllProducts }) {
  return (
    <section className="section-alt">
      <div className="container">
        {/* Header */}
        <div className="featured-products__header" data-aos="fade-up">
          <div>
            <div className="eyebrow">
              <FontAwesomeIcon icon={faSeedling} className="featured-products__eyebrow-icon" />
              <span>Signature Collections</span>
            </div>
            <h2 className="section-title featured-products__title">
              Range of Farm Products
            </h2>
            <p className="section-desc">
              Carefully harvested at peak ripeness and processed under rigorous hygiene protocols.
            </p>
          </div>

          <button
            onClick={onSeeAllProducts}
            className="btn btn-outline-forest featured-products__see-all"
          >
            <span>All Products (14)</span>
            <FontAwesomeIcon icon={faArrowRight} className="featured-products__see-all-icon" />
          </button>
        </div>

        {/* 3 Featured White Cards */}
        <div className="featured-products__grid">
          {FEATURED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="card-white featured-products__card"
              onClick={() => onSelectProduct(prod.id)}
              data-aos="fade-up"
              data-aos-delay={prod.id * 100}
            >
              {/* Image Container */}
              <div className="featured-products__image-wrap">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="featured-products__image"
                />
                <div className="featured-products__tag">
                  {prod.tag}
                </div>

                <div className="featured-products__moq-badge">
                  <FontAwesomeIcon icon={faBoxOpen} style={{ color: 'var(--color-primary)' }} />
                  <span>MOQ: {prod.moq}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="featured-products__card-body">
                <div className="featured-products__category">
                  {prod.category}
                </div>

                <h3 className="featured-products__name">
                  {prod.title}
                </h3>

                <p className="featured-products__desc">
                  {prod.description}
                </p>

                <div className="featured-products__footer">
                  <span className="featured-products__view-specs">
                    <FontAwesomeIcon icon={faEye} />
                    <span>View Export Specs</span>
                  </span>
                  <div className="featured-products__arrow-circle">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
