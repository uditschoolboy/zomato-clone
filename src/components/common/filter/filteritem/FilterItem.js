import React from 'react'
import './filterItem.css'

const FilterItem = ({item}) => {
    return (
        <div className="filter-item">
            {item.icon && item.icon}
            <div className="filter-name">{item.title}</div>
            
        </div>
    )
}

export default FilterItem
