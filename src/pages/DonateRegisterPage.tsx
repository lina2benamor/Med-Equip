import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { AlertCircle, CheckCircle } from 'lucide-react';

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  healthInfo: {
    bloodType: string;
    weight: string;
    height: string;
    hasDonatedBefore: boolean;
    lastDonationDate: string;
    medications: string;
    conditions: string[];
  };
  appointment: {
    date: string;
    time: string;
    location: string;
    donationType: string;
  };
}

const initialFormData: FormData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
  },
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  healthInfo: {
    bloodType: '',
    weight: '',
    height: '',
    hasDonatedBefore: false,
    lastDonationDate: '',
    medications: '',
    conditions: [],
  },
  appointment: {
    date: '',
    time: '',
    location: '',
    donationType: 'whole_blood',
  },
};

const DonateRegisterPage: React.FC = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as FormStep);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((step - 1) as FormStep);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit to a server here
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const updateFormData = (
    section: keyof FormData,
    field: string,
    value: any
  ) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const updateHealthCondition = (condition: string, isChecked: boolean) => {
    const conditions = formData.healthInfo.conditions;
    
    if (isChecked) {
      setFormData({
        ...formData,
        healthInfo: {
          ...formData.healthInfo,
          conditions: [...conditions, condition],
        },
      });
    } else {
      setFormData({
        ...formData,
        healthInfo: {
          ...formData.healthInfo,
          conditions: conditions.filter(c => c !== condition),
        },
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-28 pb-16 bg-neutral-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mb-6">
              <CheckCircle size={32} className="text-success-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Registration Complete!</h1>
            <p className="text-neutral-600 mb-6">
              Thank you for registering to donate blood. Your appointment has been scheduled for:
            </p>
            <div className="bg-neutral-100 p-4 rounded-lg mb-8 inline-block">
              <p className="text-lg font-semibold">
                {formData.appointment.date} at {formData.appointment.time}
              </p>
              <p>{formData.appointment.location}</p>
            </div>
            <p className="text-neutral-600 mb-8">
              We've sent a confirmation email to {formData.personalInfo.email} with all the details and preparation instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                onClick={() => navigate('/donate')}
              >
                Return to Donation Page
              </Button>
              <Button 
                variant="white"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData(initialFormData);
                  setStep(1);
                }}
              >
                Register Another Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 bg-neutral-50">
      <div className="container-custom max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Register to Donate Blood</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Complete this form to schedule your blood donation appointment. Your generosity can save up to three lives.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 text-center relative ${
                  s < step ? 'text-primary-500' : s === step ? 'text-primary-500' : 'text-neutral-400'
                }`}
              >
                <div
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white mb-2 ${
                    s < step
                      ? 'bg-primary-500'
                      : s === step
                      ? 'bg-primary-500'
                      : 'bg-neutral-300'
                  }`}
                >
                  {s < step ? '✓' : s}
                </div>
                <div
                  className={`text-sm font-medium ${
                    s <= step ? 'text-primary-500' : 'text-neutral-400'
                  }`}
                >
                  {s === 1
                    ? 'Personal Info'
                    : s === 2
                    ? 'Address'
                    : s === 3
                    ? 'Health Info'
                    : 'Appointment'}
                </div>
                {s < 4 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-1 ${
                      s < step ? 'bg-primary-500' : 'bg-neutral-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-neutral-700 font-medium mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.personalInfo.firstName}
                      onChange={(e) => updateFormData('personalInfo', 'firstName', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-neutral-700 font-medium mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.personalInfo.lastName}
                      onChange={(e) => updateFormData('personalInfo', 'lastName', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.personalInfo.email}
                      onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 font-medium mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.personalInfo.phone}
                      onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-neutral-700 font-medium mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={formData.personalInfo.dateOfBirth}
                      onChange={(e) => updateFormData('personalInfo', 'dateOfBirth', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-neutral-700 font-medium mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      value={formData.personalInfo.gender}
                      onChange={(e) => updateFormData('personalInfo', 'gender', e.target.value)}
                      className="input"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address Information */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Address Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="street" className="block text-neutral-700 font-medium mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="street"
                      value={formData.address.street}
                      onChange={(e) => updateFormData('address', 'street', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-neutral-700 font-medium mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.address.city}
                        onChange={(e) => updateFormData('address', 'city', e.target.value)}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-neutral-700 font-medium mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="state"
                        value={formData.address.state}
                        onChange={(e) => updateFormData('address', 'state', e.target.value)}
                        className="input"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        {/* Add all states here */}
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        <option value="WA">Washington</option>
                        {/* ... */}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-neutral-700 font-medium mb-1">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={formData.address.zipCode}
                      onChange={(e) => updateFormData('address', 'zipCode', e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Health Information */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Health Information</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          The health information you provide here is only for initial screening. A more thorough assessment will be conducted on the day of donation to determine your eligibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bloodType" className="block text-neutral-700 font-medium mb-1">
                      Blood Type (if known)
                    </label>
                    <select
                      id="bloodType"
                      value={formData.healthInfo.bloodType}
                      onChange={(e) => updateFormData('healthInfo', 'bloodType', e.target.value)}
                      className="input"
                    >
                      <option value="">Select Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="unknown">I don't know</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="weight" className="block text-neutral-700 font-medium mb-1">
                      Weight (lbs) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="weight"
                      value={formData.healthInfo.weight}
                      onChange={(e) => updateFormData('healthInfo', 'weight', e.target.value)}
                      min="0"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-neutral-700 font-medium mb-1">
                      Height (inches)
                    </label>
                    <input
                      type="number"
                      id="height"
                      value={formData.healthInfo.height}
                      onChange={(e) => updateFormData('healthInfo', 'height', e.target.value)}
                      min="0"
                      className="input"
                    />
                  </div>
                  <div>
                    <p className="block text-neutral-700 font-medium mb-1">
                      Have you donated blood before? <span className="text-red-500">*</span>
                    </p>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="hasDonatedBefore"
                          checked={formData.healthInfo.hasDonatedBefore === true}
                          onChange={() => updateFormData('healthInfo', 'hasDonatedBefore', true)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                          required
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="hasDonatedBefore"
                          checked={formData.healthInfo.hasDonatedBefore === false}
                          onChange={() => updateFormData('healthInfo', 'hasDonatedBefore', false)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {formData.healthInfo.hasDonatedBefore && (
                  <div>
                    <label htmlFor="lastDonationDate" className="block text-neutral-700 font-medium mb-1">
                      Date of Last Donation
                    </label>
                    <input
                      type="date"
                      id="lastDonationDate"
                      value={formData.healthInfo.lastDonationDate}
                      onChange={(e) => updateFormData('healthInfo', 'lastDonationDate', e.target.value)}
                      className="input"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="medications" className="block text-neutral-700 font-medium mb-1">
                    Current Medications (if any)
                  </label>
                  <textarea
                    id="medications"
                    value={formData.healthInfo.medications}
                    onChange={(e) => updateFormData('healthInfo', 'medications', e.target.value)}
                    className="input h-24 resize-none"
                    placeholder="List any medications you are currently taking"
                  ></textarea>
                </div>
                
                <div>
                  <p className="block text-neutral-700 font-medium mb-3">
                    Do you have any of the following conditions? (Check all that apply)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'High blood pressure',
                      'Diabetes',
                      'Heart disease',
                      'Respiratory conditions',
                      'Blood disorders',
                      'Recent surgeries',
                      'Tattoos within past 3 months',
                      'Recent travel outside the country'
                    ].map((condition) => (
                      <label key={condition} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.healthInfo.conditions.includes(condition)}
                          onChange={(e) => updateHealthCondition(condition, e.target.checked)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                        />
                        <span className="ml-2 text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Appointment Information */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Schedule Your Appointment</h2>
                
                <div>
                  <label htmlFor="donationType" className="block text-neutral-700 font-medium mb-1">
                    Donation Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="donationType"
                    value={formData.appointment.donationType}
                    onChange={(e) => updateFormData('appointment', 'donationType', e.target.value)}
                    className="input"
                    required
                  >
                    <option value="whole_blood">Whole Blood Donation</option>
                    <option value="plasma">Plasma Donation</option>
                    <option value="platelets">Platelet Donation</option>
                    <option value="double_red">Double Red Cell Donation</option>
                  </select>
                  <p className="text-sm text-neutral-500 mt-1">
                    Not sure? Whole Blood is the most common donation type and takes about 10 minutes.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-neutral-700 font-medium mb-1">
                    Donation Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="location"
                    value={formData.appointment.location}
                    onChange={(e) => updateFormData('appointment', 'location', e.target.value)}
                    className="input"
                    required
                  >
                    <option value="">Select a Location</option>
                    <option value="MedEquip Main Center - 123 Medical Drive">MedEquip Main Center - 123 Medical Drive</option>
                    <option value="Downtown Blood Drive - 456 Central Ave">Downtown Blood Drive - 456 Central Ave</option>
                    <option value="Westside Medical Plaza - 789 Health Blvd">Westside Medical Plaza - 789 Health Blvd</option>
                    <option value="Eastside Community Center - 101 Community Way">Eastside Community Center - 101 Community Way</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-neutral-700 font-medium mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.appointment.date}
                      onChange={(e) => updateFormData('appointment', 'date', e.target.value)}
                      className="input"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-neutral-700 font-medium mb-1">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      value={formData.appointment.time}
                      onChange={(e) => updateFormData('appointment', 'time', e.target.value)}
                      className="input"
                      required
                    >
                      <option value="">Select a Time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Before Your Appointment</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
                    <li>Get a good night's sleep before your donation</li>
                    <li>Eat a healthy meal 2-3 hours before donating</li>
                    <li>Drink plenty of water before your appointment</li>
                    <li>Bring a photo ID and list of medications you're taking</li>
                    <li>Wear a shirt with sleeves that can be rolled up</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <span className="ml-2 text-sm">
                      I confirm that the information provided is accurate, and I consent to the collection and processing of my personal and health information for the purpose of blood donation.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button type="button\" variant="white\" onClick={handlePrev}>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              {step < 4 ? (
                <Button type="button" variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="secondary">
                  Submit Registration
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateRegisterPage;