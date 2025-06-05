import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatarUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <svg
          className="text-primary-500 h-8 w-8 mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-neutral-700 italic">{quote}</p>
      </div>
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;