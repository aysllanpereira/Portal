import MyCard from "../../Components/Cards/MyCards";
import MyEvents from "../../Components/Events/MyEvents";
import Navbar from "../../Components/Navbar/MyNavBar";
import MyNews from "../../Components/News/MyNews";
import Styles from '../Home/MyHome.module.css';


const MyHome = () => {
    return (
        <>
        <Navbar />
        <div className={Styles.div}>
            <h2>Bem-Vindo,</h2>
            <p>Aysllan Santos!</p>
        </div>
        <MyCard />
        <hr />
        <MyNews />
        <hr />
        <MyEvents />
        </>
    );
}

export default MyHome;