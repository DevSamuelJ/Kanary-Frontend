type IdMembersProps = {
    icon: React.ReactNode;
    name: string;
    profession: string;
    icon2: React.ReactNode; 
}

export const IdMembers = ({icon, name, profession, icon2}: IdMembersProps) => (
    <div className="flex items-center py-1">
        <p className="text-6xl cursor-pointer pr-2">{icon}</p>
        <div className="w-full">
            <p>{name}</p>
            <p className="text-[12px] font-light">{profession}</p>
        </div>
        <p className="cursor-pointer">{icon2}</p>
    </div>
)