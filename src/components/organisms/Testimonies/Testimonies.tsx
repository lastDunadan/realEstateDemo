import TestimonyAvatar from '@/atoms/TestimonyAvatar';

import { useTestimonies } from './Testimonies.hook';
import {
  AvatarArray,
  Headline,
  Name,
  Paragraph,
  TestimoniesBody,
  Testimony,
} from './Testimonies.styled';
import type { Testimonies as TestimoniesType } from './Testimonies.types';

export const Testimonies: TestimoniesType = ({ testimonies }) => {
  const { activeTestimony, activeIndex, handleAvatarClick } =
    useTestimonies(testimonies);

  return (
    <TestimoniesBody>
      <Headline>Testimonials</Headline>
      <Paragraph>
        See what our property managers, landlords, and tenants have to say:
      </Paragraph>
      <Testimony>{activeTestimony.text}</Testimony>
      <Name>{activeTestimony.name}</Name>
      <AvatarArray>
        {testimonies.map((t, index) => (
          <TestimonyAvatar
            key={t.name}
            avatarUrl={t.image}
            isActive={index === activeIndex}
            onClick={() => handleAvatarClick(index)}
          />
        ))}
      </AvatarArray>
    </TestimoniesBody>
  );
};
