import React from 'react'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import DropdowbButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './ChartSettings.css'

const ChartSettings = (props) => {

    const possibleTimePeriods = ['Today', 'This week', 'Last week']

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
                >NUMBER OF SOLD PRODUCTS</label>
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
                >BAR</label>
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
                    YES
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
                    title="time period"
                    variant='secondary'
                >
                    <Dropdown.Item>{possibleTimePeriods[0]}</Dropdown.Item>
                    <Dropdown.Item>{possibleTimePeriods[1]}</Dropdown.Item>
                    <Dropdown.Item>{possibleTimePeriods[2]}</Dropdown.Item>
                </DropdowbButton>
            </Stack>
        </Stack>
    )
}

export default ChartSettings