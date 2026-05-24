import styled from 'styled-components';
import { Heading } from '../../ui/Typography/Typography.jsx';

export const ProcessRoot = styled.section`
  overflow-x: clip;
  background: var(--color-surface);
`;

export const ProcessTitle = styled(Heading)`
  display: block;
  padding-inline: 16px;
  span {
    display: block;
    margin-top: 16px;
  }
`;

export const ProcessStack = styled.div`
  overflow: visible;
`;

export const ProcessWave = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  max-height: 200px;
`;

export const ProcessBand = styled.div`
  position: relative;
  margin-top: -1px;
  background: var(--color-primary-soft);
  padding: 64px 16px;

  @media (min-width: 1200px) {
    padding: 96px 24px;
  }
`;

export const ProcessList = styled.ol`
  position: relative;
  display: grid;
  gap: 64px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
