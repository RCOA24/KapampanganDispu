import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -------------------------------------------------------------------------
// BUTTON COMPONENT
// -------------------------------------------------------------------------
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-[#e6e2d3] text-[#22264b] hover:bg-white hover:-translate-y-0.5 shadow-[0_0_15px_rgba(230,226,211,0.2)] hover:shadow-[0_0_20px_rgba(230,226,211,0.4)] border border-transparent",
      secondary: "bg-[#22264b] text-[#e6e2d3] border border-[#e6e2d3]/30 hover:border-[#e6e2d3] hover:bg-[#2a2f5a]",
      outline: "bg-transparent border border-[#e6e2d3] text-[#e6e2d3] hover:bg-[#e6e2d3] hover:text-[#22264b]",
      ghost: "bg-transparent text-[#e6e2d3]/70 hover:text-[#e6e2d3] hover:bg-[#e6e2d3]/5 border border-transparent",
      link: "text-[#e6e2d3] underline-offset-4 hover:underline p-0 h-auto border-none shadow-none",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs font-medium uppercase tracking-wider",
      md: "h-11 px-6 text-sm font-medium tracking-wide",
      lg: "h-14 px-8 text-base font-medium tracking-wide",
      icon: "h-10 w-10 p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// -------------------------------------------------------------------------
// INPUT COMPONENT
// -------------------------------------------------------------------------
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-xs uppercase tracking-widest text-[#e6e2d3]/50 ml-1 font-medium">
            {label}
          </label>
        )}
        <div className={cn(
          "relative group flex items-center transition-all duration-300",
          "border-b border-[#e6e2d3]/30 focus-within:border-[#e6e2d3]",
          error && "border-red-400"
        )}>
          {icon && (
            <div className="absolute left-0 text-[#e6e2d3]/40 group-focus-within:text-[#e6e2d3] transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "flex w-full bg-transparent py-3 text-[#e6e2d3] placeholder:text-[#e6e2d3]/20 focus:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
              icon ? "pl-8" : "pl-1",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

// -------------------------------------------------------------------------
// CONTAINER COMPONENT
// -------------------------------------------------------------------------
export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", className)}>
    {children}
  </div>
);

// -------------------------------------------------------------------------
// SECTION WRAPPER WITH ANIMATION
// -------------------------------------------------------------------------
/* Using Framer Motion for entering view */
import { motion } from "framer-motion";

export const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={cn("relative py-20 md:py-32", className)}
  >
    {children}
  </motion.section>
);
