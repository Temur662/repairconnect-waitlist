'use client'

import React, { useState } from 'react'
import { toast } from 'sonner';

export default function AddToWaitlistForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        const date = new Date().toISOString();
        setIsSubmitting(true);
        const response = await fetch("/api/AddToWaitlist", {
          method: "POST",
          body: JSON.stringify({ email, date }),
        });
        if (response.ok) {
          toast.success("Email added to waitlist");
          (e.target as HTMLFormElement).email.value = "";
        } else {
            const responseData = await response.json();
            if (responseData.message === "Email already in waitlist") {
                toast.error("Email already in waitlist");
            } else {
                toast.error("Failed to add email to waitlist");
            }
        }
        
        setIsSubmitting(false);
      };
  return (
    <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email"
            className="flex-1 px-4 py-4 rounded-xl shadow text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#536bf2] to-[#007FFF] text-white font-semibold text-sm shadow transition flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Join Waitlist"
            )}
          </button>
        </form>
  )
}