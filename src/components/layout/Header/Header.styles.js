import styled from 'styled-components';

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  min-height: 82px;
  display: flex;
  align-items: center;
  padding: 16px;
  background: var(--color-surface);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-header);

  @media (min-width: 768px) {
    height: 100px;
  }
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
    max-width: 116px;
    height: auto;

     @media (min-width: 1200px) {
      max-width: 146px;
    }
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 6px;
  }
`;
