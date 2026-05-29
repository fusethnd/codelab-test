import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Overcoat',
    price: '$299',
    imageUrl: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Silk Evening Dress',
    price: '$189',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Essential Cotton Shirt',
    price: '$89',
    imageUrl: 'https://images.unsplash.com/photo-1434389670869-bac08581138c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Structured Blazer',
    price: '$245',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100">
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-neutral-600">
      <a href="#" className="hover:text-black transition-colors">Shop</a>
      <a href="#" className="hover:text-black transition-colors">Collections</a>
      <a href="#" className="hover:text-black transition-colors">Editorial</a>
    </div>
    
    <div className="text-2xl font-serif font-bold tracking-widest uppercase">
      CODELAB
    </div>

    <div className="flex items-center space-x-6">
      <button aria-label="Search" className="hover:opacity-70 transition-opacity">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"></path></svg>
      </button>
      <button aria-label="Cart" className="hover:opacity-70 transition-opacity">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      </button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80" 
        alt="Fashion Model" 
        className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
      <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90">
        Fall / Winter 2026
      </h2>
      <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
        The Art of <br /> Elegance
      </h1>
      <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-neutral-200 transition-colors duration-300">
        Explore Collection
      </button>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      {/* Quick Add Button overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-full bg-black text-white py-3 text-sm uppercase tracking-wider">
          Quick View
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm font-medium text-neutral-900 mb-1">{product.name}</h3>
      <p className="text-sm text-neutral-500">{product.price}</p>
    </div>
  </div>
);

const FeaturedSection = () => (
  <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-serif mb-4">New Arrivals</h2>
      <a href="#" className="text-sm uppercase tracking-widest text-neutral-500 border-b border-neutral-300 pb-1 hover:text-black hover:border-black transition-colors">
        View All
      </a>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {FEATURED_PRODUCTS.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

const EditorialSection = () => (
  <section className="bg-neutral-50 py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80" 
          alt="Editorial Lookbook" 
          className="w-full aspect-[4/5] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <span className="uppercase tracking-widest text-xs text-neutral-500 mb-4">The Campaign</span>
        <h2 className="text-4xl font-serif mb-6 leading-snug">Redefining Modern <br/> Sophistication</h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Our latest collection emphasizes structural purity and uncompromising quality. 
          Every piece is thoughtfully designed to transcend seasons, offering a timeless aesthetic for the modern wardrobe.
        </p>
        <button className="border border-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300">
          Read The Story
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-serif mb-6">Codelab</h3>
        <p className="text-neutral-400 text-sm max-w-sm mb-6 leading-relaxed">
          Join our newsletter to receive updates on new arrivals, special offers, and our editorial features.
        </p>
        <div className="flex border-b border-neutral-700 pb-2 max-w-sm">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-transparent w-full focus:outline-none text-sm"
          />
          <button className="uppercase tracking-widest text-xs ml-4 hover:text-neutral-300">Subscribe</button>
        </div>
      </div>
      
      <div>
        <h4 className="uppercase tracking-widest text-xs mb-6 text-neutral-500">Shop</h4>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
        </ul>
      </div>

      <div>
        <h4 className="uppercase tracking-widest text-xs mb-6 text-neutral-500">Support</h4>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
      <p>&copy; 2026 Codelab. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">Pinterest</a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <EditorialSection />
      <Footer />
    </main>
  );
}