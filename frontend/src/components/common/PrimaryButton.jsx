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

        shadow-lg shadow-secondary/20

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:scale-105
        hover:bg-primary
        hover:shadow-xl hover:shadow-primary/30

        active:translate-y-0
        active:scale-95

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-60

        ${className}
    `;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
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