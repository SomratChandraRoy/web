export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "inline-block px-8 py-3.5 rounded-sm text-sm font-medium transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary: "bg-[#B85E44] text-white hover:bg-[#9d4e37]",
    outline:
      "border border-gray-200 text-gray-900 hover:border-[#B85E44] hover:text-[#B85E44]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-[#9d4e37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-[#9d4e37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      )}
    </button>
  );
}
