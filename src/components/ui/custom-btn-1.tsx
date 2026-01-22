import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

type CustomBtnProps = React.ComponentProps<'button'> & {icon?: ReactNode};

export const CustomBtn1 = ({children, className, icon, ...props}: CustomBtnProps) => (
    <button
        className={twMerge("hover:bg-gray-400/30 hover:cursor-pointer active:bg-gray-200/30 active:scale-95 rounded-xl text-white px-3 py-2", className)}
        {...props}
    >
        {icon}{children}
    </button>
)