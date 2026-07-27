"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "secondary-dark" | "secondary-light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary-viz",
  secondary: "btn-secondary-viz",
  "secondary-dark": "btn-secondary-viz-dark",
  "secondary-light": "btn-secondary-viz-light",
};

export default function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`${variantClass[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
      {icon}
    </motion.button>
  );
}
