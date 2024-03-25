import Bag from '../../img/header_img/asd1.png'
import Search from '../../img/header_img/asd.png'
import User from '../../img/header_img/asd2.png'
import { Link } from 'react-router-dom';
import './header1.css'

const handleScrollToCategories = () => {
    const categoriesElement = document.getElementById('catal');
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScrollToCategories1 = () => {
    const categoriesElement = document.getElementById('choose');
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleReloadPage = () => {
    setTimeout(() => {
        window.location.reload();
    }, 100);
};

const Header1 = () => {
    return (
        <div className="intro1">
        <header className="site-header1">
            <div className="header-text1">
                <Link to="/" onClick={handleReloadPage} className='hText'>About</Link>

                <a onClick={handleScrollToCategories} href="#" className='hText1'>Shop</a>

                <a href="#" className='hText1'>Contact</a>
            </div>
            <div className="hImg1">
                <img src={Search} alt="Поиск" />

                <img src={Bag} alt="Корзина" />
                
                <img src={User} alt="Пользователь" />
            </div>
        </header>
        </div>
    );
}

export default Header1;