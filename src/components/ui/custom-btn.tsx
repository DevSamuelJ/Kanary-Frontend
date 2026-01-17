import { twMerge } from "tailwind-merge"

export const CustomButton = ({ children, className, type, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      type={type}
      className={twMerge("bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70", className)}
      {...props}
    >
      {children}
    </button>
  );
}
