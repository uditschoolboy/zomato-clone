import React from 'react'
import './delivery.css'
import Filter from '../common/filter/Filter'
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: 'Filters'
    },
    {
        id: 2,
        title: 'Rating 4.0+'
    },
    {
        id: 3,
        title: 'Safe and hygenic'
    },
    {
        id: 4,
        title: 'Pure veg'
    },
    {
        id: 5,
        title: 'Delivery Time',
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>
    }
];

const restaurantList = restaurants;

const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <Filter filterList={deliveryFilters}/>
            </div>
            <DeliveryCollections/>
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurants"/>
        </div>
    )
}

export default Delivery
