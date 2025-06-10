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
					"bg-black text-white-900 border-2 border-gray-300 ",
					"hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400",
					"transition-all duration-300 ease-in-out",
					" hover:shadow-lg hover:shadow-gray-300/30"
				),
				github: clsx(
					"bg-[#282828] text-white border-2 border-[#181717]",
					"hover:bg-[#242020] hover:text-white hover:border-[#242020]",
					"transition-all duration-300 ease-in-out",
					"hover:scale-105 hover:shadow-lg hover:shadow-gray-800/30"
				),
				linkedin: clsx(
					"bg-[#0077b5] text-white border-2 border-[#0077b5] ",
					"hover:bg-[#005983] hover:text-white hover:border-[#005983]",
					"transition-all duration-300 ease-in-out",
					"hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30"
				),
				learn: clsx(
					"bg-purple-600 text-white border-2 border-purple-600",
					"hover:bg-purple-700 hover:text-white hover:border-purple-700",
					"transition-all duration-300 ease-in-out",
					"hover:scale-105 hover:shadow-lg hover:shadow-purple-400/30"
				),
				resume: clsx(
					"bg-green-600 text-white border-2 border-green-600",
					"hover:bg-green-700 hover:text-white hover:border-green-700",
					"transition-all duration-300 ease-in-out",
					"hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
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
