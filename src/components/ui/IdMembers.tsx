import { BsTrash } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

type IdMembersProps = {
    name: string,
    profession: string,
    color: string,
}

export const IdMembers = ({name, profession, color}: IdMembersProps) => (
    <div className="flex items-center py-1">
        <p className="text-6xl cursor-pointer pr-2 text-{txtColor}" style={{ color: color }}><IoPersonCircleOutline/></p>
        <div className="w-full">
            <p>{name}</p>
            <p className="text-[12px] font-light">{profession}</p>
        </div>
        <p className="cursor-pointer"><BsTrash/></p>
    </div>
);