import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-[var(--primary-600)] border-2 border-[var(--primary-500)] hover:bg-[var(--primary-50)]",
  outline:
    "bg-transparent text-[var(--gray-700)] border border-[var(--gray-300)] hover:bg-[var(--gray-50)] hover:border-[var(--gray-400)]",
  ghost:
    "bg-transparent text-[var(--primary-600)] hover:bg-[var(--primary-50)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm rounded-md",
  md: "px-6 py-2.5 text-sm rounded-lg",
  lg: "px-8 py-3 text-base rounded-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-[var(--transition-normal)] cursor-pointer select-none";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
