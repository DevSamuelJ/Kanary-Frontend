import { BsTrash } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

type MembersCardProps = {
    name: string,
    profession: string,
    color: string,
}

export const MembersCard = ({name, profession, color}: MembersCardProps) => (
    <div className="flex items-center py-1">
        <p className="text-6xl cursor-pointer pr-2" style={{ color: color }}><IoPersonCircleOutline/></p>
        <div className="w-full">
            <p>{name}</p>
            <p className="text-[12px] font-light">{profession}</p>
        </div>
        <p className="cursor-pointer"><BsTrash/></p>
    </div>
);