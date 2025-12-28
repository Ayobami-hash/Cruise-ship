import imgRectangle1437 from "figma:asset/8cb04c51de75919c624f788fc746e57622ac1f1f.png";
import imgRectangle1438 from "figma:asset/493757d6cd85960b446f61031267e7659aa72c34.png";
import imgRectangle1439 from "figma:asset/9842c6458e570d053e936450ae87bcbccbf55748.png";
import imgRectangle1440 from "figma:asset/376f1e5df8ef3748bf50e445224816f159a771fc.png";
import imgRectangle1441 from "figma:asset/ab7d76cd8f61b4406b6a5e1bcf04ff6f1c3ca585.png";
import imgRectangle1442 from "figma:asset/de6e56f450d2b5e742bd9c179f2087d3a3b58966.png";
import { Calendar, MapPin } from 'lucide-react';

export function UpcomingCruise() {
  const cruises = [
    {
      image: imgRectangle1437,
      name: "Mediterranean Explorer",
      location: "Barcelona to Rome",
      date: "March 15, 2025",
      duration: "7 Days",
      price: "$1,299"
    },
    {
      image: imgRectangle1438,
      name: "Caribbean Paradise",
      location: "Miami to Bahamas",
      date: "April 10, 2025",
      duration: "5 Days",
      price: "$899"
    },
    {
      image: imgRectangle1439,
      name: "Alaska Adventure",
      location: "Seattle to Juneau",
      date: "May 20, 2025",
      duration: "10 Days",
      price: "$1,799"
    },
    {
      image: imgRectangle1440,
      name: "Pacific Islands",
      location: "Sydney to Fiji",
      date: "June 5, 2025",
      duration: "12 Days",
      price: "$2,199"
    },
    {
      image: imgRectangle1441,
      name: "Norwegian Fjords",
      location: "Copenhagen to Oslo",
      date: "July 15, 2025",
      duration: "8 Days",
      price: "$1,599"
    },
    {
      image: imgRectangle1442,
      name: "Asian Odyssey",
      location: "Singapore to Hong Kong",
      date: "August 22, 2025",
      duration: "14 Days",
      price: "$2,499"
    }
  ];

  return (
    <section className="py-16 bg-white" id="cruises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#93288e] tracking-wide mb-4 uppercase">
            Plan Your Journey
          </p>
          <h2 className="text-[#222] uppercase">
            Upcoming Cruise
          </h2>
        </div>

        {/* Cruise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={cruise.image}
                  alt={cruise.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white mb-1">
                    {cruise.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="text-[#93288e] flex-shrink-0 mt-1" size={18} />
                  <span className="text-[#222]">
                    {cruise.location}
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <Calendar className="text-[#93288e] flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-[#222]">{cruise.date}</p>
                    <p className="text-[rgba(34,34,34,0.6)] text-sm">{cruise.duration}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[rgba(34,34,34,0.6)]">Starting from</p>
                    <p className="text-[#93288e]">{cruise.price}</p>
                  </div>
                  <button className="bg-[#93288e] text-white px-6 py-2 rounded-full hover:bg-[#7a2077] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
