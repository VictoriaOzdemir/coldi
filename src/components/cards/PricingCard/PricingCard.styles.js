import styled from 'styled-components';
import { Heading } from '../../ui/Typography/Typography.jsx';

export const PlanCard = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: ${({ $variant }) =>
    $variant === 'dark'
      ? 'var(--color-surface-dark)'
      : 'var(--color-surface)'};
  color: ${({ $variant }) =>
    $variant === 'dark'
      ? 'var(--color-surface)'
      : 'var(--color-base)'};
  box-shadow: var(--shadow-card);
`;

export const PlanArt = styled.picture`
  display: block;
  width: 100%;
  padding-top: 16px;

  @media (min-width: 992px) {
    flex: 0 0 30%;
    max-width: 30%;
    order: ${({ $variant }) => ($variant === 'dark' ? 2 : 'initial')};
  }
`;

export const PlanImage = styled.img`
  display: block;
  width: 50%;
  height: auto;
  margin-inline: auto;
  object-fit: cover;
  pointer-events: none;

  @media (min-width: 992px) {
    width: 100%;
  }
`;

export const PlanContent = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 32px 16px;

  @media (min-width: 992px) {
    flex: 0 0 70%;
    max-width: 70%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 70%;
    max-width: 70%;
    padding: 48px 32px 64px;
  }
`;

export const PlanHeader = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 112px; 
  width: 274px;
  background-position: bottom;

`;

export const AccentTile = styled.span`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  background: ${({ $accent }) => $accent};
`;

export const Eyebrow = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  text-transform: uppercase;
  font-size: var(--font-size-body);
  font-weight: 800;
  margin-left: -32px;
`;

export const PlanTitle = styled(Heading)`
  margin-block: 18px;
`;

export const PlanPrice = styled.h3`
  display: block;
  margin: 0 0 32px;
  font-size: var(--font-size-price);
  overflow-wrap: break-word;
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: 16px;
  margin: 0 0 32px;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 8px;
  align-items: start;
  min-width: 0;
  font-size: var(--font-size-text-sm);

  span:last-child {
    min-width: 0;
    overflow-wrap: break-word;
  }
`;

export const CheckIcon = styled.span`
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-surface);
  background: var(--color-primary);
`;
