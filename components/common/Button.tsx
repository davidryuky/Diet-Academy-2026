import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'orange' | 'teal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none rounded-xl tracking-wide";
  
  const variants = {
    // Primary: Soft Coral Gradient (Inviting, warm) - Removed colored shadow
    primary: "bg-gradient-to-r from-[#FF8C6B] to-[#FFB088] text-white hover:from-[#FF7F59] hover:to-[#FFA070] shadow-sm hover:shadow-md",
    
    // Secondary: White with Coral Border
    secondary: "bg-white text-[#FF8C6B] border-2 border-[#FF8C6B] hover:bg-orange-50",
    
    // Outline: Muted Stone
    outline: "bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900",
    
    // Orange: Solid Coral/Terracotta (Good for CTAs) - Removed colored shadow
    orange: "bg-[#FF8C6B] text-white hover:bg-[#FF7F59] shadow-sm hover:shadow-md",
    
    // Teal: Professional/Trust (Good for Instructors) - Removed colored shadow
    teal: "bg-[#5D9B9B] text-white hover:bg-[#4D8B8B] shadow-sm hover:shadow-md",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4 text-lg w-full md:w-auto",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};