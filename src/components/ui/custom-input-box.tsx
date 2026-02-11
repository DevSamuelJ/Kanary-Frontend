import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CustomInputType = React.ComponentProps<'input'> & {icon?: ReactNode};

export const CustomInputBox = ({type, name, placeholder, icon, className, ...props}: CustomInputType) => (
    <div className="relative rounded-lg mb-3">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={twMerge("bg-white/60 border-white/30 border-2 rounded-lg pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2", className)}
            {...props}
        />
        {icon && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {icon}
            </span>
        )}
    </div>
);