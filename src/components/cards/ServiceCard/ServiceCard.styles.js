import styled from 'styled-components';
import { Heading, Text } from '../../ui/Typography/Typography.jsx';

export const ServiceCardRoot = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  padding-top: 133.33%;
  border: 12px solid ${({ $borderColor }) => $borderColor};
  background: var(--color-hero-dark);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 16px ${({ $borderColor }) => $borderColor};
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
  color: var(--color-surface);
`;

export const ServiceContentInner = styled.div`
  padding: clamp(16px, 4vw, 24px);
  padding-top: 0;
  color: var(--color-surface);
  margin-bottom: auto;
`;

export const ServiceTitle = styled(Heading)`
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
  -webkit-line-clamp: 4;
  margin-bottom: 28px;
  height: 78px;
  overflow: hidden;
`;

export const ServiceAction = styled.div`
  align-self: flex-start;
`;
