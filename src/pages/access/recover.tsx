import { useState } from "react";
import { useNavigate } from "react-router"
import { CustomInputBox } from "../../components/ui/custom-input-box";
import { SlEnvolope } from "react-icons/sl";
import { CustomButton } from "../../components/ui/custom-btn";

export const Recover = () => {

    // Hook para navegação.
    const navigate = useNavigate();

    // Hook para captar dados do formulário.
    const [formData, setFormData] = useState({ email: "" });

    // Função para botão RECUPERAR do formulário.
    const handleFormSubmit = () => {
        console.log("Envie essas informações para o servidor.");
        console.log(formData);
    };
    
    return (
        <section 
            id="recoverContainer"
            className="w-95 md:w-135 h-135 bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col justify-center items-center px-5"
        >
            <img src="/src/assets/img/logoWhite.png" alt="" className="w-50" />
            <h1 className="font-bold p-4 text-2xl text-white">
                Recupere sua senha
            </h1>
            <p className="text-white text-center font-extralight w-full md:w-[70%]">
                Digite seu e-mail abaixo. Seu link de recuperação chegará nele.
            </p>
            <form 
                action={handleFormSubmit}
                className="flex flex-col py-5 w-full md:w-[70%]"
            >
                <CustomInputBox
                    type="Email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    icon={<SlEnvolope />}
                />
                <CustomButton 
                    type="submit" 
                    children="Recuperar" 
                />
            </form>
            <div className="flex">
                <p className="font-extralight text-white text-xs">
                    Recuperou sua senha?
                </p>
                <span 
                    className="pl-1 font-semibold text-white text-xs hover:cursor-pointer hover:underline"
                    onClick={ () => navigate("../login") }
                >
                    Faça seu Login!
                </span>  
            </div>            
        </section>
    )
}