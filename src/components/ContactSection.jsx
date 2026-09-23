import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane, faCheckCircle, faCopy, faClock, faComments } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO, ALL_PRODUCTS } from '../data/contentData';
import './ContactSection.css';

export default function ContactSection({ selectedProductForInquiry, onClearSelectedProduct }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    destinationCountry: '',
    productInterest: selectedProductForInquiry || 'Coconut Oil',
    orderVolume: '',
    inquiryType: 'Export Bulk (FCL / LCL)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuoteId, setSubmittedQuoteId] = useState(null);
  const [copiedQuote, setCopiedQuote] = useState(false);

  useEffect(() => {
    if (selectedProductForInquiry) {
      setFormData((prev) => ({ ...prev, productInterest: selectedProductForInquiry }));
    }
  }, [selectedProductForInquiry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const quoteId = `SPE-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedQuoteId(quoteId);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopyQuote = () => {
    if (!submittedQuoteId) return;
    navigator.clipboard.writeText(submittedQuoteId);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello SP Enterprises, I submitted an export inquiry (Ref: ${submittedQuoteId}).\n` +
      `Product: ${formData.productInterest}\n` +
      `Quantity: ${formData.orderVolume || 'Standard MOQ'}\n` +
      `Destination: ${formData.destinationCountry || 'International'}\n` +
      `Name: ${formData.fullName} (${formData.company || 'Direct Buyer'})`
    );
    window.open(`https://wa.me/917090709042?text=${text}`, '_blank');
  };

  return (
    <section className="section contact-section">
      <div className="container">

        <div className="contact-section__grid">
          {/* Left Column: Direct Coordinates */}
          <div data-aos="fade-right">
            <h3 className="contact-section__left-title">
              Direct Farm & Logistics Office
            </h3>
            <p className="contact-section__left-desc">
              Our operations center is located on B M Road, Mysuru District, facilitating direct transit to Cochin, Mangalore, and Chennai container terminals.
            </p>

            <div className="contact-section__info-cards">
              {/* Address */}
              <div className="card-white contact-section__info-card">
                <div className="contact-section__info-icon-wrap">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-section__info-icon" />
                </div>
                <div>
                  <h4 className="contact-section__info-title">Physical Address</h4>
                  <p className="contact-section__info-text">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="card-white contact-section__info-card">
                <div className="contact-section__info-icon-wrap">
                  <FontAwesomeIcon icon={faPhone} className="contact-section__info-icon" />
                </div>
                <div>
                  <h4 className="contact-section__phone-title">Direct Calling Lines</h4>
                  <div className="contact-section__phones">
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="contact-section__phone-link"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email & WhatsApp */}
              <div className="contact-section__quick-links">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="card-white contact-section__email-card"
                >
                  <div className="contact-section__email-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <div className="contact-section__email-label">Official Email</div>
                    <div className="contact-section__email-value">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-white contact-section__email-card"
                >
                  <div className="contact-section__email-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div>
                    <div className="contact-section__email-label">WhatsApp Direct</div>
                    <div className="contact-section__email-value">{COMPANY_INFO.whatsapp}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* SLA Notice */}
            <div className="contact-section__sla">
              <FontAwesomeIcon icon={faClock} className="contact-section__sla-icon" />
              <div className="contact-section__sla-text">
                <strong>Rapid Quotation SLA:</strong> Export quotation price sheets and packing logistics are returned within <strong>12-24 business hours</strong>.
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="card-white contact-section__form-card" data-aos="fade-left">
            {submittedQuoteId ? (
              <div className="contact-section__success">
                <div className="contact-section__success-icon-wrap">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>

                <h3 className="contact-section__success-title">
                  Inquiry Received!
                </h3>
                <p className="contact-section__success-desc">
                  Thank you, <strong>{formData.fullName}</strong>. Your export specification request has been logged.
                </p>

                <div className="contact-section__quote-box">
                  <div>
                    <div className="contact-section__quote-label">Inquiry Reference ID</div>
                    <div className="contact-section__quote-id">{submittedQuoteId}</div>
                  </div>
                  <button
                    onClick={handleCopyQuote}
                    className={`contact-section__copy-btn ${copiedQuote ? 'contact-section__copy-btn--copied' : 'contact-section__copy-btn--default'}`}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                    <span>{copiedQuote ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <button
                  onClick={handleWhatsAppForward}
                  className="btn btn-primary contact-section__wa-forward"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span>Send Reference to WhatsApp Support</span>
                </button>

                <button
                  onClick={() => {
                    setSubmittedQuoteId(null);
                    if (onClearSelectedProduct) onClearSelectedProduct();
                  }}
                  className="contact-section__reset-link"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-section__form-header">
                  <h3 className="contact-section__form-title">
                    Request Export Quotation
                  </h3>
                  <p className="contact-section__form-subtitle">
                    Fill out your requirements below for wholesale and international orders.
                  </p>
                </div>

                <div className="contact-section__form-row">
                  <div>
                    <label className="contact-section__label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="contact-section__input"
                    />
                  </div>

                  <div>
                    <label className="contact-section__label">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Global Foods LLC"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact-section__input"
                    />
                  </div>
                </div>

                <div className="contact-section__form-row">
                  <div>
                    <label className="contact-section__label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="buyer@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-section__input"
                    />
                  </div>

                  <div>
                    <label className="contact-section__label">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-section__input"
                    />
                  </div>
                </div>

                <div className="contact-section__form-row">
                  <div>
                    <label className="contact-section__label">
                      Product of Interest *
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="contact-section__select"
                    >
                      {ALL_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name} ({prod.category})
                        </option>
                      ))}
                      <option value="LanSpice Kerala Spices">LanSpice Kerala Spices</option>
                      <option value="Essential Oils">Essential Oils</option>
                      <option value="Mixed Container">Mixed Container Load</option>
                    </select>
                  </div>

                  <div>
                    <label className="contact-section__label">
                      Destination Port / Country
                    </label>
                    <input
                      type="text"
                      name="destinationCountry"
                      placeholder="e.g. Jebel Ali / Rotterdam"
                      value={formData.destinationCountry}
                      onChange={handleChange}
                      className="contact-section__input"
                    />
                  </div>
                </div>

                <div className="contact-section__form-group">
                  <label className="contact-section__label">
                    Anticipated Volume / Target Delivery Date
                  </label>
                  <input
                    type="text"
                    name="orderVolume"
                    placeholder="e.g. 1 x 40ft Reefer, or 5 MT air cargo"
                    value={formData.orderVolume}
                    onChange={handleChange}
                    className="contact-section__input"
                  />
                </div>

                <div className="contact-section__form-group contact-section__form-group--last">
                  <label className="contact-section__label">
                    Specifications / Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Packaging preferences, certifications needed, or sample requests..."
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-section__textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary contact-section__submit"
                >
                  {isSubmitting ? (
                    <span>Submitting Quotation Request...</span>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="contact-section__submit-icon" />
                      <span>Submit Export Quotation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
