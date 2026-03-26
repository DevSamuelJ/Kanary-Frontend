import { DashboardCard } from "../../components/ui/dashboard-card";
import { DashChart } from "../../components/ui/dashboard-chart";
import { MembersCard } from "../../components/ui/members-card";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { listProjects } from "../../components/ui/list-projects";
import { listMembers } from "../../components/ui/list-members";

export const Dashboard = () => {

    return(
        <div id="container" className="min-w-full flex flex-col flex-1 px-4 md:px-7 pb-5 md:pt-5 min-h-0 overflow-hidden">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <h4>Período</h4>
                    <FiChevronDown />
                </div>
            </div>
            <div id="content" className="bg-[#0F0B15] w-full flex flex-col flex-1 rounded-3xl py-5 px-2 min-h-0">
                <div id="project-name" className="px-4 pb-4 flex items-center gap-2">
                    <h1 className="text-xl font-bold pr-1">Projeto:</h1>
                    <select name="projects" id="projects" className="w-full bg-[#110c1a] py-1 px-2 border-1 border-white rounded-xl outline-none cursor-pointer">
                        {listProjects.map((project) => 
                            <option value={project.id} className="bg-[#110c1a]">{project.name}</option>
                        )}
                    </select>
                </div>
                <section id="project-content" className="flex flex-col flex-1 overflow-y-auto simple-scroll min-h-0">
                    <div className="gap-5 w-full p-4 grid grid-cols-2 lg:grid-cols-4 flex-1">
                        <DashboardCard title="Total" qtde={68} />
                        <DashboardCard title="Finalizado" qtde={42} />
                        <DashboardCard title="Em andamento" qtde={8} />
                        <DashboardCard title="Pendente" qtde={18} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] xl:grid-cols-[2fr_1fr] p-4 gap-8 flex-3">
                        <div className="flex flex-col flex-1 min-h-100 lg:min-h-0">
                            <h2 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">
                                Progresso do Projeto
                            </h2>
                            <p className="mt-5 pl-2 md:pl-6 text-white/70">Tarefas Completadas</p>
                            <DashChart />
                        </div>
                        <div className="py-6 px-4 md:px-8 rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                            <div className="flex justify-between pb-5">
                                <h4>Membros de Time</h4>
                                <FiPlus />
                            </div>
                            <div className="flex-1 overflow-y-auto pr-2">
                                {listMembers.map(
                                    (member, index) => (<MembersCard key={index} name={member.name} profession={member.profession} color={member.color} />)
                                )}
                            </div>                    
                            <div className="self-end">
                                <p className="text-sm pt-5">Ver todos os membros</p>
                            </div>                   
                        </div>
                    </div>
                </section>                
            </div>
        </div>
    )
}
