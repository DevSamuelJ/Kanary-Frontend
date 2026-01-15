type AsideButtonProps = {
    label: string;
    icon: React.ReactNode;
}

export const AsideButton = ({label, icon}: AsideButtonProps) => (
    <button className="w-full flex hover:bg-blue-200/10 active:bg-slate-600/50 active:scale-105 items-center cursor-pointer py-3">
        <span className="pl-11 pr-4 text-2xl">{icon}</span>
        <p className="text-base font-light">{label}</p>
    </button>
);