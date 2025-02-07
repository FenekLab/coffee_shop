'use client';

import { cn } from 'lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'lg' | 'sm';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
    
    const variants = {
      primary: 'bg-[#006B3F] text-white hover:bg-[#005432]',
      secondary: 'bg-white text-[#006B3F] hover:bg-gray-100',
      outline: 'border-2 border-current hover:bg-white/10'
    };

    const sizes = {
      default: 'h-10 py-2 px-4 rounded-md',
      sm: 'h-9 px-3 rounded-md',
      lg: 'h-12 px-8 rounded-lg text-lg'
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
); 