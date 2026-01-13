import { BsArrowUpRightCircle, BsTrash } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { DashboardCard } from "../../components/ui/DashboardCard";
import { IdMembers } from "../../components/ui/IdMembers";
import { FiChevronDown, FiPlus } from "react-icons/fi";

export const Dashboard = () => {
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
                    <DashboardCard title="Total" icon={<BsArrowUpRightCircle/>} quantidade={68}/>
                    <DashboardCard title="Finalizado" icon={<BsArrowUpRightCircle/>} quantidade={22}/>
                    <DashboardCard title="Em andamento" icon={<BsArrowUpRightCircle/>} quantidade={8}/>
                    <DashboardCard title="Pendente" icon={<BsArrowUpRightCircle/>} quantidade={2}/>
                </div>
                <div className="flex h-[58%] p-4 gap-8">
                    <div className="h-full w-[63%] flex flex-col">
                        <h4 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">
                            Progresso do Projeto
                        </h4>
                    </div>
                    <div className="h-full py-6 px-8 w-[35%] rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                        <div className="flex justify-between pb-5">
                            <h4>Membros de Time</h4>
                            <FiPlus />
                        </div>
                        <div className="grow">
                            <IdMembers icon={<IoPersonCircleOutline/>} name="Clark Griffin" profession="Ul Designer" icon2={<BsTrash/>}/>
                            <IdMembers icon={<IoPersonCircleOutline/>} name="Octavia Blake" profession="Copywriter" icon2={<BsTrash/>}/>
                            <IdMembers icon={<IoPersonCircleOutline/>} name="Rufus Kafu" profession="UX Researcher" icon2={<BsTrash/>}/>

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
