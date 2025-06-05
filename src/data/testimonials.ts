export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  type: 'donor' | 'customer';
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    quote: "Donating blood through MedEquip's platform was incredibly simple. The entire process was well-organized and the staff made me feel comfortable throughout. I'm proud to be a regular donor now!",
    author: "Emily Johnson",
    role: "Regular Blood Donor",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "donor"
  },
  {
    id: 'testimonial-002',
    quote: "As a clinic manager, I've been ordering our medical supplies from MedEquip for years. Their selection is comprehensive, prices are competitive, and their customer service is exceptional.",
    author: "Dr. Michael Chen",
    role: "Medical Clinic Director",
    avatarUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "customer"
  },
  {
    id: 'testimonial-003',
    quote: "I was nervous about donating blood for the first time, but the MedEquip team was incredibly supportive. They explained each step and made the experience positive. I'll definitely return!",
    author: "Marcus Wilson",
    role: "First-Time Donor",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "donor"
  },
  {
    id: 'testimonial-004',
    quote: "The hospital bed we purchased for home care was delivered promptly and is of excellent quality. It's made caring for my father much easier and more comfortable for him.",
    author: "Sarah Martinez",
    role: "Home Caregiver",
    avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "customer"
  },
  {
    id: 'testimonial-005',
    quote: "MedEquip's donation drives at our company have become a regular event that our team looks forward to. They make the process convenient and rewarding for everyone involved.",
    author: "James Taylor",
    role: "Corporate Wellness Coordinator",
    avatarUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "donor"
  },
  {
    id: 'testimonial-006',
    quote: "As a healthcare startup, we needed to outfit our facility quickly and affordably. MedEquip provided everything we needed with expert guidance on equipment selection.",
    author: "Dr. Aaliyah Patel",
    role: "Healthcare Entrepreneur",
    avatarUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "customer"
  }
];

export const getDonorTestimonials = (limit = 3): Testimonial[] => {
  return testimonials
    .filter(testimonial => testimonial.type === 'donor')
    .slice(0, limit);
};

export const getCustomerTestimonials = (limit = 3): Testimonial[] => {
  return testimonials
    .filter(testimonial => testimonial.type === 'customer')
    .slice(0, limit);
};