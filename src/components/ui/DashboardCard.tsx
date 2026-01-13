type DashboardCardProps = {
    title: string;
    icon:React.ReactNode;
    quantidade: number;
}

export const DashboardCard = ({title, icon, quantidade}:DashboardCardProps) => (
    <div className="bg-[#110c1a] h-full w-full p-4 rounded-xl border border-white/70 flex flex-col justify-between">
        <div className="flex justify-between">
            <p>{title}</p>
            <p className="text-2xl">{icon}</p>
        </div>
        <p className="text-[6vw] pl-2.5 font-medium">{quantidade}</p>
    </div>
)