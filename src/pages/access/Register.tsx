import { useState } from "react";
import { SlEnvolope, SlLock, SlUser } from "react-icons/sl";
import { useNavigate } from "react-router";
import { CustomInputBox } from "../../components/ui/custom-input-box";
import { CustomButton } from "../../components/ui/custom-btn";

export const Register = () => {

    // Hook para navegação.
    const navigate = useNavigate();

    // Hook para mensagem de erro
    const [message, setMessage] = useState("");

    // Hook para extrair dados do formulário
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "CONTRIBUTOR",
    });

    // Hook para confirmar a senha criada
    const [checkPass, setCheckPass] = useState("");

    // Função para botão Cadastrar do formulário
    const handleRegister = async () => {
        
        // Testando se a senha criada é a mesma inserida no campo de confirmação
        if (formData.password === checkPass) {

            // Manipulando a API através do POST para cadastrar usuário
            const url = "https://kanarybackend.discloud.app/usuarios";
            await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
            })
            setMessage("Logando...")
            console.log(formData)

        } else {

            setMessage("As senhas não coincidem, tente novamente.");
            console.log(message);

        };

    };

    // Função para teste da API
    const testeApi = async () => {
        const url = "https://kanarybackend.discloud.app/usuarios";
        await fetch(url)
        .then(promisse => promisse.json())
        .then(data => data.map((usuario:string)=>(console.log(usuario))))
    }
    
    return (
        <section 
            id="registerContainer"
            className="w-95 md:w-135 h-135 bg-linear-to-t from-[#1A4C84]/50 via-[#2C82BD]/50 to-[#00102B]/50 backdrop-blur-sm rounded-[3rem] ring-1 ring-white/40 flex flex-col justify-center items-center px-5"
        >
            <img src="/src/assets/img/logoWhite.png" alt="" className="w-50" />
            <h1 className="font-bold p-4 text-2xl text-white">
                Cadastre seu usuário
            </h1>
            <p className="text-white font-extralight w-full md:w-[70%] text-center">
                Entre e seja mais um entre nossos mais de <b>mil</b> usuários.
            </p>
            <form 
                action={handleRegister}
                className="flex flex-col py-5 w-full md:w-[70%]"
            >
                <CustomInputBox
                    type="Text"
                    name="user"
                    placeholder="Nome de usuário"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    icon={<SlUser />}
                />
                <CustomInputBox
                    type="Email"
                    name="email"
                    placeholder="Email para cadastro"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    icon={<SlEnvolope />}
                />
                <CustomInputBox
                    type="Password"
                    name="password"
                    placeholder="Senha de cadastro"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    icon={<SlLock />}
                />
                <CustomInputBox
                    type="Password"
                    name="confirmPassword"
                    placeholder="Confirme a senha digitada"
                    onChange={(e) => setCheckPass(e.target.value)}
                    icon={<SlLock />}
                />
                <CustomButton 
                    type="submit"
                    children="Cadastrar"
                    onClick={ () => navigate("./") }
                />
            </form>
            <div className="flex">
                <p className="font-extralight text-white text-xs">
                    Ja possui cadastro?
                </p>
                <span 
                    className="pl-1 font-semibold text-white text-xs hover:cursor-pointer hover:underline"
                    onClick={ () => navigate("../login") }
                >
                    Faça seu Login!
                </span>  
            </div>
            
            {/* Botão de teste da API */}
            <CustomButton
                type="button"
                className="w-full md:w-[70%] mt-2"
                children="Debug da API"
                onClick={ () => testeApi() }
            />

        </section>
    )
}