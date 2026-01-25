import { DashboardCard } from "../../components/ui/dashboard-card";
import { DashChart } from "../../components/ui/dashboard-chart";
import { IdMembers } from "../../components/ui/id-members";
import { FiChevronDown, FiPlus } from "react-icons/fi";

export const Dashboard = () => {

    const members = [
        {"name": "Clark Griffin", "profession": "Ul Designer", "color": "#00FFFF", "tasksCompleted": 17},
        {"name": "Octavia Blake", "profession": "Copywriter", "color": "#FF00FF", "tasksCompleted": 13},
        {"name": "Rufus Kafu", "profession": "UX Researcher", "color": "#FFFF00", "tasksCompleted": 12},
    ]
    
    return(
        <div id="container" className="min-w-full min-h-full flex flex-col px-7">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <h4>Período</h4>
                    <FiChevronDown />
                </div>
            </div>
            <section id="content" className="bg-[#0F0B15] w-full rounded-3xl p-5">
                <div className="pl-4 flex items-center gap-2">
                    <h4>Projeto Festival Fashion</h4>
                    <FiChevronDown />
                </div>
                <div className="gap-10 w-full p-4 grid md:grid-cols-2 lg:grid-cols-4">
                    <DashboardCard title="Total" qtde={68}/>
                    <DashboardCard title="Finalizado" qtde={42}/>
                    <DashboardCard title="Em andamento" qtde={8}/>
                    <DashboardCard title="Pendente" qtde={18}/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] xl:grid-cols-[2fr_1fr] p-4 gap-8">
                    <div className="flex flex-col min-h-100">
                        <h2 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">
                            Progresso do Projeto
                        </h2>
                        <p className="mt-5 pl-6 text-white/70">Tarefas Completadas</p>
                        <DashChart />
                    </div>
                    <div className="py-6 px-8 rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                        <div className="flex justify-between pb-5">
                            <h4>Membros de Time</h4>
                            <FiPlus />
                        </div>
                        <div className="grow">
                            {members.map(
                                (member, index) => (<IdMembers key={index} name={member.name} profession={member.profession} color={member.color} />)
                            )}
                        </div>                    
                        <div className="self-end">
                            <p className="text-sm pt-5">Ver todos os membros</p>
                        </div>                   
                    </div>
                </div>
            </section>
        </div>
    )
}
