import imgRectangle7 from "figma:asset/c393d8f84a2e42ea14763b3e75da283194a6f0e9.png";
import { Calendar, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    guests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', formData);
  };

  return (
    <section className="relative min-h-[480px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgRectangle7}
          alt="Cruise ship" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h1 className="text-white mb-4 uppercase">
          Let's Go Now
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Discover amazing cruise destinations around the world. Your perfect voyage awaits.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:gap-4 items-end">
            {/* Destination */}
            <div className="flex-1 text-left w-full">
              <label className="block text-sm text-[#222] mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93288e]" size={20} />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93288e] focus:border-transparent"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex-1 text-left w-full">
              <label className="block text-sm text-[#222] mb-2">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93288e]" size={20} />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93288e] focus:border-transparent"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 text-left w-full">
              <label className="block text-sm text-[#222] mb-2">
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93288e] focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#93288e] text-white px-6 py-3 rounded-lg hover:bg-[#7a2077] transition-colors flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto"
            >
              <Search size={18} />
              <span className="text-sm">Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
