import styled from 'styled-components';

const headingSizes = {
  hero: 'var(--font-size-heading-hero)',
  section: 'var(--font-size-heading-section)',
  card: 'var(--font-size-heading-card)',
  service: 'var(--font-size-heading-service)',
  process: 'var(--font-size-heading-section)',
};

const headingWeights = {
  hero: 500,
  section: 500,
  card: 500,
  service: 500,
  process: 400,
};

const bodySizes = {
  sm: 'var(--font-size-text-sm)',
  md: 'var(--font-size-text-md)',
  lg: 'var(--font-size-text-lg)',
};

export const Heading = styled.h2`
  margin: 0;
  color: ${({ $color }) => $color || 'inherit'};
  font-size: ${({ $variant = 'section' }) => headingSizes[$variant]};
  font-weight: ${({ $variant = 'section' }) => headingWeights[$variant]};
  overflow-wrap: break-word;
  text-align: ${({ $align }) => $align || 'inherit'};
  margin-bottom: ${({ $variant = 'section' }) => '32px'};

  @media (min-width: 1200px) {
    margin-bottom: ${({ $variant = 'section' }) => '64px'};
  }

`;

export const GradientHeading = styled(Heading)`
  position: relative;
  z-index: 15;
  color: transparent;
  letter-spacing: -2px;
  background: linear-gradient(
    to left,
    var(--color-surface),
    var(--color-primary-soft)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = styled.p`
  margin: ${({ $margin }) => $margin || 0};
  color: ${({ $color }) => $color || 'inherit'};
  font-size: var(--font-size-text-sm);
  position: ${({ $hero }) => $hero == "hero" ? "relative" : "static"};
  z-index: ${({ $hero }) => $hero == "hero" ? "15" : "1"};
`;
