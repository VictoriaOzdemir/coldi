import styled from 'styled-components';

export const HeroRoot = styled.section`
  position: relative;
  min-height: 1160px;
  padding: 32px 16px 0;
  overflow-x: hidden;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroWave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export const HeroCircle = styled.span`
  position: absolute;
  left: ${({ $placement }) => ($placement === 'start' ? '50%' : 'unset')};
  top: ${({ $placement }) => ($placement === 'start' ? '50%' : 'unset')};
  right: ${({ $placement }) => ($placement === 'start' ? 'unset' : '-30%')};
  bottom: ${({ $placement }) => ($placement === 'start' ? 'unset' : '-15%')};
  width: ${({ $placement }) => ($placement === 'start' ? '1000px' : '600px')};
  height: ${({ $placement }) => ($placement === 'start' ? '1000px' : '600px')};
  border-radius: 50%;
  background: var(--color-hero-dark);
  transform: translate(-50%, -50%);
`;

export const HeroCopy = styled.div`
  position: relative;
  display: inline-block;
  color: var(--color-surface);
  padding-top: 64px;

  @media (min-width: 1200px) {
    padding-top: 96px;
  }
`;

export const PricingList = styled.ul`
  position: relative;
  z-index: 12;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap-lg);
  margin: var(--pricing-grid-offset) 0 64px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
