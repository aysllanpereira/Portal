import ImgNews from '../News/Img/img-news.jpg';
import Styles from '../News/MyNews.module.css';

const MyNews = () => {
    return (
        <>
            <h1>Notícias</h1>
            <div className={Styles.div_prin}>
                <div className={Styles.div_img}>
                    <img src={ImgNews} alt="Notícias" />
                </div>
                <div className={Styles.div_text}>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                    <p>Sint earum veritatis totam molestiae nobis iste ab labore itaque possimus atque? Accusamus laborum.</p>
                </div>
            </div>
            <div className={Styles.button}>
                <button>Road More</button>
            </div>
        </>
    );
}

export default MyNews;