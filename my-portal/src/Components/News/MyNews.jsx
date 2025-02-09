import ImgNews from '../News/Img/img-news.jpg';
import styles from '../News/MyNews.module.css';

const MyNews = () => {
    return (
        <>
            <h1>Notícias</h1>
            <div className={styles.div_prin}>
                <div className={styles.div_img}>
                    <img src={ImgNews} alt="Notícias" />
                </div>
                <div className={styles.div_text}>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                    <p>Sint earum veritatis totam molestiae nobis iste ab labore itaque possimus atque? Accusamus laborum.</p>
                </div>
            </div>
            <button>Road More</button>
        </>
    );
}

export default MyNews;