import './explore.css'
import Explore_img1 from '../../img/explore_img/explore_img1.png'
import Explore_img2 from '../../img/explore_img/explore_img2.png'
import Explore_img3 from '../../img/explore_img/explore_img3.png'
import Arrow from '../../img/explore_img/explore_arrow.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categories from '../catalog/catalog1'
import Items1 from '../../components/items/items1';
import App from '../../App';




const handleScrollToCategories = () => {
    const categoriesElement = document.getElementById('catal');
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleReloadPage = () => {
    setTimeout(() => {
        window.location.reload();
    }, 100);
};


const Explore = () => {
    return(
        <div className="explore">
            <div className="explore1">
                <div className="explore_text">
                    Explore Our Product
                </div>

                <div className="explore_text1">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </div>
            </div>
                <div className="explore_imgs">

                    <Link to="/items1" onClick={handleReloadPage} className='explore_img1'>
                    <img src={Explore_img1} alt="explore_img" />
                    <img className='explore_arrow1' src={Arrow} alt="Arrow" />
                    <p className='explore_img1_text'>$60</p>
                    <p className='explore_img1_text1'>Road helmet</p>
                    </Link>

                    <Link to="/items2" onClick={handleReloadPage} className='explore_img2'>
                    <img src={Explore_img2} alt="explore_img" />
                    <img className='explore_arrow2' src={Arrow} alt="Arrow" />
                    <p className='explore_img2_text'>$60</p>
                    <p className='explore_img2_text1'>Bike water bottle</p>
                    </Link>

                    <Link to="/items3" onClick={handleReloadPage} className='explore_img3'>
                    <img src={Explore_img3} alt="explore_img" />
                    <img className='explore_arrow3' src={Arrow} alt="Arrow" />
                    <p className='explore_img3_text'>$120</p>
                    <p className='explore_img3_text1'>Tire repair kit</p>
                    </Link>
                </div>
                <button onClick={handleScrollToCategories} className='explore_button'>MORE PRODUCTS</button>
        </div>
    )
}

export default Explore;