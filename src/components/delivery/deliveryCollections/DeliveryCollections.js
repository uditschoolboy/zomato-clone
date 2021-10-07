import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/corousal/NextArrow';
import PrevArrow from '../../common/corousal/PrevArrow';
import './deliveryCollections.css';
import DeliveryItem from './DeliveryItem/DeliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png"
    },
    {
        id: 2,
        title: "Momos",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 3,
        title : "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/b78083afb63995c7e0a676d01dcc164d1632716549.png"
    },
    {
        id: 4,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
    },
    {
        id: 5,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png"
    },
    {
        id: 6,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id: 7,
        title: "Parantha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id: 8,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png"
    }
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const DeliveryCollections = () => {
    return (
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-title">Eat What makes you happy</div>
                <Slider {...settings} >
                    {deliveryItems.map((item) => {
                        return (
                            <DeliveryItem item={item} key={item.id}/>
                        );
                    })}
                </Slider>
            </div>             
        </div>
    )
}

export default DeliveryCollections
