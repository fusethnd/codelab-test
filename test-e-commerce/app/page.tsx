import React from 'react';

const PRODUCTS = [
  { id: '1', name: 'Oversized Wool Sweater', price: '฿ 14,500', imageUrl: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=800&q=80' },
  { id: '2', name: 'Straight-Fit Denim', price: '฿ 9,200', imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'Classic Cotton T-Shirt', price: '฿ 4,800', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'Tailored Single-Breasted Jacket', price: '฿ 28,000', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80' },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 h-[70px] px-6 md:px-10 flex items-center justify-between">
    
    {/* ฝั่งซ้าย: เมนู และ ค้นหา */}
    <div className="flex items-center gap-5 md:gap-8 z-10">
      <button aria-label="Menu" className="hover:opacity-50 transition-opacity">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="square"/></svg>
      </button>
      <button className="hidden md:flex items-center text-[11px] tracking-widest font-bold text-neutral-900 hover:opacity-50 transition-opacity">
        <svg width="16" height="16" className="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-4.35-4.35M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        SEARCH
      </button>
    </div>
    
    {/* ตรงกลาง: โลโก้ (ใช้ Absolute เพื่อให้อยู่กึ่งกลางหน้าจอเสมอ 100%) */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-black m-0">
        CODELAB
      </h1>
    </div>

    {/* ฝั่งขวา: บัญชีผู้ใช้ และ ตะกร้า */}
    <div className="flex items-center gap-5 md:gap-8 z-10 text-[11px] tracking-widest font-bold">
      <button className="hidden md:block hover:opacity-50 transition-opacity">ACCOUNT</button>
      <button className="hover:opacity-50 transition-opacity">CART (0)</button>
    </div>
  </nav>
);

const HeroBanner = () => (
  <section className="mt-[70px] w-full h-[85vh] relative bg-neutral-100 flex flex-col md:flex-row">
    {/* ฝั่งซ้าย (Campaign Left) - รูปนายแบบเท่ๆ สไตล์แฟชั่นมินิมอล */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1200&q=80" 
        alt="Campaign Left - Men" 
        className="w-full h-full object-cover object-center" 
      />
    </div>
    
    {/* ฝั่งขวา (Campaign Right) - รูปแฟชั่นผู้หญิงที่เข้าคู่กัน */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=1200&q=80" 
        alt="Campaign Right - Women" 
        className="w-full h-full object-cover object-center" 
      />
    </div>
    
    {/* กล่องข้อความตรงกลาง */}
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <div className="bg-white/95 px-10 py-8 text-center pointer-events-auto border border-neutral-200">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-6">Spring / Summer</h2>
        <div className="flex space-x-4 justify-center text-sm font-medium">
          <button className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all">SHOP MEN</button>
          <span className="text-neutral-300">|</span>
          <button className="border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all">SHOP WOMEN</button>
        </div>
      </div>
    </div>
  </section>
);

const ProductGrid = () => (
  <section className="w-full py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
    
    {/* หัวข้อ New Arrivals แบบมีเส้นคั่นด้านล่าง */}
    <div className="flex justify-between items-end mb-12 border-b border-neutral-200 pb-4">
      <h3 className="text-base md:text-lg font-bold uppercase tracking-widest">New Arrivals</h3>
      <button className="text-[11px] font-bold tracking-widest uppercase hover:opacity-50 transition-opacity">
        VIEW ALL &rarr;
      </button>
    </div>
    
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-16">
      {PRODUCTS.map(product => (
        <div key={product.id} className="group cursor-pointer flex flex-col">
          <div className="w-full aspect-[3/4] bg-neutral-100 overflow-hidden mb-5 relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* จัดข้อความให้อยู่กึ่งกลางแบบแบรนด์ Hi-end */}
          <div className="flex flex-col items-center text-center px-2">
            <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2 leading-relaxed">
              {product.name}
            </h4>
            <p className="text-[11px] md:text-xs text-neutral-500">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-[#F5F5F4] text-[#1A1A1A] text-[11px] md:text-xs font-sans tracking-wide">
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#E5E5E5]">
      <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E5E5E5] flex flex-col items-start">
        <h4 className="font-bold uppercase mb-4 tracking-widest">Subscribe to the newsletter</h4>
        <p className="mb-6 leading-relaxed text-[#4A4A4A] max-w-sm">
          Sign up for our newsletter to receive previews of our latest news and exclusive offers.
        </p>
        <button className="underline underline-offset-4 hover:text-gray-500 transition-colors">
          Subscribe to our newsletter
        </button>
      </div>

      <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E5E5E5] flex flex-col items-start">
        <h4 className="font-bold uppercase mb-4 tracking-widest">Need personalized advice?</h4>
        <p className="mb-6 leading-relaxed text-[#4A4A4A] max-w-sm">
          Our Codelab Client Care Team will be delighted to assist you Monday to Friday, from 10am to 6pm.
        </p>
        <button className="underline underline-offset-4 hover:text-gray-500 transition-colors">
          Contact us
        </button>
      </div>

      <div className="p-8 md:p-10 flex flex-col items-start">
        <h4 className="font-bold uppercase mb-4 tracking-widest">Delivery & Returns</h4>
        <p className="mb-6 leading-relaxed text-[#4A4A4A] max-w-sm">
          Orders placed on our website are delivered worldwide. You have 14 days after receipt to return your items.
        </p>
        <button className="underline underline-offset-4 hover:text-gray-500 transition-colors">
          Discover our Delivery and Returns policy
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#E5E5E5]">
      {['Help', 'About Us', 'Social Media', 'Legal'].map((item) => (
        <div key={item} className="p-6 border-b md:border-b-0 md:border-r border-[#E5E5E5] flex justify-between items-center cursor-pointer hover:bg-[#EAEAEA] transition-colors last:border-r-0">
          <span className="font-bold uppercase tracking-widest">{item}</span>
          <span className="text-lg font-light">+</span>
        </div>
      ))}
    </div>

    <div className="p-6 flex flex-col md:flex-row justify-between items-center text-[#737373] text-[10px] md:text-[11px]">
      <div className="mb-6 md:mb-0">
        <span>Country/region : </span>
        <button className="font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity">
          THAILAND - ENGLISH (฿) &rarr;
        </button>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-[#1A1A1A]">Accessibility: improved contrast</span>
          <div className="w-10 h-5 bg-gray-400 rounded-full relative cursor-pointer flex items-center px-0.5">
            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
        <p className="tracking-widest">&copy;CODELAB 2026</p>
      </div>
    </div>
  </footer>
);

export default function CodelabLandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </main>
  );
}