import { motion } from "motion/react"
import { BsPencilSquare, BsTrash } from "react-icons/bs"

type ProjectCardProps = {
    id: number,
    name: string,
    description: string
}

export const ProjectCard = ({id, name, description}: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#110c1a] h-auto w-[95%] p-4 rounded-xl border border-purple-300/50 flex hover:shadow-[0_0_15px_rgba(127,0,255,0.4)] hover:bg-violet-950/15 my-2.5 hover:cursor-pointer"
        >
            <div className="bg-[#1A102C] border border-purple-600/50 w-15 h-15 rounded-full flex justify-center items-center text-2xl font-bold">
                <p>{id}</p>
            </div>
            <div className="flex flex-col flex-5 px-4">
                <h1 className="text-lg pb-1">{name}</h1>
                <p className="text-xs font-extralight italic truncate">{description}</p>
            </div>
            <div className="flex gap-3 items-center flex-1 justify-end">
                <BsPencilSquare className="text-xl cursor-pointer" />
                <BsTrash className="text-xl cursor-pointer"/>
            </div>
        </motion.div>
    )
} 