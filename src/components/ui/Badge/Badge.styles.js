import styled from 'styled-components';

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 8px 12px;
  margin-bottom: 32px;
  position: absolute;
  top: 4px;
  left: 4px;
  backdrop-filter: blur(16px);
  border: 2px solid ${({ $bagdeColor }) => $bagdeColor};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  z-index: 2;
`;

export const BadgeIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const BadgeLabel = styled.h4`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  margin: 0 0 4px;
  color: var(--color-surface);
`;

export const BadgeTitle = styled.span`
  color: var(--color-surface);
  padding-left: 24px;
`;