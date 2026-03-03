'use client';

import { useState, useEffect } from 'react';

/* --- Data --- */

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
    description:
      'A stately residence set within private landscaped grounds, featuring grand proportions, formal living spaces, and a wraparound veranda overlooking the estate gardens.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    name: 'Belgravia Townhouse',
    type: 'Townhouse',
    size: '220 sqm',
    beds: '3+1 Bedrooms',
    description:
      'An elegant multi-level townhouse with a private rooftop terrace, designed for refined urban living with classical proportions and contemporary comforts.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    name: 'Windsor Apartment',
    type: 'Apartment',
    size: '120 sqm',
    beds: '2+1 Bedrooms',
    description:
      'A beautifully appointed apartment offering generous living spaces, premium finishes, and sweeping views of the estate parklands from every room.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
];

const amenities = [
  {
    name: 'The Clubhouse',
    description:
      'An exclusive social hub with a grand ballroom, private dining rooms, lounge bar, and library reading room.',
    icon: '\u2302', // ⌂
  },
  {
    name: 'Central Park',
    description:
      'Four hectares of manicured parklands with meandering pathways, ornamental lakes, and mature specimen trees.',
    icon: '\u2618', // ☘
  },
  {
    name: 'Sports Pavilion',
    description:
      'Championship tennis courts, a 25-metre lap pool, fully equipped gymnasium, and multipurpose sports hall.',
    icon: '\u2606', // ☆
  },
  {
    name: "Children's Garden",
    description:
      'A safe and imaginative play environment with adventure playground, sensory garden, and supervised activity lawn.',
    icon: '\u263C', // ☼
  },
  {
    name: 'Wellness Centre',
    description:
      'A sanctuary of calm offering a full-service spa, yoga studio, meditation garden, and hydrotherapy facilities.',
    icon: '\u2662', // ♢
  },
  {
    name: 'Estate Security',
    description:
      'Round-the-clock professional security with CCTV monitoring, controlled access gates, and dedicated patrol teams.',
    icon: '\u25C8', // ◈
  },
];

const stats = [
  { value: '15', label: 'Hectares' },
  { value: '280', label: 'Residences' },
  { value: '60%', label: 'Green Space' },
  { value: '24/7', label: 'Security' },
];

const lifestyleFeatures = [
  {
    number: '01',
    name: 'Community',
    description:
      'Regular garden parties, seasonal celebrations, and curated social events that foster genuine neighbourly connections.',
  },
  {
    number: '02',
    name: 'Culinary',
    description:
      'An on-estate dining pavilion, weekend farmers market, and private chef services for intimate gatherings.',
  },
  {
    number: '03',
    name: 'Wellness',
    description:
      'Morning yoga on the great lawn, guided nature walks, and bespoke wellness programmes designed around your life.',
  },
  {
    number: '04',
    name: 'Arts & Culture',
    description:
      'A dedicated gallery space, quarterly art exhibitions, and creative workshops for residents of all ages.',
  },
];

