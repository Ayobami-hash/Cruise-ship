import imgImage13 from "figma:asset/1440d43e230d7c14f329a460cbcdddac7be86c1d.png";
import imgImage82RemovebgPreview1 from "figma:asset/440c1cf47ea2c480e66d2371ac5a0f515b63ca94.png";
import imgImage14 from "figma:asset/e40d6daf88b64a8eba9dd4288f1d08838f8c1606.png";
import { useState } from 'react';

interface SignUpProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export function SignUp({ onSignup, onSwitchToLogin }: SignUpProps) {
  const [signupData, setSignupData] = useState({
    email: '',
    phone: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (signupData.email && signupData.phone && signupData.fullName && signupData.password) {
      onSignup();
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen">
      <img 
        src={imgImage13} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/80 via-green-700/80 to-green-600/30" />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <h2 className="text-white text-3xl mb-2">Sign up</h2>
          <p className="text-white text-xs mb-8">Create an account & cruise on</p>

          <form onSubmit={handleSignup} className="space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              className="w-full px-4 py-3 rounded text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={signupData.phone}
              onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.fullName}
              onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            
            <div className="grid grid-cols-2 gap-2">
              <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                className="px-4 py-2.5 rounded text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                className="px-4 py-2.5 rounded text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2.5 rounded text-sm tracking-wide hover:bg-yellow-500 transition-colors"
            >
              Sign Up
            </button>

            {/* Social Login */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-px bg-white" />
                <span className="text-white text-xs">or continue with</span>
                <div className="flex-1 h-px bg-white" />
              </div>
              
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img src={imgImage82RemovebgPreview1} alt="Google" className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  className="bg-white p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img src={imgImage14} alt="Facebook" className="w-7 h-7" />
                </button>
              </div>
            </div>
          </form>

          {/* Mobile View Toggle */}
          <div className="mt-4 text-center">
            <button
              onClick={onSwitchToLogin}
              className="text-white text-sm hover:underline"
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
