import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariantTypes = VariantProps<typeof buttonVariants>['variant'];

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, width, variant, label, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ width, size, variant }), className)}
        {...props}
      >
        {label}
      </button>
    );
  },
);

const buttonVariants = cva('font-semibold hover:font-extrabold', {
  variants: {
    width: {
      full: 'w-full rounded-small py-2',
      max: 'w-max px-2',
    },
    size: {
      sm: 'text-[0.85rem]',
      md: 'text-[0.9rem]',
      lg: 'text-[1.1rem]',
    },
    variant: {
      primary: 'bg-primary-500 text-white',
      gray: 'bg-black-400 text-white',
      'primary-border': 'text-primary-500',
      'gray-border': 'text-black-600',
      'light-gray': 'bg-gray-300 text-black-700',
      'light-blue': 'bg-blue-50 text-blue-300',
    },
  },
  defaultVariants: {
    width: 'full',
    size: 'md',
    variant: 'primary',
  },
});

export default Button;
