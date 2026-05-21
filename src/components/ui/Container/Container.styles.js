import styled from 'styled-components';

export const ContainerRoot = styled.div`
  position: relative;
  z-index: ${({ $layer }) => ($layer === 'raised' ? 12 : 'auto')};
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  

  @media (min-width: 576px) {
    & {
      --container-max:540px;
    }
  }

  @media (min-width: 768px) {
    & {
      --container-max:720px;
    }
  }

  @media (min-width: 992px) {
    & {
      --container-max:960px;
    }
  }

  @media (min-width: 1200px) {
    & {
      --container-max:1140px;
    }
  }

  @media (min-width: 1400px) {
    & {
      --container-max:1320px;
    }
  }

`;
