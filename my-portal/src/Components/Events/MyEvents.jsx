import styles from '../Events/MyEvents.module.css';

const MyEvents = () => {
    const events = [
        {
            id: 1,
            nome: "New Year's Day",
            data: "12/31/2022 1:00pm",
            local: "United States",
            tipo: "PUBLIC HOLIDAY"
        },
        {
            id: 2,
            nome: "Martin Luther King Jr. Day",
            data: "01/14/2023 1:00pm",
            local: "United States",
            tipo: "PUBLIC HOLIDAY"
        },
        {
            id: 3,
            nome: "Presidents' Day",
            data: "02/12/2023 1:00pm",
            local: "United States",
            tipo: "PUBLIC HOLIDAY"
        }
    ];


    return (
        <div className={styles.container}>
            <h2>Meus Eventos</h2>
            <div className={styles.listaEventos}>
                {events.map(evento => (
                    <div key={evento.id} className={styles.evento}>
                        <div className={styles.detalhes}>
                            <h3>{evento.nome}</h3>
                            <hr className={styles.linha}/>
                            <p><strong>Starts at: </strong>{evento.data}</p>
                            <p><strong>Location: </strong>{evento.local}</p>
                            <p><strong>Type: </strong><span className={styles.tipo}>{evento.tipo}</span></p>
                        </div>
                        <button className={styles.botao}>View</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyEvents;