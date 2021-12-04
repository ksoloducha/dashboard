import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import './SellingChartView.css'
import ChartSettings from './ChartSettings'
import { chartTypes, measurements, timePeriods } from './Settings'

const SellingChartView = () => {

    const [measurement, setMeasurement] = useState(measurements[0])
    const [chartType, setChartType] = useState(chartTypes[0])
    const [showPreviousPeriod, setShowPreviousPeriod] = useState(false)
    const [timePeriod, setTimePeriod] = useState(timePeriods[1])

    const handleMeasurementChange = (newMeasurement) => {
        setMeasurement(this.newMeasurement)
    }

    const handleChartTypeChange = (newChartType) => {
        setChartType(newChartType)
    }

    const handleShowPreviousPeriodChange = () => {
        var newShowPreviousPeriod = !showPreviousPeriod
        setShowPreviousPeriod(this.newShowPreviousPeriod)
    }

    const handleTimePeriodChange = (newTimePeriod) => {
        setTimePeriod(this.newTimePeriod)
    }

    return(
        <div>
            <div
                className='chart-settings'
            >
                <ChartSettings 
                    initialMeasurement={measurement}
                    initialChartType={chartType}
                    initialShowPreviousPeriod={showPreviousPeriod}
                    initialTimePeriod={timePeriod}
                    onMeasurementChange={handleMeasurementChange}
                    onChartTypeChange={handleChartTypeChange}
                    onShowPreviousPeriodChange={handleShowPreviousPeriodChange}
                    onTimePeriodChange={handleTimePeriodChange}
                />
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