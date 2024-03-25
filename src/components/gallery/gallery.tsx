import './gallery.css'
import Gallery_img1 from '../../img/gallery_img/gallery1.png'
import Gallery_img2 from '../../img/gallery_img/gallery2.png'
import Gallery_img3 from '../../img/gallery_img/gallery3.png'

const Gallery = () => {
    return(
        <div className="gallery">
            <div className="gallery1">
                <div className="gallery_text">
                    Our gallery
                </div>
                <div className="gallery_imgs">
                    
                    <div className='gallery_img1'>
                    <img src={Gallery_img1} alt="Gallery_img" />
                    </div>

                    <div className='gallery_img2'>
                    <img src={Gallery_img2} alt="Gallery_img" />
                    </div>

                    <div className='gallery_img3'>
                    <img src={Gallery_img3} alt="Gallery_img" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;