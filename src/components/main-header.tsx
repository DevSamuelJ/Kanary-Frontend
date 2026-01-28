import { FiHelpCircle, FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";

// Cabeçalho com a busca e os botões: notificação, ajuda e perfil.

export const MainHeader = () => {
    return(
        <div className="flex p-4 pb-7 pl-8 w-full h-20"> 
            <form className="w-full pr-5 flex items-center" action="">
                <input 
                    className="relative w-full rounded-2xl h-9 pl-9 bg-white text-black" 
                    type="search" 
                    name="search"
                    placeholder="Search" 
                />
                <span className="text-black absolute ml-3"><FiSearch /></span>
            </form>
            <div className="w-50 flex justify-evenly items-center text-6">
                <GrNotification className="text-xl" />
                <FiHelpCircle className="text-2xl" />
                <IoPersonCircleOutline className="text-4xl" />
            </div>
        </div>
    )
}
