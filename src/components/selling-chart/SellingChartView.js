import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import './SellingChartView.css'
import ChartSettings from './ChartSettings'
import { chartTypes, measurements, timePeriods } from './Settings'

const SellingChartView = () => {

    const availableMeasurements = measurements
    const availableChartTypes = chartTypes
    const availableTimePeriods = timePeriods

    const [measurement, setMeasurement] = useState(availableMeasurements[0])
    const [chartType, setChartType] = useState(availableChartTypes[0])
    const [showPreviousPeriod, setShowPreviousPeriod] = useState(false)
    const [timePeriod, setTimePerios] = useState(timePeriods[1])

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