import { useState } from "react"
import { listMenuBtns } from "./app-list-menu-btns"
import { AsideButton } from "./ui/aside-buttons"
import logoWhite from "../assets/img/logo-white.png"
import { CustomBtn1 } from "./ui/custom-btn-1"
import { VscClose, VscMenu } from "react-icons/vsc"
import { AnimatePresence, motion } from "motion/react"
import { useNavigate } from "react-router"

export const MenuHeader = () => {
    
    // Hook para abrir/fechar menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hook para navegação
    const navigate = useNavigate();

    return (
        <header className="md:hidden bg-[#0F0B15] h-14 flex items-center justify-between px-5 text-white">
            <img src={logoWhite} alt="LogoKanary" className="w-30" />
            <CustomBtn1
                icon={isMenuOpen ? <VscClose className="text-xl" />  : <VscMenu className="text-xl" />}
                className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800 cursor-pointer"
                onClick={ () => setIsMenuOpen(!isMenuOpen) }
            /> 
            <AnimatePresence>
                {isMenuOpen &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden absolute bg-[#0F0B15] border border-blue-900 border-t-0 right-5 top-12 p-5 z-50"
                    >
                        <div className="pb-2 space-y-3">
                            {listMenuBtns.map( (btn, index) => 
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={index} 
                                >
                                    <AsideButton
                                        children={btn.label}
                                        icon={btn.icon} 
                                        onClick={ () => {setIsMenuOpen(false); navigate(btn.route)} }
                                    />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>          
            
        </header>
    )
}