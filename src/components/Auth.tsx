import imgImage9 from '../assets/47a15083541b2766a5d625280b85672cbdf6d53c.png';
import imgImage3 from "../assets/b4b4156cb9695b8710de0de219e88188dae94ca9.png";
// import imgAbstractBoatLogoDesignVectorGraphics310384103312X208Preview1 from "../assets/58ead609153fbb17fa334e169665a8d548c2ecd7.png";
import { useState } from 'react';
import { Login } from './Login';
import { SignUp } from './SignUp';

// src\assets\b4b4156cb9695b8710de0de219e88188dae94ca9.png


interface AuthProps {
  onLogin: () => void;
}

export function Auth({ onLogin }: AuthProps) {
  const [activeView, setActiveView] = useState<'welcome' | 'login' | 'signup'>('welcome');

  return (
    <>
      {activeView === 'welcome' && (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-400 to-yellow-300">
          <div className="container mx-auto h-screen flex items-center justify-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 max-w-7xl w-full h-[506px] rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Welcome Panel */}
              <div className="relative hidden lg:block">
                {/* Background Image */}
                <img 
                  src={imgImage9} 
                  alt="Cruise" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/80 to-green-500/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/80 via-transparent to-transparent" />
                
                {/* Logo removed */}

                {/* Images Grid - Top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2 w-full px-4">
                  <div className="flex-1 h-[184px] rounded-xl overflow-hidden">
                    <img src={imgImage3} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text and Buttons - Bottom */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full px-8 text-center">
                  <h2 className="text-black text-2xl mb-2">
                    Discover all the<br />Best Fun on Water
                  </h2>
                  <p className="text-black text-xs mb-6">
                    Explore, have fun, the journey begin<br />here. Get the best cruise in Lagos
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button 
                      onClick={() => setActiveView('signup')}
                      className="bg-red-600 text-white px-6 py-2 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Sign Up
                    </button>
                    <button 
                      onClick={() => setActiveView('login')}
                      className="bg-white text-red-600 px-6 py-2 rounded text-sm hover:bg-gray-100 transition-colors"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Fallback */}
              <div className="lg:hidden col-span-1 relative bg-gradient-to-br from-green-400 to-yellow-300 flex flex-col justify-center items-center p-8">
                <h2 className="text-black text-2xl mb-2 text-center">
                  Discover all the<br />Best Fun on Water
                </h2>
                <p className="text-black text-xs mb-6 text-center">
                  Explore, have fun, the journey begin<br />here. Get the best cruise in Lagos
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveView('signup')}
                    className="bg-red-600 text-white px-6 py-2 rounded text-sm hover:bg-red-700 transition-colors"
                  >
                    Sign Up
                  </button>
                  <button 
                    onClick={() => setActiveView('login')}
                    className="bg-white text-red-600 px-6 py-2 rounded text-sm hover:bg-gray-100 transition-colors"
                  >
                    Login
                  </button>
                </div>
              </div>

              {/* Right pane - Cyma logo centered */}
              <div className="hidden lg:block col-span-2 relative bg-gradient-to-br from-green-400 to-yellow-300">
                {/* Right pane intentionally left blank (logo removed) */}
                <div className="absolute inset-0" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeView === 'login' && (
        <Login 
          onLogin={onLogin}
          onSwitchToSignup={() => setActiveView('signup')}
        />
      )}

      {activeView === 'signup' && (
        <SignUp 
          onSignup={onLogin}
          onSwitchToLogin={() => setActiveView('login')}
        />
      )}
    </>
  );
}