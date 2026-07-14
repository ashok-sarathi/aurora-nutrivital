'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { contactConfig, getWhatsAppLink } from '@/config/contact';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have questions about Aurora Nutrivital products? We'd love to hear from you. Reach out
            via WhatsApp, email, or contact form.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">WhatsApp</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Quick support and instant responses for product inquiries.
            </p>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium group-hover:gap-3 transition-all">
              {contactConfig.whatsappNumberFormatted}
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Email */}
          {contactConfig.email && (
            <a
              href={`mailto:${contactConfig.email}`}
              className="group p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">Email</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Send us detailed inquiries and feedback via email.
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                {contactConfig.email}
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          )}

          {/* Phone */}
          {contactConfig.phone && (
            <a
              href={`tel:${contactConfig.phone}`}
              className="group p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">Phone</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Call us to discuss your wellness needs directly.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-3 transition-all">
                {contactConfig.whatsappNumberFormatted}
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          )}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="e.g., Product inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="Tell us about your inquiry or feedback..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    ✓ Thank you! Your message has been received.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* FAQ / Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group cursor-pointer">
                  <summary className="flex items-center gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-medium text-zinc-900 dark:text-white">
                    <span className="group-open:rotate-180 transition-transform">▶</span>
                    How can I order products?
                  </summary>
                  <p className="mt-2 px-4 text-zinc-600 dark:text-zinc-400">
                    Aurora Nutrivital is a showcase site. Contact us via WhatsApp or email for product orders and bulk inquiries.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="flex items-center gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-medium text-zinc-900 dark:text-white">
                    <span className="group-open:rotate-180 transition-transform">▶</span>
                    Are all products 100% natural?
                  </summary>
                  <p className="mt-2 px-4 text-zinc-600 dark:text-zinc-400">
                    Yes! All Aurora Nutrivital products are made from 100% natural ingredients with no artificial additives, preservatives, or added sugars.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="flex items-center gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-medium text-zinc-900 dark:text-white">
                    <span className="group-open:rotate-180 transition-transform">▶</span>
                    Which product is suitable for my family?
                  </summary>
                  <p className="mt-2 px-4 text-zinc-600 dark:text-zinc-400">
                    We have products for different life stages and wellness goals. Contact us via WhatsApp to get personalized recommendations.
                  </p>
                </details>

                <details className="group cursor-pointer">
                  <summary className="flex items-center gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-medium text-zinc-900 dark:text-white">
                    <span className="group-open:rotate-180 transition-transform">▶</span>
                    Do you offer bulk/wholesale rates?
                  </summary>
                  <p className="mt-2 px-4 text-zinc-600 dark:text-zinc-400">
                    Yes! We offer special pricing for bulk orders and wholesale. Please contact us for details.
                  </p>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Connect with our team on WhatsApp for instant support and product recommendations.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
