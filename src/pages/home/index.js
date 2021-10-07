import React, {useState} from 'react'
import Header from '../../components/common/header/Header'
import TabOptions from '../../components/common/tabOptions/TabOption'
import Footer from '../../components/common/footer/Footer'
import Delivery from '../../components/delivery/Delivery';
import NightLife from '../../components/nightlife/NightLife';
import DiningOut from '../../components/dining out/DiningOut';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Delivery');
    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getScreen(activeTab)}
            <Footer/>
        </div>
    )
}

const getScreen = (tabValue) => {
    switch(tabValue) {
        case 'Delivery':
            return <Delivery/>
        case 'DiningOut':
            return <DiningOut/>
        case 'NightLife':
            return <NightLife/>
        default:
            return <Delivery/>
    }
}


export default HomePage
