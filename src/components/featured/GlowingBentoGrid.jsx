import { useState } from 'react';
import { featuredImages } from '@data/featured';
import { FaCamera } from 'react-icons/fa';

const GlowingBentoGrid = () => {
  const gridAreas = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {featuredImages.slice(0, 8).map((item, index) => (
        <GlowingGridItem
          key={item.id}
          item={item}
          gridArea={gridAreas[index]}
          featured={index === 0}
        />
      ))}
    </div>
  );
};

const GlowingGridItem = ({ item, gridArea, featured }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className={`relative min-h-[14rem] ${gridArea}`}>
      <div
        className="relative h-full rounded-2xl p-[2px] overflow-hidden bg-gradient-to-br from-rose-200 via-white to-champagne-200"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-r from-rose-400/30 to-champagne-400/30 rounded-full blur-3xl" />
          </div>
        )}

        <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              {featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                  <FaCamera className="w-4 h-4 text-white" />
                </div>
                <span className="px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              
            </div>
          </div>

          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingBentoGrid;