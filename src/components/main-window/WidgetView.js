import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ordersIcon from '../../images/orders.png'
import sellingQualityIcon from '../../images/selling-quality.png'
import opinionsIcon from '../../images/opinions.png'
import offerRankingIcon from '../../images/offer-ranking.png'
import sellingChartIcon from '../../images/selling-chart.png'
import './WidgetView.css'
import { widgetViews } from '../../ViewEnum'


const WidgetView = (props) => {

    const availableViews = widgetViews
    const widgetIcons = [ordersIcon, sellingQualityIcon, opinionsIcon, offerRankingIcon, sellingChartIcon]
    const widgetIconStyleClasses = ['orders-widget', 'selling-quality-widget', 'opinions-widget', 'offer-ranking-widget', 'selling-chart-widget']

    const selectView = (e) => {          
        props.onSelectView(e.target.alt)
    }
    
    const firstRowWidgets = availableViews.filter((view, index) => index < 3)    
        .map((view, index) => {
            let styleClass = widgetIconStyleClasses[index] + ' widget-icon'
            return(
                <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id={view}>{view}</Tooltip>}
                    key={view}
                >
                    <img
                        className={styleClass}
                        src={widgetIcons[index]}
                        alt={view}
                        onClick={selectView}
                    />
                </OverlayTrigger>
            )
        })

    const secondRowWidgets = availableViews.filter((view, index) => index >= 3)    
    .map((view, index) => {
        let styleClass = widgetIconStyleClasses[index+3] + ' widget-icon'
        return(
            <OverlayTrigger
                placement='bottom'
                overlay={<Tooltip id={view}>{view}</Tooltip>}
                key={view}
            >
                <img
                    className={styleClass}
                    src={widgetIcons[index+3]}
                    alt={view}
                    onClick={selectView}
                />
            </OverlayTrigger>
        )
    })

    return(
        <div>
            <div>
                {firstRowWidgets}
            </div>
            <div>
                {secondRowWidgets}
            </div>
        </div>
    )
}

export default WidgetView