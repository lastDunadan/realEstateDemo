import { useEffect, useState } from 'react';

import type { UseFooter as UseFooterType } from './Footer.types';

export const useFooter: UseFooterType = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return {
    year,
  };
};
