import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

type MembersCardProps = {
    name: string,
    role: string,
    color: string,
}

export const MembersCard = ({name, role, color}: MembersCardProps) => (
    <div className="flex items-center py-1 px-3 rounded-3xl mb-2 border-1 border-white/10">
        <p className="text-6xl cursor-pointer pr-2" style={{ color: color }}><IoPersonCircleOutline/></p>
        <div className="w-full">
            <p>{name}</p>
            <p className="text-[12px] font-light">{role}</p>
        </div>
        <div className="flex gap-2">
            <p className="cursor-pointer"><FaRegEdit/></p>
            <p className="cursor-pointer"><BsTrash/></p>
        </div>
    </div>
);