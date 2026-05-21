import styled from 'styled-components';

export const PrimaryButtonRoot = styled.a`
  display: inline-block;
  padding: 16px 24px;
  border: 0;
  border-radius: var(--radius-pill);
  color: var(--color-surface);
  background: var(--color-primary);
  text-decoration: none;
  font-size: var(--font-size-button);
  font-weight: 500;
  box-shadow: var(--shadow-button);
  transition:
    transform var(--motion-fast),
    box-shadow var(--motion-fast);
  cursor: pointer;

  @media (min-width: 1200px) {
    padding: 18px 28px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-button-hover);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }
`;
