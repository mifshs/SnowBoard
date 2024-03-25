import './footer.css'
import Arrow from '../../img/footer_img/Vector.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="inputt">
                <a target='blank' href="https://vk.ru/mifshszzz"><img src={Arrow} alt="Arrow" /></a>
                <input className='inputtt' type="email" placeholder='Your email address' />
            </div>

            <div className="element1">
                <div className="pod_el">
                    Company
                </div>
                <div className="el_und">
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimanials</p>
                </div>
            </div>

            <div className="element2">
                <div className="pod_el">
                    Support
                </div>
                <div className="el_und">
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;