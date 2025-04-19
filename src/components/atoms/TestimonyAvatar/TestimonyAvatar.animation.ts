import { animate, createScope } from 'animejs';
import { useEffect, useRef } from 'react';

import type { UseAvatarBorderAnimation as UseAvatarBorderAnimationType } from './TestimonyAvatar.types';

export const useAvatarBorderAnimation: UseAvatarBorderAnimationType = (
  isActive,
  circleRef,
  rootRef,
  duration = 12000,
) => {
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (circleRef === null) {
      return;
    }

    if (isActive && rootRef.current && circleRef.current) {
      const r = parseFloat(circleRef.current.getAttribute('r') || '34');
      const circumference = 2 * Math.PI * r;

      scopeRef.current = createScope({ root: rootRef }).add(() => {
        animate(circleRef.current!, {
          strokeDashoffset: [circumference, 0],
          duration,
          easing: 'linear',
        });
      });
    }

    return () => {
      scopeRef.current?.revert();
      scopeRef.current = null;
    };
  }, [isActive]);
};
