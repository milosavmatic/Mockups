import React, { Component } from 'react';

import Menu from '../components/Menu'
import PricingBox from '../components/PricingBox'
import {fetchProduct, fetchTemplates }from '../API/apiManager'
import ButtonBox from '../components/ButonBox'

class SubscriptionCointainer extends Component {
    constructor(props){
        super(props)
    this.state = { 
        selectedLink: 'Templates',
        productsCount: 5,
        selectedBox: '',
        templatePricing: [],
        productsPricing: [],
        packagesPricing: ['CSS', 'JS', 'PHP', 'Swift']
     }
    }

componentDidMount = () => {
    fetchProduct(this.DataProduct)
    fetchTemplates(this.DataTemplate)
}


DataProduct = (productsPricing) => {
    this.setState({productsPricing})
}

DataTemplate = (templatePricing) => {
    this.setState({templatePricing})
}

onMenuLinkAction = selectedLink => {
    this.setState({ selectedLink })
}

onSelectAction = (selectedBox) => {
    this.setState({ selectedBox })
    
}

    render() { 
        const {selectedLink, 
               productsCount, 
               selectedBox, 
               templatePricing,
               productsPricing,
               packagesPricing
            } = this.state

            console.log()
        return ( 
            <div>
                <h1 className = 'mainTitle'>Manager Subscription</h1>
                <Menu 
                linkItems = {['Templates', `Products (${productsCount})`, 'Packages']}
                selectedLink = {selectedLink}
                onClick = {this.onMenuLinkAction}
                />
            <div className = "displayPricingBox">
                {selectedLink === `Templates` && 
                templatePricing.map(template => (
                    <PricingBox 
                    key = {template._id}
                    title ={`Edge Delivery | ${template.name}`}
                    isSelected = {`Edge Delivery | ${template.name}` === selectedBox}
                    onSelect = {this.onSelectAction}
                    description = {template.description}
                    features = {template.features}
                    price = {template.price}
                    />
                ))}

                {selectedLink === `Products (${productsCount})` &&
                productsPricing.map(product => (
                    <PricingBox 
                    key = {product._id}
                    title ={product.name}
                    isSelected = {product.name === selectedBox}
                    onSelect = {this.onSelectAction}
                    description = {product.description}
                    features = {product.features}
                    price = {product.price}/>
                ))}

{selectedLink === `Packages` &&
                    packagesPricing.map(p => (
                    <PricingBox 
                    key = {p}
                    title = {p}
                    isSelected = {p === selectedBox}
                    onSelect = {this.onSelectAction}
                    />
                ))}
            </div>

            <div className = "displayButtonBox">
                <ButtonBox 
                isSelect = {selectedBox}
                />
            </div>

            </div>
         );
    }
}
 
export default SubscriptionCointainer;