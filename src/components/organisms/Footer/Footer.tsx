'use client';

import Image from 'next/image';
import Link from 'next/link';

import MainLogo from '@/atoms/MainLogo';
import { useFooter } from '@/organisms/Footer/Footer.hook';

import {
  Copyrights,
  FooterBody,
  LinksSection,
  SocialLink,
  SocialLinks,
  VerticalSection,
} from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

export const Footer: FooterType = () => {
  const { year } = useFooter();

  return (
    <FooterBody>
      <VerticalSection border>
        <MainLogo />
        <LinksSection>
          <Link href="#">Help Center</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">TERMS & PRIVACY</Link>
        </LinksSection>
      </VerticalSection>
      <VerticalSection>
        <Copyrights>©{year} Estatery. All rights reserved.</Copyrights>
        <SocialLinks>
          <SocialLink href="#">
            <Image
              src="/realEstateDemo/images/social/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </SocialLink>
          <SocialLink href="#">
            <Image
              src="/realEstateDemo/images/social/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </SocialLink>
          <SocialLink href="#">
            <Image
              src="/realEstateDemo/images/social/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </SocialLink>
          <SocialLink href="#">
            <Image
              src="/realEstateDemo/images/social/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </SocialLink>
        </SocialLinks>
      </VerticalSection>
    </FooterBody>
  );
};
