import React from 'react'
import MenuLink from './MenuLink'


const Menu = ({linkItems, selectedLink, onClick}) => {
    return (
        <div className = 'headerMenu'>
           {linkItems.map(item => (
               <MenuLink
               title = {item}
               key = {item}
               isSelected = {selectedLink === item}
               onClick = {onClick}
               />
           ))}
        </div>
    )
}
 

export default Menu