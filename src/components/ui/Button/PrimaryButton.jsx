import { PrimaryButtonRoot } from './PrimaryButton.styles.js';

export default function PrimaryButton({
  as = 'a',
  children,
  href,
  src,
  ...props
}) {
  const isLink = as === 'a';

  return (
    <PrimaryButtonRoot
      as={as}
      href={isLink ? href || src : undefined}
      type={isLink ? undefined : 'button'}
      {...props}
    >
      {children}
    </PrimaryButtonRoot>
  );
}
