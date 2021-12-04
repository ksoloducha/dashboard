import React from 'react'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import DropdowbButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './ChartSettings.css'
import { timePeriods } from './Settings'

const ChartSettings = (props) => {

    const dropdownItems = timePeriods.map((timePeriod) => {
        return(
            <Dropdown.Item>
                {timePeriod}
            </Dropdown.Item>
        )
    })

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
                >{props.initialMeasurement}</label>
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
                >{props.initialChartType}</label>
            </Stack>
            <Stack
                direction='vertical'
                gap='3'
            >
                <label
                    className='label'
                >SHOW PREVIOUS PERIOD</label>
                <Button
                    className='secondary-button previous-period-button'
                >
                    {props.initialShowPreviousPeriod}
                </Button>
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
                    title={props.initialTimePeriod}
                    variant='secondary'
                >
                    {dropdownItems}
                </DropdowbButton>
            </Stack>
        </Stack>
    )
}

export default ChartSettings