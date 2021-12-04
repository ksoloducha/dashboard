import React from 'react'
import Button from 'react-bootstrap/Button'
import './SellingChartView.css'
import ChartSettings from './ChartSettings'

const SellingChartView = (props) => {

    return(
        <div>
            <div
                className='chart-settings'
            >
                <ChartSettings></ChartSettings>
            </div>
            <Button
                className='secondary-button main-menu-button'
            >
                MAIN MENU
            </Button>
        </div>
    )
}

export default SellingChartView