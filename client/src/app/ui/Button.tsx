import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-sm hover:bg-primary/90",
        gradient: "bg-gradiate text-white shadow-sm hover:opacity-90",
        outline: "border border-primary text-primary bg-transparent hover:bg-primary/5",
        ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-700",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
      layout: {
        default: "flex-row gap-2",
        stacked: "flex-col gap-2.5 h-auto py-5 px-6 rounded-xl min-w-[130px]", 
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      layout: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    icon?: React.ElementType;
    iconPosition?: "left" | "right" | "top";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, layout, icon: Icon, iconPosition = "left", children, ...props }, ref) => {
    
    // Automatically use stacked layout if iconPosition is top
    const computedLayout = iconPosition === "top" ? "stacked" : layout;
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, layout: computedLayout, className }))}
        ref={ref}
        {...props}
      >
        {Icon && (iconPosition === "left" || iconPosition === "top") && (
          <Icon className={cn("shrink-0", computedLayout === "stacked" ? "h-6 w-6" : "h-4 w-4")} />
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <Icon className="h-4 w-4 shrink-0" />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
