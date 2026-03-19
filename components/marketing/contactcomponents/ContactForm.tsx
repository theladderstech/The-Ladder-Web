// components/marketing/contactcomponents/ContactForm.tsx
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });


    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'No message provided',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false,
      });
      
    } catch (error: any) {
      console.error('Email send failed:', error);
      
      // More detailed error message
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.status === 400) {
        errorMessage = 'Invalid configuration. Please contact support.';
      } else if (error.status === 422) {
        errorMessage = 'Please fill in all required fields correctly.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(24px,4.5vw,40px)] leading-tight font-bold text-[#363A43] font-poppins mb-6 sm:mb-8">
              Get In Touch
            </h2>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[clamp(13px,3vw,14px)] font-medium text-[#363A43]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-[#FFE000] rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[clamp(14px,3.5vw,16px)] text-[#363A43] placeholder:text-[#363A43]/40"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Company Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-[clamp(13px,3vw,14px)] font-medium text-[#363A43]">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[clamp(14px,3.5vw,16px)] text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email and Phone Fields - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[clamp(13px,3vw,14px)] font-medium text-[#363A43]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[clamp(14px,3.5vw,16px)] text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[clamp(13px,3vw,14px)] font-medium text-[#363A43]">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[clamp(14px,3.5vw,16px)] text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[clamp(13px,3vw,14px)] font-medium text-[#363A43]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full px-4 py-3 border border-[#363A43]/20 rounded-lg focus:outline-none focus:border-[#FFE000] focus:ring-2 focus:ring-[#FFE000]/20 text-[clamp(14px,3.5vw,16px)] text-[#363A43] placeholder:text-[#363A43]/40 bg-[#F5F5F5] resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#FFE000] cursor-pointer"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="acceptTerms" className="text-[clamp(12px,3vw,14px)] text-[#363A43]/80 cursor-pointer">
                  I accept the{' '}
                  <a href="/terms" className="text-[#363A43] underline hover:text-[#FFE000]">
                    Terms & Conditions
                  </a>{' '}
                  *
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-3 h-[clamp(44px,10vw,48px)] bg-[#FFE000] text-[#363A43] rounded-lg text-[clamp(14px,3.5vw,16px)] font-semibold hover:bg-[#FFE000]/90 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

            </form>
          </div>



        </div>
      </div>
    </section>
  );
}
