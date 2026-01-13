type AsideButtonProps = {
    label: string;
    icon: React.ReactNode;
}

export const AsideButton = ({label, icon}:AsideButtonProps) => (
    <div className="w-full flex hover:bg-blue-200/10 items-center cursor-pointer py-3">
        <aside className="pl-11 pr-4 text-2xl">{icon}</aside>
        <p className="text-base font-light">{label}</p>
    </div>
)