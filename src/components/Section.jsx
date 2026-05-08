export default function Section({
  children,
  className = "",
  background = "white",
  spacing = "large",
}) {
  const backgrounds = {
    white: "bg-white",
    muted: "bg-[#FAFAFA]",
  };

  const spacings = {
    small: "py-16 md:py-20",
    medium: "py-20 md:py-28",
    large: "py-24 md:py-36",
  };

  return (
    <section
      className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
