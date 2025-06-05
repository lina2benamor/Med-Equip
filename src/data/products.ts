import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 'product-001',
    name: 'Digital Blood Pressure Monitor',
    description: 'Professional-grade digital blood pressure monitor with easy-to-read LCD display. Provides accurate systolic, diastolic, and pulse readings.',
    price: 89.99,
    discountedPrice: 74.99,
    discount: 16,
    category: 'Diagnostic Equipment',
    image: 'https://images.pexels.com/photos/8413264/pexels-photo-8413264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 238,
    isNew: false,
    features: [
      'Automatic inflation and deflation',
      'Stores up to 60 readings with date and time',
      'Irregular heartbeat detection',
      'WHO blood pressure classification indicator',
      'Low battery indicator',
      'Compact and portable design'
    ],
    specifications: {
      'Measurement Range': 'Pressure: 0-299 mmHg, Pulse: 40-199 beats/min',
      'Accuracy': 'Pressure: ±3 mmHg, Pulse: ±5%',
      'Power Source': '4 AAA batteries or AC adapter (included)',
      'Display': 'Large LCD with backlight',
      'Dimensions': '4.7 x 3.9 x 2.0 inches',
      'Weight': '8.8 oz (without batteries)'
    },
    stock: 42,
    sku: 'BPM-D100'
  },
  {
    id: 'product-002',
    name: 'Premium Stethoscope',
    description: 'High-quality acoustic stethoscope designed for medical professionals. Features dual-sided chestpiece for versatile auscultation.',
    price: 120.00,
    discountedPrice: 120.00,
    discount: 0,
    category: 'Diagnostic Equipment',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 412,
    isNew: false,
    features: [
      'Dual-sided chestpiece (diaphragm and bell)',
      'Tunable diaphragm technology',
      'Anatomically designed earpieces',
      'Latex-free materials',
      'Includes extra ear tips and ID tag',
      '5-year warranty'
    ],
    specifications: {
      'Chestpiece Material': 'Stainless steel',
      'Tubing Length': '27 inches',
      'Tubing Material': 'PVC, latex-free',
      'Weight': '5.8 oz',
      'Included Accessories': 'Extra ear tips, ID tag',
      'Warranty': '5-year manufacturer warranty'
    },
    stock: 87,
    sku: 'STH-P200'
  },
  {
    id: 'product-003',
    name: 'Portable Oxygen Concentrator',
    description: 'Lightweight and compact oxygen concentrator for patients requiring supplemental oxygen. Provides up to 5 liters per minute of continuous flow.',
    price: 1299.99,
    discountedPrice: 1199.99,
    discount: 7,
    category: 'Respiratory Equipment',
    image: 'https://images.pexels.com/photos/5752274/pexels-photo-5752274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 186,
    isNew: true,
    features: [
      'Continuous flow up to 5 LPM',
      'Pulse dose technology for extended battery life',
      'LCD display with intuitive controls',
      'Battery operated for mobility (up to 8 hours)',
      'FAA approved for air travel',
      'Quiet operation (< 40dB)'
    ],
    specifications: {
      'Oxygen Flow Rate': '1-5 liters per minute (adjustable)',
      'Oxygen Concentration': '87-95%',
      'Noise Level': '< 40dB',
      'Battery Life': 'Up to 8 hours (setting dependent)',
      'Weight': '4.9 lbs with battery',
      'Dimensions': '8.3 x 3.0 x 8.2 inches',
      'Power Options': 'AC, DC, and rechargeable battery'
    },
    stock: 14,
    sku: 'OXY-P500'
  },
  {
    id: 'product-004',
    name: 'Medical Examination Gloves (Box of 100)',
    description: 'Disposable nitrile examination gloves for medical use. Powder-free and latex-free for reduced risk of allergic reactions.',
    price: 24.99,
    discountedPrice: 19.99,
    discount: 20,
    category: 'Personal Protective Equipment',
    image: 'https://images.pexels.com/photos/4392717/pexels-photo-4392717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 523,
    isNew: false,
    features: [
      'Powder-free and latex-free',
      'Textured fingertips for improved grip',
      'Ambidextrous design',
      'Beaded cuff for easy donning',
      'FDA approved for medical use',
      'Available in sizes S, M, L, XL'
    ],
    specifications: {
      'Material': 'Nitrile (synthetic rubber)',
      'Color': 'Blue',
      'Quantity': '100 gloves per box',
      'Size Options': 'S, M, L, XL',
      'Thickness': '3.5 mil (fingertip)',
      'Standards': 'Meets ASTM D6319 and FDA 21 CFR 170'
    },
    stock: 340,
    sku: 'GLV-N100'
  },
  {
    id: 'product-005',
    name: 'Electric Hospital Bed',
    description: 'Fully electric hospital bed with adjustable height, head, and foot positions. Features side rails and IV pole attachment points.',
    price: 2499.99,
    discountedPrice: 2499.99,
    discount: 0,
    category: 'Hospital Furniture',
    image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 94,
    isNew: false,
    features: [
      'Fully electric with wired remote control',
      'Adjustable height, head, and foot positions',
      'Trendelenburg and reverse Trendelenburg positions',
      'Collapsible side rails with safety locks',
      'IV pole attachment points',
      'Includes mattress and battery backup'
    ],
    specifications: {
      'Weight Capacity': '450 lbs',
      'Height Range': '15-30 inches (adjustable)',
      'Dimensions': '80 x 36 inches (sleeping surface)',
      'Frame Material': 'Powder-coated steel',
      'Mattress Included': 'Yes, pressure-relieving foam',
      'Power': '120V AC, with battery backup',
      'Warranty': '3-year limited warranty'
    },
    stock: 8,
    sku: 'BED-E450'
  },
  {
    id: 'product-006',
    name: 'Pulse Oximeter',
    description: 'Fingertip pulse oximeter for measuring blood oxygen saturation (SpO2) and pulse rate. Compact and easy to use with digital display.',
    price: 39.99,
    discountedPrice: 29.99,
    discount: 25,
    category: 'Diagnostic Equipment',
    image: 'https://images.pexels.com/photos/5749147/pexels-photo-5749147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    reviewCount: 732,
    isNew: false,
    features: [
      'Measures SpO2 and pulse rate',
      'OLED display with multiple viewing angles',
      'One-button operation',
      'Auto power-off after 8 seconds',
      'Low battery indicator',
      'Includes carrying case and lanyard'
    ],
    specifications: {
      'SpO2 Range': '70-99% (±2%)',
      'Pulse Rate Range': '30-250 BPM (±1 BPM)',
      'Power Source': '2 AAA batteries (included)',
      'Battery Life': 'Approximately 30 hours of continuous use',
      'Display': 'Dual-color OLED',
      'Dimensions': '2.2 x 1.2 x 1.2 inches',
      'Weight': '1.8 oz with batteries'
    },
    stock: 215,
    sku: 'OXI-P100'
  },
  {
    id: 'product-007',
    name: 'Digital Infrared Thermometer',
    description: 'Non-contact infrared thermometer for forehead temperature measurement. Fast and accurate readings with fever alarm.',
    price: 49.99,
    discountedPrice: 39.99,
    discount: 20,
    category: 'Diagnostic Equipment',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.4,
    reviewCount: 368,
    isNew: true,
    features: [
      'Non-contact measurement (1-3 inches away)',
      'Results in 1 second',
      'Fever alarm with color-coded display',
      'Stores last 20 measurements',
      'Switches between Celsius and Fahrenheit',
      'Automatic shutdown after 30 seconds'
    ],
    specifications: {
      'Measurement Range': '89.6°F to 109.4°F (32°C to 43°C)',
      'Accuracy': '±0.4°F (±0.2°C)',
      'Measurement Distance': '1-3 inches',
      'Memory': 'Stores last 20 readings',
      'Power Source': '2 AAA batteries (included)',
      'Display': 'Backlit LCD display',
      'Dimensions': '5.7 x 1.6 x 1.2 inches'
    },
    stock: 127,
    sku: 'THM-IR100'
  },
  {
    id: 'product-008',
    name: 'Wheelchair - Lightweight Folding',
    description: 'Lightweight aluminum wheelchair with folding design for easy transport and storage. Features padded armrests and adjustable footrests.',
    price: 299.99,
    discountedPrice: 279.99,
    discount: 6,
    category: 'Mobility Aids',
    image: 'https://images.pexels.com/photos/7659608/pexels-photo-7659608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 203,
    isNew: false,
    features: [
      'Lightweight aluminum frame (weighs only 19 lbs)',
      'Folds flat for easy transport and storage',
      'Padded armrests and seat cushion',
      'Adjustable and removable footrests',
      'Rear wheel locks for safety',
      'Includes seat belt and carry pouch'
    ],
    specifications: {
      'Weight Capacity': '300 lbs',
      'Seat Dimensions': '18 x 16 inches',
      'Chair Weight': '19 lbs without footrests',
      'Frame Material': 'Aluminum',
      'Wheel Size': '24-inch rear wheels, 8-inch front casters',
      'Folded Dimensions': '11 x 29 x 31 inches',
      'Warranty': '2-year limited warranty'
    },
    stock: 34,
    sku: 'WCH-L300'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getNewProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
};

export const getDiscountedProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
};