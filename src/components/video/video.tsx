import './video.css'
import Ski from '../../img/video_img/a.png'

const Video = () => {
    return(
        <div className="video">
            <div className="video_text">
                <div className="about_us">
                    Video about us
                </div>

                <div className="video_text1">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </div>
            </div>
            <a target='blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={Ski} alt="Ski_Picture" /></a>
        </div>
    )
}

export default Video;