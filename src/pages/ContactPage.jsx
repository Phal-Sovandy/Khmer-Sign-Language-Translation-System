import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { socialLinks } from "../config";
import { emailjsConfig, validateEmailjsConfig } from "../config/emailjs";
import { SEO } from "../components/seo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate EmailJS configuration
    if (!validateEmailjsConfig()) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters
      // These variable names should match your EmailJS template variables
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        // Optional: Add reply_to for easier email replies
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // Success
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      // Error handling
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">
      <SEO
        title="Contact"
        url="/contact"
        keywords="contact KSLTS, support, help, inquiry, feedback, get in touch, sign language support, technical support, contact form, reach out"
      />
      <Header showDemoButton={false} />

      <main className="pt-28 pb-16 relative z-10">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40">
          {/* Hero Section */}
          <div className="text-center my-8 md:my-12 lg:my-16">
            <h1 className="font-heading text-[clamp(2rem,6vw,5rem)] font-semibold text-white">
              Lets have a Chat
            </h1>
            <p className="text-white font-sans leading-relaxed text-base md:text-lg mb-3 md:mb-4 px-4">
              We're here to help, listen, and improve — together.
            </p>
            <p className="text-white/70 font-sans leading-relaxed text-base md:text-lg px-4">
              Have a question, found a bug, or want to share an idea?
            </p>
            <p className="text-white/70 font-sans leading-relaxed text-base md:text-lg px-4">
              Reach out anytime and help us make the Khmer Sign Language
              Translation System better.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="max-w-[1500px] mx-auto mb-8 md:mb-12 lg:mb-[90px]">
            {/* Decorative Background Icons */}
            <div className="relative inset-0 pointer-events-none hidden lg:block">
              {/* Paper Airplane Icon - Left */}
              <div className="absolute -left-40 -top-20 opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 512 512"
                  className="w-64 h-64 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                  />
                </svg>
              </div>

              {/* Phone Icon - Right */}
              <div className="absolute -right-40 top-32 opacity-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  className="w-64 h-64 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                  />
                </svg>
              </div>

              {/* Bottom Center Decorative Shape */}
              <div className="absolute top-30 left-1/2 -translate-x-1/2 opacity-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-96 h-96 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.8 7.8 0 0 1 0-4h1.86a16.7 16.7 0 0 0 0 4Zm.82 2h1.4a12 12 0 0 0 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12 12 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.4 14.4 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12 12 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.4 14.4 0 0 1 0 4m.69 4.57a12 12 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86a16 16 0 0 0 .12-2a16 16 0 0 0-.12-2h1.86a7.8 7.8 0 0 1 0 4"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[#0d0d0d]/20 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10 px-0 md:px-4 lg:px-8 py-4 md:py-6">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-between pb-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-7">
                      Send Us a Message
                    </h2>
                    <div className="space-y-3 md:space-y-4 mb-1">
                      <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
                        We’re always excited to connect with users, developers,
                        researchers, and anyone who shares an interest in sign
                        language technology and inclusive communication. Whether
                        you’re sending us feedback, suggesting a feature,
                        exploring collaboration opportunities, or simply curious
                        about artificial intelligence, data science, or software
                        development, we’d love to hear from you.
                      </p>
                      <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
                        Your ideas, questions, and experiences help us improve
                        and grow, and every message you send plays a part in
                        shaping the future of this project. Please fill out the
                        form below with your details and message, and our team
                        will do our best to get back to you as soon as possible.
                      </p>
                      <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
                        If you prefer, you can also reach us via our email or
                        community platforms listed below. We truly appreciate
                        your support and look forward to building something
                        meaningful together.
                      </p>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-0 mt-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-white/70 font-sans text-sm mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-white/70 font-sans text-sm mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>

                    {/* Gmail */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/70 font-sans text-sm mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                        placeholder="john.smith@gmail.com"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white/70 font-sans text-sm mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="^(\+855|0)?[1-9]\d{7,8}$"
                        className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                        placeholder="+85512345678 or 012345678"
                        required
                        title="Please enter a valid Cambodia phone number (8-9 digits). Format: +85512345678 or 012345678"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white/70 font-sans text-sm mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white/70 font-sans text-sm mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-[5px] bg-transparent border border-white/20 rounded-lg text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                        placeholder="Tell us what's on your mind..."
                        required
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-green-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-green-400 font-sans text-sm">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-red-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-red-400 font-sans text-sm">
                          Failed to send message. Please try again later.
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-sans font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
