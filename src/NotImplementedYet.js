import React from 'react'
import Button from 'react-bootstrap/Button'

const NotImplementedYet = (props) =>{

    const goBack = () => {

    }

    return(
        <div>
            <div>
                NOT IMPLEMENTED YET
            </div>
            <Button
                onClick={goBack}
            >
                BACK    
            </Button>
        </div>
    )
}

export default NotImplementedYet