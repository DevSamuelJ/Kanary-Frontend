import { FiMoreHorizontal, FiPlus } from "react-icons/fi"

export const Board = () => {

    // Lista de colunas
    const columns = [
        {"name": "A Fazer",},
        {"name": "Em progresso",},
        {"name": "Feito",},
    ]


    return(
        <div id="container" className="min-w-full h-full flex flex-col px-4 md:px-7 pb-5 md:pt-5 min-h-0">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Board</h1>
            </div>
            <div id="content" className="w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-5 py-5 px-2 min-h-0">

                {/* Criação das colunas */}
                {columns.map((col) => (
                    <section id="columnContent" className="bg-[#0F0B15] p-5 rounded-2xl flex flex-col">
                        <div id="columnHeader" className="flex justify-between">
                            <div id="columnTitle">{col.name}</div>
                            <div id="columnMenu" className="flex items-center gap-3 text-xl">
                                <FiPlus />
                                <FiMoreHorizontal />
                            </div>
                        </div>
                    </section>
                ))}  
                
            </div>
        </div>
    )
}