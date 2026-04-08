import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AsideBtnProps = React.ComponentProps<'button'> & {icon?: ReactNode};

export const AsideButton = ({children, icon, className, ...props}: AsideBtnProps) => (
    <button 
        {...props}
        className={twMerge("w-full flex hover:bg-blue-200/10 active:bg-slate-600/50 active:scale-95 items-center cursor-pointer py-3 transition-all", className)}
    >
        <span className="text-2xl pointer-events-none">{icon}</span>
        { children && (
            <p className="text-base font-light pl-4">
                {children}
            </p>
        )}
    </button>
);