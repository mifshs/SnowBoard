import './advantages.css'
import Shipping from '../../img/header_img/Shipping.png'
import Payment from '../../img/header_img/Payment.png'
import Support from '../../img/header_img/Support.png'
import '../props/props'

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages_elements">

                <div className="advantage_element">
                    <img src={Shipping} alt="Shipping_Image" />
                    <div className="text_shipping">
                        <div className="shipping">
                            Free Shipping
                        </div>
                        <div className="under_shipping">
                            No charge for each delivery
                        </div>
                    </div>
                </div>
                <div className="advantage_element">
                    <img src={Payment} alt="Payment_Image" />
                    <div className="text_payment">
                        <div className="payment">
                            Quick Payment
                        </div>
                        <div className="under_payment">
                            100% secure payment
                        </div>
                    </div>
                </div>
                <div className="advantage_element">
                    <img src={Support} alt="Support_Image" />
                    <div className="text_support">
                        <div className="support">
                            24/7 Support
                        </div>
                        <div className="under_support">
                            Quick support
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Advantages