import { motion } from "motion/react"
import { HomeHeader } from "../components/home-header"
import { CustomBtn2 } from "../components/ui/custom-btn-2"

export const FirstPage = () => {

    return (
        <>
            {/* Background */}
            <motion.div id="home-bg" 
                className="fixed w-full min-h-full bg-[url(/src/assets/img/bg-home.jpg)] bg-cover bg-no-repeat pointer-events-none z-0 inset-0" />

            {/* Header */}
            <HomeHeader />

            {/* Moon */}
            <motion.div id="moon"
                className="absolute w-40 h-40 md:w-75 md:h-75 bg-[url(/src/assets/img/moon.png)] bg-contain bg-no-repeat top-30 right-5 md:right-10 mask-radial-at-top-left mask-radial-from-50% pointer-events-none z-1" />

            {/* Comet */}
            <motion.div id="comet" 
                className="absolute w-5 h-5 md:w-10 md:h-10 bg-[url(/src/assets/img/comet.png)] bg-contain bg-no-repeat top-0 right-0 pointer-events-none z-2" />

            <section className="relative w-screen h-screen">
                <div className="z-10 pl-10 lg:pl-20 xl:pl-30 md:w-100 lg:w-130 xl:w-140 2xl:w-180 md:pt-55 lg:pt-40 2xl:pt-40 text-white">
                    
                    <h2 className="font-bold md:text-5xl/relaxed lg:text-6xl/relaxed 2xl:text-[65px]/relaxed">
                        Gerencie suas tarefas com simplicidade, eficiência e colaboração.
                    </h2>

                    <p className="pt-5 lg:text-lg">
                        Planeje, organize e compartilhe suas atividades em segundos. Mantenha o foco no que realmente importa - sem complicações.
                    </p>

                    <CustomBtn2 children="Comece agora" className="w-45 mt-15 md:ml-20 lg:ml-25 2xl:ml-35" />
                
                </div>
            </section>

            <section className="relative w-screen h-screen">
                <div className="z-10 pl-10 md:w-100 lg:w-150 xl:w-220 2xl:w-270 md:pt-70 lg:pt-55 2xl:pt-40 text-white">
                    <h2 className="text-white font-bold md:text-5xl/relaxed lg:text-6xl/relaxed xl:text-7xl/relaxed 2xl:text-[90px]/relaxed">
                        Projetado para ser intuitivo, mesmo sem tutoriais.
                    </h2>

                    <h3 className="">
                        Organização inteligente
                    </h3>
                    <p className="">
                        Crie, categorize e priorize tarefas facilmente.
                    </p>

                    <h3 className="">
                        Colaboração em tempo real
                    </h3>
                    <p className="">
                        Compartilhe tarefas com sua equipe e acompanhe o progresso.
                    </p>

                    <h3 className="">
                        Prazos sob controle
                    </h3>
                    <p className="">
                        Receba lembretes e visualize o que é urgente.
                    </p>
                </div>
            </section>
        </>
    )

}