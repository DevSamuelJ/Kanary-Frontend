import { FiMoreHorizontal, FiPlus } from "react-icons/fi"
import { TasksCard } from "../../components/ui/tasks-card"

export const Board = () => {

    return(
        <div id="boardContainer" className="min-w-full flex flex-col flex-1 min-h-0 px-4 md:px-7 pb-5 md:pt-5">    
            <div id="boardTitle" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Board</h1>
            </div>
            <div id="boardContent" className="w-full flex-1 min-h-0 grid lg:grid-cols-2 xl:grid-cols-3 gap-5 py-5 px-2">

                {/* A Fazer */}
                <section id="toDoContainer" className="bg-[#0F0B15] py-5 px-5 rounded-2xl flex flex-col min-h-0">
                    <div id="toDoHeader" className="flex justify-between pb-5">
                        <div id="toDoTitle">A Fazer</div>
                        <div id="toDoMenu" className="flex items-center gap-3 text-xl">
                            <FiPlus />
                            <FiMoreHorizontal />
                        </div>
                    </div>
                    <div id="toDoContent" className="flex flex-col gap-4 flex-1 overflow-y-auto min-h-0 simple-scroll px-2">
                        <TasksCard />
                        <TasksCard />
                    </div>
                </section>

                {/* Em Progresso */}
                <section id="inProgressContainer" className="bg-[#0F0B15] py-5 px-5 rounded-2xl flex flex-col min-h-0">
                    <div id="inProgressHeader" className="flex justify-between pb-5">
                        <div id="inProgressTitle">Em progresso</div>
                        <div id="inProgressMenu" className="flex items-center gap-3 text-xl">
                            <FiPlus />
                            <FiMoreHorizontal />
                        </div>
                    </div>
                    <div id="inProgressContent" className="flex flex-col gap-4 flex-1 overflow-y-auto min-h-0 simple-scroll px-2">
                        <TasksCard />
                    </div>
                </section>

                {/* Concluído */}
                <section id="doneContainer" className="bg-[#0F0B15] py-5 px-5 rounded-2xl flex flex-col min-h-0">
                    <div id="doneHeader" className="flex justify-between pb-5">
                        <div id="doneTitle">Concluído</div>
                        <div id="doneMenu" className="flex items-center gap-4 text-xl">
                            <FiPlus />
                            <FiMoreHorizontal />
                        </div>
                    </div>
                    <div id="doneContent" className="flex flex-col gap-4 flex-1 overflow-y-auto min-h-0 simple-scroll px-2">
                        <TasksCard />
                        <TasksCard />
                    </div>
                </section>
                
            </div>
        </div>
    )
}