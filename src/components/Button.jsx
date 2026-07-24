/**
 * Button — reusable press component
 *
 * Props:
 *  variant  : "solid" | "outline"  (default: "solid")
 *  size     : "sm" | "md"          (default: "md")
 *  href     : string — renders as <a> when provided
 *  external : boolean — adds target="_blank" rel="noopener noreferrer"
 *  onClick  : function
 *  children : node
 *  className: string — extra classes
 */
export default function Button({
  variant = "solid",
  size = "md",
  href,
  external = false,
  onClick,
  children,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center gap-2 font-type uppercase tracking-widest transition-all duration-200 focus-visible:outline-2 focus-visible:outline-press-red focus-visible:outline-offset-2 active:scale-[0.97]";

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    md: "text-[11px] px-6 py-3",
  };

  const variants = {
    solid:
      "bg-ink text-newsprint border border-ink hover:bg-press-red hover:border-press-red",
    outline:
      "bg-transparent text-ink border border-ink hover:bg-ink hover:text-newsprint",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
