import { useEffect, useState } from 'react';

import type { UseTestimonies } from './Testimonies.types';

export const useTestimonies: UseTestimonies = testimonies => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonies.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [testimonies.length]);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeTestimony: testimonies[activeIndex],
    activeIndex,
    handleAvatarClick,
  };
};
