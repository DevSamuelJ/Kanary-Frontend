import { HomeHeader } from "../components/home-header"

export const FirstPage = () => {

    return (
        <section>
            {/* Background */}
            <div 
                id="home-bg" 
                className="relative w-screen min-h-screen bg-[url(/src/assets/img/bg-home.jpg)] bg-cover bg-no-repeat sticky" 
            />

            <HomeHeader />
            
            {/* Moon */}
            <div 
                id="moon" 
                className="absolute w-50 h-50 md:w-75 md:h-75 bg-[url(/src/assets/img/moon.png)] bg-contain bg-no-repeat top-30 right-10 mask-radial-at-top-left mask-radial-from-50%" 
            />
        </section>
    )

}