import { CgRename } from "react-icons/cg"
import { CustomBtn2 } from "../../components/ui/custom-btn-2"
import { CustomInputBox } from "../../components/ui/custom-input-box"
import { ProjectCard } from "../../components/ui/project-card"
import { GrAddCircle } from "react-icons/gr"
import { MdAssignmentAdd } from "react-icons/md"
import { listProjects } from "../../components/ui/list-projects"

export const Projeto = () => {

    return (
        <div id="container" className="min-w-full h-full flex flex-col px-4 md:px-7 pb-5 md:pt-5 min-h-0">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Projeto</h1>
            </div>
            
            <div id="content" className="bg-[#0F0B15] w-full flex flex-col flex-1 items-center rounded-3xl py-5 px-5 min-h-0">
                
                {/* Formulário */}
                <div className="w-full md:w-150 flex flex-col flex-1 items-center">
                    <div className="flex w-full pl-5 items-center pb-3">
                        <MdAssignmentAdd className="text-2xl" />
                        <h2 className="p-2 pl-3 text-lg"> Criar projeto </h2>
                    </div>
                    <form action="#" className="w-[95%] pb-2">
                        <CustomInputBox
                            type="text"
                            name="name"
                            placeholder="Nome do Projeto"
                            icon={<CgRename className="text-white" />}
                            className="bg-white/25 text-white"
                        />
                        <textarea 
                            name="description" 
                            placeholder="Descrição"
                            className="bg-white/25 border-white/30 border-2 rounded-lg pl-3 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2" 
                        />
                    </form>
                    <CustomBtn2 
                        icon={<GrAddCircle className="text-lg" />}
                        children="Criar" 
                        className="w-50"
                    />  
                </div>

                {/* Lista de Projetos */}
                <h2 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5 text-center mt-8"> Lista de projetos </h2>
                <div className="w-full overflow-y-auto overflow-x-hidden simple-scroll grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 flex-2">
                    {listProjects.map((project) =>
                        <ProjectCard key={project.id} id={project.id} name={project.name} description={project.description} />
                    )}   
                </div>  

            </div>
        </div>
    )
}