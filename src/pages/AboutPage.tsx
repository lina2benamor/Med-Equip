import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Globe, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MedEquip</h1>
            <p className="text-xl text-white/90 mb-8">
              We're on a mission to improve healthcare access through quality medical equipment and life-saving blood donation services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                MedEquip was founded in 2010 with a simple vision: to provide healthcare professionals and facilities with reliable, high-quality medical equipment while making a meaningful impact on patient lives through blood donation services.
              </p>
              <p className="text-neutral-700 mb-4">
                What began as a small medical supply store has grown into a comprehensive healthcare resource, offering both premium medical equipment and facilitating blood donations that save thousands of lives each year.
              </p>
              <p className="text-neutral-700">
                Our dual mission sets us apart - we're not just a medical equipment provider, but a community partner committed to improving healthcare outcomes from multiple angles.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="MedEquip team members"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              At MedEquip, our core mission guides everything we do. We're committed to these fundamental values in all aspects of our operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 text-primary-500 p-3 rounded-full inline-block mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-neutral-600">
                We provide only the highest quality medical equipment, ensuring reliability and performance when it matters most.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-secondary-100 text-secondary-500 p-3 rounded-full inline-block mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-neutral-600">
                We approach blood donation and healthcare with genuine compassion, understanding the impact of our work on human lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-success-100 text-success-500 p-3 rounded-full inline-block mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-neutral-600">
                We build strong relationships with healthcare providers, donors, and the communities we serve to create lasting impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-warning-100 text-warning-500 p-3 rounded-full inline-block mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We continually seek innovative solutions to improve healthcare delivery and make blood donation more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Through our combined efforts in medical equipment provision and blood donation facilitation, we've made a meaningful difference in healthcare outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
              <p className="text-neutral-700">Healthcare facilities equipped</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">50,000+</div>
              <p className="text-neutral-700">Blood donations facilitated</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-success-500 mb-2">150,000+</div>
              <p className="text-neutral-700">Lives potentially saved</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/donate" className="btn-secondary">
              Join Our Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Meet the dedicated professionals leading our mission to improve healthcare through quality equipment and blood donation services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dr. Sarah Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
                <p className="text-secondary-500 mb-4">Founder & CEO</p>
                <p className="text-neutral-600">
                  Former hospital administrator with 20+ years of experience in healthcare operations and medical equipment procurement.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dr. Marcus Johnson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Marcus Johnson</h3>
                <p className="text-secondary-500 mb-4">Medical Director</p>
                <p className="text-neutral-600">
                  Board-certified hematologist with extensive experience in blood banking and transfusion medicine.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Elena Rodriguez"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Elena Rodriguez</h3>
                <p className="text-secondary-500 mb-4">Director of Operations</p>
                <p className="text-neutral-600">
                  Supply chain expert with a background in healthcare logistics and distribution systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We collaborate with leading healthcare organizations, hospitals, and blood banks to maximize our impact and reach.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Partner logos would go here - using placeholder divs */}
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div
                key={partner}
                className="bg-neutral-100 h-24 w-full rounded-md flex items-center justify-center text-neutral-400"
              >
                Partner Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a healthcare professional, potential blood donor, or someone passionate about improving healthcare, there's a way for you to get involved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn-white">
              Browse Equipment
            </Link>
            <Link to="/donate/register" className="btn-secondary">
              Donate Blood
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;