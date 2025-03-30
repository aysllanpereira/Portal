import { useState, useEffect } from "react";
import MyCard from "../../Components/Cards/MyCards";
import MyEvents from "../../Components/Events/MyEvents";
import Navbar from "../../Components/Navbar/MyNavBar";
import MyNews from "../../Components/News/MyNews";
import Styles from '../Home/MyHome.module.css';



const MyHome = () => {

    const [nome, setNome] = useState("");

    useEffect(() => {
        const userSave = localStorage.getItem("nome");
        if(userSave) {
            setNome(userSave);
        };
    }, []);

    return (
        <>
        <Navbar />
        <div className={Styles.div}>
            <h2>Bem-Vindo,</h2>
            <p>{nome || "Visitante"}!</p>
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