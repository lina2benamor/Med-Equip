import React from 'react';
import { Stethoscope, Activity, Wind, Shield, Bed, Armchair as Wheelchair, ChevronFirst as FirstAid, Microscope } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Diagnostic Equipment',
    description: 'Essential tools for patient examination and diagnosis',
    icon: <Stethoscope size={24} className="text-primary-500" />,
    color: 'border-primary-500',
    slug: 'diagnostic-equipment'
  },
  {
    id: 'cat-002',
    name: 'Monitoring Devices',
    description: 'Equipment for tracking vital signs and patient status',
    icon: <Activity size={24} className="text-secondary-500" />,
    color: 'border-secondary-500',
    slug: 'monitoring-devices'
  },
  {
    id: 'cat-003',
    name: 'Respiratory Equipment',
    description: 'Devices to assist with breathing and respiratory therapy',
    icon: <Wind size={24} className="text-success-500" />,
    color: 'border-success-500',
    slug: 'respiratory-equipment'
  },
  {
    id: 'cat-004',
    name: 'Personal Protective Equipment',
    description: 'Protective gear for healthcare professionals',
    icon: <Shield size={24} className="text-warning-500" />,
    color: 'border-warning-500',
    slug: 'personal-protective-equipment'
  },
  {
    id: 'cat-005',
    name: 'Hospital Furniture',
    description: 'Specialized furniture for medical facilities',
    icon: <Bed size={24} className="text-error-500" />,
    color: 'border-error-500',
    slug: 'hospital-furniture'
  },
  {
    id: 'cat-006',
    name: 'Mobility Aids',
    description: 'Equipment to assist with patient mobility and transfer',
    icon: <Wheelchair size={24} className="text-primary-700" />,
    color: 'border-primary-700',
    slug: 'mobility-aids'
  },
  {
    id: 'cat-007',
    name: 'First Aid & Wound Care',
    description: 'Supplies for emergency treatment and wound management',
    icon: <FirstAid size={24} className="text-secondary-700" />,
    color: 'border-secondary-700',
    slug: 'first-aid-wound-care'
  },
  {
    id: 'cat-008',
    name: 'Laboratory Equipment',
    description: 'Tools and instruments for medical testing and analysis',
    icon: <Microscope size={24} className="text-neutral-700" />,
    color: 'border-neutral-700',
    slug: 'laboratory-equipment'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};