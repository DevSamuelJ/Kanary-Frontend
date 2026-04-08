import { FiMoreHorizontal } from "react-icons/fi"

export const TasksCard = () => {
    return (
        <div id="taskContainer" className="flex flex-col w-full border border-white rounded-2xl py-3 px-5">
            <div id="taskHeader" className="flex items-center justify-between pb-2">
                <div id="taskTitle" className="flex items-center gap-2">
                    <div id="taskTypeColor" className="w-3 h-3 bg-amber-400 rounded-full"/>
                    <p id="taskType" className="text-xs font-extralight">Tipo da tarefa</p>
                </div>
                <FiMoreHorizontal className="text-2xl"/>
            </div>
            <div id="taskContent" className="pb-5">
                <h1 id="taskTitle" className="text-xl pb-1 font-bold">Título da tarefa</h1>
                <p id="taskDescription" className="text-xs italic font-extralight">Insira aqui uma breve descrição da tarefa. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. </p>
            </div>
            <div id="taskColaborators" className="flex">
                <div className="w-10 h-10 bg-cyan-400 rounded-full" />
                <div className="w-10 h-10 bg-fuchsia-400 rounded-full -ml-4" />
            </div>
        </div>
    )
}