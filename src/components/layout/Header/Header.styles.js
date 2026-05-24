import styled from 'styled-components';
import { ContainerRoot } from '../../ui/Container/Container.styles.js';
import { RevealItem } from '../../sections/Hero/HeroSection.styles.js';

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 16px;
  background: var(--color-surface);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-header);

  @media (min-width: 768px) {
    height: 75px;
  }
`;

export const HeaderContainer = styled(ContainerRoot)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogoRevealItem = styled(RevealItem)`
  background: var(--color-surface);
`;

export const BrandLink = styled.a`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: var(--color-base);
  text-decoration: none;
  font-size: var(--font-size-logo);
  font-weight: 800;

  img {
    display: block;
    max-width: 96px;
    height: auto;

     @media (min-width: 1200px) {
      max-width: 116px;
    }
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 6px;
  }
`;
