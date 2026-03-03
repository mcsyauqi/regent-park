'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────
   Regent Park Residence — Luxury Property Site
   British Colonial Elegance
   ───────────────────────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Residences', href: '#residences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Contact', href: '#contact' },
  ];

  const residences = [
    {
      name: 'The Wellington Suite',
      size: '380 sqm',
      beds: '4 Bedrooms',
      feature: 'Private Garden',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description:
        'An expansive ground-floor suite with direct access to the manicured gardens. Featuring hand-laid herringbone floors, a private study, and a colonial-era veranda perfect for evening receptions.',
    },
    {
      name: 'The Churchill Penthouse',
      size: '280 sqm',
      beds: '3 Bedrooms',
      feature: 'Rooftop Terrace',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      description:
        'Crowning the residence, this penthouse offers panoramic city views from its private rooftop terrace. Double-height ceilings, a grand entertaining hall, and bespoke millwork throughout.',
    },
    {
      name: 'The Windsor Apartment',
      size: '150 sqm',
      beds: '2 Bedrooms',
      feature: 'Park View',
      image:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
      description:
        'An elegant apartment overlooking the residence gardens. Thoughtfully proportioned rooms with plantation shutters, marble bathrooms, and a chef-grade kitchen.',
    },
  ];

  const amenities = [
    {
      icon: '\u{1F3CA}',
      title: 'The Colonial Pool',
      description: 'Olympic-length pool surrounded by heritage palms',
    },
    {
      icon: '\u{1F37D}\u{FE0F}',
      title: "The Governor's Table",
      description: 'Fine dining by award-winning chefs',
    },
    {
      icon: '\u{1F4DA}',
      title: 'The Reading Room',
      description: 'A curated library of rare editions',
    },
    {
      icon: '\u{1F3BE}',
      title: 'The Lawn Club',
      description: 'Tennis courts and croquet lawns',
    },
    {
      icon: '\u{1F9D6}',
      title: 'The Wellness Wing',
      description: 'Ayurvedic spa and meditation garden',
    },
    {
      icon: '\u{1F697}',
      title: 'The Motor Court',
      description: 'Private underground parking with valet',
    },
  ];

  return (
    <main>
      {/* ═══════════════════════════════════════════
          SECTION 1: NAVIGATION
          ═══════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: '#1B4332',
          borderBottom: '1px solid rgba(184, 134, 11, 0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <a
              href="#"
              className="flex-shrink-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="text-lg md:text-xl tracking-widest"
                style={{ color: '#B8860B' }}
              >
                REGENT PARK RESIDENCE
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    color: '#FDF8F0',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#B8860B',
                  transform: mobileMenuOpen
                    ? 'rotate(45deg) translate(3px, 3px)'
                    : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#B8860B',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#B8860B',
                  transform: mobileMenuOpen
                    ? 'rotate(-45deg) translate(3px, -3px)'
                    : 'none',
                }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden overflow-hidden transition-all duration-300"
            style={{
              maxHeight: mobileMenuOpen ? '300px' : '0',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <div className="py-4 flex flex-col gap-4 border-t border-[#B8860B]/20">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.2em] uppercase py-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    color: '#FDF8F0',
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
          SECTION 2: HERO (100vh)
          ═══════════════════════════════════════════ */}
      <section
        className="relative w-full flex items-center justify-center gold-corners"
        style={{ height: '100vh', minHeight: '600px' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark Green Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(27, 67, 50, 0.55)' }}
        />

        {/* Additional corner borders (top-right, bottom-left) */}
        <div className="absolute inset-0 gold-corners-inner pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <p
            className="text-sm md:text-base tracking-[0.4em] uppercase mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              color: '#B8860B',
            }}
          >
            Est. 1928
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#B8860B',
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            REGENT PARK
          </h1>
          <p
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FDF8F0',
              letterSpacing: '0.3em',
            }}
          >
            RESIDENCE
          </p>
          <p
            className="text-base md:text-lg mb-12 max-w-lg mx-auto"
            style={{
              fontFamily: "'Lora', serif",
              color: '#FDF8F0',
              opacity: 0.9,
              lineHeight: 1.8,
            }}
          >
            A Legacy of Distinguished Living Since 1928
          </p>
          <a
            href="#contact"
            className="btn-gold inline-block px-10 py-4 text-sm tracking-[0.25em] uppercase border-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              color: '#B8860B',
              borderColor: '#B8860B',
              backgroundColor: 'transparent',
            }}
          >
            Request a Private Tour
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#B8860B',
              fontWeight: 300,
            }}
          >
            Discover
          </span>
          <div
            className="w-px h-10"
            style={{ backgroundColor: '#B8860B', opacity: 0.5 }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ABOUT
          ═══════════════════════════════════════════ */}
      <section
        id="about"
        className="py-24 md:py-32"
        style={{ backgroundColor: '#FDF8F0' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Gold Diamond Separator */}
          <div
            className="text-center mb-16"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#B8860B',
              fontSize: '18px',
              letterSpacing: '1em',
            }}
          >
            &#9670; &#9670; &#9670;
          </div>

          {/* Text Content */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#1B4332',
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              A Heritage of Elegance
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "'Lora', serif",
                color: '#6B705C',
                lineHeight: 2,
              }}
            >
              Nestled within 12 acres of manicured gardens in the heart of
              Menteng, Regent Park Residence has been Jakarta&apos;s most
              prestigious address for nearly a century. Originally commissioned
              in 1928 by the Dutch East Indies Trading Company, the estate has
              been meticulously restored to honour its colonial grandeur while
              embracing the finest modern comforts.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: "'Lora', serif",
                color: '#6B705C',
                lineHeight: 2,
              }}
            >
              Each residence is a testament to the art of considered living
              &mdash; where teak-panelled hallways open onto sunlit terraces,
              where the scent of frangipani drifts through louvred windows, and
              where every detail speaks of an era when craftsmanship was
              paramount.
            </p>
          </div>

          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden" style={{ border: '2px solid #B8860B' }}>
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
                alt="Regent Park Residence grand lobby"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden" style={{ border: '2px solid #B8860B' }}>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                alt="Regent Park Residence exterior"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: RESIDENCES
          ═══════════════════════════════════════════ */}
      <section
        id="residences"
        className="py-24 md:py-32"
        style={{ backgroundColor: '#1B4332' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-20">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#B8860B',
              }}
            >
              Our Collection
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl gold-underline"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FDF8F0',
                fontWeight: 600,
              }}
            >
              The Residences
            </h2>
          </div>

          {/* 3 Residence Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="card-hover overflow-hidden"
                style={{
                  backgroundColor: '#162e24',
                  border: '1px solid rgba(184, 134, 11, 0.2)',
                }}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#B8860B',
                      fontWeight: 600,
                    }}
                  >
                    {residence.name}
                  </h3>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {[residence.size, residence.beds, residence.feature].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-wider uppercase px-3 py-1"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#FDF8F0',
                            border: '1px solid rgba(184, 134, 11, 0.3)',
                            fontWeight: 400,
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#FDF8F0',
                      opacity: 0.85,
                      lineHeight: 1.9,
                    }}
                  >
                    {residence.description}
                  </p>

                  {/* View Details Link */}
                  <a
                    href="#contact"
                    className="inline-block mt-6 text-xs tracking-[0.2em] uppercase nav-link"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8860B',
                      fontWeight: 500,
                    }}
                  >
                    Enquire &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: AMENITIES
          ═══════════════════════════════════════════ */}
      <section
        id="amenities"
        className="py-24 md:py-32"
        style={{ backgroundColor: '#FDF8F0' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-20">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#B8860B',
              }}
            >
              Curated Experiences
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#1B4332',
                fontWeight: 600,
              }}
            >
              Amenities &amp; Services
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="amenity-card p-8 text-center rounded-none border"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: 'rgba(184, 134, 11, 0.15)',
                }}
              >
                <span className="amenity-icon text-5xl block mb-5">
                  {amenity.icon}
                </span>
                <h3
                  className="amenity-title text-xl mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1B4332',
                    fontWeight: 600,
                  }}
                >
                  {amenity.title}
                </h3>
                <p
                  className="amenity-text text-sm transition-colors duration-300"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: '#6B705C',
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
          SECTION 6: TESTIMONIAL
          ═══════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 relative"
        style={{ backgroundColor: '#1B4332' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
          {/* Large Gold Quotation Mark — Opening */}
          <span
            className="quote-mark absolute -top-8 left-4 md:left-0 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote */}
          <blockquote
            className="relative z-10 text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-10"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FDF8F0',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Regent Park is not merely a residence. It is an institution &mdash;
            a living monument to the art of gracious living, where every
            corridor whispers stories of a grander age.
          </blockquote>

          {/* Decorative divider */}
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: '#B8860B' }}
          />

          {/* Attribution */}
          <p
            className="text-sm tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#B8860B',
              fontWeight: 400,
            }}
          >
            Asia Property Awards 2025
          </p>

          {/* Large Gold Quotation Mark — Closing */}
          <span
            className="quote-mark absolute -bottom-16 right-4 md:right-0 select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: CONTACT
          ═══════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-24 md:py-32"
        style={{ backgroundColor: '#FDF8F0' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-20">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#B8860B',
              }}
            >
              Begin Your Journey
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#1B4332',
                fontWeight: 600,
              }}
            >
              Private Enquiries
            </h2>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3
                    className="text-xs tracking-[0.3em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8860B',
                      fontWeight: 600,
                    }}
                  >
                    Address
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#1A1A1A',
                      lineHeight: 1.8,
                    }}
                  >
                    Regent Park Residence
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
                    className="text-xs tracking-[0.3em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8860B',
                      fontWeight: 600,
                    }}
                  >
                    Telephone
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#1A1A1A',
                    }}
                  >
                    +62 21 3190 1928
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3
                    className="text-xs tracking-[0.3em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8860B',
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#1A1A1A',
                    }}
                  >
                    enquiries@regentparkresidence.id
                  </p>
                </div>

                {/* Viewing Hours */}
                <div>
                  <h3
                    className="text-xs tracking-[0.3em] uppercase mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#B8860B',
                      fontWeight: 600,
                    }}
                  >
                    Private Viewings
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: '#1A1A1A',
                      lineHeight: 1.8,
                    }}
                  >
                    By appointment only
                    <br />
                    Monday &ndash; Saturday, 10:00 &ndash; 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#6B705C',
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-full px-5 py-4 text-base border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(184, 134, 11, 0.3)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#6B705C',
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-full px-5 py-4 text-base border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(184, 134, 11, 0.3)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-[0.2em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#6B705C',
                      fontWeight: 500,
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input w-full px-5 py-4 text-base border"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(184, 134, 11, 0.3)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] uppercase mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#6B705C',
                      fontWeight: 500,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-input w-full px-5 py-4 text-base border resize-none"
                    style={{
                      fontFamily: "'Lora', serif",
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(184, 134, 11, 0.3)',
                      color: '#1A1A1A',
                    }}
                    placeholder="Tell us about your interest in Regent Park Residence"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-[0.25em] uppercase transition-all duration-300 border-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    backgroundColor: '#1B4332',
                    color: '#FDF8F0',
                    borderColor: '#B8860B',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B8860B';
                    e.currentTarget.style.color = '#1A1A1A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B4332';
                    e.currentTarget.style.color = '#FDF8F0';
                  }}
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: FOOTER
          ═══════════════════════════════════════════ */}
      <footer
        className="py-16"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          {/* Brand Name */}
          <h3
            className="text-xl md:text-2xl tracking-[0.3em] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#B8860B',
            }}
          >
            REGENT PARK RESIDENCE
          </h3>

          {/* Address */}
          <p
            className="text-sm mb-8"
            style={{
              fontFamily: "'Lora', serif",
              color: '#FDF8F0',
              opacity: 0.6,
              lineHeight: 1.8,
            }}
          >
            Jl. Imam Bonjol No. 42, Menteng, Jakarta Pusat 10310, Indonesia
          </p>

          {/* Divider */}
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: '#B8860B', opacity: 0.4 }}
          />

          {/* Copyright */}
          <p
            className="text-xs tracking-wider mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#FDF8F0',
              opacity: 0.4,
              fontWeight: 400,
            }}
          >
            &copy; 2026 Regent Park Residence. All rights reserved.
          </p>

          {/* Made by Creativism */}
          <p
            className="text-xs tracking-wider"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#FDF8F0',
              opacity: 0.4,
              fontWeight: 400,
            }}
          >
            Made with &#9829; by{' '}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: '#B8860B' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FDF8F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B8860B';
              }}
            >
              Creativism
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
