'use client';

import { animate, createScope } from 'animejs';
import { useEffect, useRef } from 'react';

import type { UseJumbotronAnimation as UseJumbotronAnimationType } from './Jumbotron.types';

export const useJumbotronAnimation: UseJumbotronAnimationType = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = createScope({ root: rootRef }).add(() => {
      if (
        !headlineRef.current ||
        !paragraphRef.current ||
        !achievementsRef.current
      )
        return;

      animate(headlineRef.current, {
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 600,
        delay: 100,
        easing: 'easeOutQuad',
      });

      animate(paragraphRef.current, {
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 600,
        delay: 500,
        easing: 'easeOutQuad',
      });

      animate(achievementsRef.current, {
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 600,
        delay: 1000,
        easing: 'easeOutQuad',
      });
    });

    return () => scope.revert();
  }, []);

  return {
    rootRef,
    headlineRef,
    paragraphRef,
    achievementsRef,
  };
};
