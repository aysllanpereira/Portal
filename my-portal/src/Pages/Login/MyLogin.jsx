import Imagem from '../Login/Img/Img-Empresa-Login.jpg';
import styles from '../Login/MyLogin.module.css';

const MyFormLogin = () => {
    return (
        <section className={styles.container}>
            <div className={styles.imgEmp}>
                <img src={Imagem} alt="Empresa" />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <h2>Login</h2>
                    <div className={styles.user}>
                        <label htmlFor="usuario">Usuário:</label>
                        <input type="text" 
                        name="usuario" 
                        placeholder="Usuário" 
                        required />
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" 
                        name="senha" 
                        placeholder="Digite sua Senha" 
                        required />
                    </div>
                    <button className={styles.button}>Entrar</button>
                </form>
            </div>
        </section>
    );
};

export default MyFormLogin;