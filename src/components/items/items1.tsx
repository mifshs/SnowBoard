import './items.css';
import Item_img1 from '../../img/catalog_img/Board_white.png'
import Item_img2 from '../../img/catalog_img/Bottle.png'
import Item_img3 from '../../img/catalog_img/Ski_glasses_green.png'
import Border from '../../img/header_img/Rectangle 1134.png'
import Heart from '../../img/header_img/heart 1.png'
import Rectangle from '../../img/header_img/Rectangle 1133.png'

const Items1 = () => {
    return(
        <div className="items5">     
                <div className="items_item5">
                    <div className="items_imgs5">
                        <img className='items_imgs5' src={Item_img3} alt="Item" />
                    </div>
                    <div className="items_text5">
                        <div className="big_text5">
                            Road Helmet
                        </div>
                        <div className="price_text5">
                            199,50 
                        </div>
                        <div className="small_text5">
                            Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend 
                        </div>
                        <div className="counter5">
                            <img src={Border} alt="" />
                        </div>
                        <div className='counter15'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className="button_cart5">
                            <p>Add to cart</p>
                        </div>
                        <div className="heart5">
                            <img src={Rectangle} alt="Rectangle" />
                            <img src={Heart} alt="Heart" />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Items1;