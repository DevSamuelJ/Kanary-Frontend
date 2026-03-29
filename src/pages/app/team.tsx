import { MdPersonAdd } from "react-icons/md"
import { CustomBtn2 } from "../../components/ui/custom-btn-2"
import { GrAddCircle } from "react-icons/gr"
import { CgRename } from "react-icons/cg"
import { CustomInputBox } from "../../components/ui/custom-input-box"
import { listMembers } from "../../components/data/list-members"
import { MembersCard } from "../../components/ui/members-card"

export const Equipe = () => {

    const listRoles = [
        { "id": 1, "role": "Designer" },
        { "id": 2, "role": "Analist" },
        { "id": 3, "role": "Developer" },
        { "id": 4, "role": "Engineer" },
    ]

    return (
        <div id="container" className="min-w-full h-full flex flex-col px-4 md:px-7 pb-5 md:pt-5 min-h-0">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Equipe</h1>
            </div>
            <div id="content" className="bg-[#0F0B15] w-full flex flex-col flex-1 rounded-3xl py-5 px-5 min-h-0">   

                <section id="memberSection" className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 p-3">
                    
                    {/* Formulário de membros */}
                    <div className="flex flex-col">
                        <div className="flex w-full pl-3 items-center pb-3">
                            <MdPersonAdd className="text-2xl" />
                            <h2 className="p-2 pl-3 text-lg"> Adicionar membro </h2>
                        </div>
                        <form action="#" className="w-full max-w-130 pb-2">
                            <CustomInputBox
                                type="text"
                                name="name"
                                placeholder="Nome"
                                icon={<CgRename className="text-white" />}
                                className="bg-white/25 text-white"
                            />
                            <select 
                                name="projects" 
                                id="projects" 
                                defaultValue={""} 
                                className="bg-white/25 text-white border-white/30 border-2 rounded-lg pl-2 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2 cursor-pointer">
                                    <option value="" disabled hidden className="bg-[#110c1a]"> Selecione uma função </option>
                                    {listRoles.map((role) => 
                                        <option key={role.id} value={role.id} className="bg-[#110c1a]">{role.role}</option>
                                    )}
                            </select>
                        </form>
                        <CustomBtn2 
                            icon={<GrAddCircle className="text-lg" />}
                            children="Criar" 
                            className="w-50 mt-2"
                        />
                    </div>

                    <div className="py-6 px-4 md:px-8 rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                        <div className="flex justify-between pb-5">
                            <h4>Membros de Time</h4>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2">
                            {listMembers.map(
                                (member, index) => (<MembersCard key={index} name={member.name} role={member.role} color={member.color} />)
                            )}
                        </div>                  
                    </div>  
                    
                </section>

                <section id="roleSection" className="bg-red-400 flex flex-1">

                </section>

            </div>
        </div>
    )
}