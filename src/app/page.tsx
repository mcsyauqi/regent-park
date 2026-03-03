'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────
   Regent Park — Classic Elegant Luxury Residential Estate
   English Estate-Inspired | Forest Green & Gold
   ───────────────────────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Residences', href: '#residences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Master Plan', href: '#masterplan' },
    { label: 'Contact', href: '#contact' },
  ];

  const residences = [
    {
      name: 'The Kensington Villa',
      size: '420 sqm',
      beds: '4+1 Bedrooms',
      feature: 'Private Garden',
      price: 'From IDR 8.5B',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      description:
        'A stately detached villa set within its own landscaped grounds. Grand entrance hall, formal dining room, private study, and a wraparound veranda overlooking the estate gardens. Finished with imported marble and hand-laid herringbone parquet.',
    },
    {
      name: 'The Belgravia Townhouse',
      size: '280 sqm',
      beds: '3+1 Bedrooms',
      feature: 'Rooftop Terrace',
      price: 'From IDR 5.2B',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description:
        'An elegant three-storey townhouse with a private rooftop terrace and double-height living room. Thoughtful proportions, bespoke joinery, and plantation shutters create an atmosphere of refined comfort.',
    },
    {
      name: 'The Windsor Residence',
      size: '180 sqm',
      beds: '2+1 Bedrooms',
      feature: 'Park View',
      price: 'From IDR 3.8B',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      description:
        'A beautifully appointed residence overlooking the central park. Marble-clad bathrooms, a gourmet kitchen, and floor-to-ceiling windows that frame the estate\'s mature trees and manicured lawns.',
    },
  ];

  const amenities = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
        </svg>
      ),
      title: 'The Clubhouse',
      description: 'A grand social hall with library lounge, billiard room, private dining, and members\' bar.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
      title: 'The Central Park',
      description: '5 hectares of landscaped gardens, mature trees, walking paths, and reflective water features.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4M14 12h4M12 6v12" />
        </svg>
      ),
      title: 'Sports Pavilion',
      description: 'Tennis courts, swimming pool, gymnasium, and a dedicated yoga and wellness studio.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Children\'s Garden',
      description: 'A safe, imaginative play area designed in the tradition of English adventure gardens.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
      title: '24/7 Concierge',
      description: 'Dedicated estate management, valet parking, housekeeping, and personal assistant services.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Estate Security',
      description: 'Gated entry with 24-hour security, CCTV surveillance, and smart access control systems.',
    },
  ];

  const lifestyleFeatures = [
    {
      title: 'Community Events',
      description: 'Regular garden parties, seasonal celebrations, and exclusive residents\' gatherings that foster a sense of belonging within the estate.',
    },
    {
      title: 'Culinary Experiences',
      description: 'From weekend farmers\' markets to private chef events at the clubhouse, enjoy a curated culinary programme.',
    },
    {
      title: 'Wellness & Nature',
      description: 'Morning yoga in the park, guided nature walks, and a wellness calendar designed for mind and body.',
    },
    {
      title: 'Arts & Culture',
      description: 'Art exhibitions, live music evenings, and a curated library programme to enrich the estate\'s cultural life.',
    },
  ];

  return (
    <main style={{ opacity: 1 }}>
      {/* ═══════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'rgba(250, 248, 245, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(184, 148, 95, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex-shrink-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="text-lg md:text-xl tracking-[0.15em]"
                style={{ color: '#2D4A3E', fontWeight: 600 }}
              >
                REGENT PARK
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-xs tracking-[0.15em] uppercase"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    color: '#2D4A3E',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary ml-4"
                style={{ padding: '10px 24px', fontSize: '11px' }}
              >
                Enquire
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#2D4A3E',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#2D4A3E',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#2D4A3E',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="lg:hidden overflow-hidden transition-all duration-300"
            style={{
              maxHeight: mobileMenuOpen ? '400px' : '0',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <div
              className="py-6 flex flex-col gap-4"
              style={{ borderTop: '1px solid rgba(184, 148, 95, 0.2)' }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase py-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    color: '#2D4A3E',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center justify-center gold-corners"
        style={{ height: '100vh', minHeight: '600px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Regent Park Estate aerial view"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(30, 40, 35, 0.5)' }}
        />

        {/* Additional corner accents */}
        <div className="absolute inset-0 gold-corners-inner pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="text-xs md:text-sm tracking-[0.4em] uppercase mb-8"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              color: '#B8945F',
            }}
          >
            An English Estate-Inspired Community
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FAF8F5',
              fontWeight: 700,
              letterSpacing: '0.03em',
              lineHeight: 1.1,
            }}
          >
            Regent Park
          </h1>

          <p
            className="text-xl md:text-2xl lg:text-3xl mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#B8945F',
              fontWeight: 400,
              letterSpacing: '0.2em',
            }}
          >
            RESIDENTIAL ESTATE
          </p>

          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: '#B8945F', opacity: 0.5 }}
          />

          <p
            className="text-base md:text-lg mb-12 max-w-xl mx-auto"
            style={{
              fontFamily: "'Lora', serif",
              color: '#FAF8F5',
              opacity: 0.85,
              lineHeight: 1.9,
            }}
          >
            Where timeless elegance meets modern living. A prestigious residential estate
            nestled within lush, landscaped parklands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Book a Private Viewing
            </a>
            <a href="#about" className="btn-outline-light">
              Discover the Estate
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#B8945F',
              fontWeight: 300,
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-8 scroll-indicator"
            style={{ backgroundColor: '#B8945F' }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT THE ESTATE
          ═══════════════════════════════════════════ */}
      <section
        id="about"
        className="py-20 lg:py-32"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label">The Estate</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl gold-underline">
              A Legacy of Refined Living
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <p
                className="text-base md:text-lg mb-6"
                style={{
                  fontFamily: "'Lora', serif",
                  color: '#5A5A55',
                  lineHeight: 2,
                }}
              >
                Set across 15 hectares of beautifully landscaped grounds, Regent Park
                is a masterfully planned residential estate that draws inspiration
                from the great English country parks. Every detail &mdash; from the
                tree-lined avenues to the Georgian-influenced architecture &mdash;
                has been considered to create a place of enduring beauty and prestige.
              </p>
              <p
                className="text-base md:text-lg mb-8"
                style={{
                  fontFamily: "'Lora', serif",
                  color: '#5A5A55',
                  lineHeight: 2,
                }}
              >
                Here, manicured lawns give way to woodland walks, children play safely
                on village greens, and neighbours gather at the Clubhouse for afternoon
                tea. It is a community built on the values of quality, privacy, and
                a deep appreciation for the finer things in life.
              </p>

              {/* Key facts */}
              <div
                className="grid grid-cols-3 gap-6 pt-8"
                style={{ borderTop: '1px solid rgba(184, 148, 95, 0.2)' }}
              >
                {[
                  { number: '15', label: 'Hectares' },
                  { number: '280', label: 'Residences' },
                  { number: '60%', label: 'Green Space' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-3xl md:text-4xl mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#2D4A3E',
                        fontWeight: 600,
                      }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#B8945F',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Images */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="overflow-hidden col-span-2"
                style={{ border: '1px solid rgba(184, 148, 95, 0.3)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Regent Park estate grounds"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                className="overflow-hidden"
                style={{ border: '1px solid rgba(184, 148, 95, 0.3)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
                  alt="Grand entrance hall"
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                className="overflow-hidden"
                style={{ border: '1px solid rgba(184, 148, 95, 0.3)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
                  alt="Landscaped gardens"
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RESIDENCES
          ═══════════════════════════════════════════ */}
      <section
        id="residences"
        className="py-20 lg:py-32"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label">Our Collection</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl gold-underline">
              The Residences
            </h2>
            <p
              className="mt-8 text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Lora', serif",
                color: '#5A5A55',
                lineHeight: 1.8,
              }}
            >
              Three distinguished residence types, each designed with meticulous attention
              to proportion, light, and the art of gracious living.
            </p>
          </div>

          {/* Residence Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="card-elegant overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(184, 148, 95, 0.25)',
                }}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#2D4A3E',
                      fontWeight: 600,
                    }}
                  >
                    {residence.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[residence.size, residence.beds, residence.feature].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider uppercase px-3 py-1"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#B8945F',
                          border: '1px solid rgba(184, 148, 95, 0.3)',
                          fontWeight: 400,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#5A5A55',
                      lineHeight: 1.8,
                    }}
                  >
                    {residence.description}
                  </p>

                  {/* Price */}
                  <p
                    className="text-sm mb-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#2D4A3E',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {residence.price}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-block text-xs tracking-[0.15em] uppercase nav-link"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8945F',
                      fontWeight: 500,
                    }}
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ESTATE AMENITIES
          ═══════════════════════════════════════════ */}
      <section
        id="amenities"
        className="py-20 lg:py-32"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label">World-Class Facilities</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl gold-underline">
              Estate Amenities
            </h2>
            <p
              className="mt-8 text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Lora', serif",
                color: '#5A5A55',
                lineHeight: 1.8,
              }}
            >
              Every amenity has been thoughtfully designed to enhance your daily life,
              from morning jogs through the park to evening gatherings at the Clubhouse.
            </p>
          </div>

          {/* Amenity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="amenity-card p-8 text-center"
                style={{
                  backgroundColor: '#FAF8F5',
                  border: '1px solid rgba(184, 148, 95, 0.15)',
                }}
              >
                <div
                  className="amenity-icon inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full"
                  style={{
                    border: '1px solid rgba(184, 148, 95, 0.3)',
                    color: '#B8945F',
                  }}
                >
                  {amenity.icon}
                </div>
                <h3
                  className="amenity-title text-lg mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2D4A3E',
                    fontWeight: 600,
                  }}
                >
                  {amenity.title}
                </h3>
                <p
                  className="amenity-text text-sm transition-colors duration-300"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: '#5A5A55',
                    lineHeight: 1.8,
                  }}
                >
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIFESTYLE SECTION
          ═══════════════════════════════════════════ */}
      <section
        id="lifestyle"
        className="py-20 lg:py-32 relative"
        style={{ backgroundColor: '#2D4A3E' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                color: '#B8945F',
              }}
            >
              Life at Regent Park
            </p>
            <h2 className="section-heading-light text-3xl md:text-4xl lg:text-5xl gold-underline">
              A Community Like No Other
            </h2>
            <p
              className="mt-8 text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Lora', serif",
                color: '#FAF8F5',
                opacity: 0.8,
                lineHeight: 1.8,
              }}
            >
              Regent Park is more than a collection of fine homes. It is a living community
              where families thrive, friendships flourish, and every day feels like a retreat.
            </p>
          </div>

          {/* Two-column: image + features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div
              className="overflow-hidden"
              style={{ border: '1px solid rgba(184, 148, 95, 0.3)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                alt="Community gathering at Regent Park"
                className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right: Feature list */}
            <div className="space-y-8">
              {lifestyleFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="pb-8"
                  style={{
                    borderBottom:
                      index < lifestyleFeatures.length - 1
                        ? '1px solid rgba(184, 148, 95, 0.2)'
                        : 'none',
                  }}
                >
                  <h3
                    className="text-lg md:text-xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#B8945F',
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm md:text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#FAF8F5',
                      opacity: 0.8,
                      lineHeight: 1.8,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MASTER PLAN / SITE LAYOUT
          ═══════════════════════════════════════════ */}
      <section
        id="masterplan"
        className="py-20 lg:py-32"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label">Estate Layout</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl gold-underline">
              The Master Plan
            </h2>
            <p
              className="mt-8 text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Lora', serif",
                color: '#5A5A55',
                lineHeight: 1.8,
              }}
            >
              Thoughtfully planned to balance privacy with community, nature with convenience,
              and heritage with contemporary living.
            </p>
          </div>

          {/* Master plan visual */}
          <div
            className="relative overflow-hidden mb-12"
            style={{ border: '1px solid rgba(184, 148, 95, 0.3)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
              alt="Regent Park master plan aerial view"
              className="w-full h-64 md:h-96 lg:h-[480px] object-cover"
            />
            {/* Overlay with estate zones */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(45, 74, 62, 0.4)' }}
            >
              <div className="text-center px-6">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-3"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#B8945F',
                    fontWeight: 500,
                  }}
                >
                  15 Hectares of Curated Living
                </p>
                <h3
                  className="text-2xl md:text-4xl mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#FAF8F5',
                    fontWeight: 600,
                  }}
                >
                  Designed for Distinction
                </h3>
                <a href="#contact" className="btn-outline-light">
                  Request Full Master Plan
                </a>
              </div>
            </div>
          </div>

          {/* Estate zones grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { zone: 'The Villas', desc: 'Detached homes with private gardens' },
              { zone: 'The Townhouses', desc: 'Three-storey elegant living' },
              { zone: 'The Park Residences', desc: 'Apartments with park views' },
              { zone: 'The Commons', desc: 'Clubhouse, shops & dining' },
            ].map((item) => (
              <div
                key={item.zone}
                className="p-6 text-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(184, 148, 95, 0.2)',
                }}
              >
                <h4
                  className="text-base mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2D4A3E',
                    fontWeight: 600,
                  }}
                >
                  {item.zone}
                </h4>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: '#7A7A72',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIAL / QUOTE
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-32 relative"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative">
          {/* Opening quote mark */}
          <span
            className="quote-mark absolute -top-6 left-0 md:left-4 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote
            className="relative z-10 text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2D4A3E',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Regent Park captures something rare in modern development &mdash;
            a genuine sense of place. It feels less like a housing estate
            and more like coming home to an English country village.
          </blockquote>

          <div
            className="w-12 h-px mx-auto mb-5"
            style={{ backgroundColor: '#B8945F' }}
          />

          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#B8945F',
              fontWeight: 500,
            }}
          >
            Architectural Digest Southeast Asia, 2025
          </p>

          {/* Closing quote mark */}
          <span
            className="quote-mark absolute -bottom-12 right-0 md:right-4 select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT / CTA SECTION
          ═══════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-20 lg:py-32"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-label">Begin Your Journey</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl gold-underline">
              Private Enquiries
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8945F',
                      fontWeight: 600,
                    }}
                  >
                    Sales Gallery
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#2D4A3E',
                      lineHeight: 1.8,
                    }}
                  >
                    Regent Park Residential Estate
                    <br />
                    Jl. Imam Bonjol No. 42
                    <br />
                    Menteng, Jakarta Pusat 10310
                    <br />
                    Indonesia
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8945F',
                      fontWeight: 600,
                    }}
                  >
                    Telephone
                  </h3>
                  <p
                    className="text-base"
                    style={{ fontFamily: "'Lora', serif", color: '#2D4A3E' }}
                  >
                    +62 21 3190 1928
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8945F',
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </h3>
                  <p
                    className="text-base"
                    style={{ fontFamily: "'Lora', serif", color: '#2D4A3E' }}
                  >
                    enquiries@regentpark.id
                  </p>
                </div>

                {/* Viewing hours */}
                <div>
                  <h3
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8945F',
                      fontWeight: 600,
                    }}
                  >
                    Private Viewings
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#2D4A3E',
                      lineHeight: 1.8,
                    }}
                  >
                    By appointment only
                    <br />
                    Monday &ndash; Saturday, 09:00 &ndash; 17:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(184, 148, 95, 0.2)',
              }}
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.15em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#7A7A72',
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-full px-4 py-3 text-sm border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(184, 148, 95, 0.25)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.15em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#7A7A72',
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-full px-4 py-3 text-sm border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(184, 148, 95, 0.25)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-[0.15em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#7A7A72',
                      fontWeight: 500,
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input w-full px-4 py-3 text-sm border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(184, 148, 95, 0.25)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Your phone number"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs tracking-[0.15em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#7A7A72',
                      fontWeight: 500,
                    }}
                  >
                    I am interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-input w-full px-4 py-3 text-sm border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(184, 148, 95, 0.25)',
                      color: '#1A1A1A',
                      appearance: 'none',
                    }}
                  >
                    <option value="">Select a residence type</option>
                    <option value="villa">The Kensington Villa</option>
                    <option value="townhouse">The Belgravia Townhouse</option>
                    <option value="apartment">The Windsor Residence</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.15em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#7A7A72',
                      fontWeight: 500,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input w-full px-4 py-3 text-sm border resize-none"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(184, 148, 95, 0.25)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Tell us about your requirements"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-center">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer
        className="py-16"
        style={{
          backgroundColor: '#2D4A3E',
          borderTop: '1px solid rgba(184, 148, 95, 0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3
                className="text-xl tracking-[0.15em] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#B8945F',
                  fontWeight: 600,
                }}
              >
                REGENT PARK
              </h3>
              <p
                className="text-sm"
                style={{
                  fontFamily: "'Lora', serif",
                  color: '#FAF8F5',
                  opacity: 0.6,
                  lineHeight: 1.8,
                }}
              >
                A prestigious residential estate inspired
                by the great English country parks. Where timeless
                elegance meets modern living.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#B8945F',
                  fontWeight: 600,
                }}
              >
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: 'rgba(250, 248, 245, 0.6)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B8945F';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(250, 248, 245, 0.6)';
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact summary */}
            <div>
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#B8945F',
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </h4>
              <div className="space-y-3">
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: 'rgba(250, 248, 245, 0.6)',
                    lineHeight: 1.8,
                  }}
                >
                  +62 21 3190 1928
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: 'rgba(250, 248, 245, 0.6)',
                  }}
                >
                  enquiries@regentpark.id
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: 'rgba(250, 248, 245, 0.6)',
                    lineHeight: 1.8,
                  }}
                >
                  Menteng, Jakarta Pusat
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-8"
            style={{ backgroundColor: 'rgba(184, 148, 95, 0.2)' }}
          />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-xs"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(250, 248, 245, 0.4)',
                fontWeight: 400,
                letterSpacing: '0.05em',
              }}
            >
              &copy; 2026 Regent Park Residential Estate. All rights reserved.
            </p>

            <p
              className="text-xs"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(250, 248, 245, 0.4)',
                fontWeight: 400,
                letterSpacing: '0.05em',
              }}
            >
              Made with &#9829; by{' '}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: '#B8945F' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FAF8F5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B8945F';
                }}
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
