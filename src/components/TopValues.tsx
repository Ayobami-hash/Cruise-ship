import imgTravelAnywhereInTheWorldWithASuitcase from "figma:asset/90e1d4d861c606d4e84c86105624f09563524c09.png";
import imgYellowPaperAirplane from "figma:asset/4f9c3cb47abb873ffccf6152ff45c08513a04624.png";
import imgCard from "figma:asset/b105653fe23aaeb9acc42ff807a472a6770c81c8.png";
import svgPaths from "../imports/svg-wmlkvnih5g";

export function TopValues() {
  const features = [
    {
      icon: imgTravelAnywhereInTheWorldWithASuitcase,
      title: "Lot of choices",
      description: "Embrace life's vastness, venture forth,"
    },
    {
      icon: imgYellowPaperAirplane,
      title: "Best Tour Guide",
      description: "Embrace life's vastness, venture forth,",
      highlighted: true
    },
    {
      icon: imgCard,
      title: "Easy Booking",
      description: "Embrace life's vastness, venture forth,"
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <svg className="w-64 h-32" fill="none" preserveAspectRatio="none" viewBox="0 0 364.009 138.152">
          <path d={svgPaths.p2c840d00} stroke="#92278F" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p15cb8a00} stroke="#92278F" strokeDasharray="5.96 5.96" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p206eb430} stroke="#92278F" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.2" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 items-center">
          {/* Title Section */}
          <div className="md:col-span-1">
            <p className="text-[#93288e] tracking-wide mb-4 uppercase">
              What We Serve
            </p>
            <h2 className="text-[#222] mb-4 uppercase">
              Top Values<br />For You
            </h2>
            <p className="text-[rgba(25,24,37,0.75)]">
              Embrace life's vastness, venture forth,
            </p>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 p-6 rounded-2xl transition-all ${
                feature.highlighted
                  ? 'bg-white shadow-lg scale-105'
                  : 'bg-transparent hover:bg-white/50'
              }`}
            >
              <div className="h-20 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-[#222] text-center">
                {feature.title}
              </h3>
              <p className="text-[rgba(25,24,37,0.75)] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
