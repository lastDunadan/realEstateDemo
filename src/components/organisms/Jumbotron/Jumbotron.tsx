'use client';

import Achievement from '@/atoms/Achievement';

import { useJumbotronAnimation } from './Jumbotron.animation';
import {
  AchievementsWrapper,
  ClaimParagraph,
  EstateMock,
  GradientSmear,
  JumbotronBackground,
  JumbotronBody,
  JumbotronColumn,
  MainHeadline,
  TextWrapper,
} from './Jumbotron.styled';
import type { Jumbotron as JumbotronType } from './Jumbotron.types';

export const Jumbotron: JumbotronType = () => {
  const { rootRef, headlineRef, paragraphRef, achievementsRef } =
    useJumbotronAnimation();

  return (
    <JumbotronBody>
      <JumbotronColumn>
        <GradientSmear />
        <TextWrapper ref={rootRef}>
          <MainHeadline ref={headlineRef}>
            Buy, rent, or sell <br />
            your property <br />
            easily
          </MainHeadline>
          <ClaimParagraph ref={paragraphRef}>
            A great platform to buy, sell, or even rent <br />
            your properties without any commissions.
          </ClaimParagraph>
          <AchievementsWrapper ref={achievementsRef}>
            <Achievement countValue="50k+" title="renters" />
            <Achievement countValue="10K+" title="properies" />
          </AchievementsWrapper>
        </TextWrapper>
      </JumbotronColumn>

      <JumbotronColumn>
        <JumbotronBackground
          src="/realEstateDemo/images/jumbotron/jumbotron-map.png"
          alt="Estate Map"
          width={800}
          height={800}
        />
        <EstateMock
          src="/realEstateDemo/images/jumbotron/estate-mock.png"
          alt="Estate Card"
          width={432}
          height={425}
        />
      </JumbotronColumn>
    </JumbotronBody>
  );
};
