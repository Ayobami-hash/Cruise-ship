import imgImage12 from "figma:asset/2ad11b5416bff19cc425ff61afba364177c68cc4.png";
import imgImage82RemovebgPreview1 from "figma:asset/440c1cf47ea2c480e66d2371ac5a0f515b63ca94.png";
import imgBlueSocialMediaLogo1977921759RemovebgPreview1 from "figma:asset/ca77204e40ca4688724c2fce8633dc8d9e6d526f.png";
import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export function Login({ onLogin, onSwitchToSignup }: LoginProps) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in real app, this would connect to a backend
    if (loginData.username && loginData.password) {
      onLogin();
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen">
      <img 
        src={imgImage12} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-sm"
      />
      <div className="absolute inset-0 bg-green-500/80" />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <h2 className="text-white text-3xl mb-2">Login</h2>
          <p className="text-white text-xs mb-8">Welcome back, we've missed you</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Enter username"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              className="w-full px-4 py-3 rounded text-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full px-4 py-3 rounded text-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            
            <div className="text-right">
              <button type="button" className="text-white text-xs hover:underline">
                Forget Password?
              </button>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2.5 rounded text-sm tracking-wide hover:bg-yellow-500 transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-white text-sm tracking-wide hover:underline"
              >
                Register
              </button>
            </div>

            {/* Social Login */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-white" />
                <span className="text-white text-xs">or continue with</span>
                <div className="flex-1 h-px bg-white" />
              </div>
              
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  className="bg-white p-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img src={imgImage82RemovebgPreview1} alt="Google" className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  className="bg-white p-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img src={imgBlueSocialMediaLogo1977921759RemovebgPreview1} alt="Facebook" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </form>

          {/* Mobile View Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={onSwitchToSignup}
              className="text-white text-sm hover:underline"
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
