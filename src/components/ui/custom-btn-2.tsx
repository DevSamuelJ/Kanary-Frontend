import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

type CustomBtnProps = React.ComponentProps<'button'> & {icon?: ReactNode};

export const CustomBtn2 = ({children, className, icon, ...props}: CustomBtnProps) => (
    <button
        className={twMerge("bg-gray-950 text-white rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800 active:scale-95 cursor-pointer", className)}
        {...props}
    >
        {icon}{children}
    </button>
)