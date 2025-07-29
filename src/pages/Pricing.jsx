import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, Mail, User, Building, MessageSquare, CheckCircle } from 'lucide-react';

const Pricing = () => {
  const modalRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyUrl: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUrl = (url) => {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-])\/?$/;
    return urlRegex.test(url);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyUrl.trim()) {
      newErrors.companyUrl = 'Company URL is required';
    } else if (!validateUrl(formData.companyUrl)) {
      newErrors.companyUrl = 'Please enter a valid URL (e.g., company.com)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your needs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      validateEmail(formData.email) &&
      formData.companyUrl.trim() &&
      validateUrl(formData.companyUrl) &&
      formData.message.trim()
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    console.log('Form validation result:', validateForm());
    
    if (!validateForm()) {
      console.log('Form validation failed, errors:', errors);
      return;
    }

    console.log('Form is valid, proceeding with submission');
    setIsVisible(false);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.close();
      }
      setShowPopup(true);
    }, 300);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.close();
      }
    }, 300);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 backdrop-blur-md z-50">
      {/* Contact Form Modal */}
      <dialog
        ref={modalRef}
        className={`rounded-2xl p-0 w-[95%] max-w-lg bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl border-0 transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{ backdropFilter: 'none', background: 'transparent' }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-red-500/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          {/* Close Button */}
         

          <div className="relative p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-4 shadow-lg shadow-red-500/25">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h2>
              <p className="text-gray-600 leading-relaxed">
                Join the waitlist and be the first to receive our special launch pricing when we go live.
              </p>
            </div>

            {/* Form Validation Summary */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600 font-medium">Please fix the following errors:</p>
                <ul className="mt-1 text-sm text-red-600 list-disc list-inside">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Form */}
            <div className="space-y-5">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name *"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 bg-white/70 backdrop-blur-sm ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-red-500/20 focus:border-red-500'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 bg-white/70 backdrop-blur-sm ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-red-500/20 focus:border-red-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Company URL Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  name="companyUrl"
                  placeholder="Company URL * (e.g., company.com)"
                  required
                  value={formData.companyUrl}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 bg-white/70 backdrop-blur-sm ${
                    errors.companyUrl 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-red-500/20 focus:border-red-500'
                  }`}
                />
                {errors.companyUrl && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyUrl}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your needs *"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 bg-white/70 backdrop-blur-sm resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-red-500/20 focus:border-red-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-500/25 hover:shadow-red-500/40 cursor-pointer"
              >
                Submit
              </button>
            </div>

            {/* Required Fields Notice */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                * All fields are required
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-500">
                🔒 We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white px-8 py-8 rounded-2xl shadow-2xl border-0 max-w-md w-[90%] text-center space-y-6 transform animate-in zoom-in duration-300">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-2 shadow-lg shadow-green-500/25">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            {/* Success Message */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list! 🎉</h3>
              <p className="text-gray-600 leading-relaxed">
                Thanks for your interest! We'll send you exclusive early access pricing as soon as we launch.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong>What's next?</strong> Keep an eye on your inbox for updates and special offers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;