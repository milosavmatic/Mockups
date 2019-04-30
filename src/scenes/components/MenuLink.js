import React from 'react'


const MenuLink = ({title = '', onClick = () => null, isSelected = false }) => {
    return(
        <div>
            <a href = {onClick}
                onClick = {() => onClick(title)}
                className = {`linkBtn ${isSelected && 'selectedLinkBtn'}` }
                >
                {title}</a>
        </div>
    )
}

export default MenuLink