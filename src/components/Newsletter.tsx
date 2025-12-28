import imgShipBigShipLuxuriousShipVesselSteamerShipTransparentBackgroundAiGeneratedFreePng from "figma:asset/6c25f57110801f9f23e2eb3a67b43c1be7edd557.png";
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#93288e] to-[#7a2077] overflow-hidden">
      {/* Background Ship Image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10">
        <img
          src={imgShipBigShipLuxuriousShipVesselSteamerShipTransparentBackgroundAiGeneratedFreePng}
          alt="Ship"
          className="w-full h-full object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="text-white" size={32} />
        </div>

        {/* Heading */}
        <h2 className="text-white mb-4 uppercase">
          Get Cruise Deals Directly<br />in Your Inbox
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Subscribe to our newsletter and be the first to know about exclusive offers, new destinations, and special promotions.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={subscribed}
            />
            <button
              type="submit"
              disabled={subscribed}
              className="bg-white text-[#93288e] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {subscribed ? (
                <>
                  <span>Subscribed!</span>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </div>
        </form>

        <p className="text-white/70 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
