import React from 'react'
import './filter.css'
import FilterItem from './filteritem/FilterItem'

const Filter = ({filterList}) => {
    return (
        <div className="filters">
            {filterList && filterList.map((filterItem) => {
                return (
                    <FilterItem item={filterItem} key={filterItem.id}/>
                )
            })}
        </div>
    )
}

export default Filter
