import imgEllipse7 from "figma:asset/5f70abc497852ae24ae69728381cfa65203ceef3.png";
import imgEllipse4 from "figma:asset/c54d3474bfb65f09b2e5eaf19ddede925f75195f.png";
import imgEllipse5 from "figma:asset/486c1aa1dbb9c75a0d6920787d74b8feb5381f99.png";
import imgEllipse6 from "figma:asset/2245d1021232bdf228f9b738a8b57393595d0b18.png";
import imgEllipse9 from "figma:asset/aafe9ed0926bef40ed4b72d709e6fbda19e0b5b4.png";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      avatar: imgEllipse4,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "An absolutely wonderful experience! The service was impeccable, the food was amazing, and the destinations were breathtaking. I can't wait to book my next cruise with Cordelia.",
      date: "December 2024"
    },
    {
      avatar: imgEllipse5,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "Best vacation ever! The staff went above and beyond to make our trip special. The entertainment was top-notch and the ship was luxurious. Highly recommended!",
      date: "November 2024"
    },
    {
      avatar: imgEllipse6,
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "From start to finish, everything was perfect. The attention to detail and the quality of service exceeded our expectations. We made memories that will last a lifetime.",
      date: "October 2024"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-[#fef9f8]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#93288e] tracking-wide mb-4 uppercase">
            What Our Guests Say
          </p>
          <h2 className="text-[#222] uppercase">
            Top Reviews for Tour
          </h2>
        </div>

        {/* Review Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#93288e]/20"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="text-[#FFCD6B] fill-[#FFCD6B]" size={20} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#222] text-lg mb-6">
                  "{reviews[currentReview].text}"
                </p>

                {/* Author Info */}
                <div className="space-y-1">
                  <p className="text-[#222]">{reviews[currentReview].name}</p>
                  <p className="text-[rgba(34,34,34,0.6)] text-sm">
                    {reviews[currentReview].location}
                  </p>
                  <p className="text-[rgba(34,34,34,0.6)] text-sm">
                    {reviews[currentReview].date}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevReview}
                className="p-3 bg-[#f6f5f5] rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="text-[#93288e]" size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentReview
                        ? 'bg-[#93288e] w-6'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-3 bg-[#93288e] rounded-full hover:bg-[#7a2077] transition-colors"
              >
                <ChevronRight className="text-white" size={20} />
              </button>
            </div>
          </div>

          {/* Additional Avatars */}
          <div className="flex justify-center gap-4 mt-8">
            <img src={imgEllipse7} alt="Reviewer" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md" />
            <img src={imgEllipse4} alt="Reviewer" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md" />
            <img src={imgEllipse9} alt="Reviewer" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
