import type { ReactNode } from "react";

type CustomInputType = React.ComponentProps<'input'> & {icon?: ReactNode};

export const CustomInputBox = ({type, name, placeholder, icon, ...props}: CustomInputType) => (
    <div className="relative bg-white opacity-50 rounded-lg mb-3">
        <input
            type= {type}
            name={name}
            placeholder={placeholder}
            className="border-white border-2 opacity-100 rounded-lg pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2"
            {...props}
        />
        {icon && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {icon}
            </span>
        )}
    </div>
);