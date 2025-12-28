import imgHttpsLottiefilesComAnimationsPlay1UDt0DlOxJ from "figma:asset/85b78f4ab6e382f5963b24ec9011fe03eacd389c.png";
import { Shield, Heart, Users } from 'lucide-react';

export function SafetyProtocols() {
  const protocols = [
    {
      icon: Shield,
      title: "CDC-certified Protocols",
      description: "Following all CDC guidelines for passenger safety"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "24/7 medical staff and health monitoring"
    },
    {
      icon: Users,
      title: "Reduced Capacity",
      description: "Limited passengers for enhanced social distancing"
    }
  ];

  return (
    <section className="py-16 bg-[#fef9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#93288e] tracking-wide mb-4 uppercase">
            Your Safety Matters
          </p>
          <h2 className="text-[#222] uppercase">
            Safety Protocols
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img
                src={imgHttpsLottiefilesComAnimationsPlay1UDt0DlOxJ}
                alt="Safety protocols"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#93288e]/10 rounded-3xl -z-10" />
          </div>

          {/* Protocols */}
          <div className="space-y-8">
            {protocols.map((protocol, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#93288e]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#93288e] transition-colors">
                  <protocol.icon className="text-[#93288e] group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-[#222] mb-2">
                    {protocol.title}
                  </h3>
                  <p className="text-[rgba(25,24,37,0.75)]">
                    {protocol.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <button className="bg-[#93288e] text-white px-8 py-3 rounded-full hover:bg-[#7a2077] transition-colors">
                Learn More About Our Safety
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
