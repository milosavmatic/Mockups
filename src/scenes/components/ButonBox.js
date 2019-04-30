import React from 'react'

const ButtonBox = ({ onClick = () => null, isSelect = false, }) => {
    return(
        <div className = 'buttonBox'>
            <a 
            href = {onClick}
            className = {`nextBtn ${isSelect && 'selectedNextBtn'}`}>
                Next {isSelect ? '->' : ''}
            </a>
            <p>or</p>
            <a className = 'backBtn'>
                Back
            </a>
        </div>
    )
}

export default ButtonBox