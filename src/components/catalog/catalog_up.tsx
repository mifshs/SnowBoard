import React from 'react';
import './catalog.css';
import Line from '../../img/catalog_img/Line 158.png';

const Catalog_up = () => {
    return (
        <div className="catalog" id='catal'>
            <div className="catalog_up">
                <img src={Line} alt="Line_img" />
                Catalog
            </div>
            <div className="catalog_text">
                Our Most Popular Board category
            </div>
        </div>
    );
};

export default Catalog_up;