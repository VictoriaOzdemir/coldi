export default function Reveal({
  as: Component = 'div',
  animation = 'scroll',
  children,
  delay = '0ms',
  style,
  ...props
}) {
  return (
    <Component
      data-reveal={animation}
      style={{
        '--reveal-delay': delay,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
