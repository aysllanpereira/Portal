import Imagem from '../Navbar/Img/navbar.jpg';
import styles from '../Navbar/MyNavBar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="logo">
                <img src={Imagem} alt="empresa" />
            </div>    
        
            <ul className={styles.nav_links}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Funcionários</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Pesquisas</a></li>
                <li><a href="#">Recursos</a></li>
                <li><a href="#">Arquivos</a></li>
                <li><a href="#">Reservas</a></li>
                <li><a href="#">Chamados</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;