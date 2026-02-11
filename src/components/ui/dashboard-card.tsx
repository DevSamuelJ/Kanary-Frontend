import { BsArrowUpRightCircle } from "react-icons/bs";

type DashboardCardProps = {
    title: string;
    qtde: number;
}

export const DashboardCard = ({title, qtde}:DashboardCardProps) => (
    <div className="bg-[#110c1a] h-full w-full p-4 rounded-xl border border-white/70 flex flex-col justify-between">
        <div className="flex justify-between">
            <p className="text-xs">{title}</p>
            <BsArrowUpRightCircle className="text-xl"/>
        </div>
        <p className="pl-2 pt-2 font-medium text-5xl xl:text-7xl 2xl:text-8xl">{qtde}</p>
    </div>
);