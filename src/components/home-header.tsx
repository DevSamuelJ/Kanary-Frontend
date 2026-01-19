import { useNavigate } from "react-router"
import { HomeNav } from "./ui/home-nav"
import { VscClose, VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const HomeHeader = () => {

    // Hook para navegação
    const navigate = useNavigate();
    
    // Hook para menu Mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lista de Botões do Menu
    const menuButtons = [
        { "label": "Documentação", "onClick": () => navigate("./home") },
        { "label": "Sobre", "onClick": () => navigate("./home") },
        { "label": "Entrar", "onClick": () => navigate("./access/login") },
        { "label": "Criar Conta", "onClick": () => navigate("./access/register") },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-10 w-screen p-3">
           <nav
            id="homeHeaderContainer"
            className="w-full h-20 bg-slate-950/80 rounded-4xl px-6 py-3 z-10 flex justify-between items-center backdrop-blur-x"
            >
                {/* Logo */}
                <img src="src/assets/img/logo-white.png" alt="logoKanary" width={120} />

                {/* Navegação Desktop */}
                <div className="hidden md:flex gap-6">
                    {/* Criando os botões da lista */}
                    {menuButtons.map((btn, index) =>
                        /* Botão diferente para "Criar Conta" */ 
                        btn.label === "Criar Conta" ? 
                        <HomeNav 
                            key={index} 
                            children={btn.label} 
                            onClick={btn.onClick} 
                            className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800 cursor-pointer"
                        /> :
                        /* Caso contrário, crie os botões padrões */
                        <HomeNav 
                            key={index} 
                            children={btn.label} 
                            onClick={btn.onClick} 
                        />
                    )}
                </div>

                {/* Botão Menu Mobile */}
                <div className="md:hidden ">
                    <HomeNav
                        // Ternário: se menu estiver aberto = botão "X" / se não = botão "menu" 
                        icon={isMenuOpen ? <VscClose className="text-xl" />  : <VscMenu className="text-xl" />}
                        className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800 cursor-pointer"
                        onClick={ () => setIsMenuOpen(!isMenuOpen) }
                    />
                </div>

                {/* Navegação Mobile */}
                <AnimatePresence>
                    { isMenuOpen &&
                        <motion.div
                            id="menuMobileContainer"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden absolute right-5 top-18 bg-slate-950/70 p-5 rounded-2xl z-50"
                        >
                            <div className="pt-4 pb-2 space-y-3">
                                {menuButtons.map( (btn, index) => 
                                    btn.label === "Criar Conta" ?
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={index} 
                                    >
                                        <HomeNav
                                            children={btn.label} 
                                            onClick={() => {
                                                btn.onClick?.() 
                                                setIsMenuOpen(false)}
                                            }
                                            className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800 cursor-pointer block"
                                        />
                                    </motion.div> :
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={index} 
                                    >
                                        <HomeNav
                                            children={btn.label} 
                                            onClick={() => {
                                                btn.onClick?.() 
                                                setIsMenuOpen(false)}
                                            } 
                                            className="block py-2"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </nav> 
        </header>
    )
}