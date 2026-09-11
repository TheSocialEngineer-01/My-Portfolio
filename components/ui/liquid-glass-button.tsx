"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#6C63FF] text-white hover:bg-[#5b52e8]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 bg-transparent hover:bg-white/50",
        secondary: "bg-[#38B2AC] text-white hover:bg-[#2c9b96]",
        ghost: "hover:bg-white/40",
        link: "text-[#6C63FF] underline-offset-4 hover:underline",
      },
      size: { default: "h-9 px-4 py-2", sm: "h-8 px-3 text-xs", lg: "h-10 px-8", icon: "h-9 w-9" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[color,transform,box-shadow] duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]/50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[#f5f3ff] via-[#ddd6fe] to-[#c4b5fd] text-[#4c1d95] shadow-[0_8px_20px_rgba(139,92,246,0.18)] hover:scale-[1.03] hover:from-white hover:to-[#c4b5fd]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-white/60 bg-white/30 text-[#3D4852] hover:bg-white/50",
        secondary: "bg-gradient-to-br from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6] text-white shadow-[0_8px_20px_rgba(139,92,246,0.25)] hover:from-[#ddd6fe] hover:via-[#b9a7fb] hover:to-[#7c3aed]",
        ghost: "text-[#3D4852] hover:bg-white/40",
        link: "text-[#6C63FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "xl" },
  }
)

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean
}

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "bg-white/25 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_2px_2px_2px_rgba(255,255,255,0.7),inset_-2px_-2px_3px_rgba(70,80,100,0.2)] backdrop-blur-md hover:bg-white/35",
        liquidButtonVariants({ variant, size, className })
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

type ColorVariant = "default" | "primary" | "success" | "error" | "gold" | "bronze"

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant
}

const colorVariants: Record<ColorVariant, { outer: string; inner: string; button: string; text: string }> = {
  default: { outer: "from-black to-[#A0A0A0]", inner: "from-white via-[#3E3E3E] to-[#E5E5E5]", button: "from-[#B9B9B9] to-[#969696]", text: "text-white" },
  primary: { outer: "from-black to-[#A0A0A0]", inner: "from-[#8B84FF] via-[#6C63FF] to-[#E0E5EC]", button: "from-[#8B84FF] to-[#6C63FF]", text: "text-white" },
  success: { outer: "from-[#005A43] to-[#7CCB9B]", inner: "from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]", button: "from-[#9ADBC8] to-[#3E8F7C]", text: "text-white" },
  error: { outer: "from-[#5A0000] to-[#FFAEB0]", inner: "from-[#FFDEDE] via-[#680002] to-[#FFE9E9]", button: "from-[#F08D8F] to-[#A45253]", text: "text-white" },
  gold: { outer: "from-[#917100] to-[#EAD98F]", inner: "from-[#FFFDDD] via-[#856807] to-[#FFF1B3]", button: "from-[#FFEBA1] to-[#9B873F]", text: "text-white" },
  bronze: { outer: "from-[#864813] to-[#E9B486]", inner: "from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]", button: "from-[#FFE3C9] to-[#A36F3D]", text: "text-white" },
}

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children = "Button", className, variant = "default", ...props }, ref) => {
    const [pressed, setPressed] = React.useState(false)
    const colors = colorVariants[variant]

    return (
      <div className={cn("relative inline-flex rounded-md bg-gradient-to-b p-[1.25px] shadow-md transition-transform", colors.outer, pressed && "translate-y-0.5 scale-[.98]")}>
        <div className={cn("absolute inset-[1px] rounded-md bg-gradient-to-b", colors.inner)} />
        <button
          ref={ref}
          className={cn("relative z-10 inline-flex h-11 items-center justify-center overflow-hidden rounded-md bg-gradient-to-b px-6 py-2 text-sm font-semibold leading-none shadow-sm", colors.button, colors.text, className)}
          {...props}
          onMouseDown={(event) => { setPressed(true); props.onMouseDown?.(event) }}
          onMouseUp={(event) => { setPressed(false); props.onMouseUp?.(event) }}
          onMouseLeave={(event) => { setPressed(false); props.onMouseLeave?.(event) }}
          onTouchStart={(event) => { setPressed(true); props.onTouchStart?.(event) }}
          onTouchEnd={(event) => { setPressed(false); props.onTouchEnd?.(event) }}
        >
          <ShineEffect isPressed={pressed} />
          {children}
        </button>
      </div>
    )
  }
)

MetalButton.displayName = "MetalButton"

function ShineEffect({ isPressed }: { isPressed: boolean }) {
  return (
    <span className={cn("pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-md bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300", isPressed ? "opacity-20" : "opacity-0")} />
  )
}

const liquidbuttonVariants = liquidButtonVariants

export { buttonVariants, liquidButtonVariants, liquidbuttonVariants, GlassFilter, ShineEffect }