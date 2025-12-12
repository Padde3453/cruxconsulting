import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-brand-blue to-brand-green text-white hover:scale-105 shadow-2xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  enableMouseGradient?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, enableMouseGradient = false, style, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }, []);

    const handleMouseEnter = React.useCallback(() => {
      setIsHovering(true);
    }, []);

    const handleMouseLeave = React.useCallback(() => {
      setIsHovering(false);
      setMousePosition({ x: 50, y: 50 });
    }, []);

    const gradientStyle = enableMouseGradient && isHovering
      ? {
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #2748E1 0%, #01937F 70%)`,
          ...style,
        }
      : style;

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={gradientStyle}
        onMouseMove={enableMouseGradient ? handleMouseMove : undefined}
        onMouseEnter={enableMouseGradient ? handleMouseEnter : undefined}
        onMouseLeave={enableMouseGradient ? handleMouseLeave : undefined}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
