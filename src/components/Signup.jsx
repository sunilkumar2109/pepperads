import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import React, { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Common function to send welcome email
  const sendWelcomeEmail = (email) => {
    fetch('http://localhost:5000/send-welcome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Email failed');
        console.log('✅ Welcome email sent');
      })
      .catch((err) => console.error('❌ Email error:', err));
  };

  // Email/password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      alert('Thank you for your interest. Someone from our team will contact you shortly');

      sendWelcomeEmail(user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      sendWelcomeEmail(user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Microsoft signup
  const handleMicrosoftSignup = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      sendWelcomeEmail(user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Apple signup
  const handleAppleSignup = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      sendWelcomeEmail(user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="mb-6">
        <img
          src="https://i.postimg.cc/qMm2RWb3/pepperads-logo-removebg-preview.png"
          alt="PepperAds"
          className="h-20"
        />
      </div>

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

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-start text-sm text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded"
                />
                <span className="ml-2">
                  You agree to the <span className="underline">Terms of Use</span> and{' '}
                  <span className="underline">Privacy Notice</span>
                </span>
              </label>
              <label className="flex items-start text-sm text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded"
                />
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
              <button
                onClick={handleMicrosoftSignup}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
              </button>
              <button
                onClick={handleGoogleSignup}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </button>
              <button
                onClick={handleAppleSignup}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
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
