function Gradient({
  gradient,
  className,
}: {
  gradient: string;
  className: string;
}) {
  return (
    <div className={`absolute inset-10  z-[-1] ${gradient} ${className}`} />
  );
}

export default Gradient;
