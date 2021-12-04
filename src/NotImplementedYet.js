import React from 'react'
import Button from 'react-bootstrap/Button'

const NotImplementedYet = (props) =>{

    const goBackToMainWindow = () => {          
        props.onSelectView('Main window')
    }

    return(
        <div
        >
            <Button
                onClick={goBackToMainWindow}
            >
                BACK    
            </Button>
        </div>
    )
}

export default NotImplementedYet