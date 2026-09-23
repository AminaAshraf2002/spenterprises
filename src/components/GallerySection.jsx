import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSearchPlus, faTimes, faChevronLeft, faChevronRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { GALLERY_ITEMS } from '../data/contentData';
import './GallerySection.css';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Harvest', 'Farming Process', 'Land & Farm'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIdx = filteredItems.findIndex((p) => p.id === activePhoto.id);
    const nextIdx = (currentIdx + 1) % filteredItems.length;
    setActivePhoto(filteredItems[nextIdx]);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIdx = filteredItems.findIndex((p) => p.id === activePhoto.id);
    const prevIdx = (currentIdx - 1 + filteredItems.length) % filteredItems.length;
    setActivePhoto(filteredItems[prevIdx]);
  };

  return (
    <section className="section gallery-section">
      <div className="container">

        {/* Filter Buttons */}
        <div className="gallery-section__filters" data-aos="fade-up">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`gallery-section__filter-btn ${isActive ? 'gallery-section__filter-btn--active' : 'gallery-section__filter-btn--inactive'}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-section__grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="card-white gallery-section__card"
              data-aos="fade-up"
              data-aos-delay={(idx % 6) * 80}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-section__card-image"
              />

              <div className="gallery-section__card-overlay">
                <div className="gallery-section__card-footer">
                  <div>
                    <span className="gallery-section__card-category">
                      {item.category}
                    </span>
                    <h3 className="gallery-section__card-title">
                      {item.title}
                    </h3>
                  </div>

                  <div className="gallery-section__zoom-icon">
                    <FontAwesomeIcon icon={faSearchPlus} className="gallery-section__zoom-icon-inner" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Note */}
        <div className="gallery-section__note">
          <FontAwesomeIcon icon={faInfoCircle} className="gallery-section__note-icon" />
          <div>
            <strong className="gallery-section__note-strong">Client Media Note:</strong> Additional photography showcasing mechanized packaging lines and port reefer container loading at Cochin port will be incorporated upon dispatch.
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="gallery-lightbox"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="gallery-lightbox__close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={handleNextPhoto}
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div
            className="gallery-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-lightbox__image-wrap">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="gallery-lightbox__image"
              />
            </div>
            <div className="gallery-lightbox__info">
              <span className="gallery-lightbox__category">
                {activePhoto.category}
              </span>
              <h3 className="gallery-lightbox__title">
                {activePhoto.title}
              </h3>
              <p className="gallery-lightbox__caption">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
