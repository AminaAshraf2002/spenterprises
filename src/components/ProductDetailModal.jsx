import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBoxOpen, faAward, faClock, faMapMarkerAlt, faPaperPlane, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './ProductDetailModal.css';

export default function ProductDetailModal({ product, onClose, onInquireProduct }) {
  if (!product) return null;

  return (
    <div
      className="product-modal__overlay"
      onClick={onClose}
    >
      <div
        className="product-modal__card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="product-modal__close"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Left: Product Image */}
        <div className="product-modal__image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="product-modal__image"
          />
          <div className="product-modal__image-overlay" />
          <div className="product-modal__image-info">
            <div className="product-modal__tags">
              {product.tags?.map((tag, idx) => (
                <span key={idx} className="product-modal__tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="product-modal__origin">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="product-modal__origin-icon" />
              <span>Origin: {product.origin}</span>
            </div>
          </div>
        </div>

        {/* Right: Specifications */}
        <div className="product-modal__details">
          <div className="product-modal__category">
            {product.category}
          </div>

          <h3 className="product-modal__name">
            {product.name}
          </h3>

          <p className="product-modal__description">
            {product.detailedDescription || product.description}
          </p>

          {/* Export Spec Table */}
          <div className="product-modal__specs">
            <div className="product-modal__spec-row">
              <FontAwesomeIcon icon={faBoxOpen} className="product-modal__spec-icon product-modal__spec-icon--green" />
              <div>
                <div className="product-modal__spec-label">Minimum Order Quantity (MOQ)</div>
                <div className="product-modal__spec-value">{product.moq}</div>
              </div>
            </div>

            <div className="product-modal__spec-row">
              <FontAwesomeIcon icon={faAward} className="product-modal__spec-icon product-modal__spec-icon--amber" />
              <div>
                <div className="product-modal__spec-label">Export Packaging Spec</div>
                <div className="product-modal__spec-text">{product.packaging}</div>
              </div>
            </div>

            <div className="product-modal__spec-row">
              <FontAwesomeIcon icon={faClock} className="product-modal__spec-icon product-modal__spec-icon--green" />
              <div>
                <div className="product-modal__spec-label">Shelf Life / Transit Life</div>
                <div className="product-modal__spec-text">{product.shelfLife}</div>
              </div>
            </div>
          </div>

          <div className="product-modal__notice">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>FOB/CIF pricing and custom container load allocations provided upon quotation request.</span>
          </div>

          {/* Action */}
          <button
            onClick={() => {
              onClose();
              onInquireProduct(product.name);
            }}
            className="btn btn-primary product-modal__cta"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="product-modal__cta-icon" />
            <span>Inquire For {product.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
