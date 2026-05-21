import styled from 'styled-components';
import { Heading, Text } from '../../ui/Typography/Typography.jsx';

export const ServiceCardRoot = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  padding-top: 125%;
  border: 12px solid ${({ $borderColor }) => $borderColor};
  background: var(--color-hero-dark);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px ${({ $borderColor }) => $borderColor};
  }
`;

export const ServiceImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ServiceOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: var(--color-service-overlay);
`;

export const ServiceContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  color: var(--color-surface);
`;

export const ServiceTitle = styled(Heading)`
  max-width: 440px;
  margin-bottom: 24px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

`;

export const ServiceCopy = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const ServiceAction = styled.div`
  align-self: flex-start;
`;
