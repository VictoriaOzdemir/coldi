import styled from 'styled-components';
import { Heading } from '../../ui/Typography/Typography.jsx';

export const ServicesRoot = styled.section`
  background: var(--color-surface);
  padding: 64px 16px;

  @media (min-width: 1200px) {
    padding: 96px 24px;
  }
`;

export const ServicesTitle = Heading;

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  background: var(--color-surface);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(280px, 1fr));
  }
`;
