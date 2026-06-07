import clsx from "clsx";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	clsx("relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm", "transition-colors duration-800 ease-in-out "),
	{
		variants: {
			variant: {
				default: clsx("bg-neutral-800 text-white", "hover:bg-white hover:text-black"),
				destructive: clsx("bg-red-600 text-white", "hover:bg-red-700 hover:text-white"),
				outline: clsx("border border-white/20 bg-transparent text-white", "hover:bg-white hover:text-black"),
				subtle: clsx("bg-white/10 text-white", "hover:bg-white/20 hover:text-white"),
				ghost: clsx("bg-transparent text-white", "hover:bg-white/10 hover:text-white"),
				link: clsx("bg-transparent text-white underline-offset-4 hover:underline")
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 rounded px-3 text-xs",
				lg: "h-12 rounded-lg px-8 text-base",
				icon: "h-10 w-10",
				"icon-sm": "h-8 w-8"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";

	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
