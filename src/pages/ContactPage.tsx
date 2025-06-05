import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your server
    console.log(formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="pt-16 bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We're here to help with your medical equipment needs and blood donation questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Phone size={24} className="text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Call Us</h3>
              </div>
              <a href="tel:+11234567890" className="text-neutral-700 hover:text-primary-500 transition-colors">
                +1 (123) 456-7890
              </a>
              <p className="text-neutral-500 text-sm mt-2">
                For urgent inquiries, please call us directly.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Mail size={24} className="text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Email Us</h3>
              </div>
              <a href="mailto:info@medequip.com" className="text-neutral-700 hover:text-primary-500 transition-colors">
                info@medequip.com
              </a>
              <p className="text-neutral-500 text-sm mt-2">
                We'll respond to your email within 24 hours.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Visit Us</h3>
              </div>
              <address className="text-neutral-700 not-italic">
                123 Medical Center Drive<br />
                Healthcare City, HC 12345
              </address>
              <p className="text-neutral-500 text-sm mt-2">
                Our main location with equipment showroom.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Hours</h3>
              </div>
              <p className="text-neutral-700">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM<br />
                Sunday: Closed
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Blood donation hours may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-success-50 border border-success-200 text-success-800 rounded-md p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-success-800">Message Sent!</h3>
                      <div className="mt-2 text-sm text-success-700">
                        <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-neutral-700 font-medium mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-neutral-700 font-medium mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-neutral-700 font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-neutral-700 font-medium mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                        required
                      >
                        <option value="">Select a Subject</option>
                        <option value="product_inquiry">Product Inquiry</option>
                        <option value="donation_info">Blood Donation Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-neutral-700 font-medium mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex items-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map & Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
              <div className="bg-neutral-200 rounded-lg h-[400px] mb-6 overflow-hidden">
                <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-600">
                  {/* In a real implementation, this would be an embedded map */}
                  <div className="text-center p-6">
                    <MapPin size={48} className="mx-auto mb-4 text-neutral-500" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Map would be displayed here in the actual implementation</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">MedEquip Main Center</h3>
                  <p className="text-neutral-600 text-sm">
                    123 Medical Center Drive, Healthcare City, HC 12345
                  </p>
                  <p className="text-primary-500 text-sm mt-1">
                    Equipment showroom & blood donation center
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Downtown Blood Drive</h3>
                  <p className="text-neutral-600 text-sm">
                    456 Central Ave, Healthcare City, HC 12345
                  </p>
                  <p className="text-primary-500 text-sm mt-1">
                    Blood donation only
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Westside Medical Plaza</h3>
                  <p className="text-neutral-600 text-sm">
                    789 Health Blvd, Healthcare City, HC 12345
                  </p>
                  <p className="text-primary-500 text-sm mt-1">
                    Equipment showroom & blood donation center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you offer equipment rentals?</h3>
              <p className="text-neutral-600">
                Yes, we offer short-term and long-term rentals on select medical equipment. Contact our customer service team for availability and pricing.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-neutral-600">
                We accept all major credit cards, healthcare payment plans, purchase orders from verified institutions, and bank transfers.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you offer equipment maintenance?</h3>
              <p className="text-neutral-600">
                Yes, we provide maintenance and repair services for most medical equipment, including those not purchased from us.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can I schedule a group blood donation?</h3>
              <p className="text-neutral-600">
                Absolutely! We welcome group donations from companies, schools, or organizations. Contact us to arrange a convenient time and location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for the latest product information, blood donation drives, and health tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;