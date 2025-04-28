import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Logo outside the card */}
      <div className="mb-6">
        <img
          src="https://i.postimg.cc/qMm2RWb3/pepperads-logo-removebg-preview.png"
          alt="PepperAds"
          className="h-20"
        />
      </div>

      {/* Glassmorphic signup box */}
      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <p className="text-white">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#E31B23] hover:underline font-medium"
            >
              Log in
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-300 mb-8">Get started with PepperAds</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-start text-sm text-white">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded" />
                <span className="ml-2">
                  You agree to the <span className="underline">Terms of Use</span> and <span className="underline">Privacy Notice</span>
                </span>
              </label>
              <label className="flex items-start text-sm text-white">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded" />
                <span className="ml-2">
                  You agree to receive product news and special promotions via email
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E31B23] text-white py-3 rounded-lg font-medium hover:bg-[#C41820] transition-colors"
            >
              Next
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-white/60">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
