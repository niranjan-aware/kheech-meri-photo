import { featuredImages } from '@data/featured';
import GlowingBentoGrid from './GlowingBentoGrid';

const FeaturedShowcase = () => {
  return (
    <section id="featured" className="py-20 px-4 bg-gradient-to-br from-rose-50/50 via-white to-champagne-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-4 text-sm font-semibold text-rose-600 bg-rose-100 rounded-full">
            Our Best Work
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Featured Gallery
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most captivating photographs that tell beautiful stories and capture unforgettable moments.
          </p>
        </div>

        <GlowingBentoGrid />

        <div className="flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View Full Gallery
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;