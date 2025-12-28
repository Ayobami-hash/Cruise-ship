import imgCordeliaXperienceApp1 from "figma:asset/81a4f8d38fd159cc4939b842806c69731d5cad6d.png";
import imgImage3 from "figma:asset/847047942f94e003afd8f510848f19db3e52f2d5.png";
import imgImage4 from "figma:asset/0f4747372c1eadb43a80b6cb678394e8a147dda9.png";
import { Smartphone, CheckCircle } from 'lucide-react';

export function DownloadApp() {
  const features = [
    "Easy booking on the go",
    "Track your cruise in real-time",
    "Access exclusive deals",
    "Digital boarding pass"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-[#93288e] tracking-wide mb-4 uppercase">
              Take Us With You
            </p>
            <h2 className="text-[#222] mb-6 uppercase">
              Download Cordelia<br />Experience App
            </h2>
            <p className="text-[rgba(25,24,37,0.75)] mb-8">
              Get the best cruise booking experience right at your fingertips. Download our app today and unlock exclusive features and deals.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#93288e] flex-shrink-0" size={20} />
                  <span className="text-[#222]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <img src={imgImage4} alt="App Store" className="h-8 w-auto" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <img src={imgImage3} alt="Google Play" className="h-8 w-auto" />
              </a>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={imgCordeliaXperienceApp1}
                alt="Cordelia app"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#93288e]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
