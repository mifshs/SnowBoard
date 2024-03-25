import './about.css'
import Img_about from '../../img/about_img/photo.png'
import { Link } from 'react-router-dom';

const handleReloadPage = () => {
    setTimeout(() => {
        window.location.reload();
    }, 100);
};

const Aboutus = () => {
    return(
        <div className="aboutt">
            <div className="img_aboutt">
                <img src={Img_about} alt="IMG" />
            </div>
            <div className="text_abouut">
                <p className='big'>About Us</p>
                <p className='micro'>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
</p>
                <Link to='/' onClick={handleReloadPage}><button className='buuutton'>LEARN MORE</button></Link>
            </div>
        </div>
    )
}

export default Aboutus;