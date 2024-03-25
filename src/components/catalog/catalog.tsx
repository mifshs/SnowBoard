import React, { useState } from 'react';
import './catalog_up.css';
import Line from '../../img/catalog_img/Line 158.png';
import Categories from './catalog1';
import { strict } from 'assert';

const Catalog = (props: { itemsForSale: any[]; }) => {
    const [showMoreItems, setShowMoreItems] = useState(false);
    const [randomItems, setRandomItems] = useState([]);

    const toggleShowMore = () => {
        if (!showMoreItems) {
            const randomIndexes: number[] = [];
            while (randomIndexes.length < 5) {
                const randomIndex = Math.floor(Math.random() * props.itemsForSale.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }
            const selectedItems: any = randomIndexes.map(index => props.itemsForSale[index]);
            setRandomItems(selectedItems);
        } else {
            setRandomItems([]);
        }
        setShowMoreItems(!showMoreItems);
    };

    return (
        <div className="catalog">
            <div className="items">
                {props.itemsForSale.slice(0, showMoreItems ? 5 : Math.min(5, props.itemsForSale.length)).map((item: { name: string; old_price: string; price: string; img: any; }) => (
                    <div key={item.name} className="item">
                        <img src={item.img} alt="" />
                        <h2 className='item_name'>{item.name}</h2>
                        <p className='item_old_price price_item'>{item.old_price}</p>
                        <p className='item_price price_item'>{item.price}</p>
                    </div>
                ))}
            </div>
            {showMoreItems && (
                <div className="items">
                    {randomItems.map((item: { name: string; old_price: string; price: string; img: any; }) => (
                        <div key={item.name} className="item">
                            <img src={item.img} alt="" />
                            <h2 className='item_name'>{item.name}</h2>
                            <p className='item_old_price price_item'>{item.old_price}</p>
                            <p className='item_price price_item'>{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="items_and_button">
                <button className='button_showMore' onClick={toggleShowMore}>{showMoreItems ? 'HIDE' : 'MORE PRODUCTS'}</button>
            </div>
        </div>
    );
};

export default Catalog;