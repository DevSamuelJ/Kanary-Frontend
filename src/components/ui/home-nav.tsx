import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

type HomeNavProps = React.ComponentProps<'button'> & {icon?: ReactNode};

export const HomeNav = ({children, className, icon, ...props}: HomeNavProps) => (
    <button
        className={twMerge("hover:bg-gray-400/30 hover:cursor-pointer active:bg-blue-900/70 rounded-xl text-white px-3 py-2", className)}
        {...props}
    >
        {children}{icon}
    </button>
)