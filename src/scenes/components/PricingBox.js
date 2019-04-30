import React from 'react'


const PricingBox = ({title = '', onSelect = () => null, isSelected = false, description = '', features = [], price = ''}) => {
    return (
        <div className = 'pricingBox'>
            <p className = 'pricingTitle'>{title}</p>
        <p className = 'description'>{description}</p>
        {features.map( feature => (
            <ul key = {feature}>
                <li>{feature}</li>
            </ul>
        )
        )}
        <p>{price}</p>
    
        <a
        href = {onSelect}
        className = {`selectBtn ${isSelected && 'selectedPricing'}`}
        onClick = {() => onSelect(title)}>
            {`Select${isSelected ? 'ed' : ''}`}
        </a>
        </div>
    )
}

export default PricingBox