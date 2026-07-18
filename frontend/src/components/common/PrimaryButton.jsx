import { Link } from "react-router";

const PrimaryButton = ({
  children,
  to,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  const classes = `
        inline-flex items-center justify-center
        rounded-md
        bg-secondary
        px-6 py-3
        text-sm font-semibold
        text-white
        transition-default
        hover:-translate-y-1
        hover:bg-primary
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
    `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
