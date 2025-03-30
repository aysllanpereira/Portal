import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Imagem from "../Login/Img/Img-Empresa-Login.jpg";
import styles from "../Login/MyLogin.module.css";

const MyFormLogin = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {

        e.preventDefault();

        if (usuario === "aysllan.santos" && senha === "123456") {
            localStorage.setItem("nome", usuario);
            navigate("/home"); 
        } else {
            setErro("Usuário ou senha incorretos!");
            setUsuario('');
            setSenha("");

            setTimeout(() => {
                setErro("");
            }, 5000);
        }

        
    };
    
    
    return (
        <section className={styles.container}>
            <div className={styles.imgEmp}>
                <img src={Imagem} alt="Empresa" />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <div className={styles.user}>
                        <label htmlFor="usuario">Usuário:</label>
                        <input 
                            type="text"
                            name="usuario"
                            placeholder="Usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.password}>
                        <label htmlFor="senha">Senha:</label>
                        <input 
                            type="password"
                            name="senha"
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    {erro && <p className={styles.erro}>{erro}</p>}

                    <button type="submit" className={styles.button}>Entrar</button>
                </form>
            </div>
        </section>
    );
};

export default MyFormLogin;
