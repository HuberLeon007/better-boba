"use client";

import React from "react";
import { 
  IconHome, 
  IconMenu2, 
  IconInfoCircle, 
  IconPhone, 
  IconShoppingCart,
  IconHeart,
  IconStar
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-800">🧋 BobaBliss</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-amber-800 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-amber-800 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Welcome to BobaBliss
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
              Sip. Savor. Smile. Premium bubble tea crafted with love and the finest ingredients.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors">
                Order Now
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Our Signature Drinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Milk Tea */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🧋</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Classic Milk Tea</h3>
              <p className="text-amber-700 mb-4">
                Our most beloved classic - rich, creamy milk tea with the perfect balance of tea and milk.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-amber-600 ml-1">4.8/5</span>
                </div>
                <div className="text-2xl font-bold text-amber-800">$4.99</div>
              </div>
              <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Taro Bubble Tea */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🟣</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Taro Bubble Tea</h3>
              <p className="text-purple-700 mb-4">
                Creamy purple taro root blended with milk and topped with chewy tapioca pearls.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-purple-600 ml-1">4.9/5</span>
                </div>
                <div className="text-2xl font-bold text-purple-800">$5.99</div>
              </div>
              <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Matcha Latte */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🍵</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Matcha Latte</h3>
              <p className="text-green-700 mb-4">
                Premium Japanese matcha powder whisked with steamed milk for a smooth, earthy flavor.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-green-600 ml-1">4.7/5</span>
                </div>
                <div className="text-2xl font-bold text-green-800">$6.49</div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Passion Fruit Tea */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🥭</span>
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Passion Fruit Tea</h3>
              <p className="text-orange-700 mb-4">
                Refreshing tropical passion fruit tea with real fruit pieces and a hint of sweetness.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-orange-600 ml-1">4.6/5</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">$5.49</div>
              </div>
              <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Brown Sugar Milk Tea */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-yellow-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🍯</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Brown Sugar Milk Tea</h3>
              <p className="text-amber-700 mb-4">
                Rich brown sugar syrup swirled with creamy milk tea and chewy tapioca pearls.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-amber-600 ml-1">4.8/5</span>
                </div>
                <div className="text-2xl font-bold text-amber-800">$6.99</div>
              </div>
              <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Thai Tea */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🥤</span>
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Thai Tea</h3>
              <p className="text-orange-700 mb-4">
                Traditional Thai tea with condensed milk, perfectly sweet and creamy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-orange-600 ml-1">4.5/5</span>
                </div>
                <div className="text-2xl font-bold text-orange-800">$5.99</div>
              </div>
              <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make It */}
      <section id="about" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            How We Craft Perfection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🫖</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Select Your Base</h3>
              <p className="text-amber-700">Choose from our premium tea bases including classic black tea, oolong, jasmine green tea, or fruit-infused options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧋</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Add Your Toppings</h3>
              <p className="text-amber-700">Enhance your drink with our signature tapioca pearls, popping boba, jelly, or fresh fruit pieces.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍯</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Customize Sweetness</h3>
              <p className="text-amber-700">Perfect your drink with our customizable sweetness levels - from no sugar to extra sweet.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Enjoy Your Creation</h3>
              <p className="text-amber-700">Sip and savor your perfectly crafted bubble tea, made fresh to order with love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-amber-900">Sarah Johnson</h4>
                  <p className="text-amber-600">Food Blogger</p>
                </div>
              </div>
              <p className="text-amber-700 italic">
                "The best bubble tea I've ever had! The taro flavor is incredible and the pearls are perfectly chewy."
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-amber-900">Michael Chen</h4>
                  <p className="text-amber-600">Coffee Enthusiast</p>
                </div>
              </div>
              <p className="text-amber-700 italic">
                "BobaBliss has become my daily ritual. The matcha latte is pure perfection!"
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-amber-900">Emily Rodriguez</h4>
                  <p className="text-amber-600">Student</p>
                </div>
              </div>
              <p className="text-amber-700 italic">
                "Amazing quality and taste! The brown sugar milk tea is my absolute favorite."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🧋 BobaBliss</h3>
            <p className="text-xl text-amber-200 mb-8">
              Follow us for daily boba inspiration and exclusive offers!
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                TikTok
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
            <div className="border-t border-amber-700 pt-8">
              <p className="text-amber-300">
                © 2025 BobaBliss. Made with <IconHeart className="inline h-4 w-4 text-red-400" /> and lots of tea.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
