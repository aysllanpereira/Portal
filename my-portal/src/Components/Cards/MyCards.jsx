import 'bootstrap-icons/font/bootstrap-icons.css';
import Styles from '../Cards/MyCards.module.css';

const MyCard = () => {
    const cards = [
        { id: 1, icon: 'bi-calendar', title: 'Eventos', link: '#' },
        { id: 2, icon: 'bi-tools', title: 'Recursos', link: '#' },
        { id: 3, icon: 'bi-diagram-3', title: 'Reserva', link: '#' }
    ];

    return (
        <div className={Styles.mycards}>
            {cards.map((card) => (
                <div key={card.id} className={Styles.card}>
                    <i className={`bi ${card.icon}`}></i>
                    <p>{card.title}</p>
                    <a href={card.link} className={Styles.a}>
                        Go <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