/* --- Component --- */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* ======================================================================
          1. FIXED NAVIGATION
      ====================================================================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#2D4A3E]/10'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start leading-none">
              <span className="font-[family-name:var(--font-playfair)] text-[#2D4A3E] text-xl font-semibold tracking-[0.2em] uppercase">
                Regent Park
              </span>
              <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[9px] tracking-[0.35em] uppercase mt-0.5">
                Residential Estate
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-lato)] text-[#5A7A6E] hover:text-[#2D4A3E] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2.5 bg-[#B8945F] text-white font-[family-name:var(--font-lato)] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#9A7A4A] transition-all duration-300"
            >
              Enquire
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#2D4A3E] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#2D4A3E] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#2D4A3E] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-playfair)] text-[#2D4A3E] text-2xl tracking-[0.2em] uppercase hover:text-[#B8945F] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#B8945F] text-white font-[family-name:var(--font-lato)] text-sm font-bold tracking-[0.15em] uppercase"
          >
            Enquire
          </a>
        </div>
      )}

      {/* ======================================================================
          2. HERO
      ====================================================================== */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80"
            alt="Regent Park Estate exterior at golden hour"
            className="w-full h-full object-cover"
          />
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F26]/60 via-[#2D4A3E]/40 to-[#1A2F26]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F26]/30 via-transparent to-[#1A2F26]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Sub label */}
          <p className="font-[family-name:var(--font-lato)] text-[#D4B07A] text-[11px] tracking-[0.4em] uppercase mb-8">
            Residential Estate
          </p>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-playfair)] text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] uppercase mb-2">
            Regent Park
          </h1>

          {/* Gold Line */}
          <div className="w-20 h-[1px] bg-[#B8945F] my-8" />

          {/* Tagline */}
          <p className="font-[family-name:var(--font-lato)] text-white/80 text-lg md:text-xl tracking-[0.15em] mb-12">
            Timeless Elegance, Modern Living
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#residences"
              className="px-8 py-3.5 bg-[#2D4A3E] text-white font-[family-name:var(--font-lato)] text-xs font-bold tracking-[0.2em] uppercase border border-[#2D4A3E] hover:bg-[#3A5F50] hover:border-[#3A5F50] transition-all duration-300"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-[#B8945F]/50 text-[#D4B07A] font-[family-name:var(--font-lato)] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B8945F] hover:text-white hover:border-[#B8945F] transition-all duration-300"
            >
              Book a Viewing
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-lato)] text-white/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ======================================================================
          3. ABOUT
      ====================================================================== */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image with gold border frame */}
            <div className="relative">
              <div className="relative p-3 border border-[#B8945F]/20">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Regent Park estate grounds and architecture"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              {/* Offset gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#B8945F]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#B8945F]" />
            </div>

            {/* Right: Text */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#B8945F]" />
                <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[10px] font-bold tracking-[0.3em] uppercase">
                  The Estate
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2D4A3E] leading-[1.2] mb-8">
                A Legacy of
                <br />
                <span className="italic text-[#B8945F]">Refined Living</span>
              </h2>

              <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm md:text-base leading-relaxed mb-6">
                Regent Park is an exclusive residential estate inspired by the
                great English country estates. Spanning 15 hectares of
                beautifully landscaped grounds, it offers a rare opportunity to
                live within a community designed around timeless principles of
                elegance, space, and tranquility.
              </p>

              <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm leading-relaxed mb-10">
                Every detail has been thoughtfully considered, from the
                tree-lined avenues and ornamental gardens to the classical
                architectural language that defines each residence. Here, modern
                convenience meets old-world charm in perfect harmony.
              </p>

              {/* Gold Accent Line */}
              <div className="w-16 h-[1px] bg-[#B8945F]" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          4. KEY NUMBERS
      ====================================================================== */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center py-8 md:py-0 ${
                  index < stats.length - 1
                    ? 'md:border-r md:border-[#2D4A3E]/10'
                    : ''
                } ${
                  index < 2 ? 'border-b md:border-b-0 border-[#2D4A3E]/10' : ''
                }`}
              >
                <span className="font-[family-name:var(--font-playfair)] text-[#2D4A3E] text-4xl md:text-5xl lg:text-6xl block mb-2">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-lato)] text-[#8A9E96] text-xs font-bold tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          5. RESIDENCES
      ====================================================================== */}
      <section id="residences" className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8945F]" />
              <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[10px] font-bold tracking-[0.3em] uppercase">
                Our Residences
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8945F]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2D4A3E] leading-[1.2]">
              A Home for Every <span className="italic text-[#B8945F]">Chapter</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="group bg-white border border-[#2D4A3E]/5 hover:border-[#B8945F]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,74,62,0.08)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F26]/40 to-transparent" />
                </div>

                {/* Gold top accent */}
                <div className="h-[1px] bg-[#B8945F]" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2D4A3E] mb-2">
                    {residence.name}
                  </h3>
                  <span className="inline-block font-[family-name:var(--font-lato)] text-[10px] font-bold tracking-[0.2em] uppercase text-[#B8945F] border border-[#B8945F]/30 px-3 py-1 mb-4">
                    {residence.type}
                  </span>
                  <p className="font-[family-name:var(--font-lato)] text-[#8A9E96] text-xs tracking-[0.1em] mb-4">
                    {residence.size} &middot; {residence.beds}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm leading-relaxed mb-6">
                    {residence.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-lato)] text-[#B8945F] text-xs font-bold tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    View Details
                    <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          6. AMENITIES
      ====================================================================== */}
      <section id="amenities" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8945F]" />
              <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[10px] font-bold tracking-[0.3em] uppercase">
                Estate Amenities
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8945F]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2D4A3E] leading-[1.2]">
              Life Beyond the <span className="italic text-[#B8945F]">Residence</span>
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="border border-[#2D4A3E]/8 p-8 text-center hover:bg-[#2D4A3E] hover:border-[#2D4A3E] transition-all duration-500 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#2D4A3E] group-hover:bg-[#B8945F] flex items-center justify-center mx-auto mb-6 transition-colors duration-500">
                  <span className="text-white text-xl">{amenity.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#2D4A3E] group-hover:text-[#B8945F] mb-3 transition-colors duration-500">
                  {amenity.name}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] group-hover:text-[#FAF8F5]/85 text-sm leading-relaxed transition-colors duration-500">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          7. LIFESTYLE
      ====================================================================== */}
      <section id="lifestyle" className="py-24 lg:py-32 bg-[#2D4A3E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Heading + Image */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#B8945F]" />
                <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[10px] font-bold tracking-[0.3em] uppercase">
                  The Lifestyle
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white leading-[1.2] mb-6">
                More Than a Home,
                <br />
                <span className="italic text-[#D4B07A]">A Way of Life</span>
              </h2>

              <div className="w-16 h-[1px] bg-[#B8945F] mb-10" />

              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                alt="Regent Park lifestyle and interior living"
                className="w-full h-[350px] object-cover"
              />
            </div>

            {/* Right: Features */}
            <div className="flex flex-col gap-10">
              {lifestyleFeatures.map((feature) => (
                <div key={feature.number} className="flex gap-6">
                  <span className="font-[family-name:var(--font-playfair)] text-[#B8945F] text-3xl shrink-0 w-12">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl mb-2">
                      {feature.name}
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          8. TESTIMONIAL
      ====================================================================== */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          {/* Gold quotation mark */}
          <span className="font-[family-name:var(--font-playfair)] text-[#B8945F]/20 text-[120px] leading-none block -mb-10">
            &ldquo;
          </span>

          <blockquote className="font-[family-name:var(--font-playfair)] text-[#2D4A3E] text-2xl lg:text-3xl leading-relaxed italic mb-10">
            Regent Park has given our family the rare gift of space and
            community in equal measure. The grounds are magnificent, the
            neighbours are wonderful, and every morning I wake up grateful for
            this extraordinary place we call home.
          </blockquote>

          <div className="gold-line-center mb-8" />

          <p className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-sm font-bold tracking-[0.1em]">
            Victoria &amp; James Hartington
          </p>
          <p className="font-[family-name:var(--font-lato)] text-[#8A9E96] text-[11px] tracking-[0.15em] uppercase mt-1">
            Kensington Villa Residents
          </p>
        </div>
      </section>

      {/* ======================================================================
          9. CONTACT
      ====================================================================== */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8945F]" />
              <span className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[10px] font-bold tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8945F]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2D4A3E] leading-[1.2] mb-4">
              Begin Your <span className="italic text-[#B8945F]">Journey</span>
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm max-w-lg mx-auto">
              We invite you to experience Regent Park firsthand. Our estate
              consultants are available to arrange a private viewing.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                    Estate Sales Gallery
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm leading-relaxed">
                    Regent Park Boulevard No. 1
                    <br />
                    Jakarta Selatan 12310
                    <br />
                    Indonesia
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                    Telephone
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm">
                    +62 21 5080 8888
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm">
                    enquiries@regentpark.id
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                    Viewing Hours
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm">
                    Monday &ndash; Saturday: 09:00 &ndash; 17:00
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-[#FAF8F5] border border-[#2D4A3E]/5 p-8 md:p-10"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2D4A3E] mb-8">
                    Arrange a Private Viewing
                  </h3>

                  {/* Name */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-[#2D4A3E]/15 focus:border-[#B8945F] text-[#2D4A3E] font-[family-name:var(--font-lato)] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#8A9E96]"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white border border-[#2D4A3E]/15 focus:border-[#B8945F] text-[#2D4A3E] font-[family-name:var(--font-lato)] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#8A9E96]"
                      />
                    </div>
                    <div>
                      <label className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+62 xxx xxxx xxxx"
                        className="w-full bg-white border border-[#2D4A3E]/15 focus:border-[#B8945F] text-[#2D4A3E] font-[family-name:var(--font-lato)] text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#8A9E96]"
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">
                      Interest
                    </label>
                    <select
                      className="w-full bg-white border border-[#2D4A3E]/15 focus:border-[#B8945F] text-[#2D4A3E] font-[family-name:var(--font-lato)] text-sm px-4 py-3 outline-none transition-colors appearance-none"
                    >
                      <option value="">Select residence type</option>
                      <option value="villa">Kensington Villa</option>
                      <option value="townhouse">Belgravia Townhouse</option>
                      <option value="apartment">Windsor Apartment</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-10">
                    <label className="font-[family-name:var(--font-lato)] text-[#2D4A3E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can assist you..."
                      className="w-full bg-white border border-[#2D4A3E]/15 focus:border-[#B8945F] text-[#2D4A3E] font-[family-name:var(--font-lato)] text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-[#8A9E96]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2D4A3E] text-white font-[family-name:var(--font-lato)] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#3A5F50] transition-all duration-300"
                  >
                    Submit Enquiry
                  </button>

                  <p className="font-[family-name:var(--font-lato)] text-[#8A9E96]/60 text-[10px] mt-4 text-center">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </form>
              ) : (
                <div className="bg-[#FAF8F5] border border-[#B8945F]/30 p-8 md:p-10 flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border border-[#B8945F] rotate-45 flex items-center justify-center mb-8">
                    <span className="text-[#B8945F] -rotate-45 text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2D4A3E] mb-4">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5A7A6E] text-sm max-w-sm leading-relaxed">
                    Your enquiry has been received. Our estate consultants will
                    contact you within 24 hours to arrange your private viewing.
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B8945F] to-transparent mt-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          10. FOOTER
      ====================================================================== */}
      <footer className="bg-[#1A2F26] border-t border-[#2D4A3E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-white text-lg tracking-[0.2em] uppercase mb-1">
                Regent Park
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-[#B8945F] text-[9px] tracking-[0.3em] uppercase mb-4">
                Residential Estate
              </p>
              <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs leading-relaxed">
                An exclusive residential community inspired by the great English
                estates. Timeless elegance in the heart of Jakarta.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-lato)] text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Explore
              </h3>
              <div className="space-y-3">
                {['About', 'Residences', 'Amenities', 'Lifestyle', 'Contact', 'Privacy Policy'].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block font-[family-name:var(--font-lato)] text-white/40 text-xs hover:text-[#B8945F] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[family-name:var(--font-lato)] text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs">
                  Regent Park Boulevard No. 1
                </p>
                <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs">
                  Jakarta Selatan 12310
                </p>
                <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs">
                  +62 21 5080 8888
                </p>
                <p className="font-[family-name:var(--font-lato)] text-white/40 text-xs">
                  enquiries@regentpark.id
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-lato)] text-white/30 text-[10px] tracking-[0.1em]">
                &copy; 2026 Regent Park Estate. All rights reserved.
              </p>
              <p className="font-[family-name:var(--font-lato)] text-white/30 text-[10px] tracking-[0.1em]">
                Made with &#9829; by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8945F]/50 hover:text-[#B8945F] transition-colors"
                >
                  Creativism
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
