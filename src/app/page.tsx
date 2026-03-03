'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Residences', href: '#residences' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Contact', href: '#contact' },
  ];

  const residences = [
    {
      name: 'Kensington Villa',
      type: 'Detached Villa',
      size: '450 sqm',
      beds: '4+1 Bedrooms',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      description:
        'A stately residence set within private landscaped grounds, featuring grand proportions, formal living spaces, and a wraparound veranda overlooking the estate gardens.',
    },
    {
      name: 'Belgravia Townhouse',
      type: 'Townhouse',
      size: '220 sqm',
      beds: '3+1 Bedrooms',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description:
        'An elegant multi-level townhouse with a private rooftop terrace, designed for refined urban living with classical proportions and contemporary comforts.',
    },
    {
      name: 'Windsor Apartment',
      type: 'Apartment',
      size: '120 sqm',
      beds: '2+1 Bedrooms',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description:
        'A beautifully appointed apartment offering generous living spaces, premium finishes, and sweeping views of the estate parklands from every room.',
    },
  ];

  const amenities = [
    {
      name: 'The Clubhouse',
      description: 'An exclusive social hub with a grand ballroom, private dining rooms, lounge bar, and library reading room.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><path d="M10 9h4" /><path d="M10 13h4" />
        </svg>
      ),
    },
    {
      name: 'Central Park',
      description: 'Four hectares of manicured parklands with meandering pathways, ornamental lakes, and mature specimen trees.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><path d="M8 6a4 4 0 0 1 8 0" /><path d="M6 10a6 6 0 0 1 12 0" />
        </svg>
      ),
    },
    {
      name: 'Sports Pavilion',
      description: 'Championship tennis courts, a 25-metre lap pool, fully equipped gymnasium, and multipurpose sports hall.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M12 2a14.5 14.5 0 0 1 0 20" /><path d="M2 12h20" />
        </svg>
      ),
    },
    {
      name: "Children's Garden",
      description: 'A safe and imaginative play environment with adventure playground, sensory garden, and supervised activity lawn.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v1m0 16v1m-7-9H4m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      name: 'Wellness Centre',
      description: 'A sanctuary of calm offering a full-service spa, yoga studio, meditation garden, and hydrotherapy facilities.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" /><path d="M12 2c3 3.2 5 7.4 5 10" /><path d="M12 2c-3 3.2-5 7.4-5 10" /><path d="M2 12h10" />
        </svg>
      ),
    },
    {
      name: 'Estate Security',
      description: 'Round-the-clock professional security with CCTV monitoring, controlled access gates, and dedicated patrol teams.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const lifestyleFeatures = [
    {
      number: '01',
      name: 'Community',
      description: 'Regular garden parties, seasonal celebrations, and curated social events that foster genuine neighbourly connections.',
    },
    {
      number: '02',
      name: 'Culinary',
      description: 'An on-estate dining pavilion, weekend farmers market, and private chef services for intimate gatherings.',
    },
    {
      number: '03',
      name: 'Wellness',
      description: 'Morning yoga on the great lawn, guided nature walks, and bespoke wellness programmes designed around your life.',
    },
    {
      number: '04',
      name: 'Arts & Culture',
      description: 'A dedicated gallery space, quarterly art exhibitions, and creative workshops for residents of all ages.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our team will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* ════════════════════════════════════════════════
          NAVIGATION
          ════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-forest/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start leading-none">
              <span
                className="text-xl font-semibold tracking-[0.2em] text-forest"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                REGENT PARK
              </span>
              <span
                className="text-[9px] tracking-[0.35em] text-gold uppercase mt-0.5"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Residential Estate
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-[13px] font-light tracking-[0.15em] uppercase text-forest/70 hover:text-forest"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Enquire Button (Desktop) */}
            <a
              href="#contact"
              className="hidden lg:inline-block px-8 py-3 bg-gold text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-dark"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Enquire
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-forest transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-forest transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-forest transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream border-t border-forest/5">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[13px] font-light tracking-[0.15em] uppercase text-forest/70 hover:text-forest"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-8 py-3 bg-gold text-white text-[11px] font-bold tracking-[0.2em] uppercase text-center hover:bg-gold-dark mt-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Enquire
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80"
            alt="Regent Park Estate"
            className="w-full h-full object-cover"
          />
          {/* Dark green-tinted overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F26]/70 via-[#2D4A3E]/55 to-[#1A2F26]/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Gold label */}
          <p
            className="text-gold-light text-[11px] tracking-[0.4em] uppercase mb-8"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Residential Estate
          </p>

          {/* Title */}
          <h1
            className="text-white leading-[0.9]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-medium tracking-wide">
              REGENT
            </span>
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-light tracking-[0.3em] mt-2">
              PARK
            </span>
          </h1>

          {/* Gold line */}
          <div className="flex justify-center my-8">
            <div className="gold-line-wide" />
          </div>

          {/* Tagline */}
          <p
            className="text-white/80 text-lg sm:text-xl font-light tracking-[0.15em]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Timeless Elegance, Modern Living
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="#residences"
              className="px-10 py-4 bg-forest text-white text-[11px] font-bold tracking-[0.2em] uppercase border border-forest hover:bg-forest-light hover:border-forest-light"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-transparent text-gold-light text-[11px] font-bold tracking-[0.2em] uppercase border border-gold/50 hover:bg-gold hover:text-white hover:border-gold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Book a Viewing
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span
            className="text-white/40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT
          ════════════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="border border-gold/30 p-3">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                  alt="The Estate"
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p
                className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                The Estate
              </p>
              <h2
                className="text-4xl lg:text-5xl text-forest mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                A Legacy of
                <br />
                Refined Living
              </h2>
              <div className="gold-line mb-8" />
              <p
                className="text-text-light text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Regent Park is an exclusive residential estate inspired by the great English
                country estates. Spanning 15 hectares of beautifully landscaped grounds, it
                offers a rare opportunity to live within a community designed around timeless
                principles of elegance, space, and tranquility.
              </p>
              <p
                className="text-text-light text-base leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Every detail has been thoughtfully considered, from the tree-lined avenues
                and ornamental gardens to the classical architectural language that defines
                each residence. Here, modern convenience meets old-world charm in perfect
                harmony.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              { value: '15', label: 'Hectares' },
              { value: '280', label: 'Residences' },
              { value: '60%', label: 'Green Space' },
              { value: '24/7', label: 'Security' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-forest/10 p-8 text-center"
              >
                <p
                  className="text-3xl lg:text-4xl text-forest mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-text-muted text-[11px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          RESIDENCES
          ════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Our Residences
            </p>
            <h2
              className="text-4xl lg:text-5xl text-forest mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              A Home for Every Chapter
            </h2>
            <div className="flex justify-center">
              <div className="gold-line" />
            </div>
          </div>

          {/* Residence Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residences.map((res) => (
              <div key={res.name} className="bg-white card-hover">
                {/* Image */}
                <div className="img-zoom">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Gold top border */}
                <div className="h-px bg-gold" />

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl text-forest mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {res.name}
                  </h3>

                  {/* Type tag */}
                  <span
                    className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-3 py-1 mb-4"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    {res.type}
                  </span>

                  {/* Size & Beds */}
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-text-muted text-sm"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {res.size}
                    </span>
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span
                      className="text-text-muted text-sm"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {res.beds}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-text-light text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {res.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase hover:text-gold-dark"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          AMENITIES
          ════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Estate Amenities
            </p>
            <h2
              className="text-4xl lg:text-5xl text-forest mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Life Beyond the Residence
            </h2>
            <div className="flex justify-center">
              <div className="gold-line" />
            </div>
          </div>

          {/* Amenity Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="amenity-card border border-forest/8 p-10 text-center"
              >
                {/* Icon circle */}
                <div className="amenity-icon inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest text-white mb-6 transition-all duration-300">
                  {amenity.icon}
                </div>

                <h3
                  className="amenity-name text-xl text-forest mb-3 transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {amenity.name}
                </h3>

                <p
                  className="amenity-desc text-text-light text-sm leading-relaxed transition-colors duration-300"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          LIFESTYLE
          ════════════════════════════════════════════════ */}
      <section id="lifestyle" className="py-24 lg:py-32 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Image */}
            <div>
              <p
                className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                The Lifestyle
              </p>
              <h2
                className="text-4xl lg:text-5xl text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                More Than a Home,
                <br />
                <span className="text-gold-light italic">A Way of Life</span>
              </h2>
              <div className="gold-line mb-10" />

              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                alt="Regent Park Lifestyle"
                className="w-full h-[350px] object-cover"
              />
            </div>

            {/* Right: Features */}
            <div className="flex flex-col gap-10">
              {lifestyleFeatures.map((feature) => (
                <div key={feature.number} className="flex gap-6">
                  <span
                    className="text-gold text-3xl font-light shrink-0 w-12"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.number}
                  </span>
                  <div>
                    <h3
                      className="text-white text-xl mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      {feature.name}
                    </h3>
                    <p
                      className="text-white/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIAL
          ════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          {/* Gold quotation mark */}
          <span
            className="text-gold/20 text-[120px] leading-none block -mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;
          </span>

          <blockquote
            className="text-forest text-2xl lg:text-3xl leading-relaxed italic mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Regent Park has given our family the rare gift of space and community in equal
            measure. The grounds are magnificent, the neighbours are wonderful, and every
            morning I wake up grateful for this extraordinary place we call home.
          </blockquote>

          <div className="gold-line mx-auto mb-8" />

          <p
            className="text-forest text-sm tracking-[0.1em]"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Victoria & James Hartington
          </p>
          <p
            className="text-text-muted text-[11px] tracking-[0.15em] uppercase mt-1"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Kensington Villa Residents
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CONTACT
          ════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: Info */}
            <div>
              <p
                className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Get in Touch
              </p>
              <h2
                className="text-4xl lg:text-5xl text-forest mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                Begin Your Journey
              </h2>
              <div className="gold-line mb-8" />
              <p
                className="text-text-light text-base leading-relaxed mb-12"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                We invite you to experience Regent Park firsthand. Our estate consultants
                are available to arrange a private viewing and guide you through every
                aspect of life within the estate.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-8">
                <div>
                  <h4
                    className="text-forest text-sm tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    Estate Sales Gallery
                  </h4>
                  <p
                    className="text-text-light text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Regent Park Boulevard No. 1<br />
                    Jakarta Selatan 12310, Indonesia
                  </p>
                </div>

                <div>
                  <h4
                    className="text-forest text-sm tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    Telephone
                  </h4>
                  <p
                    className="text-text-light text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    +62 21 5080 8888
                  </p>
                </div>

                <div>
                  <h4
                    className="text-forest text-sm tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    Email
                  </h4>
                  <p
                    className="text-text-light text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    enquiries@regentpark.id
                  </p>
                </div>

                <div>
                  <h4
                    className="text-forest text-sm tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                  >
                    Viewing Hours
                  </h4>
                  <p
                    className="text-text-light text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    Monday &ndash; Saturday: 09:00 &ndash; 17:00<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-cream p-10 lg:p-12">
                <h3
                  className="text-2xl text-forest mb-8"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Arrange a Private Viewing
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label
                      className="block text-forest text-[11px] tracking-[0.15em] uppercase mb-2"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-white border border-forest/15 text-forest text-sm focus:border-gold focus:ring-0"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-forest text-[11px] tracking-[0.15em] uppercase mb-2"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 bg-white border border-forest/15 text-forest text-sm focus:border-gold focus:ring-0"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-forest text-[11px] tracking-[0.15em] uppercase mb-2"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 xxx xxxx xxxx"
                        className="w-full px-4 py-3 bg-white border border-forest/15 text-forest text-sm focus:border-gold focus:ring-0"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-forest text-[11px] tracking-[0.15em] uppercase mb-2"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                    >
                      Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-forest/15 text-forest text-sm focus:border-gold focus:ring-0 appearance-none"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      <option value="">Select residence type</option>
                      <option value="villa">Kensington Villa</option>
                      <option value="townhouse">Belgravia Townhouse</option>
                      <option value="apartment">Windsor Apartment</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-forest text-[11px] tracking-[0.15em] uppercase mb-2"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                    >
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can assist you..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-forest/15 text-forest text-sm focus:border-gold focus:ring-0 resize-none"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-forest text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-forest-light"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════ */}
      <footer className="py-16 lg:py-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Brand */}
            <div>
              <h3
                className="text-white text-xl tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                REGENT PARK
              </h3>
              <p
                className="text-gold text-[9px] tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Residential Estate
              </p>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                An exclusive residential community
                inspired by the great English estates.
                Timeless elegance in the heart of Jakarta.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4
                className="text-white text-[11px] tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Explore
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/40 text-sm hover:text-gold"
                    style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4
                className="text-white text-[11px] tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Regent Park Boulevard No. 1
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Jakarta Selatan 12310
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  +62 21 5080 8888
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  enquiries@regentpark.id
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              &copy; 2026 Regent Park Estate. All rights reserved.
            </p>
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Made with &#9829; by{' '}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold"
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
