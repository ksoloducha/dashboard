import React, {useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import DropdowbButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './ChartSettings.css'
import { chartTypes, measurements, showPreviousPeriodOptions, timePeriods } from './Settings'

const ChartSettings = (props) => {

    const [measurement, setMeasurement] = useState(props.initialMeasurement)
    const [chartType, setChartType] = useState(props.initialChartType)
    const [showPreviousPeriod, setShowPreviousPeriod] = useState(props.initialShowPreviousPeriod)
    const [timePeriod, setTimePeriod] = useState(props.initialTimePeriod)

    const dropdownItems = timePeriods.map((timePeriod) => {
        return(
            <Dropdown.Item
                eventKey={timePeriod}
                key={timePeriod}
            >
                {timePeriod}
            </Dropdown.Item>
        )
    })

    const changeMeasurement = () => {
        var newMeasurement = measurements.filter((m) => m != measurement)
        setMeasurement(newMeasurement)
        props.onMeasurementChange(newMeasurement)
    }

    const changeChartType = () => {
        var newChartType = chartTypes.filter((c) => c != chartType)
        setChartType(newChartType)
        props.onChartTypeChange(newChartType)
    }

    const changeShowPreviousPeriod = () => {
        var newShowPreviousPeriod = showPreviousPeriodOptions.filter((s) => s != showPreviousPeriod)
        setShowPreviousPeriod(newShowPreviousPeriod)
        props.onShowPreviousPeriodChange(newShowPreviousPeriod)
    }

    const changeTimePeriod = (e) => {
        setTimePeriod(e)
        props.onTimePeriodChange(e)
    }

    return(
        <Stack
            direction='vertical'
            gap='5'
        >
            <div></div>
            <Stack
                direction='vertical'
                gap='3'
            >
                <label
                    className='label'
                >MEASUREMENT</label>
                <label
                    className='clickable-text'
                    onClick={changeMeasurement}
                >{measurement}</label>
            </Stack>
            <Stack
                direction='vertical'
                gap='3'
            >
                <label
                    className='label'
                >CHART TYPE</label>
                <label
                    className='clickable-text'
                    onClick={changeChartType}
                >{chartType}</label>
            </Stack>
            <Stack
                direction='vertical'
                gap='3'
            >
                <label
                    className='label'
                >SHOW PREVIOUS PERIOD</label>
                <label
                    className='clickable-text'
                    onClick={changeShowPreviousPeriod}
                >{showPreviousPeriod}
                </label>
            </Stack>
            <Stack
                direction='vertical'
                gap='3'
            >
                <label
                    className='label'
                >TIME PERIOD</label>
                <DropdowbButton
                    id='time-period-dropdown'
                    title={timePeriod}
                    variant='secondary'
                    onSelect={changeTimePeriod}
                >
                    {dropdownItems}
                </DropdowbButton>
            </Stack>
        </Stack>
    )
}

export default ChartSettings