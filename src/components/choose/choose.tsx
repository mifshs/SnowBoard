import './choose.css'
import Tesla from '../../img/choose_img/tesla.png'
import DocuSign from '../../img/choose_img/docusign.png'
import Maze from '../../img/choose_img/maze.png'
import Uber from '../../img/choose_img/uber.png'
import Miro from '../../img/choose_img/miro.png'
import Discord from '../../img/choose_img/discord.png'
import Man from '../../img/choose_img/man.png'


const Choose = () => {
    return(
        <div className="choose">
            <div className="companies">
                <img className='Tesla' src={Tesla} alt="Tesla_img" />
                <img className='DocuSign' src={DocuSign} alt="DocuSign_img" />
                <img className='Maze' src={Maze} alt="Maze_img" />
                <img className='Uber' src={Uber} alt="Uber_img" />
                <img className='Miro' src={Miro} alt="Miro_img" />
                <img className='Discord' src={Discord} alt="Disсord_img" />
            </div>

            <div className="choose_us" id='choose'>
                <img src={Man} alt="Man" />
                    <div className="text">
                        <div className="text1">
                            Why choose Us?
                        </div>

                        <div className="text2">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </div>

                        <div className="text3">
                            Read more
                        </div>
                    </div>
            </div>

            <div className="repair">
                <div className="repair_elements">

                    <div className="repair_element">
                        Service Repair
                        <div className="und">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.
                        </div>
                    </div>

                    <div className="repair_element">
                        Board Accessories
                        <div className="und">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.
                        </div>
                    </div>

                    <div className="repair_element">
                        Warraty & Guareantee
                        <div className="und">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Choose;