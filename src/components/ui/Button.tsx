import clsx from "clsx";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	clsx(
		"relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
		"disabled:pointer-events-none",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0",
		"shadow-sm"
	),
	{
		variants: {
			variant: {
				default: clsx(
					"bg-black text-white-900 border-2 border-white ",
					"hover:bg-white hover:text-black",
					"transition-all duration-300 ease-in-out",
					" hover:shadow-lg hover:shadow-gray-300/30"
				),
				destructive: clsx(
					"bg-red-500 text-white border-2 border-red-600",
					"hover:bg-red-600 hover:text-white hover:border-red-700",
					"transition-all duration-300 ease-in-out"
				),
				outline: clsx(
					"bg-transparent text-gray-900 border-2 border-gray-400",
					"hover:bg-gray-100 hover:text-gray-900 hover:border-gray-600",
					"transition-all duration-300 ease-in-out"
				)
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
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
