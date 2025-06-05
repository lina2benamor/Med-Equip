import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  Clipboard, 
  Droplet, 
  Heart, 
  Clock, 
  Activity,
  ChevronRight
} from 'lucide-react';
import DonationStep from '../components/ui/DonationStep';
import Button from '../components/ui/Button';
import Testimonial from '../components/ui/Testimonial';
import { getDonorTestimonials } from '../data/testimonials';

const donorTestimonials = getDonorTestimonials(3);

const DonationPage: React.FC = () => {
  return (
    <div className="pt-16 bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-secondary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/6823496/pexels-photo-6823496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
              opacity: '0.2'
            }}
          ></div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Donate Blood, Save Lives
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your donation can save up to three lives. Join our community of donors and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate/register" className="btn-secondary">
                Register to Donate
              </Link>
              <a href="#learn-more" className="btn-white">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary-900 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">4.5M</div>
              <p className="text-neutral-700">Americans need blood yearly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">43,000</div>
              <p className="text-neutral-700">Pints donated daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">3</div>
              <p className="text-neutral-700">Lives saved per donation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">10-15</div>
              <p className="text-neutral-700">Minutes to donate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section id="learn-more" className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Donate Blood?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Blood donation is a simple way to make a huge impact. Every donation can save up to three lives and help countless others in need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-secondary-100 text-secondary-500 p-3 rounded-full inline-block mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Lives</h3>
              <p className="text-neutral-600">
                Your donation can help accident victims, surgery patients, cancer patients, and many others in critical need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-secondary-100 text-secondary-500 p-3 rounded-full inline-block mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
              <p className="text-neutral-600">
                Donating blood can reduce harmful iron stores, improve blood flow, and provide a free mini health check-up.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-secondary-100 text-secondary-500 p-3 rounded-full inline-block mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick & Easy</h3>
              <p className="text-neutral-600">
                The donation process takes only about 10-15 minutes, but the impact of your generosity lasts much longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Donation Process</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Donating blood is a simple and streamlined process. Here's what to expect when you donate with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <DonationStep
                number={1}
                title="Registration"
                description="Complete a quick registration form with your basic information and medical history."
                icon={<Clipboard size={24} />}
              />
              <DonationStep
                number={2}
                title="Mini-Physical"
                description="Undergo a brief health check including temperature, pulse, blood pressure, and hemoglobin levels."
                icon={<Activity size={24} />}
              />
              <DonationStep
                number={3}
                title="Donation"
                description="The actual donation takes only 10-15 minutes, during which you'll be comfortably seated."
                icon={<Droplet size={24} />}
              />
              <DonationStep
                number={4}
                title="Refreshments"
                description="Enjoy complimentary refreshments as you rest for 15 minutes before resuming your day."
                icon={<CalendarCheck size={24} />}
              />
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5452255/pexels-photo-5452255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blood donation process"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">45</div>
                <div className="text-sm">minutes<br />total time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Are You Eligible to Donate?</h2>
              <p className="text-neutral-600 mb-6">
                Most healthy adults are eligible to donate blood. Here are some general requirements:
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-medium">Age:</span> Be at least 17 years old (16 with parental consent in some states)
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-medium">Weight:</span> Weigh at least 110 pounds
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-medium">Health:</span> Be in good general health and feeling well
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-success-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-medium">Time:</span> It must be at least 56 days since your last whole blood donation
                  </div>
                </li>
              </ul>
              <p className="text-neutral-600 mt-6">
                Some medical conditions or medications may affect your eligibility. Our staff will conduct a confidential screening to determine if you're eligible on the day of donation.
              </p>
              <div className="mt-8">
                <Link to="/donate/register" className="btn-secondary">
                  Register to Donate
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-neutral-200 pb-4">
                  <h4 className="font-medium mb-2">How often can I donate blood?</h4>
                  <p className="text-neutral-600">
                    You can donate whole blood every 56 days (8 weeks), plasma every 28 days, and platelets every 7 days (up to 24 times per year).
                  </p>
                </div>
                <div className="border-b border-neutral-200 pb-4">
                  <h4 className="font-medium mb-2">Does donating blood hurt?</h4>
                  <p className="text-neutral-600">
                    Most donors feel only a brief sting when the needle is inserted. The donation itself is typically painless.
                  </p>
                </div>
                <div className="border-b border-neutral-200 pb-4">
                  <h4 className="font-medium mb-2">How should I prepare for donation?</h4>
                  <p className="text-neutral-600">
                    Eat a healthy meal, drink plenty of fluids, wear a shirt with sleeves that can be raised above the elbow, and bring your ID.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What happens to my blood after donation?</h4>
                  <p className="text-neutral-600">
                    Your blood is tested, processed, and distributed to hospitals and medical facilities where it's needed most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Donor Stories</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hear from people who have experienced the rewarding feeling of donating blood and making a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorTestimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your donation can save up to three lives. Register today to become a blood donor.
          </p>
          <Link to="/donate/register" className="btn-white">
            Register to Donate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;