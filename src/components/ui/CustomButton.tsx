export const CustomButton = ({ children, className, type, ...props }: React.ComponentProps<'button'>) => {
  return (
    <button
      type={type}
      className="bg-black text-white rounded-lg h-[30px] cursor-pointer hover:opacity-70"
      {...props}
    >
      {children}
    </button>
  );
}
