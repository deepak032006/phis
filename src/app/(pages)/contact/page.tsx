'use client';

import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#b2dde3] to-[##e0f7fa] px-4 mt-15">
      <form
        action="https://formsubmit.co/970de22de88802dfc425acde6bbb42a7"
        method="POST"
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        {/* Hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://phishdefense.com/" />

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#45c2a4] text-center">Contact Us</h2>
        <p className="text-center text-gray-600">We&apos;d love to hear from you</p>

        {/* Name */}
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#45c2a4]"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#45c2a4]"
        />

        {/* Phone Number */}
        <PhoneInput
          placeholder="Phone number"
          value={phone}
          onChange={setPhone}
          defaultCountry="US"
          name="phone"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#45c2a4] bg-white text-black"
        />
        {typeof phone === 'string' && phone !== '' && !isValidPhoneNumber(phone) && (
          <p className="text-red-500 text-sm mt-1">Invalid phone number</p>
        )}

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#45c2a4] resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!phone || !isValidPhoneNumber(phone)}
          className={`w-full px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
            phone && isValidPhoneNumber(phone)
              ? 'bg-[#45c2a4] text-white hover:bg-[#3db194]'
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
