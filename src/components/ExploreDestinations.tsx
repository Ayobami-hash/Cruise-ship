import imgRectangle1434 from "figma:asset/f4110061060b9ef1ce1f18249c44c5abac8102aa.png";
import imgRectangle1435 from "figma:asset/dd772cd550e141f13fd506e8c4adc78fd024e3a2.png";
import imgRectangle1436 from "figma:asset/ee83fd1f205b28373ee7d2dc9e660b55691cceb6.png";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function ExploreDestinations() {
  const [activeTab, setActiveTab] = useState('india');

  const destinations = [
    {
      image: imgRectangle1434,
      name: "Mumbai",
      description: "Lorem Ipsum is simply dummy text of the printing and...see more",
      rating: 5.0,
      details: "Lorem Ipsum"
    },
    {
      image: imgRectangle1435,
      name: "Goa",
      description: "Lorem Ipsum is simply dummy text of the printing and...see more",
      rating: 5.0,
      details: "Lorem Ipsum"
    },
    {
      image: imgRectangle1436,
      name: "Kochi",
      description: "Lorem Ipsum is simply dummy text of the printing and...see more",
      rating: 5.0,
      details: "Lorem Ipsum"
    }
  ];

  return (
    <section className="py-16 bg-[rgba(248,248,248,0.3)]" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#93288e] tracking-wide mb-4 uppercase">
            Choose Your Next Destination
          </p>
          <h2 className="text-[#222] uppercase">
            Explore Top Destination
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#fef0ef] rounded-2xl p-2">
            <button
              onClick={() => setActiveTab('india')}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeTab === 'india'
                  ? 'bg-[#93288e] text-white'
                  : 'bg-transparent text-[#93288e]'
              }`}
            >
              India
            </button>
            <button
              onClick={() => setActiveTab('dubai')}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeTab === 'dubai'
                  ? 'bg-[#93288e] text-white'
                  : 'bg-transparent text-[#93288e]'
              }`}
            >
              Dubai
            </button>
            <button
              onClick={() => setActiveTab('srilanka')}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeTab === 'srilanka'
                  ? 'bg-[#93288e] text-white'
                  : 'bg-transparent text-[#93288e]'
              }`}
            >
              Sri Lanka
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mb-8">
          <button className="p-4 bg-[#f6f5f5] rounded-full hover:bg-gray-200 transition-colors shadow-md">
            <ChevronLeft className="text-[#93288e]" size={20} />
          </button>
          <button className="p-4 bg-[#93288e] rounded-full hover:bg-[#7a2077] transition-colors shadow-md">
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                  <Star className="text-[#FFCD6B] fill-[#FFCD6B]" size={16} />
                  <span className="text-white">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#222] mb-3">
                  {destination.name}
                </h3>
                <p className="text-[rgba(34,34,34,0.6)] mb-4">
                  {destination.description}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-[#f1f1f1] flex justify-between items-center">
                <span className="text-[#222]">{destination.details}</span>
                <button className="text-[#92278f] border-b border-[#92278f] pb-0.5 hover:text-[#7a2077] transition-colors">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
