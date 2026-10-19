'use client';

import Image from "next/image";
import { PlusIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useCallback, type ReactNode } from "react";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/RecklesslyLoved1313";

// Paste the publisher's purchase URL here. While empty, "Purchase Now" links render but do nothing.
const BOOK_PURCHASE_URL = "";

function PurchaseLink({ className, children = "Purchase Now" }: { className: string; children?: ReactNode }) {
  return (
    <a
      href={BOOK_PURCHASE_URL || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { if (!BOOK_PURCHASE_URL) e.preventDefault(); }}
      className={className}
    >
      {children}
    </a>
  );
}

const bookPrimaryButton = "inline-block px-10 py-5 bg-mauve text-white text-xl font-bold rounded-lg hover:bg-mauve-dark transition-colors text-center";
const bookSecondaryButton = "inline-block px-10 py-5 border-2 border-mauve text-mauve text-xl font-bold rounded-lg hover:bg-mauve hover:text-white transition-colors text-center";

function facebookTimelineSrc(width: number, height: number) {
  return `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    FACEBOOK_PAGE_URL
  )}&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donorboxOpen, setDonorboxOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  useEffect(() => {
    if (!bookModalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setBookModalOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [bookModalOpen]);

  // Hero slider (0 = book launch, 1 = ministry)
  const HERO_SLIDE_COUNT = 2;
  const [heroSlide, setHeroSlide] = useState(0);
  const goToSlide = useCallback((i: number) => {
    setHeroSlide(((i % HERO_SLIDE_COUNT) + HERO_SLIDE_COUNT) % HERO_SLIDE_COUNT);
  }, []);

  // Auto-rotate every 8s; resets whenever the active slide changes (incl. manual nav).
  useEffect(() => {
    const id = setInterval(() => {
      setHeroSlide((s) => (s + 1) % HERO_SLIDE_COUNT);
    }, 8000);
    return () => clearInterval(id);
  }, [heroSlide]);

  return (
    <div>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Book launch announcement bar */}
        <div className="bg-blush text-warm-dark text-sm md:text-base py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-4 gap-y-1 flex-wrap text-center">
            <span>
              <span className="hidden sm:inline">New book from Amy Newman: </span>
              <span className="font-semibold">Two Babies in Heaven</span>
            </span>
            <span className="flex items-center gap-4">
              <PurchaseLink className="font-semibold text-mauve underline underline-offset-4 hover:text-mauve-dark" />
              <button onClick={() => setBookModalOpen(true)} className="font-semibold text-mauve underline underline-offset-4 hover:text-mauve-dark">
                Learn More
              </button>
            </span>
          </div>
        </div>
        <div className="bg-warm-black py-3 px-4 md:px-6 border-b border-gold/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/RLM-wide-logo-removebg-preview.png"
              alt="Recklessly Loved Ministries"
              width={500}
              height={100}
              className="h-[61px] md:h-[71px] w-auto"
              priority
            />
          </a>

          <div className="flex items-center gap-3 md:gap-8">
            <nav className="hidden md:flex items-center gap-8 text-white/90 text-lg">
              <a href="#about" className="hover:text-gold-light transition-colors">About</a>
              <a href="#team" className="hover:text-gold-light transition-colors">Team</a>
              <a href="#outreach" className="hover:text-gold-light transition-colors">Outreach</a>
              <a href="#media" className="hover:text-gold-light transition-colors">Media</a>
              <a href="#book" className="hover:text-gold-light transition-colors">Book</a>
              <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
            </nav>

            <button onClick={() => setDonorboxOpen(true)} className="hidden md:block px-6 py-3 bg-gold text-warm-black text-lg font-bold rounded-lg hover:bg-gold-light transition-colors">
              Give
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gold-light p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-warm-black border-b border-gold/20 py-6 px-6 shadow-xl">
            <div className="flex flex-col gap-5 text-white">
              <a 
                href="#about" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#team" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#outreach" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Outreach
              </a>
              <a 
                href="#media" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Media
              </a>
              <a 
                href="#book" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book
              </a>
              <a 
                href="#contact" 
                className="text-xl font-medium hover:text-gold-light transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                className="mt-4 px-6 py-4 bg-gold text-warm-black text-xl font-bold rounded-lg hover:bg-gold-light transition-colors text-center"
                onClick={() => { setMobileMenuOpen(false); setDonorboxOpen(true); }}
              >
                Give
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Slider */}
      {/* Slides share one grid cell so the hero grows to fit the tallest slide instead of clipping. */}
      <section className="relative grid min-h-screen overflow-hidden" aria-roledescription="carousel" aria-label="Featured">
        {/* Slide 2 — Ministry */}
        <div
          className={`col-start-1 row-start-1 relative flex items-center justify-center pt-56 pb-28 text-white transition-[opacity,visibility] duration-1000 ease-in-out ${heroSlide === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{backgroundImage: 'url(/nick-berger-ZS0sUE45oVQ-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          aria-hidden={heroSlide !== 1}
        >
          <div className="absolute inset-0 bg-warm-black/55"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal mb-12 tracking-wide leading-tight uppercase">
              Dedicated to the One
            </h1>
            <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-white/75 leading-relaxed">
              "Three things will last forever — faith, hope and love — and the greatest of these is love." - 1 Corinthians 13:13
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#about" className="px-12 py-6 bg-gold text-warm-black text-xl font-bold rounded-lg hover:bg-gold-light transition-colors">
                Learn More
              </a>
              <a href="#contact" className="px-12 py-6 border-2 border-gold-light text-gold-light text-xl font-bold rounded-lg hover:bg-gold-light hover:text-warm-black transition-colors">
                Join Us
              </a>
            </div>
          </div>
        </div>

        {/* Slide 1 — Book Launch */}
        <div
          className={`col-start-1 row-start-1 relative flex items-center justify-center pt-48 pb-28 md:pt-52 bg-[radial-gradient(ellipse_at_top,#ffffff_0%,var(--color-blush)_75%)] transition-[opacity,visibility] duration-1000 ease-in-out ${heroSlide === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          aria-hidden={heroSlide !== 0}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Image
              src="/twobabies_in_heaven_cover.png"
              alt="Two Babies in Heaven — a book by Amy Newman"
              width={1067}
              height={1529}
              className="mx-auto w-auto h-[32vh] min-h-[220px] max-h-[400px] rounded-sm shadow-2xl shadow-warm-dark/30 mb-10"
              priority
            />
            <p className="text-mauve text-base md:text-lg font-semibold tracking-[0.25em] uppercase mb-4">
              New Book Release
            </p>
            <h1 className="text-5xl md:text-7xl font-normal text-warm-dark tracking-wide uppercase leading-none mb-5">
              Two Babies in Heaven
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed mb-2">
              A story of redemption, healing, and hope.
            </p>
            <p className="text-lg md:text-xl text-mauve mb-10">
              by Amy Newman
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <PurchaseLink className={bookPrimaryButton} />
              <button onClick={() => setBookModalOpen(true)} className={bookSecondaryButton}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => goToSlide(heroSlide - 1)}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-warm-black/40 hover:bg-warm-black/70 text-white/80 hover:text-gold-light transition-colors"
        >
          <ChevronLeftIcon className="h-7 w-7 md:h-9 md:w-9" />
        </button>
        <button
          onClick={() => goToSlide(heroSlide + 1)}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-warm-black/40 hover:bg-warm-black/70 text-white/80 hover:text-gold-light transition-colors"
        >
          <ChevronRightIcon className="h-7 w-7 md:h-9 md:w-9" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {Array.from({ length: HERO_SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={heroSlide === i}
              className={`h-3 w-3 rounded-full transition-all ${
                heroSlide === 0
                  ? (heroSlide === i ? 'bg-mauve w-8' : 'bg-warm-dark/25 hover:bg-warm-dark/50')
                  : (heroSlide === i ? 'bg-gold-light w-8' : 'bg-white/40 hover:bg-white/70')
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 relative" style={{backgroundImage: 'url(/marcos-paulo-prado-18SwCncNIGY-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-cream/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-warm-dark mb-6">
              Who We Are
            </h2>
            <div className="w-32 h-2 bg-gold mx-auto mb-10"></div>
            <p className="text-2xl md:text-3xl text-warm-gray leading-relaxed max-w-4xl mx-auto">
              At Recklessly Loved Ministries, we believe in reaching the lost, serving the hurting, and showing the love of Jesus with boldness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <h3 className="text-5xl font-bold text-warm-dark mb-8">Our Story</h3>
              <p className="text-2xl text-warm-gray leading-relaxed">
                Recklessly Loved Ministries launched in 2019 when pastors Seth & Amy Newman answered God's call to ministry. Since then, we've served through church-based ministry and community outreach across states.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-warm-dark mb-8">Our Mission</h3>
              <p className="text-2xl text-warm-gray leading-relaxed">
                We stand in the gap between God and the lost — bringing the hope of Christ through visible acts of service.
              </p>
            </div>
          </div>

          <div className="bg-white/70 rounded-2xl p-16">
            <h3 className="text-5xl font-bold text-warm-dark mb-12 text-center">Our Vision</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-20 h-20 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <p className="text-2xl text-warm-gray font-medium leading-relaxed">See souls saved for His Kingdom</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <UserGroupIcon className="w-20 h-20 text-gold" />
                </div>
                <p className="text-2xl text-warm-gray font-medium leading-relaxed">Stand with the brokenhearted and oppressed</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <HeartIcon className="w-20 h-20 text-gold" />
                </div>
                <p className="text-2xl text-warm-gray font-medium leading-relaxed">Extend hospitality, generosity, and love to all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Anchors */}
      <section className="py-28 relative text-white" style={{backgroundImage: 'url(/jonny-swales-fIDIgxZpdSM-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-warm-black/75"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-16">Scripture Anchors We Live By</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-warm-dark/80 border border-gold/20 p-10 rounded-2xl">
              <p className="text-2xl mb-4 leading-relaxed">"The Spirit of the Sovereign LORD is upon me…"</p>
              <p className="text-gold-muted text-xl">— Isaiah 61:1</p>
            </div>
            <div className="bg-warm-dark/80 border border-gold/20 p-10 rounded-2xl">
              <p className="text-2xl mb-4 leading-relaxed">"Let love of your fellow believers continue…"</p>
              <p className="text-gold-muted text-xl">— Hebrews 13:1-2</p>
            </div>
            <div className="bg-warm-dark/80 border border-gold/20 p-10 rounded-2xl">
              <p className="text-2xl mb-4 leading-relaxed">"I can do all things through Him who strengthens me…"</p>
              <p className="text-gold-muted text-xl">— Philippians 4:13</p>
            </div>
            <div className="bg-warm-dark/80 border border-gold/20 p-10 rounded-2xl">
              <p className="text-2xl mb-4 leading-relaxed">"Whoever gives to one of these little ones…"</p>
              <p className="text-gold-muted text-xl">— Matthew 10:42</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative" style={{backgroundImage: 'url(/rodrigo-rodriguez-pmiJFEPHihk-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-cream/75"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-warm-dark mb-6">
              Our Story
            </h2>
            <p className="text-3xl text-warm-gray font-medium">
              Passionate in heart, committed in action
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-5xl font-bold text-warm-dark mb-6">Pastors & Evangelists</h3>
            <h4 className="text-4xl font-semibold text-gold-dark mb-8">Seth & Amy Newman</h4>
            <p className="text-2xl text-warm-gray leading-relaxed">
              Launching the ministry and overseeing vision, outreach, and prayer ministry.
            </p>
          </div>

          <p className="text-center text-3xl text-warm-dark max-w-3xl mx-auto leading-relaxed">
            Together we serve with one aim: to show and share the reckless love of Christ.
          </p>
        </div>
      </section>

      {/* Outreach & Impact */}
      <section id="outreach" className="py-32 relative text-white" style={{backgroundImage: 'url(/alexei-scutari-5Zg64OwXJg8-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-warm-black/65"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              Outreach & Impact
            </h2>
            <div className="w-32 h-2 bg-gold mx-auto mb-10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h3 className="text-5xl font-bold mb-8">Outreach</h3>
              <p className="text-2xl text-white/75 leading-relaxed mb-8">
                Our ministry isn't confined to the walls of a building. Street outreach, community events, and hands-on service into neighborhoods have been a founding element of our work.
              </p>
              <p className="text-2xl text-gold-muted">
                "Since stepping out in faith… this ministry is certainly not limited to the walls of the church…"
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-8">Our Impact</h3>
              <ul className="space-y-6 text-2xl text-white/75">
                <li className="flex items-start">
                  <span className="mr-4 text-3xl text-gold-light">•</span>
                  <span className="leading-relaxed">Countless lives touched by prayer, provision and presence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl text-gold-light">•</span>
                  <span className="leading-relaxed">Communities served through feeding, relief, evangelism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl text-gold-light">•</span>
                  <span className="leading-relaxed">Stories of transformation, hope, and new beginnings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Media */}
      <section id="media" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-warm-dark mb-6">
              Recent Media
            </h2>
            <div className="w-32 h-2 bg-gold mx-auto mb-10"></div>
            <p className="text-2xl md:text-3xl text-warm-gray leading-relaxed max-w-4xl mx-auto">
              Watch and listen to the ministry in action — interviews, outreach moments, and messages worth sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left order-2 md:order-1">
              <h3 className="text-5xl font-bold text-warm-dark mb-8">Follow the Journey</h3>
              <p className="text-2xl text-warm-gray leading-relaxed mb-6">
                Every outreach, interview, and testimony is shared live on our Facebook page — and the latest always shows up right here.
              </p>
              <p className="text-2xl text-warm-gray leading-relaxed mb-10">
                Follow along and be part of what God is doing.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gold text-warm-black text-xl font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Follow on Facebook
              </a>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-warm-black rounded-3xl p-2.5 shadow-2xl border border-gold/30 inline-block">
                {/* Facebook fixes the plugin width when it loads, so render a
                    narrower embed on small screens and a wider one on md+. */}
                <div className="md:hidden">
                  <iframe
                    src={facebookTimelineSrc(320, 560)}
                    width="320"
                    height="560"
                    className="rounded-2xl bg-white block"
                    style={{ overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Recklessly Loved Ministries on Facebook"
                  />
                </div>
                <div className="hidden md:block">
                  <iframe
                    src={facebookTimelineSrc(420, 640)}
                    width="420"
                    height="640"
                    className="rounded-2xl bg-white block"
                    style={{ overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Recklessly Loved Ministries on Facebook"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book — Two Babies in Heaven */}
      <section id="book" className="py-32 bg-[radial-gradient(ellipse_at_top,#ffffff_0%,var(--color-blush)_75%)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-mauve text-lg md:text-xl font-semibold tracking-[0.25em] uppercase mb-5">
            New Book Release
          </p>
          <h2 className="text-6xl md:text-7xl font-black text-warm-dark mb-6">
            Two Babies in Heaven
          </h2>
          <div className="w-32 h-2 bg-mauve mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-warm-gray leading-relaxed mb-16">
            A story of redemption, healing, and hope.
          </p>

          <Image
            src="/twobabies_in_heaven_cover.png"
            alt="Two Babies in Heaven — a book by Amy Newman"
            width={1067}
            height={1529}
            className="mx-auto w-72 md:w-96 h-auto rounded-sm shadow-2xl shadow-warm-dark/30 mb-16"
          />

          <p className="text-xl md:text-2xl text-warm-gray leading-relaxed max-w-3xl mx-auto mb-12">
            It is a story of lost life, new life, and the unshakable truth that God can redeem
            even the darkest chapters of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-28">
            <PurchaseLink className={bookPrimaryButton} />
            <button onClick={() => setBookModalOpen(true)} className={bookSecondaryButton}>
              Learn More
            </button>
          </div>

          {/* About the Author */}
          <div className="max-w-3xl mx-auto border-t border-mauve/20 pt-20">
            <Image
              src="/amy_newman_two_babies_in_heaven_author.jpeg"
              alt="Amy Newman, author"
              width={427}
              height={640}
              className="mx-auto w-48 md:w-56 h-auto rounded-2xl shadow-xl mb-10"
            />
            <h3 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">About the Author</h3>
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed mb-6">
              Amy Newman is a wife, mother, evangelist, pastor, and author. She is a
              co-founder and Vice President of Recklessly Loved Ministries, the
              evangelistic ministry she founded with her husband in 2019.
            </p>
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed">
              Her desire is to reach people from all walks of life with the gospel of Jesus
              Christ and to see women find healing and freedom from abortion, miscarriage,
              and infertility. Her hope is that this book will inspire women everywhere to
              see children as the blessing they truly are, and that lives would be changed
              through the power of an ever-present Savior, Jesus Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section id="give" className="py-32 relative" style={{backgroundImage: 'url(/tomasz-filipek-joOVC9d-jis-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-cream/85"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-warm-dark mb-12">
            Give / Support
          </h2>
          <p className="text-3xl text-warm-gray mb-16 leading-relaxed">
            Your generosity enables us to carry out ministry — feeding the hungry, reaching the lost, praying for the hurting, and bringing hope through action.
          </p>

          <div className="bg-white/70 rounded-2xl p-16 mb-16">
            <h3 className="text-4xl font-bold text-warm-dark mb-10">Ways to Support</h3>
            <div className="space-y-6 text-2xl text-warm-gray">
              <p><span className="text-gold">•</span> Online giving (easy & secure)</p>
              <p><span className="text-gold">•</span> Monthly partnership</p>
              <p><span className="text-gold">•</span> One-time gifts for outreach events</p>
            </div>
          </div>

          <p className="text-4xl font-bold text-warm-dark mb-6">
            Every gift is powerful. Every gift matters.
          </p>
          <p className="text-2xl text-warm-gray mb-12">
            Thank you for standing with us as we serve the One who loves us so recklessly.
          </p>

          <button onClick={() => setDonorboxOpen(true)} className="px-16 py-6 bg-gold text-warm-black font-bold rounded-xl hover:bg-gold-light transition-colors text-2xl">
            Give Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative text-white" style={{backgroundImage: 'url(/aaron-burden-4eWwSxaDhe4-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-warm-black/70"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-10">
              Connect With Us
            </h2>
            <p className="text-3xl text-white/70 leading-relaxed">
              We'd love to hear from you! Whether you're interested in volunteering, partnering, have a prayer need, or simply want to connect.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-gold/15">
            <form className="space-y-8">
              <div>
                <label className="block text-xl font-semibold mb-3">Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/15 border border-gold/25 text-white text-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl bg-white/15 border border-gold/25 text-white text-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3">Message</label>
                <textarea rows={6} className="w-full px-6 py-4 rounded-xl bg-white/15 border border-gold/25 text-white text-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="How can we pray for you or connect with you?"></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-gold text-warm-black font-bold rounded-xl hover:bg-gold-light transition-colors text-2xl">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-2xl mb-8">Follow us, join us, partner with us in showing the love of Jesus.</p>
            <div className="flex justify-center gap-8">
              <a href="https://www.facebook.com/recklessly.loved.1" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/recklesslylovedministries" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-warm-black text-white/50 text-center border-t border-gold/15">
        <p className="text-xl">
          © 2026 Recklessly Loved Ministries. All rights reserved.
        </p>
      </footer>

      {/* Book Modal */}
      {bookModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={() => setBookModalOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
            className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl bg-white p-8 md:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBookModalOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-warm-gray hover:text-warm-dark transition-colors"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <p className="text-mauve text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-3 text-center">
              A story of redemption, healing, and hope
            </p>
            <h2 id="book-modal-title" className="text-5xl md:text-6xl font-normal uppercase tracking-wide text-warm-dark text-center mb-2">
              Two Babies in Heaven
            </h2>
            <p className="text-lg text-mauve text-center mb-8">by Amy Newman</p>
            <div className="space-y-5 text-lg md:text-xl text-warm-gray leading-relaxed">
              <p>
                She was searching for love, acceptance, and a place to belong. Instead, she found herself trapped in destructive relationships, addiction, abuse, and a decision that would haunt her for years.
              </p>
              <p>
                When Sherri discovers she is pregnant, she makes a choice she believes will allow her to move forward with her life. Instead, the pain, guilt, and shame follow her into adulthood. She tries to outrun her past through relationships, career, success, partying, and drugs, but no matter how much she achieves, the emptiness remains.
              </p>
              <p className="font-bold uppercase tracking-wide text-warm-dark">
                Then she encounters Jesus.
              </p>
              <p>
                What begins as a desperate search for answers becomes a life-changing journey of faith, surrender, healing, and redemption. As Sherri learns to confront her past and trust God with her future, she discovers that her worst mistakes do not have the final word.
              </p>
              <p>
                <em>Two Babies in Heaven</em> is a deeply personal testimony of the devastating consequences of broken choices and the extraordinary grace of a God who forgives, restores, and redeems.
              </p>
              <p>
                It is a story of lost life, new life, and the unshakable truth that God can redeem even the darkest chapters of our story.
              </p>
            </div>
            <div className="mt-10 text-center">
              <PurchaseLink className={bookPrimaryButton} />
            </div>
          </div>
        </div>
      )}

      {/* Donorbox Modal */}
      {donorboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={() => setDonorboxOpen(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setDonorboxOpen(false)}
              className="absolute -top-10 -right-1 text-white/80 hover:text-white text-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Close <XMarkIcon className="h-6 w-6" />
            </button>
            <iframe
              src="https://donorbox.org/embed/recklessly-loved-ministries"
              name="donorbox"
              seamless
              allow="payment"
              style={{ width: '425px', height: '720px' }}
              className="border-0 shadow-2xl max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
