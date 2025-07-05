"use client";

import React, { useState } from "react";
import { 
  IconHome, 
  IconMenu2, 
  IconInfoCircle, 
  IconPhone, 
  IconShoppingCart,
  IconHeart,
  IconStar
} from "@tabler/icons-react";

// Import Aceternity UI Components
import { HeroParallax } from "@/components/ui/hero-parallax";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FocusCards } from "@/components/ui/focus-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { SparklesCore } from "@/components/ui/sparkles";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Home() {
  // Floating Dock Items
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6" />,
      href: "#home",
    },
    {
      title: "Menu",
      icon: <IconMenu2 className="h-6 w-6" />,
      href: "#menu",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-6 w-6" />,
      href: "#about",
    },
    {
      title: "Contact",
      icon: <IconPhone className="h-6 w-6" />,
      href: "#contact",
    },
    {
      title: "Cart",
      icon: <IconShoppingCart className="h-6 w-6" />,
      href: "#cart",
    },
  ];

  // Hero Parallax Products Data
  const heroProducts = [
    {
      title: "Classic Milk Tea",
      link: "https://gomoonbeam.com",
      thumbnail: "/images/classic-milk-tea.jpg",
    },
    {
      title: "Taro Bubble Tea",
      link: "https://cursor.so",
      thumbnail: "/images/taro-bubble-tea.jpg",
    },
    {
      title: "Matcha Latte",
      link: "https://userogue.com",
      thumbnail: "/images/matcha-latte.jpg",
    },
    {
      title: "Passion Fruit Tea",
      link: "https://editorially.org",
      thumbnail: "/images/passion-fruit-tea.jpg",
    },
    {
      title: "Brown Sugar Milk Tea",
      link: "https://editrix.ai",
      thumbnail: "/images/brown-sugar-milk-tea.jpg",
    },
    {
      title: "Thai Tea",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/images/thai-tea.jpg",
    },
    {
      title: "Wintermelon Tea",
      link: "https://algochurn.com",
      thumbnail: "/images/wintermelon-tea.jpg",
    },
    {
      title: "Honeydew Smoothie",
      link: "https://ui.aceternity.com",
      thumbnail: "/images/honeydew-smoothie.jpg",
    },
    {
      title: "Mango Passion",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/mango-passion.jpg",
    },
    {
      title: "Lychee Fizz",
      link: "https://smartbridgetech.com",
      thumbnail: "/images/lychee-fizz.jpg",
    },
    {
      title: "Coconut Milk Tea",
      link: "https://renderwork.studio",
      thumbnail: "/images/coconut-milk-tea.jpg",
    },
    {
      title: "Strawberry Smoothie",
      link: "https://creme.app",
      thumbnail: "/images/strawberry-smoothie.jpg",
    },
    {
      title: "Peach Iced Tea",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/images/peach-iced-tea.jpg",
    },
    {
      title: "Lavender Latte",
      link: "https://invoker.lol",
      thumbnail: "/images/lavender-latte.jpg",
    },
    {
      title: "Rose Milk Tea",
      link: "https://efreeinvoice.com",
      thumbnail: "/images/rose-milk-tea.jpg",
    },
  ];

  // Focus Cards Data (Categories)
  const focusCards = [
    {
      title: "Milk Tea Collection",
      src: "/images/milk-tea-collection.jpg",
    },
    {
      title: "Fruit Tea Paradise",
      src: "/images/fruit-tea-paradise.jpg",
    },
    {
      title: "Smoothie Selection",
      src: "/images/smoothie-selection.jpg",
    },
    {
      title: "Specialty Drinks",
      src: "/images/specialty-drinks.jpg",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "The best bubble tea I've ever had! The taro flavor is incredible and the pearls are perfectly chewy. I come here every day now!",
      name: "Sarah Johnson",
      designation: "Food Blogger",
      src: "/images/testimonial-sarah.jpg",
    },
    {
      quote: "BobaBliss has become my daily ritual. The matcha latte is pure perfection and the staff is always so friendly!",
      name: "Michael Chen",
      designation: "Coffee Enthusiast",
      src: "/images/testimonial-michael.jpg",
    },
    {
      quote: "Amazing quality and taste! The brown sugar milk tea is my absolute favorite. Worth every penny!",
      name: "Emily Rodriguez",
      designation: "Student",
      src: "/images/testimonial-emily.jpg",
    },
    {
      quote: "The variety here is incredible. From classic milk tea to exotic fruit flavors, there's something for everyone!",
      name: "David Kim",
      designation: "Local Resident",
      src: "/images/testimonial-david.jpg",
    },
    {
      quote: "Fresh ingredients, perfect sweetness levels, and amazing ambiance. This is my go-to spot for bubble tea!",
      name: "Lisa Wang",
      designation: "Bubble Tea Enthusiast",
      src: "/images/testimonial-lisa.jpg",
    },
  ];

  // Apple Cards Data
  const appleCards = [
    {
      category: "Milk Tea",
      title: "Classic Milk Tea",
      src: "/images/classic-milk-tea.jpg",
      content: "Our most beloved classic - rich, creamy milk tea with the perfect balance of tea and milk. Made with premium Ceylon black tea and fresh milk.",
    },
    {
      category: "Specialty",
      title: "Taro Bubble Tea",
      src: "/images/taro-bubble-tea.jpg",
      content: "Creamy purple taro root blended with milk and topped with chewy tapioca pearls. A crowd favorite with its unique flavor and beautiful color.",
    },
    {
      category: "Matcha",
      title: "Matcha Latte",
      src: "/images/matcha-latte.jpg",
      content: "Premium Japanese matcha powder whisked with steamed milk. Rich in antioxidants and bursting with earthy, umami flavors.",
    },
    {
      category: "Fruit Tea",
      title: "Passion Fruit Tea",
      src: "/images/passion-fruit-tea.jpg",
      content: "Refreshing tropical passion fruit tea with real fruit pieces. Light, tangy, and perfect for hot summer days.",
    },
    {
      category: "Signature",
      title: "Brown Sugar Milk Tea",
      src: "/images/brown-sugar-milk-tea.jpg",
      content: "Rich brown sugar syrup swirled with creamy milk tea and chewy tapioca pearls. Our signature drink that started it all.",
    },
    {
      category: "Traditional",
      title: "Thai Tea",
      src: "/images/thai-tea.jpg",
      content: "Traditional Thai tea with condensed milk, perfectly sweet and creamy. An authentic taste of Thailand in every sip.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 min-h-screen">
      {/* Floating Dock Navigation */}
      <FloatingDock items={dockItems} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center relative">
              <SparklesCore
                id="nav-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.0}
                particleDensity={80}
                className="w-32 h-16 absolute -left-4 -top-2"
                particleColor="#F59E0B"
              />
              <h1 className="text-3xl font-bold gradient-text relative z-10 float-animation">
                🧋 BobaBliss
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/90 hover:text-amber-300 transition-all duration-300 font-medium text-lg hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#menu" className="text-white/90 hover:text-amber-300 transition-all duration-300 font-medium text-lg hover:scale-105 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-white/90 hover:text-amber-300 transition-all duration-300 font-medium text-lg hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-white/90 hover:text-amber-300 transition-all duration-300 font-medium text-lg hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="home" className="relative min-h-screen">
        <HeroParallax products={heroProducts} />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-black/20 to-transparent">
          <div className="text-center z-10 relative px-4">
            <div className="inline-block mb-8 relative">
              <SparklesCore
                id="hero-sparkles"
                background="transparent"
                minSize={0.8}
                maxSize={2.0}
                particleDensity={120}
                className="w-full h-full absolute inset-0"
                particleColor="#FBBF24"
              />
              <TextGenerateEffect
                words="Welcome to BobaBliss"
                className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent mb-6 relative z-10 drop-shadow-2xl"
              />
            </div>
            <p className="text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
              ✨ Sip. Savor. Smile. ✨<br />
              <span className="text-amber-200">Premium bubble tea crafted with love and the finest ingredients.</span><br />
              <span className="text-orange-200 text-lg">🌟 Experience the magic in every sip 🌟</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="glow-button bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-2xl pulse-glow">
                🛒 Order Now
              </button>
              <button className="glow-button border-2 border-white/80 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-110 glass-effect shimmer-effect">
                📋 View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Focus Cards */}
      <section className="py-24 bg-gradient-to-br from-white/95 via-amber-50/80 to-orange-50/90 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='65' cy='15' r='3'/%3E%3Ccircle cx='15' cy='65' r='3'/%3E%3Ccircle cx='65' cy='65' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <SparklesCore
                id="categories-sparkles"
                background="transparent"
                minSize={0.5}
                maxSize={1.2}
                particleDensity={60}
                className="w-full h-20 absolute -top-4"
                particleColor="#F59E0B"
              />
              <TextGenerateEffect
                words="🌟 Explore Our Categories 🌟"
                className="text-4xl md:text-6xl font-bold gradient-text mb-6 relative z-10 float-animation"
              />
            </div>
            <p className="text-2xl text-amber-700 max-w-4xl mx-auto font-medium leading-relaxed">
              From traditional milk teas to innovative fruit blends, discover your perfect match in our carefully curated collection.
            </p>
          </div>
          <FocusCards cards={focusCards} />
          
          {/* Additional Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center glass-effect p-6 rounded-2xl pulse-glow">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-amber-700">Unique Flavors</p>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl pulse-glow">
              <div className="text-4xl font-bold gradient-text mb-2">100k+</div>
              <p className="text-amber-700">Happy Customers</p>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl pulse-glow">
              <div className="text-4xl font-bold gradient-text mb-2">5⭐</div>
              <p className="text-amber-700">Customer Rating</p>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl pulse-glow">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-amber-700">Online Ordering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Apple Cards Carousel */}
      <section id="menu" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0 glass-effect"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <SparklesCore
                id="menu-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.5}
                particleDensity={100}
                className="w-full h-24 absolute -top-6"
                particleColor="#FFFFFF"
              />
              <TextGenerateEffect
                words="🍹 Our Signature Drinks 🍹"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent mb-6 relative z-10 float-animation"
              />
            </div>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              ✨ Handcrafted with premium ingredients and served with a smile. Each drink is a masterpiece of flavor and artistry. ✨
            </p>
          </div>
          <Carousel items={appleCards.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))} />
        </div>
      </section>

      {/* Testimonials Section */
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/20 to-amber-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <SparklesCore
                id="testimonials-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={80}
                className="w-full h-20 absolute -top-4"
                particleColor="#FFFFFF"
              />
              <TextGenerateEffect
                words="💬 What Our Customers Say 💬"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent mb-6 relative z-10 float-animation"
              />
            </div>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              ⭐ Join thousands of satisfied customers who have made BobaBliss their daily ritual. ⭐
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="glass-effect text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-amber-900/30 to-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-6 relative">
              <SparklesCore
                id="footer-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={40}
                className="w-40 h-20 absolute -top-4 -left-4"
                particleColor="#FFFFFF"
              />
              <h3 className="text-4xl font-bold mb-4 relative z-10 gradient-text float-animation">
                🧋 BobaBliss
              </h3>
            </div>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              ✨ Follow us for daily boba inspiration and exclusive offers! ✨
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <a href="#" className="glow-button text-white/80 hover:text-amber-300 transition-all duration-300 text-xl font-medium px-6 py-3 rounded-full glass-effect">
                📸 Instagram
              </a>
              <a href="#" className="glow-button text-white/80 hover:text-amber-300 transition-all duration-300 text-xl font-medium px-6 py-3 rounded-full glass-effect">
                🎵 TikTok
              </a>
              <a href="#" className="glow-button text-white/80 hover:text-amber-300 transition-all duration-300 text-xl font-medium px-6 py-3 rounded-full glass-effect">
                👥 Facebook
              </a>
            </div>
            <div className="border-t border-white/30 pt-8">
              <p className="text-white/70 text-lg">
                © 2025 BobaBliss. Made with <IconHeart className="inline h-5 w-5 text-red-400 animate-pulse" /> and lots of tea. 🍃
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
