import { ContainerRoot } from './Container.styles.js';

export default function Container({
  as,
  children,
  className,
  layer = 'base',
}) {
  return (
    <ContainerRoot
      as={as}
      className={className}
      $layer={layer}
    >
      {children}
    </ContainerRoot>
  );
}
