import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import './SellingChartView.css'
import ChartSettings from './ChartSettings'
import { chartTypes, measurements, showPreviousPeriodOptions, timePeriods } from './Settings'

const SellingChartView = (props) => {

    const [measurement, setMeasurement] = useState(measurements[0])
    const [chartType, setChartType] = useState(chartTypes[0])
    const [showPreviousPeriod, setShowPreviousPeriod] = useState(showPreviousPeriodOptions[0])
    const [timePeriod, setTimePeriod] = useState(timePeriods[1])

    const handleMeasurementChange = (newMeasurement) => {
        setMeasurement(newMeasurement)
    }

    const handleChartTypeChange = (newChartType) => {
        setChartType(newChartType)
    }

    const handleShowPreviousPeriodChange = (newShowPreviousPeriod) => {
        setShowPreviousPeriod(newShowPreviousPeriod)
    }

    const handleTimePeriodChange = (newTimePeriod) => {
        setTimePeriod(newTimePeriod)
    }

    const selectView = (e) => {          
        props.onSelectView('Main window')
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
                onClick={selectView}
            >
                MAIN MENU
            </Button>
        </div>
    )
}

export default SellingChartView