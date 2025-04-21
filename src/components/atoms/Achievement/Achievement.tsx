import { AchievementBody, Count, Title } from './Achievement.styled';
import type { Achievement as AchievementType } from './Achievement.types';

export const Achievement: AchievementType = ({ countValue, title }) => (
  <AchievementBody>
    <Count>{countValue}</Count>
    <Title>{title}</Title>
  </AchievementBody>
);
