import { DashboardCard } from "../../components/ui/DashboardCard";
import { DashChart } from "../../components/ui/dashChart";
import { IdMembers } from "../../components/ui/IdMembers";
import { FiChevronDown, FiPlus } from "react-icons/fi";

export const Dashboard = () => {

    const members = [
        {"name": "Clark Griffin", "profession": "Ul Designer", "color": "#00FFFF", "tasksCompleted": 17},
        {"name": "Octavia Blake", "profession": "Copywriter", "color": "#FF00FF", "tasksCompleted": 13},
        {"name": "Rufus Kafu", "profession": "UX Researcher", "color": "#FFFF00", "tasksCompleted": 12},
    ]
    
    return(
        <div className="h-full w-full flex flex-col items-center px-7">    
            <div className="flex items-center justify-between p-5 w-full h-18">
                <h1 className="text-3xl font-medium">Dashboard</h1>
                <div className="flex items-center gap-2">
                    <h4>Período</h4>
                    <FiChevronDown />
                </div>
            </div>
            <section className="bg-[#0F0B15] h-[calc(100%-90px)] w-full rounded-3xl p-5">
                <div className="pl-4 h-[7%] flex items-center gap-2">
                    <h4>Projeto Festival Fashion</h4>
                    <FiChevronDown />
                </div>
                <div className="h-[35%] gap-10 w-full p-4 flex justify-around">
                    <DashboardCard title="Total" qtde={68}/>
                    <DashboardCard title="Finalizado" qtde={42}/>
                    <DashboardCard title="Em andamento" qtde={8}/>
                    <DashboardCard title="Pendente" qtde={18}/>
                </div>
                <div className="flex h-[58%] p-4 gap-8">
                    <div className="h-full w-[63%] flex flex-col">
                        <h2 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">
                            Progresso do Projeto
                        </h2>
                        <p className="mt-5 pl-6 text-white/70">Tarefas Completadas</p>
                        <DashChart />
                    </div>
                    <div className="h-full py-6 px-8 w-[35%] rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
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
                            <p className="text-sm">Ver todos os membros</p>
                        </div>                   
                    </div>
                </div>
            </section>
        </div>
    )
}
