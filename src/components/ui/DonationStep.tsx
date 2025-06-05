import React from 'react';

interface DonationStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DonationStep: React.FC<DonationStepProps> = ({
  number,
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500">
          {icon}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 rounded-full bg-secondary-500 text-white flex items-center justify-center text-sm font-bold mr-2">
            {number}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default DonationStep;