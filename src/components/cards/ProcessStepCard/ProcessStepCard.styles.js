import styled from 'styled-components';
import { Heading } from '../../ui/Typography/Typography.jsx';

export const StepCard = styled.li`
  position: sticky;
  top: 0;
  z-index: ${({ $stackOrder }) => $stackOrder};
  height: 90vh;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: clamp(16px, 4vw, 64px);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  text-align: center;
  box-shadow: var(--shadow-card-soft);

  @media (min-width: 768px) {
    min-height: 56vh;
    border-radius: var(--radius-lg);
  }
`;

export const StepBadge = styled.span`
  width: 116px;
  height: 116px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-surface);
  background: var(--color-primary);
  font-size: 32px;
  font-weight: 800;
`;

export const StepTitle = styled(Heading)`
  margin-bottom: 32px;
`;
