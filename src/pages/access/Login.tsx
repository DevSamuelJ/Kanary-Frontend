import { useState } from "react";
import { useNavigate } from "react-router"
import { CustomInputBox } from "../../components/ui/custom-input-box";
import { SlEnvolope, SlLock } from "react-icons/sl";
import { CustomButton } from "../../components/ui/custom-btn";

export const Login = () => {

    // Hook para navegação.
    const navigate = useNavigate();

    // Hook para captar dados do formulário.
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Função para botão LOGIN do formulário.
    const handleFormSubmit = () => {
        console.log("Envie essas informações para o servidor.");
        console.log(formData);
    };
    
    return (
        <section 
            id="loginContainer"
            className="w-95 md:w-135 h-135 bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col justify-center items-center px-5"
        >
            <img src="/src/assets/img/logo-white.png" alt="" className="w-50" />
            <h1 className="font-bold p-4 text-2xl text-white">
                Login com seu e-mail
            </h1>
            <p className="text-white text-center font-extralight w-full md:w-[70%]">
                Produtividade simples, equipes mais fortes.
            </p>
            <p className="text-white text-center w-full md:w-[70%]">
                Eficiência de graça!
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
                <CustomInputBox
                    type="Password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    icon={<SlLock />}
                />
                <p 
                    className="text-white text-xs font-extralight -mt-2  pb-2 self-end hover:underline hover:cursor-pointer"
                    onClick={ () => navigate("../recover") }
                >
                    Esqueci minha senha
                </p>
                <CustomButton 
                    type="submit"
                    children="Login"
                    onClick={ () => navigate("./") }
                />
            </form>
            <div className="flex">
                <p className="font-extralight text-white text-xs">
                    Ainda não tem cadastro?
                </p>
                <span 
                    className="pl-1 font-semibold text-white text-xs hover:cursor-pointer hover:underline"
                    onClick={ () => navigate("../register") }
                >
                    Cadastre-se!
                </span>  
            </div>            
        </section>
    )
}