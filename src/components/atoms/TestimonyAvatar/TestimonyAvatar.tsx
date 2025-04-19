'use client';

import React, { useRef } from 'react';

import { useAvatarBorderAnimation } from './TestimonyAvatar.animation';
import { AvatarImage, TestimonyAvatarBody } from './TestimonyAvatar.styled';
import type { TestimonyAvatar as TestimonyAvatarType } from './TestimonyAvatar.types';

export const TestimonyAvatar: TestimonyAvatarType = ({
  avatarUrl,
  isActive,
  onClick,
}) => {
  const rootRef = useRef<HTMLDivElement>(null!);
  const circleRef = useRef<SVGCircleElement>(null!);

  useAvatarBorderAnimation({
    isActive,
    circleRef,
    rootRef,
    duration: 12000,
  });

  return (
    <TestimonyAvatarBody ref={rootRef} isActive={isActive} onClick={onClick}>
      <svg width="72" height="72">
        <circle
          ref={circleRef}
          cx="36"
          cy="36"
          r="34"
          fill="none"
          stroke="#6851FF"
          strokeWidth="4"
          strokeDasharray={2 * Math.PI * 34}
          strokeDashoffset={2 * Math.PI * 34}
        />
      </svg>
      <AvatarImage src={avatarUrl} width={60} height={60} alt="avatar" />
    </TestimonyAvatarBody>
  );
};
