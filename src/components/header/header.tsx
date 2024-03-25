import Bag from '../../img/header_img/Bag.svg'
import Search from '../../img/header_img/Search.svg'
import User from '../../img/header_img/User.svg'
import Pelican_Vector1 from '../../img/header_img/Pelican_Vector1.png'
import Pelican_Vector2 from '../../img/header_img/Pelican_Vector2.png' 
import { Link } from 'react-router-dom';
import './header.css'

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

const Header = () => {
    return (
        <div className="intro">
        <header className="site-header">
            <div className="header-text">
                <Link to="/" onClick={handleReloadPage} className='hText'>About</Link>

                <a onClick={handleScrollToCategories} href="#" className='hText'>Shop</a>

                <Link to="/about" onClick={handleReloadPage} className='hText'>Contact</Link>
            </div>
            <div className="hImg">
                <img src={Search} alt="Поиск" />

                <img src={Bag} alt="Корзина" />
                
                <img src={User} alt="Пользователь" />
            </div>
        </header>

        <div className='introUnder'>
            <div className='weBuild'>
                We build only the best, customized to your exacting demands
            </div>
            <div className="sky">
                SKY & SKI
            </div>
            <div>
                <button className="shopButton" onClick={handleScrollToCategories}>SHOP NOW</button>
            </div>
        <div className="vector1">
            <img src={Pelican_Vector1} alt="Vector1" />
        </div>
        <div className="vector2">
            <img src={Pelican_Vector2} alt="Vector2" />
        </div>
        </div>
        </div>
    );
}

export default Header;